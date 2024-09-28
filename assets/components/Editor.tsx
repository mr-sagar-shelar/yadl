import * as React from "react";
import {
  addMonacoStyles,
  createUserConfig,
  MonacoEditorReactComp,
  UserConfig,
} from "langium-website-core/bundle";
import { buildWorkerDefinition } from "monaco-editor-workers";
import { DocumentChangeResponse } from "langium-ast-helper";
import syntaxHighlighting from "../scripts/yadl.monarch";
addMonacoStyles("monaco-styles-helper");

buildWorkerDefinition(
  "/libs/monaco-editor-workers/workers",
  new URL("", window.location.href).href,
  false,
);

interface EditorProps {
  onChange: (resp: DocumentChangeResponse) => void;
}

export default function Editor(props: EditorProps) {
  const monacoEditor = React.useRef();
  const [userConfig, setUserConfig] = React.useState<UserConfig>();
  const { onChange } = props;

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

  const onAddClick = () => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }
    const monacoInstance = monacoEditor?.current?.getEditorWrapper()?.getEditor();
    const selection = monacoInstance.getSelection();
    const id = { major: 1, minor: 1 };
    const op = {
        identifier: id,
        range: {
            startLineNumber: selection?.selectionStartLineNumber || 1,
            startColumn: selection?.selectionStartColumn || 1,
            endLineNumber: selection?.endLineNumber || 1,
            endColumn: selection?.endColumn || 1,
        },
        text: "800",
        forceMoveMarkers: true,
    };
    monacoInstance.executeEdits('my-source', [op]);
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
      <button className="btn btn-primary" onClick={onAddClick}>
        Update Selected Location
      </button>
    </div>
  );
}
