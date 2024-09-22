import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgThreeJsLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#fff" rx={60} />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M93.213 222.94 50 48l173.23 49.874z"
      clipRule="evenodd"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m136.583 72.942 21.591 87.496-86.567-24.945z"
      clipRule="evenodd"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m115.103 147.36-10.724-43.465 43.008 12.346zM93.65 60.483l10.725 43.465-43.008-12.346zM179.663 85.26l10.724 43.465-43.008-12.346zM115.108 147.39l10.724 43.465-43.008-12.346z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgThreeJsLight);
export default Memo;
