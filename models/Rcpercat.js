const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//--- new schema
const Rcpercatschema = new Schema({
  Category: {
    type: String,
    required: true
  },
  Reviewount: {
    type: String,
    required: true
  }
});

// Create collection and add schema
const rcpercat = mongoose.model('rcpercat', Rcpercatschema);

module.exports = rcpercat;