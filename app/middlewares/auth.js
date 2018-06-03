module.exports = (req, res, next) => {
  if (req.session && req.session.usuario) {
    return next();
  }

  req.flash('error', 'Não autorizado');
  return res.redirect('/');
};
