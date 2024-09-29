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

interface ReactFlowPreviewProps {
  initialNodes: Node[];
  initialEdges: Edge[];
  onNodeChange: (node: Node) => void;
  onNodeSelect: (node: Node) => void;
}

export default function ReactFlowPreview(props: ReactFlowPreviewProps) {
  const { initialNodes = [], initialEdges = [], onNodeSelect, onNodeChange } = props;

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
          // console.log(` $$$$ Select Node: ${updatedNode.type}`);
          onNodeSelect(updatedNode);
        }
        if (updatedNode.type == "position" && !updatedNode.dragging) {
          const currentNode = nds.filter((node) => node.id === updatedNode.id);
          if (currentNode.length > 0) {
            onNodeChange(currentNode[0]);
          }
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
