import * as React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";
import { deserializeAST, DocumentChangeResponse } from "langium-ast-helper";
import { getYADLNodes, YadlModelAstNode } from "utils/YADLDeserializer";
import ReactFlowPreview from "./ReactFlowPreview";
import { Node, Edge } from "@xyflow/react";

// const initialNodes = [
//   // { id: "1", position: { x: 0, y: 0 }, data: { label: "Box1" } },
//   // { id: "2", position: { x: 0, y: 100 }, data: { label: "Box2" } },
//   // {
//   //   id: "3",
//   //   position: { x: 200, y: 100 },
//   //   data: { icon: "glue" },
//   //   type: "icon",
//   // },
//   {
//     id: "icon-0",
//     position: {
//       x: 20,
//       y: 20,
//     },
//     data: {
//       icon: "angular-dark",
//     },
//     type: "icon",
//   },
// ];
// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function EditorApp() {
  let running = false;
  let timeout: number | null = null;

  const [yadlNodes, setYadlNodes] = React.useState<Node[]>([]);

  const parseNodesAndEdges = (ast: YadlModelAstNode) => {
    const iconNodes = ast.icons.map((icon, index) => {
      return {
        id: `icon-${index}`,
        position: { x: icon.position?.x || 0, y: icon.position?.y || 100 },
        data: { icon: icon.icon },
        type: "icon",
      } as Node;
    });
    const boxNodes = ast.boxes.map((box, index) => {
      return {
        id: `box-${index}`,
        position: { x: box.position?.x || 0, y: box.position?.y || 100 },
        data: { label: box.label },
        type: "resizer",
      } as Node;
    });
    const annotations = ast.annotations.map((annotation, index) => {
      return {
        id: `annotation-${index}`,
        position: { x: annotation.position?.x || 0, y: annotation.position?.y || 0 },
        data: { label: annotation.label, arrowStyle: annotation.arrowStyle },
        type: "annotation",
      } as Node;
    });
    const devices = ast.devices.map((device, index) => {
      return {
        id: `device-${index}`,
        position: { x: device.position?.x || 0, y: device.position?.y || 0 },
        data: { type: device.type },
        type: "device",
      } as Node;
    });

    const totalNodes = iconNodes.concat(boxNodes.concat(annotations.concat(devices)));
    console.log(totalNodes);
    setYadlNodes(totalNodes);
  };

  const onNodeChange = (node: Node) => {
    console.log(` $$$$ 22222 ${JSON.stringify(node, null, 2)}`);
  }

  return (
    <div>
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
            parseNodesAndEdges(deserializedContent);
            // console.log(deserializedContent);
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
      <ReactFlowPreview initialEdges={[]} initialNodes={yadlNodes} onNodeChange={onNodeChange} />
    </div>
  );
}

ReactDOM.render(
  React.createElement(EditorApp, null),
  document.getElementById("editor"),
);
