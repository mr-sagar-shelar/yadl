import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgNeoVimLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="url(#NeoVim-Light_svg__a)"
      fillRule="evenodd"
      d="M46 71.006 88.595 28v199.957L46 185.45z"
      clipRule="evenodd"
    />
    <path
      fill="url(#NeoVim-Light_svg__b)"
      fillRule="evenodd"
      d="m210.584 71.41-43.178-43.387.876 199.935 42.596-42.508z"
      clipRule="evenodd"
    />
    <path
      fill="url(#NeoVim-Light_svg__c)"
      fillRule="evenodd"
      d="M88.567 28.033 199.31 197.012 168.32 228 57.52 59.395z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillOpacity={0.13}
      fillRule="evenodd"
      d="m88.605 106.416-.059 6.656-34.193-50.48 3.166-3.224z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="NeoVim-Light_svg__a"
        x1={67.297}
        x2={67.297}
        y1={28}
        y2={227.958}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#16B0ED" stopOpacity={0.8} />
        <stop offset={1} stopColor="#0F59B2" stopOpacity={0.837} />
      </linearGradient>
      <linearGradient
        id="NeoVim-Light_svg__b"
        x1={189.14}
        x2={189.14}
        y1={28.023}
        y2={227.957}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7DB643" />
        <stop offset={1} stopColor="#367533" />
      </linearGradient>
      <linearGradient
        id="NeoVim-Light_svg__c"
        x1={128.414}
        x2={128.414}
        y1={28.033}
        y2={228.01}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#88C649" stopOpacity={0.8} />
        <stop offset={1} stopColor="#439240" stopOpacity={0.84} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SvgNeoVimLight);
export default Memo;
