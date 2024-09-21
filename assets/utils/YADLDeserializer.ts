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
    };
  });

  return {
    name: astNode.$type,
    $type: astNode.$type,
    enums: enums,
    icons: icons,
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
  };
}

// a more accessible representation of the DomainModel Ast
export interface YadlModelAstNode extends AstNode, YadlModelElement {
  $type: "YadlModel";
  enums: Enums[];
  icons: Icon[];
}

export interface Enums extends YadlModelElement {
  $type: string;
}

export interface Icon {
  $type: string;
  icon: string;
}

export interface YadlModelElement {
  $type: string;
  name: string;
}
