import * as React from "react";
import ReactDOM from "react-dom";
import {
  addMonacoStyles,
  createUserConfig,
  MonacoEditorReactComp,
  UserConfig,
} from "langium-website-core/bundle";
import { buildWorkerDefinition } from "monaco-editor-workers";
import { deserializeAST, DocumentChangeResponse } from "langium-ast-helper";
import syntaxHighlighting from "./scripts/yadl.monarch";
import { getNodesAndEdges, YadlModelAstNode } from "utils/YADLDeserializer";
import ReactFlowPreview from "./ReactFlowPreview";
import { Node } from "@xyflow/react";
import { get } from "lodash";
addMonacoStyles("monaco-styles-helper");

buildWorkerDefinition(
  "/libs/monaco-editor-workers/workers",
  new URL("", window.location.href).href,
  false,
);

export default function YadlEditor() {
  const monacoEditor = React.useRef();
  const [userConfig, setUserConfig] = React.useState<UserConfig>();
  const [yadlNodes, setYadlNodes] = React.useState<Node[]>([]);
  let running = false;
  let timeout: number | null = null;

  const onMonacoLoad = () => {
    // verify we can get a ref to the editor
    if (!monacoEditor.current) {
      throw new Error("Unable to get a reference to the Monaco Editor");
    }

    // verify we can get a ref to the language client
    const lc = monacoEditor.current?.getEditorWrapper()?.getLanguageClient();
    if (!lc) {
      throw new Error("Could not get handle to Language Client on mount");
    }
    monacoEditor.current.getEditorWrapper()?.getEditor()?.focus();
    // register to receive DocumentChange notifications
    lc.onNotification("browser/DocumentChange", onChange);
  };

  React.useEffect(() => {
    let code = "";
    const editorCodeElement = document.getElementById("editor-code");
    if (editorCodeElement) {
      code = editorCodeElement.dataset.code;
    }
    const userConfig = createUserConfig(
      {
        languageId: "yadl",
        code: code,
        worker: "/yadl-server-worker.js",
        monarchGrammar: syntaxHighlighting,
      },
      "vs-dark",
    );

    setUserConfig(userConfig);
  }, []);

  const onChange = (resp: DocumentChangeResponse) => {
    if (running) {
      return;
    }
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = window.setTimeout(async () => {
      running = true;
      const ast = deserializeAST(resp.content) as YadlModelAstNode;
      const nodesAndEdges = getNodesAndEdges(ast);
      setYadlNodes(nodesAndEdges);
      running = false;
    }, 1000);
  };

  const onNodeChange = (node: Node) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }
    console.log(` $$$$ onNodeChange ${JSON.stringify(node, null, 2)}`);

    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();
    const xValue = node.position.x;
    const yValue = node.position.y;

    const startXLineNumber = get(node, "data.xRange.start.line", 0) + 1;
    const startXColumn = get(node, "data.xRange.start.character", 0) + 1;
    const endXLineNumber = get(node, "data.xRange.end.line", 0) + 1;
    const endXColumn = get(node, "data.xRange.end.character", 0) + 1;

    // console.error(
    //   `$$$$ Row Details ${startLineNumber}, ${startColumn}, ${endLineNumber}, ${endColumn}`,
    // );
    console.error(`$$$$ xValue ${xValue}, ${yValue}`);
    const id = { major: 1, minor: 1 };
    const xOperation = {
      identifier: id,
      range: {
        startLineNumber: startXLineNumber,
        startColumn: startXColumn,
        endLineNumber: endXLineNumber,
        endColumn: endXColumn,
      },
      text: `${xValue}`,
      forceMoveMarkers: true,
    };

    const startYLineNumber = get(node, "data.yRange.start.line", 0) + 1;
    const startYColumn = get(node, "data.yRange.start.character", 0) + 1;
    const endYLineNumber = get(node, "data.yRange.end.line", 0) + 1;
    const endYColumn = get(node, "data.yRange.end.character", 0) + 1;
    const yOperation = {
      identifier: id,
      range: {
        startLineNumber: startYLineNumber,
        startColumn: startYColumn,
        endLineNumber: endYLineNumber,
        endColumn: endYColumn,
      },
      text: `${yValue}`,
      forceMoveMarkers: true,
    };
    monacoInstance.executeEdits("my-source", [xOperation, yOperation]);
  };

  const onNodeSelect = (node: Node) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }

    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();
    monacoInstance.setPosition({ column: 5, lineNumber: 6 });
    monacoInstance.revealLineInCenter(6);
  };

  const renderEditor = () => {
    const style = {
      height: "500px",
      width: "100%",
    };
    return (
      <>
        {userConfig && (
          <MonacoEditorReactComp
            ref={monacoEditor}
            onLoad={onMonacoLoad}
            userConfig={userConfig}
            style={style}
          />
        )}
      </>
    );
  };

  return (
    <div>
      {renderEditor()}
      <ReactFlowPreview
        initialEdges={[]}
        initialNodes={yadlNodes}
        onNodeChange={onNodeChange}
        onNodeSelect={onNodeSelect}
      />
    </div>
  );
}

ReactDOM.render(
  React.createElement(YadlEditor, null),
  document.getElementById("editor"),
);
