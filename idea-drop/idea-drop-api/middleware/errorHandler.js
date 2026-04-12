export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // use status code otherwise default to 500 - internal server error
    res.statusCode = statusCode;
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};
// stack trace is only included in development mode to avoid exposing sensitive information in production.