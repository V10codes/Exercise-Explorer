import React from "react";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
const ExerciseLogger = () => {
  return (
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      width="100%"
      marginTop={25}
    >
      <Button>
        <Link
          to="workout-schedule"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #00ABB3",
            marginBottom: "20px",
          }}
        >
          Log old workout schedule
        </Link>
      </Button>
      <Button>
        <Link
          to="new-workout-schedule"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #00ABB3",
          }}
        >
          create new workout schedule
        </Link>
      </Button>
    </Stack>
  );
};

export default ExerciseLogger;
