import express from 'express';
// cors is used to allow cross-origin requests, 
// which is necessary when your frontend and backend are on different domains or ports
import cors from 'cors';
import dotenv from 'dotenv';
import ideaRoutes from './routes/ideaRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import connectDB from './config/db.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

app.use(cors());
// This middleware is used to parse incoming JSON requests and make the data available in req.body.
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/ideas", ideaRoutes);

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error); // nest is doing: it passes the error to the next middleware function, which is the error handling middleware defined below.
});

// Error handling middleware
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});