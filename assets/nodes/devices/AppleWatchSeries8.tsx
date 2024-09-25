import React, { memo } from "react";
const Device = () => (
    <>
      <div className="device device-apple-watch-s8">
        <div className="device-frame">
          <img className="device-screen not-prose" src="/images/devices/bg-watch.jpg" />
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    </>
);

const Memo = memo(Device);
export default Memo;