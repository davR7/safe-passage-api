module.exports = ErrorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({ error: error.message });
}