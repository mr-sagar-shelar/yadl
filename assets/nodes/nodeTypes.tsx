import TailwindNode from "./TailwindNode";
import AnnotationNode from "./AnnotationNode";
import ToolbarNode from "./ToolbarNode";
import ResizerNode from "./ResizerNode";
import CircleNode from "./CircleNode";
import TextNode from "./TextNode";
import ButtonEdge from "./ButtonEdge";
import AnimatedSVGEdge from "./AnimatedSVGEdge";
import IconNode from "./IconNode";
import DeviceNode from "./DeviceNode";

export const nodeTypes = {
  tailwindNode: TailwindNode,
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextNode,
  icon: IconNode,
  device: DeviceNode
};

export const edgeTypes = {
  button: ButtonEdge,
  animatedSvg: AnimatedSVGEdge,
};

export const nodeClassName = (node) => node.type;
