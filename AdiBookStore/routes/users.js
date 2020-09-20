var express = require('express');
var router = express.Router();
var path = require('path');
var fileUpload = require('../config/fileUpload');
const { upload } = fileUpload;
var bookDB = require('../db/db');
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
  // console.log(bookDB, 'Inside');
  bookDB.find().then((docs) => {
    console.log(docs);
    res.send(docs);
  })
});

router.post('/', function (req, res, next) {
  // console.log(req.file);

  res.send('Hello');
});
router.post('/upload',
  upload.fields([{
    name: 'bookPic', maxCount: 1
  }, {
    name: 'bookAttachment', maxCount: 1
  }]), async (req, res, next) => {
    console.log(req.files);
    console.log(req.body);
    const temp = {};
    temp.bookName = req.body.bookName;
    temp.bookDescription = req.body.bookDescription;
    temp.bookPic = req.files.bookPic[0].filename;
    temp.bookAttachment = req.files.bookAttachment[0].filename;
    try {
      const doc = new bookDB(temp);
      let result = await doc.save();
      console.log(result);
      return res.status(201).json({
        message: 'File Uploaded successfully',
        data: result
      });
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
