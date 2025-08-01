import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SidebarProvider } from './contexts/SidebarContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <SidebarProvider>
          <div className="app-layout">
            <AppRoutes />
          </div>
        </SidebarProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
