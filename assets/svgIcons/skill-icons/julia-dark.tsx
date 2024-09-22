import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgJuliaDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#CB3C33"
      d="M118.509 177.431c0 26.435-21.16 47.851-47.255 47.851-26.106 0-47.254-21.416-47.254-47.851 0-26.425 21.148-47.851 47.254-47.851 26.096 0 47.255 21.426 47.255 47.851"
    />
    <path
      fill="#9558B2"
      d="M232.046 177.431c0 26.435-21.159 47.851-47.255 47.851-26.095 0-47.254-21.416-47.254-47.851 0-26.425 21.159-47.851 47.254-47.851 26.096 0 47.255 21.426 47.255 47.851"
    />
    <path
      fill="#389826"
      d="M175.288 77.851c0 26.425-21.159 47.851-47.255 47.851-26.106 0-47.254-21.426-47.254-47.85C80.78 51.425 101.927 30 128.033 30c26.096 0 47.255 21.426 47.255 47.851"
    />
  </svg>
);
const Memo = memo(SvgJuliaDark);
export default Memo;
