// middleware/ensureAuth.js
function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    res.redirect('/login');
  }
}

module.exports = ensureAuthenticated;
