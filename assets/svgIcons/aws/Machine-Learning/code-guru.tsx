import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCodeGuru = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="CodeGuru_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#CodeGuru_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M26.637 21.525 22.8 17.688l-1.414 1.414 3.838 3.837zm31.978-2.423L57.2 17.688l-3.837 3.837 1.414 1.414zM42.27 27.49l-1.981-.283-2.559 17.907 1.98.283zm7.483 9.412a1 1 0 0 0 0-1.2l-3.837-5.116-1.6 1.2 3.387 4.516-3.386 4.516 1.599 1.2zm-14.07 3.916-3.387-4.516 3.387-4.516-1.6-1.2-3.837 5.116a1 1 0 0 0 0 1.2l3.837 5.116zM33.927 63h12.146l-2.115 3H36.04zm11.367 4.576 3.524-5A1 1 0 0 0 48 61H32a.999.999 0 0 0-.818 1.576l3.523 5c.188.265.493.424.818.424h8.954c.325 0 .63-.159.817-.424M32.046 48.752a1 1 0 0 0-.415-.812c-3.54-2.551-5.655-7.023-5.655-11.964 0-7.863 6.16-14.023 14.023-14.023 7.865 0 14.025 6.16 14.025 14.023 0 4.941-2.115 9.413-5.656 11.964-.26.188-.415.49-.415.812v7.015H32.046zm17.907 8.015v-7.515c3.81-2.967 6.07-7.888 6.07-13.276 0-8.985-7.037-16.023-16.024-16.023-8.985 0-16.023 7.038-16.023 16.023 0 5.388 2.26 10.309 6.07 13.276v7.515a1 1 0 0 0 1 1h17.907a1 1 0 0 0 1-1M59.187 37H65v-2h-5.813zM15 37h5.813v-2H15zm24-19h2v-6h-2z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgCodeGuru);
export default Memo;