import express from 'express';
import { createMeal, getMeals } from '../webUtils/mealWebUtils';

let router = express.Router();

router.post('/meals', (req, res) => {
  createMeal(req.body, req.cookies.access_token).then((response) => {
    res.json(response);
  }).catch((error) => {
    res.redirect('/sessions/new');
  });
});

router.get('/meals', (req, res) => {
  getMeals(req.cookies.access_token).then((response) => {
    res.json(response);
  }).catch((error) => {
    res.redirect('/sessions/new');
  });
});

export default router;
