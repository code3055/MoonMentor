///|
test "reports escape control characters" {
  let result = @moonmentor.plan(
    [@moonmentor.concept("a", "A\tB", 1, "", "line\u{1f}end")],
    [],
  )
  let json = @moonmentor.report_json(result)
  assert_false(json.contains("\t"))
  assert_false(json.contains("\u{1f}"))
}
