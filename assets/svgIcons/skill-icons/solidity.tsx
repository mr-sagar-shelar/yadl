import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSolidity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#65AFFF" rx={60} />
    <path
      fill="#000"
      d="m165.536 25-37.53 58.79H53L90.503 25z"
      opacity={0.45}
    />
    <path
      fill="#000"
      d="M128.006 83.79h75.033L165.536 25H90.503z"
      opacity={0.6}
    />
    <path
      fill="#000"
      d="m90.503 142.557 37.503-58.767L90.503 25 53 83.79z"
      opacity={0.8}
    />
    <path
      fill="#000"
      d="m90.867 230.742 37.529-58.79h75.033l-37.53 58.79z"
      opacity={0.45}
    />
    <path
      fill="#000"
      d="M128.396 171.952H53.363l37.503 58.79H165.9z"
      opacity={0.6}
    />
    <path
      fill="#000"
      d="m165.899 113.185-37.503 58.767 37.503 58.79 37.529-58.79z"
      opacity={0.8}
    />
  </svg>
);
const Memo = memo(SvgSolidity);
export default Memo;
