import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { ModalProvider } from './contexts/ModalContext';
import AppRoutes from './routes/AppRoutes';
import ModalManager from './components/ModalManager';

function App() {
  return (
    <Router>
      <AuthProvider>
        <SidebarProvider>
          <ModalProvider>
            <div className="app-layout">
              <AppRoutes />
              <ModalManager />
            </div>
          </ModalProvider>
        </SidebarProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
