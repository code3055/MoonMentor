///|
/// Browser boundary for the MoonMentor engine.
pub fn analyze(
  curriculum_text : String,
  attempts_text : String,
  exercises_text : String,
  budget_minutes : Int,
  format : String,
) -> String {
  try {
    let concepts = @core.parse_curriculum(curriculum_text)
    let attempts = @core.parse_attempts(attempts_text)
    let exercises = @core.parse_exercises(exercises_text)
    @core.validate_inputs(concepts, attempts, exercises)
    let report = @core.plan_with_exercises(
      concepts, attempts, exercises, budget_minutes,
    )
    if format == "json" {
      @core.report_json(report)
    } else {
      @core.report_text(report)
    }
  } catch {
    @core.ParseError(message) =>
      Json::object({ "error": message.to_json() }).stringify()
  }
}
