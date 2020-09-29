const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//--- new schema
const Rpstarschema = new Schema({
  Stars: {
    type: String,
    required: true
  },
  Reviewcount: {
    type: String,
    required: true
  }
});

// Create collection and add schema
const Rpstar = mongoose.model('rpstar', Rpstarschema);

module.exports = Rpstar;