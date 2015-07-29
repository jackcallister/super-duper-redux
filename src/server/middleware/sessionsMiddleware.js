export default function (req, res, next) {
  let cookie = req.cookies.access_token;

  if (cookie === undefined && process.env.NODE_ENV !== 'development') {
    res.redirect('/sessions/new');
  } else {
    next();
  }
}
