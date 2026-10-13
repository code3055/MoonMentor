///|
/// MoonMentor's explainable adaptive-learning model.
pub struct Concept {
  id : String
  title : String
  difficulty : Int
  prerequisite : String
  prompt : String
}

///|
pub struct Attempt {
  concept : String
  correct : Bool
  hint_used : Bool
  latency_ms : Int
  misconception : String
}

///|
/// A practice item can target several concepts at once (a Q-matrix row).
pub struct Exercise {
  id : String
  title : String
  concepts : Array[String]
  difficulty : Int
  minutes : Int
  prompt : String
  hint : String
}

///|
pub struct Learner {
  mastery : Map[String, Double]
  attempts : Map[String, Int]
  wrong : Map[String, Int]
}

///|
pub struct Recommendation {
  concept : String
  title : String
  confidence : Double
  information_gain : Double
  reason : String
  prompt : String
}

///|
pub struct Diagnosis {
  concept : String
  label : String
  confidence : Double
  advice : String
}

///|
pub struct SessionStep {
  exercise : String
  title : String
  minutes : Int
  expected_gain : Double
  reason : String
  prompt : String
  hint : String
}

///|
pub struct SessionPlan {
  budget_minutes : Int
  used_minutes : Int
  projected_gain : Double
  steps : Array[SessionStep]
}

///|
pub struct Report {
  learner : Learner
  recommendation : Recommendation
  attempt_count : Int
  mastery : Array[(String, Double)]
  diagnoses : Array[Diagnosis]
  session : SessionPlan
}

///|
pub fn concept(
  id : String,
  title : String,
  difficulty : Int,
  prerequisite : String,
  prompt : String,
) -> Concept {
  { id, title, difficulty, prerequisite, prompt, }
}

///|
pub fn attempt(
  concept : String,
  correct : Bool,
  hint_used : Bool,
  latency_ms : Int,
  misconception? : String = "",
) -> Attempt {
  { concept, correct, hint_used, latency_ms, misconception, }
}

///|
pub fn exercise(
  id : String,
  title : String,
  concepts : Array[String],
  difficulty : Int,
  minutes : Int,
  prompt : String,
  hint : String,
) -> Exercise {
  { id, title, concepts, difficulty, minutes, prompt, hint, }
}
