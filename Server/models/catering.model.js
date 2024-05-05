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

const menuOptionSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const cateringSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    // },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cuisine: {
      type: [String],
      required: true,
    },
    menuOptions: {
      type: [menuOptionSchema],
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
    pricePerPlateNonVeg: {
      type: Number,
      required: true,
    },
    pricePerPlateVeg: {
      type: Number,
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
      default: 4,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Caterer", cateringSchema);

//JSON DATA INCLUDING ALL

// [
//   {
//     id: "caterer_1",
//     username: "delicious_catering",
//     email: "delicious.catering@example.com",
//     password: "caterer_password",
//     cuisine: ["Italian", "Mexican"],
//     menuOptions: [
//       {
//         item: "Pasta",
//         price: 10,
//       },
//     ],
//     description: "Delightful Italian and Mexican cuisines",
//     pricePerPlateNonVeg: 15,
//     pricePerPlateVeg: 12,
//     availability: [
//       {
//         date: "2024-02-10",
//         status: "booked",
//       },
//     ],
//     photos: ["dish1.jpg", "dish2.jpg"],
//     servicesOffered: ["catering"],
//     chatHistory: [],
//   },
//   {
//     id: "caterer_2",
//     username: "tasty_delights",
//     email: "tasty.delights@example.com",
//     password: "delights_password",
//     cuisine: ["Asian", "Indian"],
//     menuOptions: [
//       {
//         item: "Sushi",
//         price: 15,
//       },
//     ],
//     description: "Exquisite Asian and Indian delicacies",
//     pricePerPlateNonVeg: 18,
//     pricePerPlateVeg: 14,
//     availability: [
//       {
//         date: "2024-03-15",
//         status: "available",
//       },
//     ],
//     photos: ["dish3.jpg", "dish4.jpg"],
//     servicesOffered: ["catering"],
//     chatHistory: [],
//   },
//   {
//     id: "caterer_3",
//     username: "spice_paradise",
//     email: "spice.paradise@example.com",
//     password: "spice_paradise_password",
//     cuisine: ["Indian", "Mediterranean"],
//     menuOptions: [
//       {
//         item: "Curry",
//         price: 12,
//       },
//     ],
//     description: "Authentic Indian and Mediterranean flavors",
//     pricePerPlateNonVeg: 16,
//     pricePerPlateVeg: 13,
//     availability: [
//       {
//         date: "2024-04-20",
//         status: "booked",
//       },
//     ],
//     photos: ["dish5.jpg", "dish6.jpg"],
//     servicesOffered: ["catering"],
//     chatHistory: [],
//   },
//   {
//     id: "caterer_4",
//     username: "hearty_feasts",
//     email: "hearty.feasts@example.com",
//     password: "hearty_feasts_password",
//     cuisine: ["American", "BBQ"],
//     menuOptions: [
//       {
//         item: "Burger",
//         price: 8,
//       },
//     ],
//     description: "Hearty American and BBQ delights",
//     pricePerPlateNonVeg: 12,
//     pricePerPlateVeg: 10,
//     availability: [
//       {
//         date: "2024-05-10",
//         status: "available",
//       },
//     ],
//     photos: ["dish7.jpg", "dish8.jpg"],
//     servicesOffered: ["catering"],
//     chatHistory: [],
//   },
//   {
//     id: "caterer_5",
//     username: "savory_bites",
//     email: "savory.bites@example.com",
//     password: "savory_bites_password",
//     cuisine: ["French", "European"],
//     menuOptions: [
//       {
//         item: "Croissant",
//         price: 6,
//       },
//     ],
//     description: "Delectable French and European treats",
//     pricePerPlateNonVeg: 10,
//     pricePerPlateVeg: 8,
//     availability: [
//       {
//         date: "2024-06-05",
//         status: "booked",
//       },
//     ],
//     photos: ["dish9.jpg", "dish10.jpg"],
//     servicesOffered: ["catering"],
//     chatHistory: [],
//   },
//   {
//     id: "caterer_6",
//     username: "flavorful_occasions",
//     email: "flavorful.occasions@example.com",
//     password: "flavorful_occasions_password",
//     cuisine: ["Mexican", "Spanish"],
//     menuOptions: [
//       {
//         item: "Taco",
//         price: 9,
//       },
//     ],
//     description: "Flavorful Mexican and Spanish cuisine",
//     pricePerPlateNonVeg: 14,
//     pricePerPlateVeg: 11,
//     availability: [
//       {
//         date: "2024-07-01",
//         status: "available",
//       },
//     ],
//     photos: ["dish11.jpg", "dish12.jpg"],
//     servicesOffered: ["catering"],
//     chatHistory: [],
//   },
//   {
//     id: "caterer_7",
//     username: "culinary_delights",
//     email: "culinary.delights@example.com",
//     password: "culinary_delights_password",
//     cuisine: ["Japanese", "Thai"],
//     menuOptions: [
//       {
//         item: "Sashimi",
//         price: 18,
//       },
//     ],
//     description: "Exquisite Japanese and Thai delicacies",
//     pricePerPlateNonVeg: 22,
//     pricePerPlateVeg: 20,
//     availability: [
//       {
//         date: "2024-08-15",
//         status: "booked",
//       },
//     ],
//     photos: ["dish13.jpg", "dish14.jpg"],
//     servicesOffered: ["catering"],
//     chatHistory: [],
//   },
// ];
