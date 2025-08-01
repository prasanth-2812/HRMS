import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { useSidebar } from '../../contexts/SidebarContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { user, logout } = useAuthContext();
  const { isCollapsed } = useSidebar();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className={`navbar ${isCollapsed ? 'navbar-expanded' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="navbar-title">Welcome to SYNC HRMS</h1>
        </div>
        
        <div className="navbar-right">
          <div className="navbar-user">
            <div className="navbar-user-info">
              <span className="navbar-user-name">
                {user ? `${user.firstName} ${user.lastName}` : 'User'}
              </span>
              <span className="navbar-user-role">
                {user?.role || 'Employee'}
              </span>
            </div>
            
            <div className="navbar-user-avatar">
              {user ? 
                `${user.firstName.charAt(0)}${user.lastName.charAt(0)}` : 
                'U'
              }
            </div>
            
            <div className="navbar-user-menu">
              <button 
                onClick={handleLogout}
                className="navbar-logout-btn"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
