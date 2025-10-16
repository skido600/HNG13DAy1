const HandleError = (err, _req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    status: 500,
    message: err.message || "somethinh went wrong",
  });
};

const notFound = (req, res, next) => {
  res.status(404).json({
    message: `Route ${req.originalUrl} not found`,
  });
};
export { HandleError, notFound };
