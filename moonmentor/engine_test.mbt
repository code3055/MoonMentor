///|
#warnings("-test_unqualified_package")
fn curriculum() -> Array[Concept] {
  [
    concept(
      "syntax", "语法基础", 1, "", "写出一个接收 Int 并返回 Int 的函数。",
    ),
    concept(
      "option", "Option 与空值", 2, "syntax", "把可能缺失的配置值安全地转换成 Int。",
    ),
    concept(
      "error", "错误处理", 3, "option", "为一个可能失败的解析函数设计 raise/catch 调用。",
    ),
  ]
}

///|
test "updates Bayesian mastery from attempts" {
  let learner = @moonmentor.train(curriculum(), [
    @moonmentor.attempt("syntax", true, false, 500),
  ])
  assert_true(@moonmentor.mastery(learner, "syntax") > 0.2)
  let weaker = @moonmentor.train(curriculum(), [
    @moonmentor.attempt("syntax", false, false, 500),
  ])
  assert_true(@moonmentor.mastery(weaker, "syntax") < 0.2)
}

///|
test "gates recommendation on prerequisites" {
  let initial = @moonmentor.plan(curriculum(), [])
  assert_eq(initial.recommendation.concept, "syntax")
  let learned = @moonmentor.plan(curriculum(), [
    @moonmentor.attempt("syntax", true, false, 500),
    @moonmentor.attempt("syntax", true, false, 500),
    @moonmentor.attempt("syntax", true, false, 500),
  ])
  assert_eq(learned.recommendation.concept, "option")
}

///|
test "requires every prerequisite in the knowledge graph" {
  let concepts = [
    @moonmentor.concept("a", "A", 1, "", "a"),
    @moonmentor.concept("b", "B", 1, "", "b"),
    @moonmentor.concept("c", "C", 2, "a,b", "c"),
  ]
  let after_a = @moonmentor.plan(concepts, [
    @moonmentor.attempt("a", true, false, 100),
    @moonmentor.attempt("a", true, false, 100),
    @moonmentor.attempt("a", true, false, 100),
  ])
  assert_true(after_a.recommendation.concept != "c")
}

///|
test "recommends repeated-error repair" {
  let result = @moonmentor.plan(curriculum(), [
    @moonmentor.attempt("syntax", false, false, 500),
    @moonmentor.attempt("syntax", false, false, 500),
  ])
  assert_eq(result.recommendation.concept, "syntax")
  assert_true(result.recommendation.reason.contains("连续出现错误"))
}

///|
test "parses curriculum and attempts" {
  let concepts = @moonmentor.parse_curriculum(
    "syntax|Syntax|1||write a function\noption|Option|2|syntax|handle none",
  ) catch {
    ParseError(message) => fail(message)
  }
  let attempts = @moonmentor.parse_attempts("syntax|1|0|1000\noption|0|1|40000") catch {
    ParseError(message) => fail(message)
  }
  assert_eq(concepts.length(), 2)
  assert_eq(attempts.length(), 2)
  assert_true(attempts[1].hint_used)
}

///|
test "parses exercises and plans within a time budget" {
  let exercises = @moonmentor.parse_exercises(
    "exercise|e1|Syntax|syntax|1|3|write a function|check types\nexercise|e2|Option|syntax,option|2|4|handle none|check branches",
  ) catch {
    ParseError(message) => fail(message)
  }
  let result = @moonmentor.plan_with_exercises(curriculum(), [], exercises, 6)
  assert_true(result.session.steps.length() >= 1)
  assert_true(result.session.used_minutes <= 6)
  assert_true(result.session.projected_gain > 0.0)
}

///|
test "aggregates misconception diagnoses" {
  let result = @moonmentor.plan(curriculum(), [
    @moonmentor.attempt("option", false, true, 1000, misconception="none"),
    @moonmentor.attempt("option", false, false, 1000, misconception="none"),
  ])
  assert_eq(result.diagnoses.length(), 1)
  assert_true(result.diagnoses[0].confidence > 0.5)
  assert_true(result.diagnoses[0].advice.contains("Some/None"))
}

///|
test "rejects malformed records" {
  let bad_curriculum = try {
    ignore(@moonmentor.parse_curriculum("broken"))
    false
  } catch {
    ParseError(_) => true
  }
  let bad_attempts = try {
    ignore(@moonmentor.parse_attempts("syntax|maybe|0|10"))
    false
  } catch {
    ParseError(_) => true
  }
  assert_true(bad_curriculum)
  assert_true(bad_attempts)
}
