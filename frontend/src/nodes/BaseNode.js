// BaseNode.js
import { Handle, Position } from 'reactflow';
import './BaseNode.css';

const BaseNode = ({ type, label, id, children, hideDefaultTarget }) => {
  return (
    <div className="custom-node">
      <h4>{label}</h4>

      {children}

      {/* Left side input (target) – hide for input/output nodes */}
      {!hideDefaultTarget && type !== 'input' && (
        <Handle
          type="target"
          position={Position.Left}
        />
      )}

      {/* Right side output (source) – hide for output node */}
      {type !== 'output' && (
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-value`}
        />
      )}
    </div>
  );
};

export default BaseNode;