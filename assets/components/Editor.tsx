import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  addMonacoStyles,
  createUserConfig,
  MonacoEditorReactComp,
  UserConfig,
} from "langium-website-core/bundle";
import { buildWorkerDefinition } from "monaco-editor-workers";
import {
  deserializeAST,
  Diagnostic,
  DocumentChangeResponse,
} from "langium-ast-helper";
import syntaxHighlighting from "../scripts/yadl.monarch";
addMonacoStyles("monaco-styles-helper");

buildWorkerDefinition(
  "/libs/monaco-editor-workers/workers",
  new URL("", window.location.href).href,
  false,
);

export default function Editor() {
    // const monacoEditor: React.RefObject<MonacoEditorReactComp>;
  return (
    <div><h1>Editor Comp</h1></div>
  )
}