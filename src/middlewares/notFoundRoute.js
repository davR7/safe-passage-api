module.exports = notFoundRoute = (req, res, next) => {
  const err = new Error("Not Found Route");
  err.status = 404;
  next(err);
}