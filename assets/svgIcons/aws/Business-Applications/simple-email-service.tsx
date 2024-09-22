import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSimpleEmailService = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Simple-Email-Service_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Simple-Email-Service_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M57 61c0-1.626-1.374-3-3-3s-3 1.374-3 3 1.374 3 3 3 3-1.374 3-3m-17-1c-1.626 0-3 1.374-3 3s1.374 3 3 3 3-1.374 3-3-1.374-3-3-3m-14-2c-1.626 0-3 1.374-3 3s1.374 3 3 3 3-1.374 3-3-1.374-3-3-3m2.605-15h22.79l-7.656-6.89-3.09 2.648a.99.99 0 0 1-1.3 0L36.26 36.11zM27 28.173v13.582l7.729-6.957zM51.297 27H28.703l11.296 9.683zM53 41.755V28.173l-7.729 6.624zM59 61c0 2.71-2.29 5-5 5s-5-2.29-5-5c0-2.37 1.75-4.416 4-4.894V53H41v5.106c2.25.478 4 2.525 4 4.894 0 2.71-2.29 5-5 5s-5-2.29-5-5c0-2.37 1.75-4.416 4-4.894V53H27v3.106c2.25.478 4 2.525 4 4.894 0 2.71-2.29 5-5 5s-5-2.29-5-5c0-2.37 1.75-4.416 4-4.894V52a1 1 0 0 1 1-1h13v-6H26a1 1 0 0 1-1-1V26a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H41v6h13a1 1 0 0 1 1 1v4.106c2.25.478 4 2.525 4 4.894m9-21c0 5.907-1.823 11.56-5.273 16.345l-1.623-1.17A25.8 25.8 0 0 0 66 40c0-14.336-11.663-26-25.999-26C25.664 14 14 25.664 14 40a25.8 25.8 0 0 0 4.896 15.175l-1.623 1.17A27.8 27.8 0 0 1 12 39.999C12 24.561 24.561 12 39.999 12 55.438 12 68 24.561 68 40"
      />
    </g>
  </svg>
);
const Memo = memo(SvgSimpleEmailService);
export default Memo;