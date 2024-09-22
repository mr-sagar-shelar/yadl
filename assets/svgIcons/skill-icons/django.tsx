import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgDjango = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#092E20" rx={60} />
    <path
      fill="#fff"
      d="M112.689 51h28.615v132.45c-14.679 2.787-25.456 3.902-37.161 3.902C69.209 187.351 51 171.559 51 141.271c0-29.173 19.325-48.124 49.24-48.124 4.645 0 8.175.37 12.449 1.485zm0 66.671c-3.344-1.113-6.131-1.485-9.661-1.485-14.493 0-22.856 8.919-22.856 24.526 0 15.238 7.991 23.599 22.67 23.599 3.157 0 5.76-.186 9.847-.742z"
    />
    <path
      fill="#fff"
      d="M186.826 95.19v66.332c0 22.856-1.672 33.818-6.689 43.295-4.646 9.106-10.778 14.865-23.413 21.183l-26.571-12.636c12.635-5.945 18.767-11.146 22.668-19.139 4.089-8.175 5.391-17.652 5.391-42.55V95.189zm-28.614-44.038h28.614V80.51h-28.614z"
    />
  </svg>
);
const Memo = memo(SvgDjango);
export default Memo;
