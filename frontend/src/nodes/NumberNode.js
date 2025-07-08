
import { useState } from 'react';
import BaseNode from './BaseNode';

const NumberNode = ({ id, data }) => {
  const [value, setValue] = useState(data.value || 0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <BaseNode id={id} label="Number Node" type="number">
      <input 
        type="number" 
        value={value} 
        onChange={handleChange} 
      />
    </BaseNode>
  );
};

export { NumberNode };