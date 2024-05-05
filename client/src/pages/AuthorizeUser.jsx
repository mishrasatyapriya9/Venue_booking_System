import React, { useState, useEffect } from "react";
import img1 from "../assets/images/authBG1.jpg";
import img2 from "../assets/images/authBG2.jpg";
import img3 from "../assets/images/authBG3.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Typography, Paper } from "@mui/material";
import SignupForm from "../components/SignupForm";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AuthorizeUser = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="signup-paper"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity and color as needed
        backdropFilter: "blur(10px)", // Adjust the blur strength as needed
        WebkitBackdropFilter: "blur(10px)", // For Safari
        height: "auto",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
            centered
          >
            <Tab label="Log IN" {...a11yProps(0)} />
            <Tab label="Sign UP" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <SignupForm formLabel="Log In" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignupForm formLabel="Sign Up" />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default AuthorizeUser;
