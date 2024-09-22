import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgProcessingLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F4ED" rx={60} />
    <path
      stroke="#0468FF"
      strokeWidth={42.286}
      d="M138.572 170.762c84.571 0 84.571-112.762 0-112.762"
    />
    <path stroke="#1F34AB" strokeWidth={42.286} d="M138.571 86.19 54 198.952" />
    <path stroke="#85AEFF" strokeWidth={42.286} d="m54 114.381 28.19 56.381" />
  </svg>
);
const Memo = memo(SvgProcessingLight);
export default Memo;
