import * as React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";

export default function EditorApp() {
  // const monacoEditor: React.RefObject<MonacoEditorReactComp>;
  return (
    <div>
      <h1>Editor App</h1>
      <Editor />
    </div>
  );
}

ReactDOM.render(
  React.createElement(EditorApp, null),
  document.getElementById("editor"),
);
