import BaseNode from './BaseNode';

export const ImageNode = ({ id, data }) => {
  return (
    <div>
      <BaseNode id={id} label="Image Node" type="image">

        <div>
          <label>
            Image URL:
            <input
              type="text"
              value={data?.url || ''}
              onChange={(e) => {
                console.log(`Image URL updated for ${id}:`, e.target.value);
              }}
              placeholder="https://..."
            />
          </label>
        </div>
      </BaseNode>
    </div>
  );
};