const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect('mongodb://localhost:27017')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  
