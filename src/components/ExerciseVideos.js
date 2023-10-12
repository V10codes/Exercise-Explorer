import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader.js";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#00ABB3", textTransfrom: "capitalize" }}>
          {name}
        </span>{" "}
        exercise Videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: "row",
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            ></img>
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#222">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
