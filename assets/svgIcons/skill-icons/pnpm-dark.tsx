import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPnpmDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#Pnpm-Dark_svg__a)">
      <path
        fill="#242938"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <path
        fill="#F9AD00"
        d="M40 41h55v55H40zM100 41h55v55h-55zM160 41h55v55h-55zM160 101h55v55h-55z"
      />
      <path
        fill="#4E4E4E"
        d="M160 161h55v55h-55zM100 161h55v55h-55zM40 161h55v55H40z"
      />
      <path fill="#242938" d="M40 101h55v55H40z" />
      <path fill="#4E4E4E" d="M100 101h55v55h-55z" />
    </g>
    <defs>
      <clipPath id="Pnpm-Dark_svg__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgPnpmDark);
export default Memo;
