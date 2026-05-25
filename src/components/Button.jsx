import { Button } from "@mui/material";

export default function ActionButton({
  action = null,
  children,
  type = "button",
  startIcon,
  variant = "contained",
}) {
  return (
    <Button
      variant={variant}
      type={type}
      onClick={action}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
}
