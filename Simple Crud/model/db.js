const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log('Mongo DB Connection Success');
  } else {
    console.log('Mongo Error', err);
  }
});

require('./employee.model');
