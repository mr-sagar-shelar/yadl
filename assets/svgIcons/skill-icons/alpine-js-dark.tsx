import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgAlpineJsDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#242938" rx={60} />
    <path
      fill="#D8DEE9"
      fillRule="evenodd"
      d="M180.778 84 223 126.037l-42.222 42.037-42.223-42.037z"
      clipRule="evenodd"
    />
    <path
      fill="#77C1D2"
      fillRule="evenodd"
      d="m75.222 84 87.532 87.148H78.31L33 126.037z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgAlpineJsDark);
export default Memo;
