import React from 'react';
import './CapacityBar.css'

interface CapacityBarProps {
  text: string;
  background: string;
  capacity: number;
}

const CapacityBar = ({ text, background, capacity }: CapacityBarProps) => {
  return (
    <div className="container">
      <div className="progress-label"><h3>{text}</h3></div>
      <div className="capacity-bar">
        <div className="capacity-bar-fill" style={{ width: `${capacity}%`, backgroundColor: background }}></div>
      </div>
    </div>
  );
}

export default CapacityBar;
