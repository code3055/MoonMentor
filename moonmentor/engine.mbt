///|
/// Bayesian Knowledge Tracing plus prerequisite-aware information gain.
fn clamp(value : Double) -> Double {
  if value < 0.0 {
    0.0
  } else if value > 1.0 {
    1.0
  } else {
    value
  }
}

///|
fn initial_mastery(_concept : Concept) -> Double {
  0.2
}

///|
pub fn new_learner(concepts : Array[Concept]) -> Learner {
  let mastery = Map([])
  let attempts = Map([])
  let wrong = Map([])
  for item in concepts {
    mastery[item.id] = initial_mastery(item)
    attempts[item.id] = 0
    wrong[item.id] = 0
  }
  Learner::{ mastery, attempts, wrong, }
}

///|
fn update_probability(current : Double, record : Attempt) -> Double {
  // BKT parameters are deliberately fixed so two runs produce the same plan.
  let guess = if record.hint_used { 0.30 } else { 0.20 }
  let slip = if record.latency_ms > 30000 { 0.16 } else { 0.10 }
  let posterior = if record.correct {
    let numerator = current * (1.0 - slip)
    let denominator = numerator + (1.0 - current) * guess
    if denominator == 0.0 {
      current
    } else {
      numerator / denominator
    }
  } else {
    let numerator = current * slip
    let denominator = numerator + (1.0 - current) * (1.0 - guess)
    if denominator == 0.0 {
      current
    } else {
      numerator / denominator
    }
  }
  // A hint is evidence of partial understanding, so use a smaller learning step.
  let learn = if record.hint_used { 0.06 } else { 0.12 }
  let latency_penalty = if record.latency_ms > 30000 { 0.03 } else { 0.0 }
  clamp(posterior + (1.0 - posterior) * learn - latency_penalty)
}

///|
pub fn apply_attempt(learner : Learner, record : Attempt) -> Unit {
  let current = learner.mastery.get(record.concept).unwrap_or(0.2)
  learner.mastery[record.concept] = update_probability(current, record)
  learner.attempts[record.concept] = learner.attempts
    .get(record.concept)
    .unwrap_or(0) +
    1
  if !record.correct {
    learner.wrong[record.concept] = learner.wrong
      .get(record.concept)
      .unwrap_or(0) +
      1
  } else {
    learner.wrong[record.concept] = 0
  }
}

///|
pub fn train(concepts : Array[Concept], attempts : Array[Attempt]) -> Learner {
  let learner = new_learner(concepts)
  for record in attempts {
    apply_attempt(learner, record)
  }
  learner
}

///|
pub fn mastery(learner : Learner, concept : String) -> Double {
  learner.mastery.get(concept).unwrap_or(0.2)
}

///|
fn prerequisite_ready(learner : Learner, item : Concept) -> Bool {
  if item.prerequisite == "" {
    return true
  }
  for dependency in item.prerequisite.split(",") {
    let id = dependency.trim().to_owned()
    if id != "" && mastery(learner, id) < 0.55 {
      return false
    }
  }
  true
}

///|
fn candidate_score(learner : Learner, item : Concept) -> Double {
  if !prerequisite_ready(learner, item) {
    return -1.0
  }
  let confidence = mastery(learner, item.id)
  let uncertainty = 1.0 - (2.0 * confidence - 1.0).abs()
  let attempts = learner.attempts.get(item.id).unwrap_or(0).to_double()
  let novelty = 1.0 / (1.0 + attempts * 0.15)
  let difficulty_weight = 0.8 + item.difficulty.to_double() * 0.08
  uncertainty * novelty * difficulty_weight
}

///|
fn recommendation_reason(learner : Learner, item : Concept) -> String {
  let confidence = mastery(learner, item.id)
  let count = learner.attempts.get(item.id).unwrap_or(0)
  let wrong = learner.wrong.get(item.id).unwrap_or(0)
  if wrong >= 2 {
    "同一知识点连续出现错误，先做针对性纠错"
  } else if count == 0 {
    "这是前置知识已满足但尚未练习的知识点"
  } else if confidence < 0.55 {
    "掌握度仍低于稳定阈值，优先巩固基础"
  } else {
    "掌握度处于不确定区间，这道题能带来较高信息增益"
  }
}

