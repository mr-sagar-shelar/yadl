import React, { memo } from "react";

export default memo(() => {
  return (
    <>
      <div className="device device-google-pixel-6-pro">
        <div className="device-frame">
          <img className="device-screen" src="/images/devices/bg-pixel-6.jpg" />
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    </>
  );
});
