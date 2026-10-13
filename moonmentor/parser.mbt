///|
/// Parsers for curriculum and learner-attempt files.
pub suberror ParseError {
  ParseError(String)
}

///|
fn parse_int(text : String) -> Int? {
  let value = text.trim().to_owned()
  if value == "" {
    return None
  }
  let mut result = 0
  let mut sign = 1
  let mut index = 0
  for c in value.iter() {
    if index == 0 && c == '-' {
      sign = -1
    } else if c < '0' || c > '9' {
      return None
    } else {
      result = result * 10 + c.to_int() - '0'.to_int()
    }
    index += 1
  }
  if index == 0 || (index == 1 && sign == -1) {
    None
  } else {
    Some(result * sign)
  }
}

///|
fn parse_bool(text : String) -> Bool? {
  match text.trim() {
    "1" | "true" | "yes" => Some(true)
    "0" | "false" | "no" => Some(false)
    _ => None
  }
}

///|
fn required(value : String, label : String) -> String raise ParseError {
  let text = value.trim().to_owned()
  if text == "" {
    raise ParseError("\{label} cannot be empty")
  }
  text
}

///|
/// Parse `id|title|difficulty|prerequisite|prompt` lines.
pub fn parse_curriculum(input : String) -> Array[Concept] raise ParseError {
  let result = []
  let mut line_number = 0
  for raw in input.split("\n") {
    line_number += 1
    let line = raw.trim().to_owned()
    if line == "" || line.has_prefix("#") {
      continue
    }
    let fields = line.split("|").map(s => s.to_owned()).collect()
    if fields.length() != 5 {
      raise ParseError(
        "curriculum line \{line_number} must contain 5 pipe-separated fields",
      )
    }
    let difficulty = match parse_int(fields[2]) {
      Some(value) if value >= 1 && value <= 5 => value
      _ =>
        raise ParseError(
          "curriculum line \{line_number} difficulty must be 1..5",
        )
    }
    result.push(
      concept(
        required(fields[0], "concept id"),
        required(fields[1], "concept title"),
        difficulty,
        fields[3].trim().to_owned(),
        required(fields[4], "concept prompt"),
      ),
    )
  }
  result
}

///|
/// Parse `concept|correct|hint_used|latency_ms|misconception` lines.
pub fn parse_attempts(input : String) -> Array[Attempt] raise ParseError {
  let result = []
  let mut line_number = 0
  for raw in input.split("\n") {
    line_number += 1
    let line = raw.trim().to_owned()
    if line == "" || line.has_prefix("#") {
      continue
    }
    let fields = line.split("|").map(s => s.to_owned()).collect()
    if fields.length() != 4 && fields.length() != 5 {
      raise ParseError(
        "attempt line \{line_number} must contain 4 or 5 pipe-separated fields",
      )
    }
    let correct = match parse_bool(fields[1]) {
      Some(value) => value
      None =>
        raise ParseError("attempt line \{line_number} has invalid correct flag")
    }
    let hint_used = match parse_bool(fields[2]) {
      Some(value) => value
      None =>
        raise ParseError("attempt line \{line_number} has invalid hint flag")
    }
    let latency_ms = match parse_int(fields[3]) {
      Some(value) if value >= 0 => value
      _ =>
        raise ParseError(
          "attempt line \{line_number} latency must be non-negative",
        )
    }
    let misconception = if fields.length() == 5 {
      fields[4].trim().to_owned()
    } else {
      ""
    }
    result.push(
      attempt(
        required(fields[0], "attempt concept"),
        correct,
        hint_used,
        latency_ms,
        misconception~,
      ),
    )
  }
  result
}

///|
/// Parse `exercise|id|title|concepts_csv|difficulty|minutes|prompt|hint` lines.
pub fn parse_exercises(input : String) -> Array[Exercise] raise ParseError {
  let result = []
  let mut line_number = 0
  for raw in input.split("\n") {
    line_number += 1
    let line = raw.trim().to_owned()
    if line == "" || line.has_prefix("#") {
      continue
    }
    let fields = line.split("|").map(s => s.to_owned()).collect()
    if fields.length() != 8 || fields[0] != "exercise" {
      raise ParseError(
        "exercise line \{line_number} must contain 8 fields and start with exercise",
      )
    }
    let difficulty = match parse_int(fields[4]) {
      Some(value) if value >= 1 && value <= 5 => value
      _ =>
        raise ParseError("exercise line \{line_number} difficulty must be 1..5")
    }
    let minutes = match parse_int(fields[5]) {
      Some(value) if value > 0 && value <= 120 => value
      _ =>
        raise ParseError("exercise line \{line_number} minutes must be 1..120")
    }
    let concepts = fields[3]
      .split(",")
      .map(s => s.trim().to_owned())
      .filter(s => s != "")
      .collect()
    if concepts.length() == 0 {
      raise ParseError(
        "exercise line \{line_number} must target at least one concept",
      )
    }
    result.push(
      exercise(
        required(fields[1], "exercise id"),
        required(fields[2], "exercise title"),
        concepts,
        difficulty,
        minutes,
        required(fields[6], "exercise prompt"),
        required(fields[7], "exercise hint"),
      ),
    )
  }
  result
}
