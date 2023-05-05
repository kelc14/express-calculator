const helpers = require("./helpers");

describe("calculate mean", function () {
  // will hold the cart for the tests
  let numString = "1,1,1,2,3,4,9";
  test("calculate the mean", function () {
    let nums = helpers.convertQueryString(numString);
    let mean = helpers.mean(nums);
    expect(mean).toBe(3);
  });

  test("calculate the mode", function () {
    let nums = helpers.convertQueryString(numString);
    let mode = helpers.mode(nums);
    expect(mode).toBe(1);
  });

  test("calculate the median", function () {
    let nums = helpers.convertQueryString(numString);
    let median = helpers.median(nums);
    expect(median).toBe(2);
  });
});
