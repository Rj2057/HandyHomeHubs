const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require('./models/User');
const Address = require('./models/Address');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Database Connection With MongoDB
mongoose.connect("mongodb+srv://rachan_09:rachan_09@handyhomehub.a1vez.mongodb.net/?retryWrites=true&w=majority&appName=HandyHomeHub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// User Registration
app.post('/signup', async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, errors: "Existing user found with the same email address" });
  }

  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password, // Note: Password should be hashed in production
  });

  await user.save();

  const data = {
    user: {
      id: user.id
    }
  };

  const token = jwt.sign(data, 'secret_homeservice');
  res.json({ success: true, token });
});

// User Login
app.post('/login', async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password; // Note: Password should be hashed and compared
    if (passCompare) {
      const data = {
        user: {
          id: user.id
        }
      };
      const token = jwt.sign(data, 'secret_homeservice');
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Id" });
  }
});

// Update Address
app.put('/update_address', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, errors: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, 'secret_homeservice');
    const userId = decoded.user.id;

    console.log("Request Body:", req.body); // Log the request body
    console.log("User  ID:", userId); // Log the user ID

    let existingAddress = await Address.findOne({ userId });

    if (existingAddress) {
      existingAddress.address = req.body.address;
      existingAddress.phoneNumber = req.body.phoneNumber; // Update phone number
      await existingAddress.save();
    } else {
      const newAddress = new Address({
        userId,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber, // Include phone number in new address
      });
      await newAddress.save();
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Error updating address:", error);
    res.status(500).json({ success: false, errors: "An error occurred. Please try again." });
  }
});
const Appointment = require('./models/Appointment'); // Import the Appointment model

// Endpoint to save the appointment
app.post('/save_appointment', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, errors: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, 'secret_homeservice');
    const userId = decoded.user.id;

    const { date, time } = req.body;

    const newAppointment = new Appointment({
      userId,
      date,
      time,
    });

    await newAppointment.save();
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ success: false, errors: "An error occurred. Please try again." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});