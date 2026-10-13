///|
test "locked exercises cannot gain eligibility through lookahead" {
  let concepts = [
    @moonmentor.concept("a", "A", 1, "missing", "a"),
    @moonmentor.concept("b", "B", 1, "", "b"),
  ]
  let exercises = [
    @moonmentor.exercise("locked", "Locked", ["a"], 1, 1, "a", "hint"),
    @moonmentor.exercise("ready", "Ready", ["b"], 1, 1, "b", "hint"),
  ]
  let result = @moonmentor.plan_with_exercises(concepts, [], exercises, 10)
  assert_eq(result.session.steps.length(), 1)
  assert_eq(result.session.steps[0].exercise, "ready")
}
