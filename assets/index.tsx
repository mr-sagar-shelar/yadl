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
import { DomainModelAstNode } from "./domainmodel-tools";
import syntaxHighlighting from "./scripts/yadl.monarch";
import Preview from "Preview";
import {
  CodeActionParams,
  RenameParams,
  CodeActionRequest,
  // CodeActionContext,
  CodeActionTriggerKind
} from "vscode-languageserver/browser.js";
// import { TextDocument } from "vscode";
import VideoRecorder from "./components/VideoRecorder";
// import { Position } from "@xyflow/react";
// import { URI } from 'vscode-uri'

addMonacoStyles("monaco-styles-helper");

buildWorkerDefinition(
  "/libs/monaco-editor-workers/workers",
  new URL("", window.location.href).href,
  false,
);

interface AppState {
  ast?: DomainModelAstNode;
  diagnostics?: Diagnostic[];
  userConfig: UserConfig;
  darkMode?: boolean;
}

class AppClass extends React.Component<{}, AppState> {
  monacoEditor: React.RefObject<MonacoEditorReactComp>;
  constructor(props: {} | Readonly<{}>) {
    super(props);

    // bind 'this' ref for callbacks to maintain parent context
    this.onMonacoLoad = this.onMonacoLoad.bind(this);
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.onLangiumRequest = this.onLangiumRequest.bind(this);
    this.onRenameRequest = this.onRenameRequest.bind(this);
    this.monacoEditor = React.createRef();

    let themeSwitch = document.querySelectorAll("[data-theme-switcher]");
    let darkMode = (localStorage.getItem("theme") || "") == "dark";
    const currentRef = this;
    document.addEventListener("DOMContentLoaded", () => {
      [].forEach.call(themeSwitch, function (ts) {
        ts.addEventListener("click", () => {
          currentRef.setState({
            userConfig: getUserConfig(`vs-${ts.checked ? "dark" : "light"}`),
          });
        });
      });
    });

    let code = "";
    const editorCodeElement = document.getElementById("editor-code");
    if (editorCodeElement) {
      code = editorCodeElement.dataset.code;
    }

    // set initial state
    this.state = {
      ast: undefined,
      diagnostics: undefined,
      darkMode: darkMode,
      userConfig: getUserConfig(`vs-${localStorage.getItem("theme")}`, code),
    };
  }

  /**
   * Callback that is invoked when Monaco is finished loading up.
   * Can be used to safely register notification listeners, retrieve data, and the like
   *
   * @throws Error on inability to ref the Monaco component or to get the language client
   */
  onMonacoLoad() {
    // verify we can get a ref to the editor
    if (!this.monacoEditor.current) {
      throw new Error("Unable to get a reference to the Monaco Editor");
    }

    // verify we can get a ref to the language client
    const lc = this.monacoEditor.current
      ?.getEditorWrapper()
      ?.getLanguageClient();
    if (!lc) {
      throw new Error("Could not get handle to Language Client on mount");
    }
    this.monacoEditor.current.getEditorWrapper()?.getEditor()?.focus();
    // register to receive DocumentChange notifications
    lc.onNotification("browser/DocumentChange", this.onDocumentChange);
    lc.onNotification("browser/sagar-from-webworker", this.onMessageFromWorker);
    // lc.sendRequest("")
  }

  onMessageFromWorker(payload: any) {
    console.error(`Received message from worker ${JSON.stringify(payload, null, 2)}`);
  }
  /**
   * Callback invoked when the document processed by the LS changes
   * Invoked on startup as well
   * @param resp Response data
   */
  onDocumentChange(resp: DocumentChangeResponse) {
    // get the AST from the response and deserialize it
    const ast = deserializeAST(resp.content) as DomainModelAstNode;

    this.setState({
      ast: ast,
      diagnostics: resp.diagnostics,
    });
  }

