import mongoose from "mongoose";

const photographerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  experienceYears: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availability: [
    {
      date: {
        type: Date,
        required: true
      },
      status: {
        type: String,
        enum: ["available", "booked"],
        required: true
      }
    }
  ],
  photos: [
    {
      type: String
    }
  ],
  servicesOffered: [
    {
      type: String
    }
  ],
  chatHistory: [
    {
      type: String
    }
  ]
});

export const Photographer = mongoose.model("Photographer", photographerSchema);

