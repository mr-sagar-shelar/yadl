import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFileCache = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="File-Cache_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#1B660F" />
        <stop offset="100%" stopColor="#6CAE3E" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#File-Cache_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M43 43.4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m0-4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3m9.293 13.479-2.586-2.586a1 1 0 0 0-1.677.464L47.219 54h-8.438l-.811-3.243a1 1 0 0 0-1.677-.464l-2.586 2.586-.646-4.525 3.646-3.647A1 1 0 0 0 37 44c0-7.753 4.287-13.523 6.001-15.521C44.717 30.471 49 36.225 49 44c0 .265.105.52.293.707l3.646 3.647zm-1.297-9.297c-.182-10.276-7.006-17.014-7.3-17.3a1 1 0 0 0-1.392 0c-.294.286-7.118 7.024-7.3 17.3l-3.711 3.711a1 1 0 0 0-.283.849l1 7a.998.998 0 0 0 1.697.565l2.751-2.751.572 2.287A1 1 0 0 0 38 56h10a1 1 0 0 0 .97-.757l.572-2.287 2.751 2.751a1 1 0 0 0 1.023.242 1 1 0 0 0 .674-.807l1-7a1 1 0 0 0-.283-.849zM47 66h2v-6h-2zm-10 0h2v-6h-2zm5 2h2V58h-2zm19-47H18a1 1 0 0 0-1 1v32.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5V14h12.586l3.707 3.707A1 1 0 0 0 31 18h30zm6 0h-4v-4a1 1 0 0 0-1-1H31.414l-3.707-3.707A1 1 0 0 0 27 12H13a1 1 0 0 0-1 1v41.5c0 1.93 1.57 3.5 3.5 3.5H29v-2H18.649c.218-.456.351-.961.351-1.5V23h47v33h-9v2h10a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1"
      />
    </g>
  </svg>
);
const Memo = memo(SvgFileCache);
export default Memo;