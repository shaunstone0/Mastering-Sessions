const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) return console.log(err);

      console.log(`connected MongoDB`);
    }
  );
};

module.exports = connectDB;
