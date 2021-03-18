const express = require('express');
const mongoose = require('mongoose');

const Employee = mongoose.model('Employee');

var router = express.Router();

router.get('/', (req, res) => {
  res.json('Some Sample text');
});

router.post('/createEmployee', (req, res) => {
  insertRecord(req, res);
});

router.get('/list', (req, res) => {
  Employee.find((err, docs) => {
    console.log(docs);
    if (!err) {
      res.send(docs);
    } else {
      console.log(Error, err);
    }
  })
});
const insertRecord = (req, res) => {
  // Save Data In Mongo DB.
  let employee = new Employee();
  employee.fullName = req.body.fullName;
  employee.email = req.body.email;
  employee.mobile = req.body.mobile;
  employee.city = req.body.city;
  employee.save((err, doc) => {
    if (!err) {
      res.send({
        message: 'Done',
        status: 200
      });
    }
    else {
      console.log('Error Occured insert Element', err);
    }
  });
}


module.exports = router;


