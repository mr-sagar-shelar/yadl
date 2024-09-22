import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgIoTExpressLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="IoT-ExpressLink_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#1B660F" />
        <stop offset="100%" stopColor="#6CAE3E" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#IoT-ExpressLink_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M62.91 28.28a15.3 15.3 0 0 0-4.383-1.803c-.43-3.369-2.28-5.842-5.035-6.677a6.54 6.54 0 0 0-6.022 1.177c-.867-1.853-2-3.454-3.382-4.773-4.443-4.243-10.521-5.394-16.255-3.084-4.914 1.981-8.62 7.463-8.62 12.751q0 .43.026.863C16.552 27.584 12 29.98 12 36.437c0 5.851 2.721 8.355 4.343 9.327 1.403.841 2.934 1.25 4.681 1.25h2.034v-2h-2.034c-1.831 0-2.962-.55-3.654-.966-1.537-.92-3.37-2.989-3.37-7.61 0-5.53 4.047-7.374 6.498-7.983a1 1 0 0 0 .804-1.134 12 12 0 0 1-.089-1.45c0-4.444 3.236-9.23 7.368-10.897 4.984-2.008 10.267-1.009 14.126 2.677 1.502 1.434 2.674 3.265 3.481 5.442a1 1 0 0 0 1.728.266c1.207-1.554 3.168-2.2 4.996-1.645 2.078.63 3.446 2.663 3.677 5.45a1 1 0 0 0 .828 1.131c1.463.24 3.085.855 4.448 1.69 3.729 2.281 4.159 4.652 4.159 6.236 0 8.518-7.691 8.786-8 8.793h-2v2h2.017c.099-.002 9.983-.286 9.983-10.793 0-3.237-1.673-5.836-5.114-7.942m-11.886 5.576a1.844 1.844 0 0 0-1.842-1.842h-1.158v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-1.156a1.846 1.846 0 0 0-1.844 1.843v1.157h-3v2h3v3h-3v2h3v3h-3v2h3v3h-3v2h3v1.158c0 1.015.826 1.842 1.842 1.842h3.158v-2h-3v-19h19v19h-8v2h8.157a1.845 1.845 0 0 0 1.843-1.843v-1.157h3v-2h-3v-3h3v-2h-3v-3h3v-2h-3v-3h3v-2h-3zm-5 29.158h2v-7h-2zm-5 4h2v-8h-2zm-5-3h2v-14h-2zm-5 4h2v-10h-2z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgIoTExpressLink);
export default Memo;
