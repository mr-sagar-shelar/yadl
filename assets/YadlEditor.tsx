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

    // clear previous timeouts
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = window.setTimeout(async () => {
      running = true;
      const ast = deserializeAST(resp.content) as YadlModelAstNode;
      const nodesAndEdges = getNodesAndEdges(ast);
      setYadlNodes(nodesAndEdges);
      // console.log(deserializedContent);
      running = false;
      // }, 0);
    }, 1000);
  };

  const onNodeChange = (node: Node) => {
    console.log(` $$$$ 22222 ${JSON.stringify(node, null, 2)}`);
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
      />
    </div>
  );
}

ReactDOM.render(
  React.createElement(YadlEditor, null),
  document.getElementById("editor"),
);
