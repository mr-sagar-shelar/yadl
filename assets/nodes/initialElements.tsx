import React from "react";
import { Edge, MarkerType, Position, Node } from "@xyflow/react";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

export const initialNodes: Node[] = [
  // {
  //   id: "A",
  //   type: "input",
  //   position: { x: 0, y: 150 },
  //   data: { label: "A" },
  //   ...nodeDefaults,
  // },
  // {
  //   id: "B",
  //   position: { x: 250, y: 0 },
  //   data: { label: "B" },
  //   ...nodeDefaults,
  // },
  // {
  //   id: "C",
  //   position: { x: 250, y: 150 },
  //   data: { label: "C" },
  //   ...nodeDefaults,
  // },
  // {
  //   id: "D",
  //   position: { x: 250, y: 300 },
  //   data: { label: "D" },
  //   ...nodeDefaults,
  // },
  // {
  //   id: "3",
  //   position: { x: -400, y: 200 },
  //   data: { label: "2" },
  //   type: "appleWatchSeries8",
  // },
  // {
  //   id: "4",
  //   position: { x: -320, y: 200 },
  //   data: { label: "2" },
  //   type: "appleWatchUltra",
  // },
  // {
  //   id: "5",
  //   position: { x: -250, y: 0 },
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
  // {
  //   id: "T1",
  //   type: "tailwindNode",
  //   data: { name: "Jane Doe", job: "CEO", emoji: "😎" },
  //   position: { x: 0, y: 50 },
  // },
  // {
  //   id: "T2",
  //   type: "tailwindNode",
  //   data: { name: "Tyler Weary", job: "Designer", emoji: "🤓" },

  //   position: { x: -200, y: 200 },
  // },
  // {
  //   id: "T3",
  //   type: "tailwindNode",
  //   data: { name: "Kristi Price", job: "Developer", emoji: "🤩" },
  //   position: { x: 200, y: 200 },
  // },
  {
    id: "annotation-1",
    type: "annotation",
    draggable: false,
    selectable: false,
    data: {
      level: 1,
      label:
        "Built-in node and edge types. Draggable, deletable and connectable!",
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: "translate(-30px,10px) rotate(-80deg)",
      },
    },
    position: { x: -80, y: -30 },
  },
  {
    id: "1-1",
    type: "input",
    data: {
      label: "Input Node",
    },
    position: { x: 150, y: 0 },
  },
  {
    id: "1-2",
    type: "default",
    data: {
      label: "Default Node",
    },
    position: { x: 0, y: 100 },
  },
  {
    id: "1-3",
    type: "output",
    data: {
      label: "Output Node",
    },
    position: { x: 300, y: 100 },
  },
  {
    id: "annotation-2",
    type: "annotation",
    draggable: false,
    selectable: false,
    data: {
      level: 2,
      label: "Sub flows, toolbars and resizable nodes!",
      arrowStyle: {
        left: 0,
        bottom: 0,
        transform: "translate(5px, 25px) scale(1, -1) rotate(100deg)",
      },
    },
    position: { x: 220, y: 200 },
  },
  {
    id: "2-1",
    type: "group",
    position: {
      x: -170,
      y: 250,
    },
    style: {
      width: 380,
      height: 180,
      backgroundColor: "rgba(208, 192, 247, 0.2)",
    },
  },
  {
    id: "2-2",
    data: {
      label: "Node with Toolbar",
    },
    type: "tools",
    position: { x: 50, y: 50 },
    style: {
      width: 80,
      height: 80,
      background: "rgb(208, 192, 247)",
    },
    parentId: "2-1",
    extent: "parent",
  },
  {
    id: "2-3",
    type: "resizer",
    data: {
      label: "resizable node",
    },
    position: { x: 250, y: 50 },
    style: {
      width: 80,
      height: 80,
      background: "rgb(208, 192, 247)",
      color: "white",
    },
    parentId: "2-1",
    extent: "parent",
  },
  {
    id: "annotation-3",
    type: "annotation",
    draggable: false,
    selectable: false,
    data: {
      level: 3,
      label: <>Nodes and edges can be anything and are fully customizable!</>,
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: "translate(-35px, 20px) rotate(-80deg)",
      },
    },
    position: { x: -40, y: 570 },
  },
  {
    id: "3-2",
    type: "textinput",
    position: { x: 150, y: 650 },
    data: {},
  },
  {
    id: "3-1",
    type: "circle",
    position: { x: 350, y: 500 },
    data: {},
  },
];

export const initialEdges: Edge[] = [
  // {
  //   id: "A-B",
  //   source: "A",
  //   target: "B",
  // },
  // {
  //   id: "A-C",
  //   source: "A",
  //   target: "C",
  // },
  // {
  //   id: "A-D",
  //   source: "A",
  //   target: "D",
  // },
  {
    id: "e1-2",
    source: "1-1",
    target: "1-2",
    label: "edge",
    type: "smoothstep",
  },
  {
    id: "e1-3",
    source: "1-1",
    target: "1-3",
    animated: true,
    label: "animated edge",
  },
  {
    id: "e2-2",
    source: "1-2",
    target: "2-2",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e2-3",
    source: "2-2",
    target: "2-3",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-3",
    source: "2-3",
    sourceHandle: "a",
    target: "3-2",
    type: "button",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "e3-4",
    source: "2-3",
    sourceHandle: "b",
    target: "3-1",
    type: "button",
    style: { strokeWidth: 2 },
  },
];
