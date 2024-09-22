import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgDataPipeline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Data-Pipeline_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#4D27A8" />
        <stop offset="100%" stopColor="#A166FF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Data-Pipeline_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M64 62h-3c-.448 0-1-.551-1-1v-2h5v2c0 .449-.552 1-1 1m-42-3h36v-3H22zm-3 3h-3c-.663 0-1-.336-1-1v-2h5v2c0 .372-.211 1-1 1m-3-30h3c.448 0 1 .551 1 1v3h-5v-3c0-.449.552-1 1-1m21.008 3H58v3H22v-3zm1.002-7H42l-.001 5h-3.991zM33 26a1 1 0 0 0-.991.866c-.116.05-.403.134-1.009.134-1.267 0-2-.376-2-2.3 0-1.792.673-2.7 2-2.7.575 0 .885.088 1.011.148A1 1 0 0 0 33 23h13a1 1 0 0 0 .986-.833C47.093 22.11 47.38 22 48 22c1.094 0 2 .19 2 2.531C50 26.587 49.234 27 48 27c-.597 0-.886-.074-1.007-.121A1 1 0 0 0 46 26H33m7-8c1.582 0 2 1.962 2 3h-4c0-1.038.418-3 2-3m20 39h5V38h-5zm-38-3h36V40H22zm-7 3h5V38h-5zm46-25h3c.454 0 1 .614 1 1v3h-5v-3c0-.386.546-1 1-1m3-2h-3c-1.514 0-3 1.486-3 3H43.999L44 28h1.286c.356.533 1.121 1 2.714 1 1.825 0 4-.775 4-4.469C52 21.524 50.654 20 48 20c-1.416 0-2.248.441-2.664 1H44c0-2.485-1.374-5-4-5s-4 2.515-4 5h-2.315c-.358-.51-1.111-1-2.685-1-1.934 0-4 1.235-4 4.7 0 2.773 1.421 4.3 4 4.3 1.588 0 2.345-.481 2.7-1h2.31l-.002 5H22c0-1.542-1.458-3-3-3h-3c-1.542 0-3 1.458-3 3v28c0 1.767 1.233 3 3 3h3c1.948 0 3-1.546 3-3h36c0 1.542 1.458 3 3 3h3c1.542 0 3-1.458 3-3V33c0-1.514-1.486-3-3-3"
      />
    </g>
  </svg>
);
const Memo = memo(SvgDataPipeline);
export default Memo;