import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import { RootState } from "../../../store";

const Notification = () => {
  const { notifications } = useSelector(
    (state: RootState) => state.notification
  );
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

  useEffect(() => {
    if (notifications.length > 0) {
      setNotification(notifications[0]);
      setOpen(true);
    }
  }, [notifications]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={notification.type === "success" ? "success" : "error"}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
