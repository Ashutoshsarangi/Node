const mongoose = require('mongoose');

var EmployeeScheme = new mongoose.Schema({
  fullName: {
    type: String
  },
  email: { type: String },
  mobile: { type: String },
  city: { type: String }
});

mongoose.model("Employee", EmployeeScheme);