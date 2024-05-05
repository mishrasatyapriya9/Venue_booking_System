import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "booked"],
    required: true,
  },
});

const venueOwnerSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    // },
    VenueOwner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    venueName: {
      type: String,
      required: true,
    },
    venueType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    availability: {
      type: [availabilitySchema],
      default: [],
    },
    photos: {
      type: [String],
      default: [],
    },
    servicesOffered: {
      type: [String],
      default: [],
    },
    chatHistory: {
      type: [String],
      default: [],
    },
    role: {
      type: Number,
      default: 2,
    },
    rating: {
      type:Number,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Venues", venueOwnerSchema);

//DEMO JSON DATA
// [
//   {
//     "username": "garden_paradise",
//     "email": "garden.paradise@example.com",
//     "password": "garden_password",
//     "venueName": "Enchanted Gardens",
//     "venueType": "Outdoor Garden",
//     "description": "Enchanted Gardens offers a magical outdoor setting surrounded by lush greenery and blooming flowers.",
//     "price": 1500,
//     "capacity": 200,
//     "location": "Springfield",
//     "availability": [
//       { "date": "2024-06-15", "status": "available" },
//       { "date": "2024-07-20", "status": "booked" }
//     ],
//     "photos": ["garden1.jpg", "garden2.jpg"],
//     "servicesOffered": ["venue rental", "catering", "photography"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "sky_high_events",
//     "email": "sky.high.events@example.com",
//     "password": "sky_high_password",
//     "venueName": "Skyline Tower",
//     "venueType": "Rooftop Venue",
//     "description": "Skyline Tower offers a breathtaking rooftop experience with panoramic views of the city skyline.",
//     "price": 2000,
//     "capacity": 150,
//     "location": "Downtown Metropolis",
//     "availability": [
//       { "date": "2024-08-10", "status": "available" },
//       { "date": "2024-09-15", "status": "booked" }
//     ],
//     "photos": ["rooftop1.jpg", "rooftop2.jpg"],
//     "servicesOffered": ["venue rental", "decorator", "music"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "grand_ballroom",
//     "email": "grand.ballroom@example.com",
//     "password": "ballroom_password",
//     "venueName": "Elegant Grandeur",
//     "venueType": "Ballroom",
//     "description": "Elegant Grandeur boasts a luxurious ballroom setting with ornate chandeliers and grand architecture.",
//     "price": 3000,
//     "capacity": 300,
//     "location": "Royal Plaza",
//     "availability": [
//       { "date": "2024-10-05", "status": "available" },
//       { "date": "2024-11-20", "status": "booked" }
//     ],
//     "photos": ["ballroom1.jpg", "ballroom2.jpg"],
//     "servicesOffered": ["venue rental", "catering", "decorator"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "cozy_lodge",
//     "email": "cozy.lodge@example.com",
//     "password": "lodge_password",
//     "venueName": "Serenity Lodge",
//     "venueType": "Cozy Lodge",
//     "description": "Serenity Lodge offers a warm and inviting atmosphere with rustic charm and comfortable amenities.",
//     "price": 1200,
//     "capacity": 100,
//     "location": "Woodsy Haven",
//     "availability": [
//       { "date": "2024-12-10", "status": "available" },
//       { "date": "2025-01-15", "status": "booked" }
//     ],
//     "photos": ["lodge1.jpg", "lodge2.jpg"],
//     "servicesOffered": ["venue rental", "catering", "photography"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "ocean_view",
//     "email": "ocean.view@example.com",
//     "password": "ocean_password",
//     "venueName": "Seaside Serenity",
//     "venueType": "Beachfront Venue",
//     "description": "Seaside Serenity offers a tranquil beachfront setting with stunning ocean views and gentle breezes.",
//     "price": 2500,
//     "capacity": 250,
//     "location": "Sandy Shores",
//     "availability": [
//       { "date": "2025-02-20", "status": "available" },
//       { "date": "2025-03-25", "status": "booked" }
//     ],
//     "photos": ["beach1.jpg", "beach2.jpg"],
//     "servicesOffered": ["venue rental", "catering", "music"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "modern_gallery",
//     "email": "modern.gallery@example.com",
//     "password": "gallery_password",
//     "venueName": "Urban Art Space",
//     "venueType": "Gallery",
//     "description": "Urban Art Space showcases contemporary artworks in a trendy and industrial-inspired gallery setting.",
//     "price": 1800,
//     "capacity": 120,
//     "location": "Art District",
//     "availability": [
//       { "date": "2025-04-10", "status": "available" },
//       { "date": "2025-05-15", "status": "booked" }
//     ],
//     "photos": ["gallery1.jpg", "gallery2.jpg"],
//     "servicesOffered": ["venue rental", "decorator", "photography"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "garden_paradise",
//     "email": "garden.paradise@example.com",
//     "password": "garden_password",
//     "venueName": "Enchanted Gardens",
//     "venueType": "Outdoor Garden",
//     "description": "Enchanted Gardens offers a magical outdoor setting surrounded by lush greenery and blooming flowers.",
//     "price": 1500,
//     "capacity": 200,
//     "location": "Springfield",
//     "availability": [
//       { "date": "2024-06-15", "status": "available" },
//       { "date": "2024-07-20", "status": "booked" }
//     ],
//     "photos": ["garden1.jpg", "garden2.jpg"],
//     "servicesOffered": ["venue rental", "catering", "photography"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "sky_high_events",
//     "email": "sky.high.events@example.com",
//     "password": "sky_high_password",
//     "venueName": "Skyline Tower",
//     "venueType": "Rooftop Venue",
//     "description": "Skyline Tower offers a breathtaking rooftop experience with panoramic views of the city skyline.",
//     "price": 2000,
//     "capacity": 150,
//     "location": "Downtown Metropolis",
//     "availability": [
//       { "date": "2024-08-10", "status": "available" },
//       { "date": "2024-09-15", "status": "booked" }
//     ],
//     "photos": ["rooftop1.jpg", "rooftop2.jpg"],
//     "servicesOffered": ["venue rental", "decorator", "music"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "grand_ballroom",
//     "email": "grand.ballroom@example.com",
//     "password": "ballroom_password",
//     "venueName": "Elegant Grandeur",
//     "venueType": "Ballroom",
//     "description": "Elegant Grandeur boasts a luxurious ballroom setting with ornate chandeliers and grand architecture.",
//     "price": 3000,
//     "capacity": 300,
//     "location": "Royal Plaza",
//     "availability": [
//       { "date": "2024-10-05", "status": "available" },
//       { "date": "2024-11-20", "status": "booked" }
//     ],
//     "photos": ["ballroom1.jpg", "ballroom2.jpg"],
//     "servicesOffered": ["venue rental", "catering", "decorator"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "cozy_lodge",
//     "email": "cozy.lodge@example.com",
//     "password": "lodge_password",
//     "venueName": "Serenity Lodge",
//     "venueType": "Cozy Lodge",
//     "description": "Serenity Lodge offers a warm and inviting atmosphere with rustic charm and comfortable amenities.",
//     "price": 1200,
//     "capacity": 100,
//     "location": "Woodsy Haven",
//     "availability": [
//       { "date": "2024-12-10", "status": "available" },
//       { "date": "2025-01-15", "status": "booked" }
//     ],
//     "photos": ["lodge1.jpg", "lodge2.jpg"],
//     "servicesOffered": ["venue rental", "catering", "photography"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "majestic_mansion",
//     "email": "majestic.mansion@example.com",
//     "password": "mansion_password",
//     "venueName": "Majestic Mansion",
//     "venueType": "Historic Mansion",
//     "description": "Majestic Mansion offers an elegant and historic backdrop for your special events with its opulent interiors and sprawling estate.",
//     "price": 5000,
//     "capacity": 400,
//     "location": "Manor Avenue",
//     "availability": [
//       { "date": "2025-02-20", "status": "available" },
//       { "date": "2025-03-25", "status": "booked" }
//     ],
//     "photos": ["mansion1.jpg", "mansion2.jpg"],
//     "servicesOffered": ["venue rental", "decorator", "music"],
//     "chatHistory": [],
//     "role": 2
//   },
//   {
//     "username": "beachside_bliss",
//     "email": "beachside.bliss@example.com",
//     "password": "bliss_password",
//     "venueName": "Seaside Haven",
//     "venueType": "Beachside Venue",
//     "description": "Seaside Haven offers a picturesque beachside setting with stunning ocean views and sandy shores, perfect for romantic ceremonies and receptions.",
//     "price": 2500,
//     "capacity": 250,
//     "location": "Coastal Bay",
//     "availability": [
//       { "date": "2025-04-10", "status": "available" },
//       { "date": "2025-05-15", "status": "booked" }
//     ],
//     "photos": ["beach1.jpg", "beach2.jpg"],
//     "servicesOffered": ["venue rental", "catering", "photography"],
//     "chatHistory": [],
//     "role": 2
//   },
// ]
