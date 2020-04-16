const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Need to have try-catch for async function incase they fail
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure if not connected
    process.exit(1);
  }
};

module.exports = connectDB;
