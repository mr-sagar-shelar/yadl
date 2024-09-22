import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMainframeModernization = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Mainframe-Modernization_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Mainframe-Modernization_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M67.813 37.352q0 .491-.041.972c-.478 5.648-5.479 10.071-11.386 10.071v-2c4.877 0 9.003-3.619 9.394-8.238q.032-.397.033-.805c0-4.873-3.302-8.547-7.68-8.547a1 1 0 0 1-1-1c0-3.293-1.789-6.812-6.811-6.812h-.867a1 1 0 0 1-.875-.515c-2.231-4.025-6.446-6.428-11.277-6.428-7.106 0-12.887 5.781-12.887 12.886a1 1 0 0 1-1 1c-5.192 0-9.416 4.224-9.416 9.416 0 8.815 8.145 9.07 9.074 9.07v2c-7.65 0-11.074-5.56-11.074-11.07 0-5.968 4.604-10.881 10.446-11.375.496-7.763 6.971-13.927 14.857-13.927 5.361 0 10.073 2.584 12.727 6.943h.292c5.028 0 8.385 3.051 8.773 7.859 5.033.493 8.718 4.842 8.718 10.5M53.187 57.52l4.225 3.299-9.184 7.174H31.733l-9.183-7.174 4.223-3.299 1.23 1.577-2.205 1.722 6.624 5.174h15.117l6.623-5.174-2.205-1.722zm0-9 4.225 3.299-9.184 7.174H31.733l-9.183-7.174 4.223-3.299 1.23 1.577-2.205 1.722 6.624 5.174h15.117l6.623-5.174-2.205-1.722zM32.004 35.993h15.953l7.041 5.5-7.041 5.5H32.004l-7.041-5.5zm16.642 13 9.6-7.5-9.6-7.5H31.315l-9.6 7.5 9.6 7.5z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgMainframeModernization);
export default Memo;
