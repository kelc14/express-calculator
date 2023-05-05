// install
const express = require("express");

// local
const helpers = require("./helpers");

// initialize app, use json responses
const app = express();
app.use(express.json());

// route that collects query parameters (nums) and calculates the mean of the numbers
app.get("/mean", (req, res, next) => {
  try {
    // convert the query string (string of numbers) to actual numbers in an array
    nums = helpers.convertQueryString(req.query.nums);
    // calculate mean
    mean = helpers.mean(nums);
    response = { operation: "mean", value: mean };
    res.json(response);
  } catch (err) {
    return next(err);
  }
});

// route that collects query parameters (nums) and calculates the median of the numbers

app.get("/median", (req, res, next) => {
  try {
    // convert the query string (string of numbers) to actual numbers in an array
    nums = helpers.convertQueryString(req.query.nums);

    // calculate median
    median = helpers.median(nums);

    response = { operation: "median", value: median };

    res.json(response);
  } catch (err) {
    next(err);
  }
});

// route that collects query parameters (nums) and calculates the mode of the numbers
app.get("/mode", (req, res, next) => {
  try {
    // convert the query string (string of numbers) to actual numbers in an array
    nums = helpers.convertQueryString(req.query.nums);

    // calculate mode
    mode = helpers.mode(nums);
    response = { operation: "mode", value: mode };
    res.json(response);
  } catch (err) {
    next(err);
  }
});

// route that collects query parameters (nums) and calculates each: mean, median and mode of the numbers
app.get("/all", (req, res, next) => {
  try {
    // convert the query string (string of numbers) to actual numbers in an array
    nums = helpers.convertQueryString(req.query.nums);

    // calculate mean, median and mode
    mean = helpers.mean(nums);
    median = helpers.median(nums);
    mode = helpers.mode(nums);

    let response = {
      operation: "all",
      mean: mean,
      median: median,
      mode: mode,
    };
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
