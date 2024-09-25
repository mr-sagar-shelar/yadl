import React, { memo } from "react";
import * as Devices from "./devices/index";
import { DeviceNames } from "utils/DeviceNames";
import { motion } from "framer-motion";

interface DeviceNodeProps {
  data: {
    type: string;
    width?: number;
    height?: number;
  };
}
function DeviceNode(props: DeviceNodeProps) {
  const { data } = props;
  const deviceNamePresent = DeviceNames[data.type] != undefined;
  const Device = deviceNamePresent ? Devices[DeviceNames[data.type]] : null;
  return (
    <motion.div>
      {deviceNamePresent && <Device />}
    </motion.div>
  );
}

export default memo(DeviceNode);
