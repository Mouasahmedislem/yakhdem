module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    req.session.oldUrl = req.url; // storing previous url
    res.redirect('/user/signin');
  },
  isNotLoggedIn: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  }
  function isAdminLoggedIn(req, res, next) {
  if (req.session && req.session.isAdmin) {
    return next();
  } else {
    res.redirect('/admin/login');
  }
}

}
