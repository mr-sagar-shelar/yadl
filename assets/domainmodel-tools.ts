import { AstNode } from "langium-ast-helper";
import { TreeNode } from "./d3tree";

export function getMainTreeNode(ast: AstNode): TreeNode {
  const astNode = getDomainModelAst(ast as DomainModelAstNode);
  const getEnumTypeTreeNode = (d: Enums): TreeNode => {
    return {
      ...d,
      children: [],
    };
  };

  const enums = astNode.enums.flatMap((e) => getEnumTypeTreeNode(e));
  const children: TreeNode[] = [];

  if (enums.length > 0) {
    children.push({ name: "Enum", $type: "Enum", children: enums });
  }

  return {
    name: astNode.$type,
    $type: astNode.$type,
    children: children,
  };
}

/**
 * Returns a DomainModelAstNode from a given ast.
 */
export function getDomainModelAst(ast: DomainModelAstNode): DomainModelAstNode {
  return {
    name: ast.name,
    $type: "Domainmodel",
    enums: (ast.enums as DomainModelElement[]).filter(
      (e) => e.$type === "Enum",
    ) as Enums[],
  };
}

// a more accessible representation of the DomainModel Ast
export interface DomainModelAstNode extends AstNode, DomainModelElement {
  $type: "Domainmodel";
  enums: Enums[];
}

export interface Enums extends DomainModelElement {
  $type: "Enum";
}

export interface DomainModelElement {
  $type: string;
  name: string;
}

// create a union type of all possible DomainModelElement types
export type DomainModelElementType = Enums | DomainModelAstNode;

// create a union type of all possible DomainModelElement types names (string)
export type DomainModelElementTypeNames = DomainModelElementType["$type"];
export const syntaxHighlighting = {
  keywords: ["datatype", "entity", "extends", "many", "package"],
  operators: [".", ":"],
  symbols: /\.|:|\{|\}/,

  tokenizer: {
    initial: [
      {
        regex: /[_a-zA-Z][\w_]*/,
        action: {
          cases: {
            "@keywords": { token: "keyword" },
            "@default": { token: "ID" },
          },
        },
      },
      { include: "@whitespace" },
      {
        regex: /@symbols/,
        action: {
          cases: {
            "@operators": { token: "operator" },
            "@default": { token: "" },
          },
        },
      },
    ],
    whitespace: [
      { regex: /\s+/, action: { token: "white" } },
      { regex: /\/\*/, action: { token: "comment", next: "@comment" } },
      { regex: /\/\/[^\n\r]*/, action: { token: "comment" } },
    ],
    comment: [
      { regex: /[^\/\*]+/, action: { token: "comment" } },
      { regex: /\*\//, action: { token: "comment", next: "@pop" } },
      { regex: /[\/\*]/, action: { token: "comment" } },
    ],
  },
};
