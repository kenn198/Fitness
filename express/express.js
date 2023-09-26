const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Enable CORS before defining routes
app.use(cors());

// Replace 'your-mongodb-uri' with your MongoDB connection URI
mongoose.connect('mongodb://127.0.0.1:27017/Fitness', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a mongoose schema for your user data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
});

const User = mongoose.model('User', userSchema);

// Create a route to handle user registration
app.post('/api/register', async (req, res) => {
  try {
    // Assuming your registration form sends data as JSON
    const { name, email, contact } = req.body;

    // Check if the contact field is either a number or an empty string
    if (typeof contact !== 'number' && contact !== null && contact !== undefined) {
      return res.status(400).json({ message: 'Invalid contact format' });
    }

    // Create a new user document
    const newUser = new User({
      name,
      email,
      contact,
    });

    // Save the user document to MongoDB
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
