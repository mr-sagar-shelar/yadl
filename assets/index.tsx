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
import {
  DomainModelAstNode,
  getMainTreeNode,
} from "./domainmodel-tools";
import syntaxHighlighting from "./scripts/yadl.monarch";

import D3Tree from "./d3tree";
import Preview from "Preview";

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
}

class AppClass extends React.Component<{}, AppState> {
  monacoEditor: React.RefObject<MonacoEditorReactComp>;
  constructor(props: {} | Readonly<{}>) {
    super(props);

    // bind 'this' ref for callbacks to maintain parent context
    this.onMonacoLoad = this.onMonacoLoad.bind(this);
    this.onDocumentChange = this.onDocumentChange.bind(this);
    this.monacoEditor = React.createRef();

    // set initial state
    this.state = {
      ast: undefined,
      diagnostics: undefined,
      userConfig: getUserConfig(`vs-${localStorage.getItem("theme")}`),
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
          <D3Tree data={getMainTreeNode(ast)} />;
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
          <div>{this.state.ast && this.renderAST(this.state.ast)}</div>
        </div>
      </>
    );
  }
}

const getUserConfig = (theme) => {
  let userConfig = createUserConfig(
    {
      languageId: "yadl",
      code: `
enum Country {
  INDIA
  CHINA
}


enum Country2 {
  INDIA
  CHINA
}  
    `,
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
