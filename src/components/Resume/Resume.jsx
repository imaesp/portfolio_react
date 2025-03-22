import { useState } from 'react';
import './Resume.scss';
import BulletPoint from '../BulletPoint/BulletPoint';
import DisplayCard from '../DisplayCard/DisplayCard';

function Resume() {

  const [activeElement, setActiveElement] = useState(0)

  const bulletPoints = [
    {
      Title: 'CUNY TECH PREP',
      SubTitle: `Selected for a competitive web development fellowship with students from across the 11 CUNY senior
      colleges where Fellows create technical projects using tools such as React, Node + Express, and
      PostgreSQL.`,
      Date: 'September 2024 - Current',
      Image: 'orientation.png',
    },
    {
      Title: 'BROOKLYN COLLEGE',
      SubTitle: `Worked on developing dynamic web applications, collaborating with cross-functional teams, and 
      integrating modern libraries for enhanced UI/UX.`,
      Date: 'June 2023 - August 2023',
      Image: 'pawfect.jpeg',
    },
    {
      Title: 'HACKATHONS AND GAME JAMS',
      SubTitle: `Led team-based projects including a personalized pet-matching application and a city-based news hub,
      showcasing expertise in modern web development practices.`,
      Date: '2023 - 2024',
      Image: 'resource.png',
    },
  ];

  const activeBullet = bulletPoints[activeElement];

  return (
    <div className="resume">
      <div className="bullet-list">
        {bulletPoints.map((item, index) => (
          <BulletPoint
            key={index}
            Title={item.Title}
            SubTitle={item.SubTitle}
            Date={item.Date}
            onClick={() => setActiveElement(index)}
            className={`bullet-point ${activeElement === item ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="separator">
      </div>
      <div className="bullet-point-display">
        <DisplayCard 
          Image={activeBullet.Image}
          Description={activeBullet.SubTitle}
          Id={activeElement}
          activeElement={activeElement}
        />
      </div>
    </div>
  );
}

export default Resume;
