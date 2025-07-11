// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='number' label='Number'/>
                <DraggableNode type='color' label='Colour' />
                <DraggableNode type='date' label='Date' />
                <DraggableNode type='switch' label='Switch' />
                <DraggableNode type='image' label='Image' />
            </div>
        </div>
    );
};
