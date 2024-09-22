import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgKotlinLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path fill="url(#Kotlin-Light_svg__a)" d="M218 218H38V38h180l-90 90z" />
    <defs>
      <linearGradient
        id="Kotlin-Light_svg__a"
        x1={218}
        x2={38}
        y1={38}
        y2={218}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.003} stopColor="#E44857" />
        <stop offset={0.469} stopColor="#C711E1" />
        <stop offset={1} stopColor="#7F52FF" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SvgKotlinLight);
export default Memo;
