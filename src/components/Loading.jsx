import React from "react";

import { Box, CircularProgress } from "@mui/material";

export const Loading = () => (
  <Box sx={{ textAlign: "center" }}>
    <CircularProgress />
    <p>Carregando...</p>
  </Box>
);
