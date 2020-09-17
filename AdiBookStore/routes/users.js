var express = require('express');
var router = express.Router();
var path = require('path');
var fileUpload = require('../config/fileUpload');
const { upload } = fileUpload;
// var bookDB = require('../db/db');
// var multer = require('multer');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '../public/uploads/');
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });
// const upload = multer({ storage: storage });
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(bookDB, 'Inside');
  // bookDB.find().then((docs) => {
  //   console.log(docs);
  //   res.send(docs);
  // })
});

router.post('/', function (req, res, next) {
  // console.log(req.file);

  res.send('Hello');
});
router.post('/upload', upload.single('image'), (req, res, next) => {
  try {

    return res.status(201).json({
      message: 'File Uploaded successfully'
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
