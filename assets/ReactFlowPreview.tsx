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
  applyEdgeChanges,
  NodeSelectionChange,
} from "@xyflow/react";
import { edgeTypes, nodeTypes } from "./nodes/nodeTypes";

interface ReactFlowPreviewProps {
  initialNodes: Node[];
  initialEdges: Edge[];
  onNodeChange: (node: Node) => void;
  onNodeSelect: (node: Node) => void;
}

export default function ReactFlowPreview(props: ReactFlowPreviewProps) {
  const {
    initialNodes = [],
    initialEdges = [],
    onNodeSelect,
    onNodeChange,
  } = props;

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (changes) => setEdges((eds) => addEdge(changes, eds)),
    [setEdges],
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
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
          const selectedChangedNode = (changes as NodeSelectionChange[]).filter(
            (change) => change.selected,
          );
          if (selectedChangedNode.length > 0) {
            const selectNode = nds.filter(
              (node) => node.id === selectedChangedNode[0].id,
            );
            if (selectNode.length > 0) {
              onNodeSelect(selectNode[0]);
            }
          }
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
        defaultEdgeOptions={{ animated: true }}
      >
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
