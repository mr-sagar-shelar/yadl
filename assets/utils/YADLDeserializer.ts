import { AstNode } from "langium-ast-helper";
import { Node, Edge as ReactFlowEdge } from "@xyflow/react";
import { get } from "lodash";
export function getYADLNodes(ast: AstNode): YadlModelAstNode {
  //   console.error(JSON.stringify(ast, null, 2));
  const astNode = getYadlModelAst(ast as YadlModelAstNode);
  const getPosition = (position: Position): Position => {
    if (!position) {
      return {
        $type: "Position",
        x: 0,
        y: 0,
      };
    }
    const textRange = position.$textRegion;
    let xRange: Range = undefined;
    let yRange: Range = undefined;
    if (textRange.assignments?.x?.length > 0) {
      xRange = textRange.assignments.x[0].range;
    }
    if (textRange.assignments?.y?.length > 0) {
      yRange = textRange.assignments.y[0].range;
    }
    return {
      $type: "Position",
      x: position.x,
      y: position.y,
      xRange: xRange,
      yRange: yRange,
    };
  };
  
  const edges = astNode.edges.flatMap((e: any): Edge => {
    return {
      $type: "Edge",
      destination: e.destination?.ref?.name,
      source: e.source?.ref?.name
    };
  });
  const icons = astNode.icons.flatMap((i: Icon): Icon => {
    return {
      icon: i.icon,
      name: i.name,
      $type: "Icon",
      position: getPosition(i.position),
      startLine: get(i, "$textRegion.range.start.line", 0) + 1,
    };
  });
  const boxes = astNode.boxes.flatMap((b: Box): Box => {
    return {
      icon: b.icon,
      label: b.label,
      $type: "Box",
      position: getPosition(b.position),
      startLine: get(b, "$textRegion.range.start.line", 0) + 1,
    };
  });

  const devices = astNode.devices.flatMap((d: Device): Device => {
    return {
      type: d.type,
      $type: "Device",
      position: getPosition(d.position),
      startLine: get(d, "$textRegion.range.start.line", 0) + 1,
    };
  });

  const getArrowStyle = (a: ArrowStyle): ArrowStyle => {
    return {
      $type: "ArrowStyle",
      left: a.left,
      right: a.right,
      top: a.top,
      bottom: a.bottom,
      transform: a.transform,
    };
  };
  const annotations = astNode.annotations.flatMap(
    (a: Annotation): Annotation => {
      let arrowStyle;
      if (a.arrowStyle) {
        arrowStyle = getArrowStyle(a.arrowStyle);
      }

      return {
        label: a.label,
        $type: "annotation",
        position: getPosition(a.position),
        arrowStyle: arrowStyle,
        startLine: get(a, "$textRegion.range.start.line", 0) + 1,
      };
    },
  );
  return {
    name: astNode.$type,
    $type: astNode.$type,
    edges: edges,
    icons: icons,
    boxes: boxes,
    devices: devices,
    annotations: annotations,
  };
}

export function getYadlModelAst(ast: YadlModelAstNode): YadlModelAstNode {
  return {
    name: ast.name,
    $type: "YadlModel",
    edges: (ast.edges as Edge[])?.filter((e) => e.$type === "Edge") as Edge[],
    icons: (ast.icons as Icon[])?.filter((e) => e.$type === "Icon") as Icon[],
    boxes: (ast.boxes as Box[])?.filter((e) => e.$type === "Box") as Box[],
    devices: (ast.devices as Device[])?.filter(
      (e) => e.$type === "Device",
    ) as Device[],
    annotations: (ast.annotations as Annotation[])?.filter(
      (e) => e.$type === "Annotation",
    ) as Annotation[],
  };
}

export function getNodesAndEdges(astNode: AstNode) {
  const ast = getYADLNodes(astNode);
  const edges = ast.edges?.map((edge, index) => {
    return {
      id: `edge-${index}`,
      type: "edge",
      source: edge.source,
      target: edge.destination
    } as ReactFlowEdge;
  });
  
  const iconNodes = ast.icons.map((icon, index) => {
    return {
      id: `${icon.name}`,
      position: { x: icon.position?.x || 0, y: icon.position?.y || 100 },
      data: {
        icon: icon.icon,
        xRange: icon.position?.xRange,
        yRange: icon.position?.yRange,
        startLine: icon.startLine,
      },
      type: "icon",
    } as Node;
  });
  const boxNodes = ast.boxes.map((box, index) => {
    return {
      id: `box-${index}`,
      position: { x: box.position?.x || 0, y: box.position?.y || 100 },
      data: {
        label: box.label,
        xRange: box.position?.xRange,
        yRange: box.position?.yRange,
        startLine: box.startLine,
      },
      type: "resizer",
    } as Node;
  });
  const annotations = ast.annotations.map((annotation, index) => {
    return {
      id: `annotation-${index}`,
      position: {
        x: annotation.position?.x || 0,
        y: annotation.position?.y || 0,
      },
      data: {
        label: annotation.label,
        arrowStyle: annotation.arrowStyle,
        xRange: annotation.position?.xRange,
        yRange: annotation.position?.yRange,
        startLine: annotation.startLine,
      },
      type: "annotation",
    } as Node;
  });
  const devices = ast.devices.map((device, index) => {
    return {
      id: `device-${index}`,
      position: { x: device.position?.x || 0, y: device.position?.y || 0 },
      data: {
        type: device.type,
        xRange: device.position?.xRange,
        yRange: device.position?.yRange,
        startLine: device.startLine,
      },
      type: "device",
    } as Node;
  });

  const totalNodes = iconNodes.concat(
    boxNodes.concat(annotations.concat(devices)),
  );

  return {
    nodes: totalNodes,
    edges: edges,
  };
}

export interface YadlModelAstNode extends AstNode, YadlModelElement {
  $type: "YadlModel";
  edges: Edge[];
  icons: Icon[];
  boxes: Box[];
  devices: Device[];
  annotations: Annotation[];
}

export interface Position {
  $type: string;
  $textRegion?: TextRegion;
  x: number;
  y: number;
  xRange?: Range;
  yRange?: Range;
}

export interface Icon {
  $type: string;
  name?: string;
  icon: string;
  position?: Position;
  startLine?: number;
}

export interface Edge {
  $type: string;
  source: string;
  destination: string;
}

export interface Device {
  $type: string;
  type: string;
  position?: Position;
  startLine?: number;
}

export interface Annotation {
  $type: string;
  $textRegion?: TextRegion;
  label: string;
  position?: Position;
  startLine?: number;
  arrowStyle?: ArrowStyle;
}

export interface ArrowStyle {
  $type: string;
  left?: Number;
  right?: Number;
  top?: Number;
  bottom?: Number;
  transform?: string;
}

export interface Box {
  $type: string;
  icon: string;
  label: string;
  position?: Position;
  startLine?: number;
}

export interface RangeRow {
  character: number;
  line: number;
}

export interface Range {
  start: RangeRow;
  end: RangeRow;
}

export interface AssignmentRow {
  end: number;
  length: number;
  offset: number;
  range: Range;
}

export interface Assignment {
  x: AssignmentRow[];
  y: AssignmentRow[];
}

export interface TextRegion {
  assignments: Assignment;
  end: number;
  length: number;
  offset: number;
}

export interface YadlModelElement {
  $type: string;
  name: string;
}
