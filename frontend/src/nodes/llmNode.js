// llmNode.js
// Modified to use BaseNode abstraction for consistent styling

import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode id={id} label="LLM Node" type="llm" hideDefaultTarget>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: '33%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: '66%' }}
      />
      <div>
        <span>This is an LLM node.</span>
      </div>
    </BaseNode>
  );
};