///|
/// Validate references before building a learning plan.
pub fn validate_inputs(
  concepts : Array[Concept],
  attempts : Array[Attempt],
  exercises : Array[Exercise],
) -> Unit raise ParseError {
  let ids : Array[String] = []
  for item in concepts {
    if ids.contains(item.id) {
      raise ParseError("duplicate concept: " + item.id)
    }
    ids.push(item.id)
  }
  if ids.is_empty() {
    raise ParseError("curriculum is empty")
  }
  let resolved : Array[String] = []
  for item in concepts {
    for raw in item.prerequisite.split(",") {
      let id = raw.trim().to_owned()
      if id != "" && !ids.contains(id) {
        raise ParseError("unknown prerequisite: " + id)
      }
    }
  }
  for pass = 0; pass < concepts.length(); pass = pass + 1 {
    for item in concepts {
      let mut ready = true
      for raw in item.prerequisite.split(",") {
        let id = raw.trim().to_owned()
        if id != "" && !resolved.contains(id) {
          ready = false
        }
      }
      if ready && !resolved.contains(item.id) {
        resolved.push(item.id)
      }
    }
  }
  if resolved.length() != ids.length() {
    raise ParseError("cyclic prerequisites")
  }
  for record in attempts {
    if !ids.contains(record.concept) {
      raise ParseError("unknown attempt concept: " + record.concept)
    }
  }
  let exercise_ids : Array[String] = []
  for item in exercises {
    if exercise_ids.contains(item.id) {
      raise ParseError("duplicate exercise: " + item.id)
    }
    exercise_ids.push(item.id)
    let targets : Array[String] = []
    for id in item.concepts {
      if !ids.contains(id) {
        raise ParseError("unknown exercise concept: " + id)
      }
      if targets.contains(id) {
        raise ParseError("duplicate exercise target: " + id)
      }
      targets.push(id)
    }
  }
}
