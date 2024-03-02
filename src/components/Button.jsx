import { Button } from "@mui/material";
import React from "react";

export default function ActionButton({ action = null, children, type = "button" }) {
  return (
    <Button variant="contained" type={type} onClick={action}>
      {children}
    </Button>
  );
}
