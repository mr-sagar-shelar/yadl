import * as React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";
import { deserializeAST, DocumentChangeResponse } from "langium-ast-helper";
import { getYADLNodes, YadlModelAstNode } from "utils/YADLDeserializer";
import ReactFlowPreview from "./ReactFlowPreview";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Box1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "Box2" } },
  {
    id: "3",
    position: { x: 200, y: 100 },
    data: { icon: "glue" },
    type: "icon",
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function EditorApp() {
  let running = false;
  let timeout: number | null = null;

  return (
    <div>
      <Editor
        onChange={(resp: DocumentChangeResponse) => {
          if (running) {
            return;
          }

          // clear previous timeouts
          if (timeout) {
            clearTimeout(timeout);
          }

          timeout = window.setTimeout(async () => {
            running = true;
            const ast = deserializeAST(resp.content) as YadlModelAstNode;
            const deserializedContent = getYADLNodes(ast);
            console.log(deserializedContent);
            running = false;
          }, 1000);

          // console.error(JSON.parse(resp.content));
          // const ast = deserializeAST(resp.content) as YadlModelAstNode;
          // const deserializedContent = getYADLNodes(ast);
          // console.log(deserializedContent);
          // console.log(` $$$$ AST = ${JSON.stringify(deserializedContent, null, 2)}`);
          // console.log(` $$$$ AST = ${JSON.stringify(ast.enums)}`);
          // console.log(` $$$$ AST = ${JSON.stringify(getYADLNodes(resp), null, 2)}`);
        }}
      />
      
      <ReactFlowPreview initialEdges={initialEdges} initialNodes={initialNodes} />
    </div>
  );
}

ReactDOM.render(
  React.createElement(EditorApp, null),
  document.getElementById("editor"),
);
