const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },

  description: {
    type: String,
    trim: true,
    required: "Description is Required"
  },

  location: {
    type: String,
    trim: true,
  },

  numBeds: {
      type: Number,
  },

  numBaths: {
      type: Number,
  }

});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;