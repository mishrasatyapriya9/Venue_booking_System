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

const photoSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
});

const themeSchema = new mongoose.Schema({
  theme: {
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
  photos: {
    type: [photoSchema],
    default: [],
  },
});

const decoratorSchema = new mongoose.Schema(
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
    decorStyle: {
      type: String,
      required: true,
    },
    portfolio: {
      type: [String],
      default: [],
    },
    themes: {
      type: [themeSchema],
      default: [],
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
      default: 5,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Decorator", decoratorSchema);

//JSON DATA

// [
//   {
//     id: "decorator_1",
//     username: "artistic_decor",
//     email: "artistic.decor@example.com",
//     password: "decorator_password",
//     decorStyle: "Elegant",
//     portfolio: ["decoration1.jpg", "decoration2.jpg"],
//     themes: [
//       {
//         theme: "Vintage",
//         description:
//           "Vintage theme brings a timeless and classic atmosphere with elements from the past eras.",
//         price: 500,
//         photos: ["vintage1.jpg", "vintage2.jpg"],
//       },
//       {
//         theme: "Modern",
//         description:
//           "Modern theme features sleek lines, minimalism, and contemporary design elements.",
//         price: 700,
//         photos: ["modern1.jpg", "modern2.jpg"],
//       },
//       {
//         theme: "Rustic",
//         description:
//           "Rustic theme showcases natural elements, earthy tones, and a cozy, countryside feel.",
//         price: 600,
//         photos: ["rustic1.jpg", "rustic2.jpg"],
//       },
//     ],
//     availability: [{ date: "2024-02-10", status: "booked" }],
//     photos: ["decor1.jpg", "decor2.jpg"],
//     servicesOffered: ["decorator"],
//     chatHistory: [],
//   },
//   {
//     id: "decorator_2",
//     username: "elegant_events",
//     email: "elegant.events@example.com",
//     password: "events_password",
//     decorStyle: "Luxurious",
//     portfolio: ["decoration3.jpg", "decoration4.jpg"],
//     themes: [
//       {
//         theme: "Garden",
//         description:
//           "Garden theme incorporates lush greenery, floral arrangements, and natural elements, creating an outdoor ambiance.",
//         price: 800,
//         photos: ["garden1.jpg", "garden2.jpg"],
//       },
//       {
//         theme: "Bohemian",
//         description:
//           "Bohemian theme features eclectic decor, vibrant colors, and a relaxed, free-spirited atmosphere.",
//         price: 650,
//         photos: ["bohemian1.jpg", "bohemian2.jpg"],
//       },
//       {
//         theme: "Classic",
//         description:
//           "Classic theme offers timeless elegance, traditional design elements, and sophistication.",
//         price: 750,
//         photos: ["classic1.jpg", "classic2.jpg"],
//       },
//     ],
//     availability: [{ date: "2024-03-15", status: "available" }],
//     photos: ["decor3.jpg", "decor4.jpg"],
//     servicesOffered: ["decorator"],
//     chatHistory: [],
//   },
//   // Add more decorators with themes and descriptions here

//     {
//         "id": "decorator_3",
//         "username": "dreamy_decor",
//         "email": "dreamy.decor@example.com",
//         "password": "dreamy_password",
//         "decorStyle": "Romantic",
//         "portfolio": ["decoration5.jpg", "decoration6.jpg"],
//         "themes": [
//             {
//                 "theme": "Fairytale",
//                 "description": "Fairytale theme creates a magical atmosphere with whimsical elements and enchanting decor.",
//                 "price": 750,
//                 "photos": ["fairytale1.jpg", "fairytale2.jpg"]
//             },
//             {
//                 "theme": "Beach",
//                 "description": "Beach theme captures the essence of the seaside with sandy hues, driftwood accents, and nautical details.",
//                 "price": 600,
//                 "photos": ["beach1.jpg", "beach2.jpg"]
//             },
//             {
//                 "theme": "Winter Wonderland",
//                 "description": "Winter Wonderland theme evokes the charm of a snowy landscape with frosty tones and sparkling accents.",
//                 "price": 850,
//                 "photos": ["winter1.jpg", "winter2.jpg"]
//             }
//         ],
//         "availability": [
//             { "date": "2024-04-20", "status": "booked" }
//         ],
//         "photos": ["decor5.jpg", "decor6.jpg"],
//         "servicesOffered": ["decorator"],
//         "chatHistory": []
//     },
//     {
//         "id": "decorator_4",
//         "username": "art_deco_designs",
//         "email": "art.deco.designs@example.com",
//         "password": "deco_password",
//         "decorStyle": "Art Deco",
//         "portfolio": ["decoration7.jpg", "decoration8.jpg"],
//         "themes": [
//             {
//                 "theme": "Art Deco Glamour",
//                 "description": "Art Deco Glamour theme showcases opulent details, geometric patterns, and luxurious materials.",
//                 "price": 900,
//                 "photos": ["artdeco1.jpg", "artdeco2.jpg"]
//             }
//         ],
//         "availability": [
//             { "date": "2024-05-10", "status": "available" }
//         ],
//         "photos": ["decor7.jpg", "decor8.jpg"],
//         "servicesOffered": ["decorator"],
//         "chatHistory": []
//     },
//     {
//         "id": "decorator_5",
//         "username": "vibrant_visions",
//         "email": "vibrant.visions@example.com",
//         "password": "visions_password",
//         "decorStyle": "Colorful",
//         "portfolio": ["decoration9.jpg", "decoration10.jpg"],
//         "themes": [
//             {
//                 "theme": "Carnival",
//                 "description": "Carnival theme celebrates festivity with vibrant colors, playful decor, and lively entertainment.",
//                 "price": 700,
//                 "photos": ["carnival1.jpg", "carnival2.jpg"]
//             },
//             {
//                 "theme": "Tropical",
//                 "description": "Tropical theme transports guests to a paradise with exotic flora, fruity cocktails, and island-inspired decor.",
//                 "price": 600,
//                 "photos": ["tropical1.jpg", "tropical2.jpg"]
//             },
//             {
//                 "theme": "Moroccan",
//                 "description": "Moroccan theme mesmerizes with intricate patterns, rich textiles, and ornate lanterns, creating an exotic ambiance.",
//                 "price": 800,
//                 "photos": ["moroccan1.jpg", "moroccan2.jpg"]
//             }
//         ],
//         "availability": [
//             { "date": "2024-06-05", "status": "booked" }
//         ],
//         "photos": ["decor9.jpg", "decor10.jpg"],
//         "servicesOffered": ["decorator"],
//         "chatHistory": []
//     },
//     {
//         "id": "decorator_6",
//         "username": "chic_chateau",
//         "email": "chic.chateau@example.com",
//         "password": "chic_password",
//         "decorStyle": "Chic",
//         "portfolio": ["decoration11.jpg", "decoration12.jpg"],
//         "themes": [
//             {
//                 "theme": "Parisian",
//                 "description": "Parisian theme exudes elegance and sophistication with romantic accents, ornate furnishings, and chic decor.",
//                 "price": 800,
//                 "photos": ["parisian1.jpg", "parisian2.jpg"]
//             },
//             {
//                 "theme": "Vintage Chic",
//                 "description": "Vintage Chic theme combines antique charm with modern flair, featuring distressed finishes, soft pastels, and eclectic decor.",
//                 "price": 650,
//                 "photos": ["vintagechic1.jpg", "vintagechic2.jpg"]
//             }
//         ],
//         "availability": [
//             { "date": "2024-06-05", "status": "booked" }
//         ],
//         "photos": ["decor9.jpg", "decor10.jpg"],
//         "servicesOffered": ["decorator"],
//         "chatHistory": []
//     },
//   {
//     "id": "decorator_7",
//     "username": "dreamy_decor",
//     "email": "dreamy.decor@example.com",
//     "password": "dreamy_password",
//     "decorStyle": "Romantic",
//     "portfolio": ["decoration5.jpg", "decoration6.jpg"],
//     "themes": [
//       {
//         "theme": "Fairytale",
//         "description": "Fairytale theme brings the magic of fairytales to life with whimsical decor and enchanting ambiance.",
//         "price": 750,
//         "photos": ["fairytale1.jpg", "fairytale2.jpg"]
//       },
//       {
//         "theme": "Beach",
//         "description": "Beach theme captures the serenity of the seaside, featuring sandy hues, shells, and breezy decor elements.",
//         "price": 600,
//         "photos": ["beach1.jpg", "beach2.jpg"]
//       },
//       {
//         "theme": "Winter Wonderland",
//         "description": "Winter Wonderland theme evokes the charm of a snowy landscape, with frosty accents and cozy decor.",
//         "price": 850,
//         "photos": ["winter1.jpg", "winter2.jpg"]
//       }
//     ],
//     "availability": [
//       { "date": "2024-04-20", "status": "booked" }
//     ],
//     "photos": ["decor5.jpg", "decor6.jpg"],
//     "servicesOffered": ["decorator"],
//     "chatHistory": []
//   },
//   {
//     "id": "decorator_8",
//     "username": "art_deco_designs",
//     "email": "art.deco.designs@example.com",
//     "password": "deco_password",
//     "decorStyle": "Art Deco",
//     "portfolio": ["decoration7.jpg", "decoration8.jpg"],
//     "themes": [
//       {
//         "theme": "Art Deco Glamour",
//         "description": "Art Deco Glamour theme exudes sophistication with bold geometric patterns, luxurious fabrics, and opulent details.",
//         "price": 900,
//         "photos": ["artdeco1.jpg", "artdeco2.jpg"]
//       }
//     ],
//     "availability": [
//       { "date": "2024-05-10", "status": "available" }
//     ],
//     "photos": ["decor7.jpg", "decor8.jpg"],
//     "servicesOffered": ["decorator"],
//     "chatHistory": []
//   },
//   {
//     "id": "decorator_9",
//     "username": "vibrant_visions",
//     "email": "vibrant.visions@example.com",
//     "password": "visions_password",
//     "decorStyle": "Colorful",
//     "portfolio": ["decoration9.jpg", "decoration10.jpg"],
//     "themes": [
//       {
//         "theme": "Carnival",
//         "description": "Carnival theme celebrates festivity with vibrant colors, playful decor, and lively entertainment.",
//         "price": 700,
//         "photos": ["carnival1.jpg", "carnival2.jpg"]
//       },
//       {
//         "theme": "Tropical",
//         "description": "Tropical theme transports guests to paradise with tropical foliage, exotic flowers, and island-inspired decor.",
//         "price": 600,
//         "photos": ["tropical1.jpg", "tropical2.jpg"]
//       },
//       {
//         "theme": "Moroccan",
//         "description": "Moroccan theme captivates with intricate patterns, rich colors, and exotic decor inspired by Moroccan culture.",
//         "price": 750,
//         "photos": ["moroccan1.jpg", "moroccan2.jpg"]
//       }
//     ],
//     "availability": [
//       { "date": "2024-06-05", "status": "booked" }
//     ],
//     "photos": ["decor9.jpg", "decor10.jpg"],
//     "servicesOffered": ["decorator"],
//     "chatHistory": []
//   },
//   // Add more decorators with themes and descriptions here
// ]
