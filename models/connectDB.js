const mongoose = require("mongoose");

mongoose.set('strictQuery', false).connect("mongodb://localhost:27017/k21-duan")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });


module.exports = mongoose;
