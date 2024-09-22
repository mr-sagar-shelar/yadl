import React, { useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge
} from "@xyflow/react";
import { edgeTypes, nodeTypes } from "./nodes/nodeTypes";
// const initialNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
//   {
//     id: "4",
//     position: { x: 200, y: 100 },
//     data: { icon: "angular-dark" },
//     type: "icon",
//   },
// ];
// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

interface ReactFlowPreviewProps {
  initialNodes: Node[];
  initialEdges: Edge[]
}

export default function ReactFlowPreview(props: ReactFlowPreviewProps) {
  const { initialNodes = [], initialEdges = [] } = props;

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: "70vw", height: "400px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
