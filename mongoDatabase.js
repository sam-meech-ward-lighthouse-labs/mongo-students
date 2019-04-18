const MongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://192.168.200.200:27017';

// Database Name
const dbName = 'school';

// Connect using MongoClient
MongoClient.connect(url, function(err, client) {

  const students = client.db(dbName).collection('students');

  function allStudents(cb) {
    // Show that duplicate records got dropped
    // .find()
    students.find({"alergies": "25"}).toArray(function(err, items) {
      cb(err, items);
    });
  }
  exports.students = allStudents;

  function addStudent(student, cb) {
    student.alergies = student.alergies.split(',');

    // .insert()
    students.insert(student, cb);
  }
  
  exports.addStudent = addStudent;

});

