import express from 'express';
import cors from 'cors';
import { PLANTS_DATA } from './data/plants.js';
import { QUIZ_DATA } from './data/quiz.js';
import { RECIPES_DATA } from './data/recipes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Endpoint for fetching all plants
app.get('/api/plants', (req, res) => {
  res.json(PLANTS_DATA);
});

// API Endpoint for fetching the quiz questions
app.get('/api/quiz', (req, res) => {
  res.json(QUIZ_DATA);
});

// API Endpoint for fetching alchemy recipes
app.get('/api/recipes', (req, res) => {
  res.json(RECIPES_DATA);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
