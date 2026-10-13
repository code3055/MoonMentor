///|
test "rejects overflowing duration instead of wrapping" {
  let rejected = try {
    ignore(@moonmentor.parse_attempts("syntax|1|0|4294967296"))
    false
  } catch {
    _ => true
  }
  assert_true(rejected)
  let records = @moonmentor.parse_attempts("syntax|1|0|2147483647")
  assert_eq(records[0].latency_ms, 2147483647)
}
