import { Snackbar, Alert } from "@mui/material";
import { useAlert } from "./context/AlertProvider";

const AlertCard = () => {
  const { isOpen, type, message, onClose } = useAlert();
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        variant="filled"
        severity={type}
        sx={{ width: "20rem" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertCard;
