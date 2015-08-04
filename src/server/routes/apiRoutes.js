import express from 'express';
import { createMeal } from '../webUtils/mealWebUtils';

let router = express.Router();

router.post('/meals', (req, res) => {
  createMeal(req.body).then((response) => {
    res.json(response);
  }).catch((error) => {
    res.redirect('/sessions/new');
  });
});

export default router;
