import React from 'react';
import './NotificationPanel.css';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="notification-panel">
      <div className="notification-header">
        <h3>Notifications</h3>
        <button onClick={onClose} className="close-button">
          ×
        </button>
      </div>
      <div className="notification-content">
        <div className="notification-item">
          <p>No new notifications</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;