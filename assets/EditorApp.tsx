import * as React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";
import {
  deserializeAST,
  DocumentChangeResponse,
} from "langium-ast-helper";
import { getYADLNodes, YadlModelAstNode } from "utils/YADLDeserializer";

export default function EditorApp() {
  // const monacoEditor: React.RefObject<MonacoEditorReactComp>;
  return (
    <div>
      <h3>Editor App</h3>
      <Editor
        onChange={(resp: DocumentChangeResponse) => {
          console.error(JSON.parse(resp.content))
          const ast = deserializeAST(resp.content) as YadlModelAstNode;
          const deserializedContent = getYADLNodes(ast);
          console.log(` $$$$ AST = ${JSON.stringify(deserializedContent, null, 2)}`);
          // console.log(` $$$$ AST = ${JSON.stringify(ast.enums)}`);
          // console.log(` $$$$ AST = ${JSON.stringify(getYADLNodes(resp), null, 2)}`);
        }}
      />
    </div>
  );
}

ReactDOM.render(
  React.createElement(EditorApp, null),
  document.getElementById("editor"),
);
