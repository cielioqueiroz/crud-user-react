import { Button } from "@mui/material";
import React from "react";

export default function ActionButton({ action, children }) {
  return (
    <Button variant="contained" onClick={action}>
      {children}
    </Button>
  );
}
