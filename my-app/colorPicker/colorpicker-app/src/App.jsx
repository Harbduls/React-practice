import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export const ColorPicker = () => {
   const [color, setColor] = useState('#ffffff');

  return (
    <div 
      id="color-picker-container"
      style={{ backgroundColor: color }}
    >
      <input 
        id="color-input" 
        type="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker
