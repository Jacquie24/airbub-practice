const express = require("express");
const mongoose = require("mongoose");
const Place = require("./models/place");

const app = espress();

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// Shows connection error in case service isn't running

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected.");
});
connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/places", (req, res) => {
    Place.find().then((allPlaces) => {
        res.json(allPlaces);
    });
});

app.post("/api/places", (req, res) => {
    Place.create(req.body).then((newPlace) => {
        res.json(newPlace);
    });
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})