// submit.js
import { useStore } from './store';

export const SubmitButton = () => {

  const nodes = useStore(state => state.nodes);
  const edges = useStore(state => state.edges);

  const handleSubmit = async () => {
    try {
      const payload = { nodes, edges };
      const response = await fetch('https://vectorshift-ass.onrender.com/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      alert(`Pipeline Info:
        - Nodes: ${data.num_nodes}
        - Edges: ${data.num_edges}
        - Is DAG: ${data.is_dag ? 'Yes' : 'No'}`);
    } catch (error) {
      console.error('Submit failed:', error);
      alert('Failed to submit pipeline');
    }
  };

  
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}
