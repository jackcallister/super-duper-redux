import express from 'express';
import sessionsMiddleware from '../middleware/sessionsMiddleware';

let router = express.Router();

router.use(sessionsMiddleware);

router.get('/', (req, res) => {
  res.render('index');
});

export default router;
