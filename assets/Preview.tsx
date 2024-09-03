import React, { useCallback, useState, ChangeEventHandler } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
  Node,
  Edge,
  ColorMode,
  OnConnect,
} from "@xyflow/react";
import { nodeTypes} from "./nodes/nodeTypes";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes: Node[] = [
  {
    id: "A",
    type: "input",
    position: { x: 0, y: 150 },
    data: { label: "A" },
    ...nodeDefaults,
  },
  {
    id: "B",
    position: { x: 250, y: 0 },
    data: { label: "B" },
    ...nodeDefaults,
  },
  {
    id: "C",
    position: { x: 250, y: 150 },
    data: { label: "C" },
    ...nodeDefaults,
  },
  {
    id: "D",
    position: { x: 250, y: 300 },
    data: { label: "D" },
    ...nodeDefaults,
  },
  // {
  //   id: "3",
  //   position: { x: 0, y: 100 },
  //   data: { label: "2" },
  //   type: "appleWatchSeries8",
  // },
  // {
  //   id: "4",
  //   position: { x: 0, y: 200 },
  //   data: { label: "2" },
  //   type: "appleWatchUltra",
  // },
  // {
  //   id: "5",
  //   position: { x: 0, y: 300 },
  //   data: { label: "2" },
  //   type: "googlePixel6Pro",
  // },
  // {
  //   id: "6",
  //   position: { x: 0, y: 400 },
  //   data: { label: "2" },
  //   type: "iMac",
  // },
  // {
  //   id: "7",
  //   position: { x: 0, y: 500 },
  //   data: { label: "2" },
  //   type: "iPadPro",
  // },
  // {
  //   id: "8",
  //   position: { x: 0, y: 600 },
  //   data: { label: "2" },
  //   type: "iPhone14",
  // },
  // {
  //   id: "9",
  //   position: { x: 0, y: 700 },
  //   data: { label: "2" },
  //   type: "iPhone14Pro",
  // },
  // {
  //   id: "10",
  //   position: { x: 0, y: 800 },
  //   data: { label: "2" },
  //   type: "macbookPro",
  // },
  // {
  //   id: "11",
  //   position: { x: 0, y: 900 },
  //   data: { label: "2" },
  //   type: "proDisplayXDR",
  // },
  // {
  //   id: "12",
  //   position: { x: 0, y: 1000 },
  //   data: { label: "2" },
  //   type: "surfaceBook",
  // },
  // {
  //   id: "13",
  //   position: { x: 0, y: 1100 },
  //   data: { label: "2" },
  //   type: "surfacePro",
  // },
  // {
  //   id: "14",
  //   position: { x: 0, y: 1200 },
  //   data: { label: "2" },
  //   type: "surfaceStudio",
  // },
];

const initialEdges: Edge[] = [
  {
    id: "A-B",
    source: "A",
    target: "B",
  },
  {
    id: "A-C",
    source: "A",
    target: "C",
  },
  {
    id: "A-D",
    source: "A",
    target: "D",
  },
];

interface PreviewProps {
  darkMode: boolean;
}

export default function Preview({darkMode}: PreviewProps) {
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
      >
        <MiniMap />
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
