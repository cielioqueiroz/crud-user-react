import { Box, Typography } from "@mui/material";

function PageHeader({ title, subtitle }) {
  return (
    <Box sx={{ pb: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontSize: "0.95rem" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default PageHeader;
