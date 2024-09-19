import getStudentReviews from "../lib/getStudentReviews";

describe("Student Reviews - lib", () => {
  it("should return an array of student reviews", async () => {
    const getStudentReviews = await getStudentReviews();
    expect(getStudentReviews.length).toBeGreaterThan(1);
  });
});
