import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFastApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#049789" rx={60} />
    <path
      fill="#fff"
      d="M127.5 41C79.743 41 41 79.743 41 127.5S79.743 214 127.5 214s86.5-38.743 86.5-86.5S175.257 41 127.5 41m-4.507 155.839v-54.258H92.831l43.336-84.42v54.258h29.036z"
    />
  </svg>
);
const Memo = memo(SvgFastApi);
export default Memo;