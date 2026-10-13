///|
test "correct answer breaks an error streak" {
  let concepts = [@moonmentor.concept("a", "A", 1, "", "a")]
  let learner = @moonmentor.train(concepts, [
    @moonmentor.attempt("a", false, false, 1),
    @moonmentor.attempt("a", false, false, 1),
    @moonmentor.attempt("a", true, false, 1),
  ])
  assert_false(
    @moonmentor.recommend(learner, concepts).reason.contains("连续"),
  )
}
