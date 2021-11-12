const mongoose = require("mongoose");
const validator = require("validator");

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
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 18,
    validate(value) {
      if (value <= 0) {
        throw new Error("Age can not be 0 or negative");
      } else if (value < 18) {
        throw new Error("You are below 18.");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email format");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    validate(value) {
      if(value.toLowerCase().includes("password")) {
        throw new Error("Password can not caontains the word password")
      }
    }
  }
});

// Instance of User model
const me = new User({
  name: "Somnath Sardar  ",
  email: "somnath@test.com",
  password: 8876543254
});

// Save data to database
me.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Task model
const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  },
});

// Instance of Task model
const task = new Task({
  description: "     Learn node js.      ",
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
