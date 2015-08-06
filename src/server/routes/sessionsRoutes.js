import express from 'express';
import { createSession } from '../webUtils/sessionWebUtils';

function setAccessToken(res, response) {
  const token = response.body.user.access_token;
  const opts = { maxAge: 900000, httpOnly: false };

  res.cookie('access_token', token, opts);
}

let router = express.Router();

router.get('/new', (req, res) => {
  res.render('session');
});

router.post('/', (req, res) => {
  createSession(req.body).then((response) => {
    setAccessToken(res, response);
    res.redirect('/');
  }).catch((error) => {
    res.redirect('/sessions/new');
  });
})

export default router;
