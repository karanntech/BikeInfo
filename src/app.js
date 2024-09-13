import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middleware/errorhandler.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

// Global error handler
app.use(errorHandler);

export { app };