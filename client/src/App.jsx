import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./components2/navbar";
import { HomePage } from "./pages/HomePage";
import VenueCard from "./pages/VenueCard";
import { Routes, Route } from "react-router-dom";
import VenueCaraousel from "./pages/VenueCaraousel";
import PhotographerCards from "./pages/photographerCard";
import Photographer from "./components2/photographer";
import CatererCards from "./components2/catererCard";
import DecoraterCards from "./components2/decoraterCard";
import Catering from "./components2/catering";
import Decorator from "./components2/decorator";
import Basic from "./pages/Basic";
import AboutUs from "./pages/AboutUs";
import AuthorizeUser from "./pages/AuthorizeUser";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/venues" element={<VenueCard />} />
        <Route path="/venuedetails" element={<VenueCaraousel />} />
        <Route path="/photographer" element={<PhotographerCards />} />
        <Route path="/photodetails" element={<Photographer />} />
        <Route path="/caterer" element={<CatererCards />} />
        <Route path="/catererdetails" element={<Catering />} />
        <Route path="/decorator" element={<DecoraterCards />} />
        <Route path="/decoratordetails" element={<Decorator/>} />
        <Route path="/payment" element={<Basic/>} />
        <Route path="/authorizeme" element={<AuthorizeUser/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
