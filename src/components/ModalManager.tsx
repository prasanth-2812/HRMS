import React from 'react';
import { useModal } from '../contexts/ModalContext';
import GenericModal from './Modals/GenericModal';

const ModalManager: React.FC = () => {
  const { activeModal, modalData, closeModal } = useModal();

  const renderModalContent = () => {
    switch (activeModal) {
      case 'charts':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Dashboard Charts</h3>
            <p>Chart configuration and analytics coming soon...</p>
          </div>
        );
      
      case 'ticket':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Create Support Ticket</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Priority</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea className="w-full px-3 py-2 border rounded-md" rows={4}></textarea>
              </div>
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={closeModal} className="px-4 py-2 border rounded-md">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Create Ticket
                </button>
              </div>
            </form>
          </div>
        );
      
      case 'asset':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Request Asset</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Asset Type</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Laptop</option>
                  <option>Desktop</option>
                  <option>Mobile Phone</option>
                  <option>Monitor</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Justification</label>
                <textarea className="w-full px-3 py-2 border rounded-md" rows={3}></textarea>
              </div>
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={closeModal} className="px-4 py-2 border rounded-md">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        );
      
      case 'leave':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Request Leave</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Leave Type</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Personal Leave</option>
                  <option>Emergency Leave</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Date</label>
                  <input type="date" className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End Date</label>
                  <input type="date" className="w-full px-3 py-2 border rounded-md" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Reason</label>
                <textarea className="w-full px-3 py-2 border rounded-md" rows={3}></textarea>
              </div>
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={closeModal} className="px-4 py-2 border rounded-md">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        );
      
      case 'attendance':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Attendance Request</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Request Type</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Check-in Correction</option>
                  <option>Check-out Correction</option>
                  <option>Missed Punch</option>
                  <option>Overtime Request</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input type="date" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input type="time" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Reason</label>
                <textarea className="w-full px-3 py-2 border rounded-md" rows={3}></textarea>
              </div>
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={closeModal} className="px-4 py-2 border rounded-md">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        );
      
      default:
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Coming Soon</h3>
            <p>This feature is under development.</p>
          </div>
        );
    }
  };

  return (
    <GenericModal
      isOpen={!!activeModal}
      onClose={closeModal}
      size="md"
    >
      {renderModalContent()}
    </GenericModal>
  );
};

export default ModalManager;
