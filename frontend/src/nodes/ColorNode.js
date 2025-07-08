import { useState } from 'react';
import BaseNode from './BaseNode';

const ColorNode = ({ id, data }) => {
  const [color, setColor] = useState(data.color || '#ff0000');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <BaseNode id={id} label="Color Node" type="color">
      <input 
        type="color" 
        value={color} 
        onChange={handleChange} 
        style={{width: '70%', height: '40px', border: 'none',marginTop:10, background: 'none' }}
      />
    </BaseNode>
  );
};

export { ColorNode };