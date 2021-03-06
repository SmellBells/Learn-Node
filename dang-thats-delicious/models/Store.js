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
 tags: [String],
 created: {
   type: Date,
   default: Date.now
 },
 location: {
   type: {
     type: String,
     default: 'Point'
   },
   coordinates: [{
     type: Number,
     required: 'You must supply coordinates!'
   }],
   address: {
     type: String,
     required: 'Please enter in an address!'
   }
 }
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