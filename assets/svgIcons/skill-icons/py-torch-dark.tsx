import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPyTorchDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#EE4C2C"
      d="m180.975 90.415-13.408 13.409c21.941 21.941 21.941 57.291 0 78.826-21.942 21.941-57.292 21.941-78.827 0-21.94-21.941-21.94-57.291 0-78.826l34.741-34.74 4.876-4.876V38L75.941 90.415c-29.255 29.255-29.255 76.389 0 105.644s76.389 29.255 105.034 0c29.255-29.459 29.255-76.389 0-105.644"
    />
    <path
      fill="#EE4C2C"
      d="M154.77 87.17c5.386 0 9.752-4.365 9.752-9.751s-4.366-9.752-9.752-9.752c-5.385 0-9.751 4.366-9.751 9.752s4.366 9.752 9.751 9.752"
    />
  </svg>
);
const Memo = memo(SvgPyTorchDark);
export default Memo;
