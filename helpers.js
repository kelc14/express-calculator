const ExpressError = require("./expressError");

function convertQueryString(queryString) {
  if (!queryString) throw new ExpressError("Numbers are required", 400);

  // convert the query string (string of numbers) to actual numbers in an array

  let nums = queryString.split(",");
  checkInvalidInput(nums);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = parseInt(nums[i]);
  }
  return nums;
}

function checkInvalidInput(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) {
      console.log(nums[i], "this should not be a number");
      throw new ExpressError(
        `${nums[i]} is not a number. Please enter valid number.`,
        400
      );
    }
  }
}

function calcMean(nums) {
  // calculate the mean of the numbers provided by adding each number to the total and then dividing by the length of the number array
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total / nums.length;
}

function calcMedian(nums) {
  // calculate the median by first sorting the numbers, and then calculate the middle index (round it).  If the array is of odd length, return the midpoint, otherwise if even length find the mean of the two midpoints

  nums.sort((a, b) => a - b);
  const midpoint = Math.floor(nums.length / 2);
  const median =
    nums.length % 2 === 1
      ? nums[midpoint] // If odd length, just take midpoint
      : (nums[midpoint - 1] + nums[midpoint]) / 2; // If even length, take median of midpoints
  return median;
}

function calcMode(nums) {
  // calculate the mode of the numbers be first setting the max to 0, for each item in the array, check to see if it is present in mode obj. If yes, add one to count, if not add it to our mode array with count 1.  If count is biggest, that is mode.

  const mode = {};
  let max = 0;
  count = 0;

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  // the only problem is if two numbers have the same number of max occurences?
  return max;
}

module.exports = {
  convertQueryString: convertQueryString,
  mean: calcMean,
  median: calcMedian,
  mode: calcMode,
  invalidInput: checkInvalidInput,
};
