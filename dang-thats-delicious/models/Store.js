const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
 name: {
  type: String,
  trime: true, 
  required: 'Please enter in a store name, Papi!'
 },
 slug: String,
 description: {
  type: String,
  trim: true
 },
 tags: [String]
});

storeSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next(); //skip it
    return; //stop this function from running
  }
  this.slug = slug(this.name);
  next();
})

module.exports = mongoose.model('Store',storeSchema);