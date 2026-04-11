import express from 'express';
// cors is used to allow cross-origin requests, 
// which is necessary when your frontend and backend are on different domains or ports
import cors from 'cors';
import dotenv from 'dotenv';
import ideaRoutes from './routes/ideaRoutes.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
// This middleware is used to parse incoming JSON requests and make the data available in req.body.
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/api/ideas", ideaRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});