import { AstNode } from "langium-ast-helper";

export function getYADLNodes(ast: AstNode): YadlModelAstNode {
  //   console.error(JSON.stringify(ast, null, 2));
  const astNode = getYadlModelAst(ast as YadlModelAstNode);
  //   console.error(JSON.stringify(astNode.enums.length, null, 2));
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
    if (textRange.assignments.x.length > 0) {
      xRange = textRange.assignments.x[0].range;
    }
    if (textRange.assignments.y.length > 0) {
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
  const enums = astNode.enums.flatMap((d: Enums) => {
    return {
      name: d.name,
      $type: "Enum",
    };
  });
  const icons = astNode.icons.flatMap((i: Icon) => {
    return {
      icon: i.icon,
      $type: "Icon",
      position: getPosition(i.position),
    };
  });
  const boxes = astNode.boxes.flatMap((b: Box) => {
    return {
      icon: b.icon,
      label: b.label,
      $type: "Box",
      position: getPosition(b.position),
    };
  });

  const devices = astNode.devices.flatMap((d: Device) => {
    return {
      type: d.type,
      $type: "Device",
      position: getPosition(d.position),
    };
  });

  const getArrowStyle = (a: ArrowStyle) => {
    return {
      $type: "ArrowStyle",
      left: a.left,
      right: a.right,
      top: a.top,
      bottom: a.bottom,
      transform: a.transform,
    };
  };
  const annotations = astNode.annotations.flatMap((a: Annotation) => {
    let arrowStyle;
    if (a.arrowStyle) {
      arrowStyle = getArrowStyle(a.arrowStyle);
    }
    const position = getPosition(a.position);
    return {
      label: a.label,
      $type: "annotation",
      position: getPosition(a.position),
      arrowStyle: arrowStyle,
    };
  });

  return {
    name: astNode.$type,
    $type: astNode.$type,
    enums: enums,
    icons: icons,
    boxes: boxes,
    devices: devices,
    annotations: annotations,
  };
}

/**
 * Returns a YadlModelAstNode from a given ast.
 */
export function getYadlModelAst(ast: YadlModelAstNode): YadlModelAstNode {
  return {
    name: ast.name,
    $type: "YadlModel",
    enums: (ast.enums as YadlModelElement[])?.filter(
      (e) => e.$type === "Enum",
    ) as Enums[],
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

// a more accessible representation of the DomainModel Ast
export interface YadlModelAstNode extends AstNode, YadlModelElement {
  $type: "YadlModel";
  enums: Enums[];
  icons: Icon[];
  boxes: Box[];
  devices: Device[];
  annotations: Annotation[];
}

export interface Enums extends YadlModelElement {
  $type: string;
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
  icon: string;
  position?: Position;
}

export interface Device {
  $type: string;
  type: string;
  position?: Position;
}

export interface Annotation {
  $type: string;
  $textRegion?: TextRegion;
  label: string;
  position?: Position;
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
