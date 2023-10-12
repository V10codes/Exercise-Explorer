import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner_black_background_girl.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#00ABB3" fontWeight="700" fontSize="60px">
        Fitness Center
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "30px", xs: "40px" } }}
        mb="20px"
        mt="0px"
      >
        Strive for progress, not prefection
      </Typography>
      <Typography fontSize="22px" lineHeight="25px" mb={2}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{ backgroundColor: "#00ABB3", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#00aaff"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
