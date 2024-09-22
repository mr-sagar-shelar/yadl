import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgDataZone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="DataZone_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#4D27A8" />
        <stop offset="100%" stopColor="#A166FF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#DataZone_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m32.707 21.707-1.414-1.414 8-8a1 1 0 0 1 1.414 0l8 8-1.414 1.414L40 14.414zm35 19-8 8-1.414-1.414L65.586 40l-7.293-7.293 1.414-1.414 8 8a1 1 0 0 1 0 1.414M47.293 58.293l1.414 1.414-8 8a.997.997 0 0 1-1.414 0l-8-8 1.414-1.414L40 65.586zm-25.586-11-1.414 1.414-8-8a1 1 0 0 1 0-1.414l8-8 1.414 1.414L14.414 40zM53.5 57c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5m-4.893-6H31.393A5.53 5.53 0 0 0 29 48.607V31.393A5.53 5.53 0 0 0 31.393 29h17.214A5.53 5.53 0 0 0 51 31.393v17.214A5.53 5.53 0 0 0 48.607 51M26.5 57c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5M23 26.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5M53.5 23c1.93 0 3.5 1.57 3.5 3.5S55.43 30 53.5 30 50 28.43 50 26.5s1.57-3.5 3.5-3.5m0 25q-.253.001-.5.025v-16.05q.247.024.5.025c3.032 0 5.5-2.467 5.5-5.5S56.532 21 53.5 21a5.506 5.506 0 0 0-5.5 5.5q.001.254.025.5h-16.05q.024-.246.025-.5c0-3.033-2.468-5.5-5.5-5.5a5.506 5.506 0 0 0-5.5 5.5c0 3.033 2.468 5.5 5.5 5.5q.254-.001.5-.025v16.05a6 6 0 0 0-.5-.025 5.506 5.506 0 0 0-5.5 5.5c0 3.033 2.468 5.5 5.5 5.5s5.5-2.467 5.5-5.5q-.001-.253-.025-.5h16.05a6 6 0 0 0-.025.5c0 3.033 2.468 5.5 5.5 5.5s5.5-2.467 5.5-5.5-2.468-5.5-5.5-5.5"
      />
    </g>
  </svg>
);
const Memo = memo(SvgDataZone);
export default Memo;
