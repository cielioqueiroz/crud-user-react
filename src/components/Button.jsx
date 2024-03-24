import React from "react";
import { Button } from "@mui/material";

export default function ActionButton({ action = null, children, type = "button" }) {
  return (
    <Button variant="contained" type={type} onClick={action}>
      {children}
    </Button>
  );
}
