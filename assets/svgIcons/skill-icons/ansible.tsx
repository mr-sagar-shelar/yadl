import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgAnsible = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#000" rx={60} />
    <path
      fill="#fff"
      d="M96.038 163.876a4.8 4.8 0 0 1-2.016-.438 4.914 4.914 0 0 1-2.461-6.498l15.895-35.247.065-.138 15.495-34.364a5.11 5.11 0 0 1 4.483-2.655 5.11 5.11 0 0 1 4.483 2.655l31.461 69.749a4.915 4.915 0 0 1-1.408 5.861 4.92 4.92 0 0 1-6.027.092l-42.084-31.63-13.403 29.717a4.92 4.92 0 0 1-4.483 2.896m22.033-41.799 28.538 21.453-19.11-42.36z"
    />
    <path
      fill="#E00"
      d="M127.499 215a87.495 87.495 0 0 1-80.838-54.015A87.5 87.5 0 1 1 215 127.498 87.596 87.596 0 0 1 127.499 215m0-165.168a77.669 77.669 0 1 0 77.67 77.666 77.76 77.76 0 0 0-77.67-77.667"
    />
  </svg>
);
const Memo = memo(SvgAnsible);
export default Memo;