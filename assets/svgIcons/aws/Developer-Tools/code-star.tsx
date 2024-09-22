import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCodeStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="CodeStar_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#2E27AD" />
        <stop offset="100%" stopColor="#527FFF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#CodeStar_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M62.95 34.806a4.116 4.116 0 0 0-2.07-7.683 4.1 4.1 0 0 0-2.055.553 4.1 4.1 0 0 0-1.924 2.5 4.08 4.08 0 0 0 .412 3.123 4.136 4.136 0 0 0 5.637 1.507m2.56 4.21.994 1.719-4.83 2.781-1.204-6.203c-1.96-.137-3.824-1.2-4.879-3.022a6.05 6.05 0 0 1-.611-4.63 6.07 6.07 0 0 1 2.85-3.703 6.08 6.08 0 0 1 4.64-.61 6.07 6.07 0 0 1 3.712 2.843 6.1 6.1 0 0 1-2.238 8.333 6 6 0 0 1-1.483.612l.634 3.27zm-6.95 12.018a4.1 4.1 0 0 0-3.13-.412 4.1 4.1 0 0 0-2.505 1.919c-.778 1.343-.69 2.938.061 4.182l.855.984-.02.017c.19.161.391.313.614.44.955.55 2.067.696 3.13.412a4.116 4.116 0 0 0 .995-7.542m3.232 6.615a6.07 6.07 0 0 1-3.712 2.843 6.086 6.086 0 0 1-4.64-.61 6 6 0 0 1-1.134-.85l-1.428 1.236 2.415 1.389-.995 1.72-4.833-2.784 3.636-3.143a6.08 6.08 0 0 1 .102-5.901 6.07 6.07 0 0 1 3.712-2.842 6.08 6.08 0 0 1 4.64.609 6.06 6.06 0 0 1 2.848 3.704 6.05 6.05 0 0 1-.61 4.629m-21.652 4.25a4.128 4.128 0 0 0-8.253 0 4.127 4.127 0 0 0 8.253 0m1.989 0c0 3.364-2.743 6.101-6.116 6.101-3.371 0-6.114-2.737-6.114-6.101 0-.473.058-.932.162-1.374l-2.564-.886v2.99H25.51v-5.777l5.313 1.838a6.112 6.112 0 0 1 11.307 3.209m-19.37-15.927a4.1 4.1 0 0 0-2.504-1.919 4.1 4.1 0 0 0-3.13.412 4.1 4.1 0 0 0-1.923 2.5 4.07 4.07 0 0 0 .413 3.123 4.1 4.1 0 0 0 2.504 1.918 4.1 4.1 0 0 0 3.131-.411 4.115 4.115 0 0 0 1.51-5.623m-.514 7.34a6.08 6.08 0 0 1-4.64.61 6.07 6.07 0 0 1-3.713-2.842 6.05 6.05 0 0 1-.61-4.63 6.06 6.06 0 0 1 2.848-3.704c.286-.165.584-.298.887-.414L16.4 39.16l-2.404 1.388L13 38.831l4.821-2.784 1.143 5.885c.6-.022 1.209.046 1.805.204a6.07 6.07 0 0 1 3.714 2.844c1.685 2.912.68 6.651-2.238 8.333m1.932-30.746a4.131 4.131 0 0 0-5.636 1.507 4.08 4.08 0 0 0-.414 3.124 4.1 4.1 0 0 0 1.924 2.5c.954.55 2.065.697 3.13.41a4.116 4.116 0 0 0 .995-7.542m3.187.448a6.093 6.093 0 0 1-3.668 9.01 6.097 6.097 0 0 1-4.64-.61 6.07 6.07 0 0 1-2.85-3.703 6.05 6.05 0 0 1 .612-4.63c1.686-2.913 5.434-3.915 8.353-2.233.33.19.631.41.912.648l2.537-2.199-2.407-1.39.996-1.718 4.816 2.783zm20.092-4.912a4.128 4.128 0 0 0-8.254 0 4.127 4.127 0 0 0 4.127 4.117 4.126 4.126 0 0 0 4.127-4.117m6.377 4.597-5.097-1.754a6.12 6.12 0 0 1-5.407 3.258c-3.373 0-6.116-2.737-6.116-6.1 0-3.365 2.743-6.103 6.116-6.103s6.116 2.738 6.116 6.102c0 .327-.033.646-.084.96l2.484.855v-2.545h1.988zm-9.829 9.927-1.821-.797-7.006 15.92 1.822.798zm7.56 7.595-5.741-5.594-1.388 1.42 4.08 3.975-4.563 3.416 1.195 1.586zm-18.109 4.045-5.74-5.593 6.417-4.804 1.194 1.587-4.562 3.415 4.079 3.976z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgCodeStar);
export default Memo;