import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgNginx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#009639" rx={60} />
    <path
      fill="#fff"
      d="M195.338 213a17.64 17.64 0 0 1-12.491-5.171L78.324 103.307v92.033c0 9.755-7.906 17.66-17.662 17.66C50.912 213 43 205.095 43 195.34V60.668c0-7.15 4.31-13.585 10.908-16.318a17.63 17.63 0 0 1 19.245 3.828L177.676 152.7V60.668c0-9.756 7.906-17.66 17.662-17.66S213 50.911 213 60.667V195.34c0 7.141-4.31 13.584-10.908 16.318a17.6 17.6 0 0 1-6.754 1.342"
    />
  </svg>
);
const Memo = memo(SvgNginx);
export default Memo;