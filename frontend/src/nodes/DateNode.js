import { useState } from 'react';
import BaseNode from './BaseNode';

const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data.date || '');

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <BaseNode id={id} label="Date Node" type="date">
      <input
        type="date"
        value={date}
        onChange={handleChange}
      />
    </BaseNode>
  );
};

export { DateNode };