import { useState } from 'react';
import BaseNode from './BaseNode';

const SwitchNode = ({ id, data }) => {
  const [isOn, setIsOn] = useState(data.isOn || false);

  const toggleSwitch = () => {
    setIsOn(prev => !prev);
  };

  return (
    <BaseNode id={id} label="Switch Node" type="switch">
      <button onClick={toggleSwitch} style={{ marginTop: 10, padding: '5px 10px' }}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </BaseNode>
  );
};

export { SwitchNode };