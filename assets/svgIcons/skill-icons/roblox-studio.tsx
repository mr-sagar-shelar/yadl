import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgRobloxStudio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g fill="#009FFF" clipPath="url(#RobloxStudio_svg__a)">
      <path d="M256 0H0v101.32l90.59 24.248 11.426-42.608L256 124.228zM256 154.68l-90.59-24.281-11.426 42.606L0 131.739V256h256z" />
    </g>
    <defs>
      <clipPath id="RobloxStudio_svg__a">
        <rect width={256} height={256} fill="#fff" rx={60} />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgRobloxStudio);
export default Memo;
