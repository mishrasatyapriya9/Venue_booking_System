import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Slider from "react-slick";
import { FaRegHeart } from "react-icons/fa";
import decoraterData from "../assets/data/decorater.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function DecoraterCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ margin: "1%" }}>
      <Typography variant="h2" m="5%" color="white">
        Wedding Decorators
      </Typography>
      <Grid container spacing={3}>
        {decoraterData.map((decorater) => (
          <Grid item xs={12} sm={6} md={4} key={decorater.username} p={3}>
            <div style={{ position: "relative" }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Slider {...settings}>
                  {decorater.photos.map((photo, index) => (
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
                    {decorater.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Decor Style:</strong> {decorater.decorStyle}
                    <br />
                    <strong>Theme:</strong> {decorater.themes[0].theme}
                    <br />
                    <strong>Price:</strong> {decorater.themes[0].price}
                    <br />
                  </Typography>
                </CardContent>
                <Button variant="contained" sx={{ m: 2 }}>
                  <Link to="/decoratordetails" className="decorationNone">
                    Request Pricing
                  </Link>
                </Button>
              </Card>
              <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <FaRegHeart size={24} color="white" />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DecoraterCards;
