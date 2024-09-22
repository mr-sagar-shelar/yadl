import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import * as ICONS from "../svgIcons/index";
import { IconNames } from "utils/IconNames";

interface IconNodeProps {
  data: {
    icon: string;
    width?: number;
    height?: number;
  };
}
function IconNode(props: IconNodeProps) {
  const {data} = props;
  const Icon = ICONS[IconNames[data.icon]];
  return (
    <div>
      <Icon width={data.width|| 100} height={data.height|| 100} />
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
}

export default memo(IconNode);
