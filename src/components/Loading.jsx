import { Box, CircularProgress } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <CircularProgress />
      <p>Carregando...</p>
    </Box>
  );
}

export default Loading;
