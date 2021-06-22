exports.homePage = (req, res, next) => {
  res.render('index');
}

exports.addStore = (req, res, next) => {
  res.render('editStore' { title: 'Add Store'});
}