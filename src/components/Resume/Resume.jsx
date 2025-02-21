import React from 'react';
import './Resume.scss';
import BulletPoint from '../BulletPoint/BulletPoint';

function Resume() {
  const bulletPoints = [
    {
      Title: 'CUNY TECH PREP',
      SubTitle: `Selected for a competitive web development fellowship with students from across the 11 CUNY senior
      colleges where Fellows create technical projects using tools such as React, Node + Express, and
      PostgreSQL.`,
      Date: 'September 2024 - Current',
    },
    {
      Title: 'INTERNSHIP EXPERIENCE',
      SubTitle: `Worked on developing dynamic web applications, collaborating with cross-functional teams, and 
      integrating modern libraries for enhanced UI/UX.`,
      Date: 'June 2023 - August 2023',
    },
    {
      Title: 'ACADEMIC PROJECTS',
      SubTitle: `Led team-based projects including a personalized pet-matching application and a city-based news hub,
      showcasing expertise in modern web development practices.`,
      Date: '2023 - 2024',
    },
  ];

  return (
    <div className="resume">
      <div className="bullet-list">
        {bulletPoints.map((item, index) => (
          <BulletPoint
            key={index}
            Title={item.Title}
            SubTitle={item.SubTitle}
            Date={item.Date}
            className="bullet-point"
          />
        ))}
      </div>
      <div className="resume-image-container">
        <img src="resume.svg" alt="Resume Illustration" />
      </div>
    </div>
  );
}

export default Resume;
