import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ColorMode,
  OnConnect,
} from "@xyflow/react";
import { edgeTypes, nodeTypes } from "./nodes/nodeTypes";
import {initialNodes, initialEdges} from "./nodes/initialElements";
import DownloadButton from './components/DownloadButton';

interface PreviewProps {
  darkMode: boolean;
}

export default function Preview({ darkMode }: PreviewProps) {
  const [colorMode] = useState<ColorMode>(darkMode ? "dark" : "light");
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        colorMode={colorMode}
        fitView
        nodeTypes={nodeTypes}
        attributionPosition="top-right"
        edgeTypes={edgeTypes}
        className="overview"
      >
        <Background />
        <Controls />
        <DownloadButton />
      </ReactFlow>
    </div>
  );
}
