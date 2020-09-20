var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });

var Schema = mongoose.Schema;

var bookSchema = new Schema({
  bookName: String,
  bookDescription: String,
  bookPic: String,
  bookAttachment: String
});

var book = mongoose.model('book', bookSchema);

module.exports = book;