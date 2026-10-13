///|
fn json_escape(text : String) -> String {
  let encoded = text.to_json().stringify()
  encoded[1:encoded.length() - 1].to_string()
}

///|
fn quoted(text : String) -> String {
  "\"\{json_escape(text)}\""
}

///|
pub fn report_json(result : Report) -> String {
  let rec = result.recommendation
  let mastery = result.mastery.map(item => {
    "{\"concept\":" +
    quoted(item.0) +
    ",\"probability\":" +
    item.1.to_string() +
    "}"
  })
  let diagnoses = result.diagnoses.map(item => {
    "{\"concept\":" +
    quoted(item.concept) +
    ",\"label\":" +
    quoted(item.label) +
    ",\"confidence\":" +
    item.confidence.to_string() +
    ",\"advice\":" +
    quoted(item.advice) +
    "}"
  })
  let steps = result.session.steps.map(item => {
    "{\"exercise\":" +
    quoted(item.exercise) +
    ",\"title\":" +
    quoted(item.title) +
    ",\"minutes\":" +
    item.minutes.to_string() +
    ",\"expected_gain\":" +
    item.expected_gain.to_string() +
    ",\"reason\":" +
    quoted(item.reason) +
    ",\"prompt\":" +
    quoted(item.prompt) +
    ",\"hint\":" +
    quoted(item.hint) +
    "}"
  })
  "{\"attempt_count\":" +
  result.attempt_count.to_string() +
  ",\"mastery\":[" +
  mastery.join(",") +
  "]" +
  ",\"diagnoses\":[" +
  diagnoses.join(",") +
  "]" +
  ",\"session\":{\"budget_minutes\":" +
  result.session.budget_minutes.to_string() +
  ",\"used_minutes\":" +
  result.session.used_minutes.to_string() +
  ",\"projected_gain\":" +
  result.session.projected_gain.to_string() +
  ",\"steps\":[" +
  steps.join(",") +
  "]}" +
  ",\"recommendation\":{\"concept\":" +
  quoted(rec.concept) +
  ",\"title\":" +
  quoted(rec.title) +
  ",\"confidence\":" +
  rec.confidence.to_string() +
  ",\"information_gain\":" +
  rec.information_gain.to_string() +
  ",\"reason\":" +
  quoted(rec.reason) +
  ",\"prompt\":" +
  quoted(rec.prompt) +
  "}}"
}

///|
pub fn report_text(result : Report) -> String {
  let rec = result.recommendation
  let mut output = "MoonMentor\n"
  output += "attempts: \{result.attempt_count}\n"
  output += "mastery:"
  for item in result.mastery {
    output += " \{item.0}=\{item.1}"
  }
  output += "\n"
  if result.diagnoses.length() > 0 {
    output += "diagnoses:\n"
    for item in result.diagnoses {
      output += "- \{item.concept}: \{item.label} (\{item.confidence}) -> \{item.advice}\n"
    }
  }
  output += "session (\{result.session.used_minutes}/\{result.session.budget_minutes} min, gain \{result.session.projected_gain}):\n"
  for step in result.session.steps {
    output += "- \{step.title} [\{step.exercise}] \{step.minutes}min, \{step.reason}\n"
    output += "  题目: \{step.prompt}\n"
    output += "  提示: \{step.hint}\n"
  }
  output += "next: \{rec.title} [\{rec.concept}]\n"
  output += "mastery estimate: \{rec.confidence}\n"
  output += "information gain: \{rec.information_gain}\n"
  output += "reason: \{rec.reason}\n"
  output += "exercise: \{rec.prompt}\n"
  output
}
