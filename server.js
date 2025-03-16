import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => console.log(`Server running on port ${PORT}`));
