import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgVercelDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#242938" rx={60} />
    <path fill="#fff" d="m128 34 95 164.853H33z" />
  </svg>
);
const Memo = memo(SvgVercelDark);
export default Memo;
