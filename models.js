const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  News: mongoose.model(
    "News",
    new Schema({
      title: {
        type: String,
        required: true,
        unique: true
      },
      content: {
        type: String
      },
      image: {
        type: String
      }
    })
  )
};
