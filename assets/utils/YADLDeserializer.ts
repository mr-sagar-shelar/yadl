import { AstNode } from "langium-ast-helper";

export function getYADLNodes(ast: AstNode): YadlModelAstNode {
  //   console.error(JSON.stringify(ast, null, 2));
  const astNode = getYadlModelAst(ast as YadlModelAstNode);
  //   console.error(JSON.stringify(astNode.enums.length, null, 2));

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
      position: {
        $type: "Position",
        x: i.position?.x || 0,
        y: i.position?.y || 0,
      },
    };
  });
  const boxes = astNode.boxes.flatMap((b: Box) => {
    return {
      icon: b.icon,
      label: b.label,
      $type: "Box",
      position: {
        $type: "Position",
        x: b.position?.x || 0,
        y: b.position?.y || 0,
      },
    };
  });

  return {
    name: astNode.$type,
    $type: astNode.$type,
    enums: enums,
    icons: icons,
    boxes: boxes
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
  };
}

// a more accessible representation of the DomainModel Ast
export interface YadlModelAstNode extends AstNode, YadlModelElement {
  $type: "YadlModel";
  enums: Enums[];
  icons: Icon[];
  boxes: Box[];
}

export interface Enums extends YadlModelElement {
  $type: string;
}

export interface Position {
  $type: string;
  x: number;
  y: number;
}

export interface Icon {
  $type: string;
  icon: string;
  position?: Position;
}

export interface Box {
    $type: string;
    icon: string;
    label: string;
    position?: Position;
  }

export interface YadlModelElement {
  $type: string;
  name: string;
}