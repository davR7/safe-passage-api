module.exports = ErrorHandler = (error, req, res, next) => {
  if (error?.name === 'ValidationError') {
    res.status(400);
    return res.json({ success: false, error: error.details[0].message })
  }
  
  res.status(error.status || 500);
  return res.json({ error: error.message });
}