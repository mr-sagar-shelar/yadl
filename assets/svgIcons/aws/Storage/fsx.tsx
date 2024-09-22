import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFSx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="FSx_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#1B660F" />
        <stop offset="100%" stopColor="#6CAE3E" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#FSx_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m54.536 44.534-6.843 9.831h3.086l5.147-7.796zm9.211 9.831H67l-8.089-11.933 7.366-10.649h-3.043l-5.822 8.619-1.558 2.237zM56.12 38.49l-4.53-6.707h-3.212l6.121 8.946zm-20.855 1.817q-2.95-1.191-4.33-2.841-1.38-1.648-1.379-4.074 0-3.297 2.28-5.345 2.279-2.046 5.998-2.047 1.686 0 3.545.418 1.857.417 3.506 1.172v2.027q-3.909-1.431-6.937-1.431-2.95 0-4.521 1.331-1.572 1.332-1.572 3.796 0 1.392.48 2.245.478.855 1.57 1.55t3.124 1.49l4.101 1.63q2.759 1.112 4.023 2.723 1.265 1.609 1.265 4.033 0 3.538-2.51 5.723-2.511 2.186-6.611 2.186-4.254 0-7.588-1.67v-2.026q4.024 1.51 7.396 1.51 3.181 0 5.078-1.55t1.897-4.212q0-1.63-1.034-2.783-1.036-1.152-3.334-2.066zM13 54.217V26.676h14.907v2.107H15.261v10.531h10.692v2.106H15.261v12.797z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgFSx);
export default Memo;
