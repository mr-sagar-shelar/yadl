import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import * as ICONS from "../svgIcons/index";
import { IconNames } from "utils/IconNames";
import { motion } from "framer-motion";

interface IconNodeProps {
  data: {
    icon: string;
    width?: number;
    height?: number;
  };
}
function IconNode(props: IconNodeProps) {
  const { data } = props;
  const Icon = ICONS[IconNames[data.icon]];
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        transition:{ repeat: Infinity, duration: 5  }
      }}
    >
      <Icon width={data.width || 100} height={data.height || 100} />
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
    </motion.div>
  );
}

export default memo(IconNode);
