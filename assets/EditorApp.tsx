import * as React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";
import {
  deserializeAST,
  DocumentChangeResponse,
} from "langium-ast-helper";
import { getMainTreeNode } from "utils/YADLDeserializer";

export default function EditorApp() {
  // const monacoEditor: React.RefObject<MonacoEditorReactComp>;
  return (
    <div>
      <h3>Editor App</h3>
      <Editor
        onChange={(resp: DocumentChangeResponse) => {
          const ast = deserializeAST(resp.content) as DomainModelAstNode;
          // console.log(` $$$$ AST = ${ast}`);
          console.log(` $$$$ AST = ${JSON.stringify(getMainTreeNode(resp), null, 2)}`);
        }}
      />
    </div>
  );
}

ReactDOM.render(
  React.createElement(EditorApp, null),
  document.getElementById("editor"),
);
