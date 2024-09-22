import * as React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";
import { deserializeAST, DocumentChangeResponse } from "langium-ast-helper";
import { getYADLNodes, YadlModelAstNode } from "utils/YADLDeserializer";
import * as ICONS from "./svgIcons/index";
import { IconNames } from "utils/IconNames";

export default function EditorApp() {
  // const monacoEditor: React.RefObject<MonacoEditorReactComp>;
  const Icon = ICONS[IconNames["godot-light"]];
  let running = false;
  let timeout: number | null = null;
  return (
    <div>
      <h3>Editor App</h3>
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
      <Icon width={100} height={100} />
    </div>
  );
}

ReactDOM.render(
  React.createElement(EditorApp, null),
  document.getElementById("editor"),
);
