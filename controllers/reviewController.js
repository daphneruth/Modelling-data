const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();
  res.json({
    status: 'success',
    results: this.getAllReviews.length,
    data: {
      reviews
    }
  });
});
