import React, { useState, useEffect, useRef } from 'react';
import './QuickActionFab.css';

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  onClick: () => void;
  show?: boolean; // For conditional rendering based on app modules
}

interface QuickActionFabProps {
  actions: QuickAction[];
}

const QuickActionFab: React.FC<QuickActionFabProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  const toggleActions = () => {
    setIsOpen(!isOpen);
  };

  const handleActionClick = (action: QuickAction) => {
    action.onClick();
    setIsOpen(false);
  };

  // Close FAB when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Filter actions that should be shown
  const visibleActions = actions.filter(action => action.show !== false);

  return (
    <div ref={fabRef} className="quick-action-fab">
      <div className={`inner-fabs ${isOpen ? 'show' : ''}`}>
        {visibleActions.map((action, index) => (
          <div
            key={action.id}
            id={action.id}
            className="fab round"
            data-tooltip={action.label}
            onClick={() => handleActionClick(action)}
          >
            <span className="fab-icon">{action.icon}</span>
          </div>
        ))}
      </div>
      
      <div 
        id="fab1"
        className="fab round main-fab"
        data-tooltip="Quick Action"
        onClick={toggleActions}
      >
        <span id="fabIcon" className="fab-icon">
          {isOpen ? '×' : '+'}
        </span>
      </div>
    </div>
  );
};

export default QuickActionFab;