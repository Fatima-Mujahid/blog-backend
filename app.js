import express from 'express';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogs.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: './config.env' });

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
mongoose.connect(process.env.CONNECTION_URL, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error ${err}`);
  server.close(() => process.exit(1));
});
