import React from 'react';
import './BirthdayCanvas.css';

interface BirthdayCanvasProps {
  birthdays: Array<{
    id: string;
    name: string;
    date: string;
    avatar?: string;
  }>;
}

const BirthdayCanvas: React.FC<BirthdayCanvasProps> = ({ birthdays }) => {
  const today = new Date().toISOString().split('T')[0];
  
  const todayBirthdays = birthdays.filter(birthday => {
    const birthdayDate = new Date(birthday.date).toISOString().split('T')[0];
    return birthdayDate === today;
  });

  const upcomingBirthdays = birthdays.filter(birthday => {
    const birthdayDate = new Date(birthday.date);
    const currentDate = new Date();
    const timeDiff = birthdayDate.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff > 0 && daysDiff <= 7;
  });

  return (
    <div className="birthday-canvas">
      <div className="birthday-section">
        <h4 className="section-title">🎂 Today's Birthdays</h4>
        {todayBirthdays.length > 0 ? (
          <div className="birthday-list">
            {todayBirthdays.map(person => (
              <div key={person.id} className="birthday-item today">
                <div className="birthday-avatar">
                  {person.avatar ? (
                    <img src={person.avatar} alt={person.name} />
                  ) : (
                    <span>{person.name.charAt(0)}</span>
                  )}
                </div>
                <span className="birthday-name">{person.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-birthdays">No birthdays today</p>
        )}
      </div>

      <div className="birthday-section">
        <h4 className="section-title">📅 Upcoming Birthdays</h4>
        {upcomingBirthdays.length > 0 ? (
          <div className="birthday-list">
            {upcomingBirthdays.map(person => (
              <div key={person.id} className="birthday-item upcoming">
                <div className="birthday-avatar">
                  {person.avatar ? (
                    <img src={person.avatar} alt={person.name} />
                  ) : (
                    <span>{person.name.charAt(0)}</span>
                  )}
                </div>
                <div className="birthday-info">
                  <span className="birthday-name">{person.name}</span>
                  <span className="birthday-date">{person.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-birthdays">No upcoming birthdays</p>
        )}
      </div>
    </div>
  );
};

export default BirthdayCanvas;