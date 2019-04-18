const express = require('express');
const bodyParser = require('body-parser');

const database = require('./database');
const mongo = require('./mongoDatabase');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/test', (req, res) => {
  res.send("🤗");
});

app.get('/students', (req,res) => {
  mongo.students((err, students) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(students);
  });
  // res.send(database.students());
})

app.post('/students', (req, res) => {
  console.log(req.body);

  mongo.addStudent(req.body, (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send("🤗");
  });
});

app.listen(8080, () => console.log("😎"));