import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTerraformLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#5C4EE5"
      fillRule="evenodd"
      d="M153.497 228v-63.119l-51.429-31.572v63.118zm0-70.017-51.429-31.572V63.267l51.429 31.572z"
      clipRule="evenodd"
    />
    <path
      fill="#4040B2"
      fillRule="evenodd"
      d="M210.613 126.385V63.241L159.16 94.813v63.144z"
      clipRule="evenodd"
    />
    <path
      fill="#5C4EE5"
      fillRule="evenodd"
      d="M96.43 122.717V59.572L45 28v63.144z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgTerraformLight);
export default Memo;
