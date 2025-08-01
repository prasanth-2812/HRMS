import React from 'react';
import './Header.css';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="header-bar">
      <div className="header-left">
        <button className="hamburger-menu" onClick={toggleSidebar}>
          ☰ {/* Hamburger menu icon */}
        </button>
        <span className="horilla-title">Horilla</span>
      </div>
      <div className="header-right">
        {/* Icons (using text placeholders for simplicity) */}
        <span className="icon-button">⚙️ {/* Settings */}</span>
        <span className="icon-button notification-icon">
          🔔<span className="badge">0</span> {/* Notifications */}
        </span>
        <span className="icon-button">🌐 {/* Languages */}</span>
        <span className="icon-button">🏢 {/* Companies */}</span>
        <div className="user-profile">
          <span className="user-avatar">👤 {/* User avatar */}</span>
          <span className="user-name">Prasanth</span>
        </div>
      </div>
    </header>
  );
};

export default Header;