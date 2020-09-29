const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//--- new schema
const RperYear = new Schema({
  year: {
    type: String,
    required: true
  },
  count: {
    type: String,
    required: true
  }
});

// Create collection and add schema
const rperyear = mongoose.model('rperyear', RperYear);

module.exports = rperyear;