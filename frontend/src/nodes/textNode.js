// textNode.js
// Modified to use BaseNode abstraction for consistent styling

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  // Automatically resize textarea and update text
  const handleTextChange = (e) => {
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
    setCurrText(e.target.value);
  };

  // Match variables like {{input}} using regex
  const variableHandles = [...new Set(
    [...currText.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g)].map(match => match[1])
  )];


  return (
    <BaseNode id={id} label="Text Node" type="text" hideDefaultTarget={true}>
      {variableHandles.map((varName, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
        />
      ))}

      <label>
        Text:
        <textarea
          value={currText}
          onChange={handleTextChange}
        />
      </label>
    </BaseNode>
  );
};