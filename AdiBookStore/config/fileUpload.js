//Setup for uploading files for user
const path = require("path"); //Importing path npm package
const multer = require("multer"); //Importing multer npm package

//Storing file on disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(`uploads/`));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  // limits: { fieldSize: 25, 1024, 1024 }
});

//Exporting upload for other files to use it.
module.exports = {
  upload: upload
};