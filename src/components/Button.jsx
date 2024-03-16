import React from "react";
import { Button } from "@mui/material";

export const ActionButton = ({ action = null, children, type = "button" }) => (
  <Button variant="contained" type={type} onClick={action}>
    {children}
  </Button>
);
