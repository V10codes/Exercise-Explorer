import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box className="footer">
      <Stack gap="4px" mb="40px" alignItems="center" px="40px">
        <Typography variant="h5">Made with 💖 by V10</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
