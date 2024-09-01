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
  Panel,
} from "@xyflow/react";

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

export default function App() {
  const [colorMode, setColorMode] = useState<ColorMode>("dark");
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    setColorMode(evt.target.value as ColorMode);
  };

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
      >
        <MiniMap />
        <Background />
        <Controls />
        <Panel position="top-right">
          <select onChange={onChange} data-testid="colormode-select">
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="system">system</option>
          </select>
        </Panel>
      </ReactFlow>
    </div>
  );
}
