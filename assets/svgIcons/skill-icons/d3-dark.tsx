import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgD3Dark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#F9A03C"
      d="M136.747 127.656C136.747 85.874 102.8 52 60.913 52H48v33.256h12.92c23.474 0 42.5 18.982 42.5 42.4 0 23.419-19.026 42.401-42.5 42.401H48v33.256h12.92c41.874 0 75.827-33.874 75.827-75.657M208 98.146C208 72.658 187.286 52 161.747 52h-53.334a89.3 89.3 0 0 1 31.24 33.256h22.094c7.127 0 12.92 5.772 12.92 12.89 0 7.116-5.793 12.889-12.92 12.889h-12.92a89.1 89.1 0 0 1 0 33.255h12.92c7.12 0 12.92 5.767 12.92 12.891s-5.793 12.889-12.92 12.889h-22.094a89.3 89.3 0 0 1-31.24 33.255h53.334a46.34 46.34 0 0 0 29.586-10.674c19.621-16.296 22.307-45.388 5.967-64.981A46.14 46.14 0 0 0 208 98.145"
    />
  </svg>
);
const Memo = memo(SvgD3Dark);
export default Memo;