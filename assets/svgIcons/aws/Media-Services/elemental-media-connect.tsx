import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgElementalMediaConnect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Elemental-MediaConnect_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#C8511B" />
        <stop offset="100%" stopColor="#F90" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Elemental-MediaConnect_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m61 33.618-5-2.5-5 2.5v6.764l5 2.5 5-2.5zm-16-10-5-2.5-5 2.5v6.764l5 2.5 5-2.5zm-16 10-5-2.5-5 2.5v6.764l5 2.5 5-2.5zM63 33v8a1 1 0 0 1-.553.894l-6 3a.99.99 0 0 1-.894 0l-6-3A1 1 0 0 1 49 41v-7.382l-3-1.5-5.553 2.776a1 1 0 0 1-.894 0L34 32.118l-3 1.5V41a1 1 0 0 1-.553.894l-6 3a1 1 0 0 1-.894 0l-6-3A1 1 0 0 1 17 41v-8c0-.379.214-.725.553-.895l6-3c.281-.14.613-.14.894 0L30 31.882l3-1.5V23c0-.379.214-.725.553-.895l6-3c.281-.14.613-.14.894 0l6 3c.339.17.553.516.553.895v7.382l3 1.5 5.553-2.777c.281-.14.613-.14.894 0l6 3c.339.17.553.516.553.895M35.515 55.142l-1.03 1.715 5.001 3a1 1 0 0 0 1.03 0l4.999-3-1.03-1.715L41 57.234V41.765l3.485 2.092 1.03-1.715-5-3a1 1 0 0 0-1.03 0l-5 3 1.03 1.715L39 41.765v15.468zm-11.491-30.96 4.461 2.675A.999.999 0 0 0 30 26v-5.406l10-5.455 10 5.455V26a.998.998 0 0 0 1.515.857l4.461-2.676 5.474 3.603 1.1-1.67-6-3.95a1 1 0 0 0-1.065-.022L52 24.234V20a1 1 0 0 0-.521-.878l-11-6a1 1 0 0 0-.958 0l-11 6A1 1 0 0 0 28 20v4.234l-3.485-2.092a1 1 0 0 0-1.065.022l-6 3.95 1.1 1.67zM63 52.928c.002.355-.185.685-.489.866l-22 13.065a1 1 0 0 1-1.022 0l-22-13.066a1.003 1.003 0 0 1 .011-1.726l12-6.934 1 1.732-10.521 6.08L40 64.837l20.021-11.89-10.521-6.08 1-1.733 12 6.935a1 1 0 0 1 .5.86"
      />
    </g>
  </svg>
);
const Memo = memo(SvgElementalMediaConnect);
export default Memo;
