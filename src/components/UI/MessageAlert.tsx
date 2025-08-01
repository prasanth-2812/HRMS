import React, { useEffect, useState } from 'react';
import './MessageAlert.css';

interface MessageAlertProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
  isVisible: boolean;
}

const MessageAlert: React.FC<MessageAlertProps> = ({
  message,
  type,
  duration = 5000,
  onClose,
  isVisible
}) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '';
    }
  };

  const handleClose = () => {
    setShow(false);
    onClose?.();
  };

  return (
    <div className={`message-alert alert-${type}`}>
      <div className="alert-content">
        <span className="alert-icon">{getIcon()}</span>
        <span className="alert-message">{message}</span>
      </div>
      <button 
        className="alert-close" 
        onClick={handleClose}
        aria-label="Close alert"
      >
        ×
      </button>
    </div>
  );
};

export default MessageAlert;