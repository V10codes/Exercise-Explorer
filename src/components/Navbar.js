import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import AnimatedHeading from "./AnimatedHeading";
import Logo from "../assets/images/Logo-blue-2.jpg";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "60px", height: "45px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "2px solid #00ABB3",
            fontSize: "12px",
          }}
        >
          <AnimatedHeading text="HOME" />
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212", fontSize: "12px" }}
        >
          <AnimatedHeading text="EXERCISES" />
        </a>
        {/* <Link
          to="exercise-logger"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          ExerciseLogger
        </Link> */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
