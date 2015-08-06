export default function (req, res, next) {
  let cookie = req.cookies.access_token;

  if (cookie === undefined) {
    res.redirect('/sessions/new');
  } else {
    next();
  }
}
