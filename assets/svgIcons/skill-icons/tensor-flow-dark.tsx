import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTensorFlowDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#FF6F00"
      d="m124.228 229-33.605-20.11V90.31L40 120.459l.123-44.914L124.228 26zm7.556-203v203l33.609-20.11v-57.109l25.37 15.114-.151-39.062-25.219-14.845V90.31L216 120.459l-.122-44.914z"
    />
  </svg>
);
const Memo = memo(SvgTensorFlowDark);
export default Memo;
