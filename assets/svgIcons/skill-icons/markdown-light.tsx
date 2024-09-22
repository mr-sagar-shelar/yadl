import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMarkdownLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      stroke="#000"
      strokeWidth={10}
      d="M217 69H39c-5.523 0-10 4.477-10 10v98c0 5.523 4.477 10 10 10h178c5.523 0 10-4.477 10-10V79c0-5.523-4.477-10-10-10Z"
    />
    <path
      fill="#000"
      d="M54 162V94h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zm125 0-30-33h20V94h20v35h20z"
    />
  </svg>
);
const Memo = memo(SvgMarkdownLight);
export default Memo;