///|
pub fn recommend(
  learner : Learner,
  concepts : Array[Concept],
) -> Recommendation {
  let mut best_index = -1
  let mut best_score = -1.0
  for index = 0; index < concepts.length(); index = index + 1 {
    let score = candidate_score(learner, concepts[index])
    if score > best_score {
      best_score = score
      best_index = index
    }
  }
  if best_index < 0 {
    Recommendation::{
      concept: "",
      title: "暂无可推荐练习",
      confidence: 0.0,
      information_gain: 0.0,
      reason: "请先完成任一前置知识点，系统才能解锁后续内容",
      prompt: "",
    }
  } else {
    let item = concepts[best_index]
    Recommendation::{
      concept: item.id,
      title: item.title,
      confidence: mastery(learner, item.id),
      information_gain: best_score,
      reason: recommendation_reason(learner, item),
      prompt: item.prompt,
    }
  }
}

///|
pub fn plan(concepts : Array[Concept], attempts : Array[Attempt]) -> Report {
  plan_with_exercises(concepts, attempts, default_exercises(concepts), 15)
}

///|
pub fn plan_with_exercises(
  concepts : Array[Concept],
  attempts : Array[Attempt],
  exercises : Array[Exercise],
  budget_minutes : Int,
) -> Report {
  let learner = train(concepts, attempts)
  Report::{
    learner,
    recommendation: recommend(learner, concepts),
    attempt_count: attempts.length(),
    mastery: concepts.map(item => (item.id, mastery(learner, item.id))),
    diagnoses: diagnose(learner, attempts),
    session: plan_session(learner, concepts, exercises, budget_minutes),
  }
}

///|
fn diagnosis_advice(label : String) -> String {
  let normalized = label.trim().to_owned()
  if normalized.contains("none") || normalized.contains("option") {
    "先画出 Some/None 两条路径，再补一个空值测试"
  } else if normalized.contains("error") || normalized.contains("raise") {
    "先区分可恢复错误和必须向上抛出的错误"
  } else if normalized.contains("pattern") || normalized.contains("match") {
    "把每个构造器列成分支，检查是否覆盖全部情况"
  } else {
    "把错误拆成一个最小例子，再重新完成同类练习"
  }
}

///|
pub fn diagnose(
  learner : Learner,
  attempts : Array[Attempt],
) -> Array[Diagnosis] {
  let keys = []
  let counts = []
  for record in attempts {
    if !record.correct && record.misconception != "" {
      let key = record.concept + "\u{1f}" + record.misconception
      let mut index = -1
      for i = 0; i < keys.length(); i = i + 1 {
        if keys[i] == key {
          index = i
        }
      }
      if index < 0 {
        keys.push(key)
        counts.push(1)
      } else {
        counts[index] += 1
      }
    }
  }
  let result = []
  for i = 0; i < keys.length(); i = i + 1 {
    let fields = keys[i].split("\u{1f}").collect()
    let concept_id = fields[0].to_owned()
    let label = fields[1].to_owned()
    let confidence = clamp(
      0.4 +
      counts[i].to_double() * 0.15 +
      (1.0 - mastery(learner, concept_id)) * 0.2,
    )
    result.push({
      concept: concept_id,
      label,
      confidence,
      advice: diagnosis_advice(label),
    })
  }
  result
}

///|
fn clone_learner(learner : Learner) -> Learner {
  let mastery_copy = Map([])
  let attempts_copy = Map([])
  let wrong_copy = Map([])
  for key, value in learner.mastery {
    mastery_copy[key] = value
  }
  for key, value in learner.attempts {
    attempts_copy[key] = value
  }
  for key, value in learner.wrong {
    wrong_copy[key] = value
  }
  Learner::{
    mastery: mastery_copy,
    attempts: attempts_copy,
    wrong: wrong_copy,
  }
}

///|
fn concept_for(concepts : Array[Concept], id : String) -> Concept? {
  for item in concepts {
    if item.id == id {
      return Some(item)
    }
  }
  None
}

///|
fn exercise_ready(
  learner : Learner,
  concepts : Array[Concept],
  item : Exercise,
) -> Bool {
  for concept_id in item.concepts {
    match concept_for(concepts, concept_id) {
      None => return false
      Some(concept) if !prerequisite_ready(learner, concept) => return false
      Some(_) => ()
    }
  }
  true
}

