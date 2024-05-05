import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { Photographer } from "./models/photographer.model.js";
import { TrialData } from "./models/trial.model.js";
import authRouter from "./routes/auth.routes.js";


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Database connection
connectDB();


app.use("/auth",authRouter)



// Routes
app.get("/", (req, res) => {
  res.send("<h1>hii welcome to ecommerece webapp</h1>");
});

app.post("/data", async (req, res) => {
  try {
    // Extract data from the request body
    const { name, address, marks } = req.body;
    
    // Attempt to save trial data to the database
    const trial = await new TrialData({
      name,
      address,
      marks,
    }).save();

    // Respond with a success message
    res.status(201).json({
      success: true,
      message: 'Trial data saved successfully',
      trial: trial // Optionally, you can send back the saved trial data
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating trial data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


app.get("/trialdata", async (req, res) => {
  try {
    // Retrieve trial data from the database
    const trialData = await TrialData.find({});

    // Check if trial data exists
    if (trialData && trialData.length > 0) {
      console.log("Found trial data");
      res.status(200).json(trialData); // Send trial data as JSON response
    } else {
      console.log("No trial data found");
      res.status(404).json({ message: "No trial data found" }); // Send 404 if no trial data found
    }
  } catch (error) {
    console.error("Error fetching trial data:", error);
    res.status(500).json({ message: "Server Error" }); // Send 500 for server errors
  }
});


app.get("/photographers", async (req, res) => {
  try {
    const photographers = await Photographer.find({});

    if (photographers && photographers.length > 0) {
      console.log("Found photographers");
      res.send(photographers);
    } else {
      console.log("Not Found");
      res.status(404).json({ message: "No photographers found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});






const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} MODE on port ${PORT}`
  );
});
