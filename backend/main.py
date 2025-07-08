from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import networkx as nx
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS (so frontend on different port can call the backend)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define models for nodes and edges

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    G = nx.DiGraph()

    # Build graph from nodes and edges

    for node in pipeline.nodes:
        G.add_node(node.id)
    for edge in pipeline.edges:
        G.add_edge(edge.source, edge.target)

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": nx.is_directed_acyclic_graph(G)
    }

@app.get("/")
def root():
    return {"Ping": "Pong"}
