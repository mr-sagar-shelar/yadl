import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTextract = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="Textract_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Textract_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M22.062 50c2.314 3.603 6.348 6 10.938 6 7.167 0 13-5.832 13-13s-5.833-13-13-13c-5.397 0-10.034 3.307-11.998 8h2.212c1.825-3.556 5.522-6 9.786-6 6.065 0 11 4.935 11 11s-4.935 11-11 11a10.99 10.99 0 0 1-8.479-4zM37 45v-2h5c0-4.962-4.038-9-9-9-4.963 0-9 4.038-9 9h5v2H24.23c.913 4.002 4.494 7 8.77 7a8.95 8.95 0 0 0 5.643-2H34v-2h6.478a9 9 0 0 0 1.29-3zm-15.998 3h2.212A10.9 10.9 0 0 1 22 43c0-1.041.155-2.045.426-3h-2.063A13 13 0 0 0 20 43c0 1.771.36 3.46 1.003 5m-1.259 2H17v-2h1.874c-.34-.96-.585-1.962-.725-3h-2.735l1.293 1.293-1.415 1.414-3-3a1 1 0 0 1 0-1.414l3-3 1.415 1.414L15.414 43H18c0-1.027.104-2.03.302-3H17v-2h1.874C20.94 32.184 26.484 28 33 28c4.427 0 8.4 1.939 11.148 5H59v2H45.666A14.9 14.9 0 0 1 48 43H59v2H47.85c-.982 7.327-7.259 13-14.85 13-5.744 0-10.738-3.248-13.257-8M37 39a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2h2v-1h1v3h-1v2h4v-2h-1v-3h1v1h2zm12 1h10v-2H49zm0 10h10v-2H49zm8-23h3.585L57 23.414zm6.707.293c.187.187.293.442.293.707v35a1 1 0 0 1-1 1H32a1 1 0 0 1-1-1v-4h2v3h29V29h-6a1 1 0 0 1-1-1v-6H33v5h-2v-6a1 1 0 0 1 1-1h24a1 1 0 0 1 .707.293zM68 24.166V61a1 1 0 0 1-1 1h-2v-2h1V24.612L58.617 18H36v1h-2v-2a1 1 0 0 1 1-1h24c.246 0 .483.091.666.255l8 7.165c.212.19.334.461.334.746"
      />
    </g>
  </svg>
);
const Memo = memo(SvgTextract);
export default Memo;
