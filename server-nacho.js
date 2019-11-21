const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const City = require('./api/models/city');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(5000, function () {
  console.log('listening on 5000');
});

const uri = "mongodb+srv://user1:" + process.env.MONGO_ATLAS_PW + "@mytinerarycluster-zsbch.mongodb.net/mytinerary?retryWrites=true&w=majority";
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.get('/cities/all', (req, res) => {
  City.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
});

app.post('/cities/add', (req, res, next) => {
  const city = new City({
    name: req.body.name,
    country: req.body.country
  });

  city
    .save()
    .then(result => {
      res.send('City added successfully')
    })
    .catch(err => console.log(err))
});
