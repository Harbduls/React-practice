import React from 'react';
export function MoodBoardItem({ color, image, description }) {
  return (
    <div
      className="mood-board-item"
      style={{ backgroundColor: color }}
    >
      <img src={image} alt={description} />
      <p>{description}</p>
    </div>
  );
}


export default MoodBoardItem;
 