  onLangiumRequest(resp: DocumentChangeResponse) {
    console.error("$$$$$ Requesting langium server");
    const lc = this.monacoEditor.current
      ?.getEditorWrapper()
      ?.getLanguageClient();
    if (!lc) {
      throw new Error("Could not get handle to Language Client on mount");
    }
    // lc.onNotification("browser/DocumentChange", this.onDocumentChange);
    // this.monacoEditor.current.executeCommand("",)
    // const params: CodeActionParams = {
    //   // textDocument: lc.code2ProtocolConverter.asTextDocumentIdentifier(),
    //   // range: lc.code2ProtocolConverter.asRange(range),
    //   textDocument: {
    //     uri: "inmemory://model.yadl"
    //   },
    //   range: {
    //     start: {
    //       line: 0,
    //       character: 0,
    //     },
    //     end: {
    //       line: 0,
    //       character: 5,
    //     },
    //   },
    //   // context: CodeActionContext,
    //   context: { 
    //     diagnostics: [],
    //     triggerKind: CodeActionTriggerKind.Invoked
    //   },
    //   // context: lc.code2ProtocolConverter.asCodeActionContextSync(context)
    // };
    // console.error(`$$$$ Sending Request: ${params}`);
    // lc.sendRequest(CodeActionRequest.method,params).then((response) => {
    //   console.error(`$$$$ Response: ${response}`);
    // }).catch(error => {
    //   console.error(`$$$$ Error: ${error}`);
    // });
    // lc.sendNotification("browser/sagar-from-client");
    const monacoInstance = this.monacoEditor.current.getEditorWrapper().getEditor();
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
        text: "sagar shelar",
        forceMoveMarkers: true,
    };
    monacoInstance.executeEdits('my-source', [op]);
  }

  onRenameRequest(resp: DocumentChangeResponse) {
    console.error("$$$$$ Sending Rename Request");
    const lc = this.monacoEditor.current
      ?.getEditorWrapper()
      ?.getLanguageClient();
    if (!lc) {
      throw new Error("Could not get handle to Language Client on mount");
    }
    const renameRequest = {
      newName: "Sagar",
      position: {
        character: 4,
        line: 4
      },
      // textDocument: "",
      workDoneToken: "12323232"
    } as RenameParams;
    lc.sendNotification("textDocument.rename", renameRequest);
  }

  renderAST(ast: DomainModelAstNode): JSX.Element {
    if (!ast) {
      return <div>No AST available.</div>;
    }

    // if there are no errors, render the tree
    if (
      this.state.diagnostics == null ||
      this.state.diagnostics.filter((i) => i.severity === 1).length == 0
    ) {
      return (
        <>
          {/* <D3Tree data={getMainTreeNode(ast)} />; */}
          <Preview />
        </>
      );
    }

    // otherwise, render the errors
    return (
      <div className="flex flex-col h-full w-full p-4 justify-start items-center my-10">
        <div className="text-white border-2 border-solid border-accentRed rounded-md p-4 text-left text-sm cursor-default">
          {this.state.diagnostics
            .filter((i) => i.severity === 1)
            .map((diagnostic, index) => (
              <details key={index}>
                <summary>{`Line ${diagnostic.range.start.line + 1}-${
                  diagnostic.range.end.line + 1
                }: ${diagnostic.message}`}</summary>
                <p>
                  Source: {diagnostic.source} | Code: {diagnostic.code}
                </p>
              </details>
            ))}
        </div>
      </div>
    );
  }

  render() {
    const style = {
      height: "500px",
      width: "100%",
    };

    return (
      <>
        <div className="grid xs:grid-cols-1 lg:grid-cols-2">
          <div>
            <MonacoEditorReactComp
              ref={this.monacoEditor}
              onLoad={this.onMonacoLoad}
              userConfig={this.state.userConfig}
              style={style}
            />
          </div>
          <VideoRecorder />
          <div>{this.state.ast && this.renderAST(this.state.ast)}</div>

          <button className="btn btn-primary" onClick={this.onLangiumRequest}>
            Send Request To Langium
          </button>

          <button className="btn btn-primary" onClick={this.onRenameRequest}>
            Send Rename Request
          </button>
        </div>
      </>
    );
  }
}

const getUserConfig = (theme, code = "") => {
  let userConfig = createUserConfig(
    {
      languageId: "yadl",
      code: code,
      worker: "/yadl-server-worker.js",
      monarchGrammar: syntaxHighlighting,
    },
    theme,
  );
  return userConfig;
};

// Render to #root
ReactDOM.render(
  React.createElement(AppClass, null),
  document.getElementById("editor"),
);
