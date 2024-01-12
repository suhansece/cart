import  { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Notification = ({ message,onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose()
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return visible ? <div className="notification">{message}</div> : null;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
