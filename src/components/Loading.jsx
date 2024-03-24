import React from "react";
import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <CircularProgress />
      <p>Carregando...</p>
    </Box>
  );
}

export default Loading;
