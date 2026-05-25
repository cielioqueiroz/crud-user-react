import { Box, CircularProgress, Typography } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <CircularProgress sx={{ color: "secondary.main" }} />
      <Typography variant="body2" color="text.secondary">
        Carregando...
      </Typography>
    </Box>
  );
}

export default Loading;
