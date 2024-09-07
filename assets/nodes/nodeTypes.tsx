import AppleWatchSeries8 from "./devices/AppleWatchSeries8";
import AppleWatchUltra from "./devices/AppleWatchUltra";
import GooglePixel6Pro from "./devices/GooglePixel6Pro";
import iMac from "./devices/iMac";
import iPadPro from "./devices/iPadPro";
import iPhone14 from "./devices/iPhone14";
import iPhone14Pro from "./devices/iPhone14Pro";
import MacbookPro from "./devices/MacbookPro";
import ProDisplayXDR from "./devices/ProDisplayXDR";
import SurfaceBook from "./devices/SurfaceBook";
import SurfacePro from "./devices/SurfacePro";
import SurfaceStudio from "./devices/SurfaceStudio";
import TailwindNode from "./TailwindNode";
import AnnotationNode from "./AnnotationNode";
import ToolbarNode from "./ToolbarNode";
import ResizerNode from "./ResizerNode";
import CircleNode from "./CircleNode";
import TextNode from "./TextNode";
import ButtonEdge from "./ButtonEdge";
import AnimatedSVGEdge from "./AnimatedSVGEdge";

export const nodeTypes = {
  appleWatchSeries8: AppleWatchSeries8,
  appleWatchUltra: AppleWatchUltra,
  googlePixel6Pro: GooglePixel6Pro,
  iMac: iMac,
  iPadPro: iPadPro,
  iPhone14: iPhone14,
  iPhone14Pro: iPhone14Pro,
  macbookPro: MacbookPro,
  proDisplayXDR: ProDisplayXDR,
  surfaceBook: SurfaceBook,
  surfacePro: SurfacePro,
  surfaceStudio: SurfaceStudio,
  tailwindNode: TailwindNode,
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextNode,
};

export const edgeTypes = {
  button: ButtonEdge,
  animatedSvg: AnimatedSVGEdge,
};

export const nodeClassName = (node) => node.type;
