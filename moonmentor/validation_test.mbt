///|
test "rejects unknown learner references and cyclic courses" {
  let course = @moonmentor.parse_curriculum("a|A|1||a")
  let rejected = try {
    @moonmentor.validate_inputs(
      course,
      [@moonmentor.attempt("unknown", true, false, 1)],
      [],
    )
    false
  } catch {
    _ => true
  }
  assert_true(rejected)
  let cycle = @moonmentor.parse_curriculum("a|A|1|b|a\nb|B|1|a|b")
  let cyclic = try {
    @moonmentor.validate_inputs(cycle, [], [])
    false
  } catch {
    _ => true
  }
  assert_true(cyclic)
}
