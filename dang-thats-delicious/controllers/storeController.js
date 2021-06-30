const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res, next) => {
  res.render('index');
};

exports.addStore = (req, res, next) => {
  res.render('editStore', { title: 'Add Store'});
};

exports.createStore = async (req, res, next) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`)
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
  // 1. Query the database for a list of all stores
  const stores = await Store.find();
  res.render('stores', { title: 'Stores', stores  });
};

exports.editStore = async (req, res, next) => {
  // 1. Find the store given the I.D.
  const store = await Store.findOne({ _id: req.params.id });
  // 2. Confrim they are the owner of the store
  // 3. Render out the edit form so the user can update their store
}