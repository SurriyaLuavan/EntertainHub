import { Snackbar, Alert } from "@mui/material";
import { useAlert } from "./context/AlertProvider";
import { useMediaQuery } from "@mui/material";

const AlertCard = () => {
  const { isOpen, type, message, onClose } = useAlert();
  const isDesktop = useMediaQuery("(min-width: 60em)");

  const isNarrow = useMediaQuery("(max-height: 40em");
  const horizontalValue = isDesktop ? "left" : "center";
  const verticalValue = isNarrow ? "top" : "bottom";

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ horizontal: horizontalValue, vertical: verticalValue }}
    >
      <Alert
        onClose={onClose}
        variant="filled"
        severity={type}
        sx={{ width: "18rem" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertCard;
