import React from 'react';
import './BulletPoint.scss';

function BulletPoint({ Title, SubTitle, Date, className, onClick }) {
  return (
    <div className={`bullet-point ${className}`} onClick={onClick}>
      <h3 className="title-text">{Title}</h3>
      <p className="subtitle-text">{SubTitle}</p>
      <p className="date-text">{Date}</p>
    </div>
  );
}

export default BulletPoint;