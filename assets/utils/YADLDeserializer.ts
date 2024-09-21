import { AstNode } from "langium-ast-helper";
// import { TreeNode } from "../d3tree";

export function getMainTreeNode(ast: AstNode): YadlModelAstNode {
//   console.error(JSON.stringify(ast, null, 2));

  const astNode = getYadlModelAst(ast as YadlModelAstNode);

//   console.error(JSON.stringify(astNode.enums.length, null, 2));


    const getEnumTypeTreeNode = (d: Enums) : Enums => {
      return {
        name: d.name, 
        $type: "Enum",
        // children: [],
      };
    };

    const enums = astNode.enums.flatMap((e) => getEnumTypeTreeNode(e));

    // console.error(JSON.stringify(enums, null, 2));
    // console.error(` $$$$ Enums: ${JSON.stringify(enums, null, 2)}`);
  //   const children: TreeNode[] = [];

  //   if (enums.length > 0) {
  //     children.push({ name: "Enum", $type: "Enum", children: enums });
  //   }

    return {
      name: astNode.$type,
      $type: astNode.$type,
      enums: enums,
    //   children: [],
    };
//   return astNode;

}

/**
 * Returns a YadlModelAstNode from a given ast.
 */
export function getYadlModelAst(ast: YadlModelAstNode): YadlModelAstNode {
  return {
    name: ast.name,
    $type: "YadlModel",
    enums: (ast.enums as YadlModelElement[]).filter(
      (e) => e.$type === "Enum",
    ) as Enums[],
  };
}

// a more accessible representation of the DomainModel Ast
export interface YadlModelAstNode extends AstNode, YadlModelElement {
  $type: "YadlModel";
  enums: Enums[];
}

export interface Enums extends YadlModelElement {
  $type: "Enum";
}

export interface YadlModelElement {
  $type: string;
  name: string;
}

// // create a union type of all possible YadlModelElement types
// export type DomainModelElementType = Enums | YadlModelAstNode;

// // create a union type of all possible YadlModelElement types names (string)
// export type DomainModelElementTypeNames = DomainModelElementType["$type"];
