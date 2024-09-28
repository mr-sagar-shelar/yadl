import React, { useCallback } from "react";
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  OnNodesChange,
  applyNodeChanges,
  NodeChange,
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
  initialEdges: Edge[];
  onNodeChange: (node: Node) => void;
}

export default function ReactFlowPreview(props: ReactFlowPreviewProps) {
  const { initialNodes = [], initialEdges = [], onNodeChange } = props;

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges]);

  const onNodesChange: OnNodesChange = useCallback(
    (changes: NodeChange[]) => {
      const updatedNode = changes[0] as Node;
      setNodes((nds) => {
        if (updatedNode.type == "select") {
          console.log(` $$$$ Select Node: ${updatedNode.type}`);
        }
        if (updatedNode.type == "position" && !updatedNode.dragging) {
          const currentNode = nds.filter((node) => node.id === updatedNode.id);
          console.log(
            ` $$$$ Update Position: ${JSON.stringify(currentNode, null, 2)}`,
          );
        }
        return applyNodeChanges(changes, nds);
      });
    },
    [setNodes],
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
        proOptions={{ hideAttribution: true }}
      >
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