///|
fn expected_gain(
  learner : Learner,
  concepts : Array[Concept],
  item : Exercise,
) -> Double {
  if !exercise_ready(learner, concepts, item) {
    return -1.0
  }
  let mut gain = 0.0
  for concept_id in item.concepts {
    let current = mastery(learner, concept_id)
    let difficulty_gap = (item.difficulty.to_double() - (1.0 + current * 4.0)).abs()
    let fit = if difficulty_gap > 2.0 {
      0.35
    } else {
      1.0 - difficulty_gap * 0.2
    }
    gain += (1.0 - current) * 0.12 * fit
  }
  gain / item.minutes.to_double()
}

///|
fn project_exercise(learner : Learner, item : Exercise) -> Learner {
  let projected = clone_learner(learner)
  for concept_id in item.concepts {
    apply_attempt(
      projected,
      attempt(concept_id, true, false, item.minutes * 60000),
    )
  }
  projected
}

///|
fn contains_id(ids : Array[String], id : String) -> Bool {
  ids.contains(id)
}

///|
fn future_gain(
  learner : Learner,
  concepts : Array[Concept],
  exercises : Array[Exercise],
  excluded : Array[String],
  remaining : Int,
) -> Double {
  let mut best = 0.0
  for item in exercises {
    if !contains_id(excluded, item.id) && item.minutes <= remaining {
      let gain = expected_gain(learner, concepts, item)
      if gain > best {
        best = gain
      }
    }
  }
  best
}

///|
fn step_reason(learner : Learner, item : Exercise) -> String {
  let mut weak = ""
  for concept_id in item.concepts {
    if mastery(learner, concept_id) < 0.55 {
      if weak != "" {
        weak += ","
      }
      weak += concept_id
    }
  }
  if weak == "" {
    "巩固已学知识并检验迁移"
  } else {
    "覆盖薄弱知识点: \{weak}"
  }
}

///|
pub fn plan_session(
  learner : Learner,
  concepts : Array[Concept],
  exercises : Array[Exercise],
  budget_minutes : Int,
) -> SessionPlan {
  let mut projected = clone_learner(learner)
  let selected = []
  let steps = []
  let mut used = 0
  let mut total_gain = 0.0
  while used < budget_minutes && steps.length() < 4 {
    let mut best_index = -1
    let mut best_score = -1.0
    for index = 0; index < exercises.length(); index = index + 1 {
      let item = exercises[index]
      if contains_id(selected, item.id) || used + item.minutes > budget_minutes {
        continue
      }
      let gain = expected_gain(projected, concepts, item)
      if gain < 0.0 || item.minutes <= 0 {
        continue
      }
      let lookahead_excluded = selected.copy()
      lookahead_excluded.push(item.id)
      let lookahead = future_gain(
        project_exercise(projected, item),
        concepts,
        exercises,
        lookahead_excluded,
        budget_minutes - used - item.minutes,
      )
      let score = gain + lookahead * 0.35
      if score > best_score {
        best_score = score
        best_index = index
      }
    }
    if best_index < 0 {
      break
    }
    let chosen = exercises[best_index]
    let gain = expected_gain(projected, concepts, chosen)
    selected.push(chosen.id)
    steps.push({
      exercise: chosen.id,
      title: chosen.title,
      minutes: chosen.minutes,
      expected_gain: gain,
      reason: step_reason(projected, chosen),
      prompt: chosen.prompt,
      hint: chosen.hint,
    })
    total_gain += gain
    used += chosen.minutes
    projected = project_exercise(projected, chosen)
  }
  SessionPlan::{
    budget_minutes,
    used_minutes: used,
    projected_gain: total_gain,
    steps,
  }
}

///|
pub fn default_exercises(concepts : Array[Concept]) -> Array[Exercise] {
  let result = []
  for item in concepts {
    result.push(
      exercise(
        "practice-" + item.id,
        item.title + "练习",
        [item.id],
        item.difficulty,
        if item.difficulty >= 4 {
          5
        } else {
          3
        },
        item.prompt,
        "先写出最小例子，再检查边界情况。",
      ),
    )
  }
  result
}
