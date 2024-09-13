import { ApiError } from "../utils/apierror.js";

const errorHandler = (err, req, res, next) => {
    // If the error is an instance of ApiError, use its properties
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            data: err.data,
            errors: err.errors,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        });
    } else {
        // Fallback for unexpected errors
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        });
    }
};

export { errorHandler };