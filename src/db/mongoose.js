const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017";
const dbName = "task-manager-api";
const connectionString = dbUrl + "/" + dbName;

// Database connection.
mongoose.connect(connectionString, {
  useNewUrlParser: true,
});

// User model
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

//Task model
const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

// Instance of User model
const me = new User({
  name: "Somnath Sardar 1",
  age: 6,
});

// Save data to database
me.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Instance of Task model
const task = new Task({
  description: "Task 1",
  completed: false,
});

// Save to database
task
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
