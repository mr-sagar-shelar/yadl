import * as React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";

export default function EditorApp() {
  // const monacoEditor: React.RefObject<MonacoEditorReactComp>;
  return (
    <div>
      <h1>Editor App</h1>
      <Editor
        onChange={(resp: DocumentChangeResponse) => {
          console.log(` 1111 = ${JSON.stringify(resp, null, 2)}`);
        }}
      />
    </div>
  );
}

ReactDOM.render(
  React.createElement(EditorApp, null),
  document.getElementById("editor"),
);
