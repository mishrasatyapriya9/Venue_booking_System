import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Slider from "react-slick";
import { FaRegHeart } from "react-icons/fa";
import catererData from "../assets/data/caterers.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function CatererCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ margin: "4%" }}>
      <Typography variant="h2" m="5%" color="white">
        Wedding Caterers
        {/* <b>
          <u>Wedding Caterers</u>
        </b> */}
      </Typography>
      <Grid container spacing={3}>
        {catererData.map((caterer) => (
          <Grid item xs={12} sm={6} md={4} key={caterer.username} p={3}>
            <div style={{ position: "relative" }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Slider {...settings}>
                  {caterer.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "200px !important",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </Slider>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                  >
                    {caterer.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Cuisine:</strong> {caterer.cuisine.join(", ")}
                    <br />
                    <strong>Description:</strong> {caterer.description}
                    <br />
                    <strong>Status:</strong> {caterer.availability[0].status}
                    <br />
                    <strong>Availability:</strong>{" "}
                    {caterer.availability[0].date}
                    <br />
                  </Typography>
                </CardContent>
                <Button variant="contained" sx={{ m: 2 }}>
                  <Link to="/catererdetails" className="decorationNone">
                    Request Pricing
                  </Link>
                </Button>
              </Card>
              <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <FaRegHeart size={24} />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CatererCards;
