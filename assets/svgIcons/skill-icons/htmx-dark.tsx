import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgHtmxDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#Htmx-Dark_svg__a)">
      <path
        fill="#242938"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <path
        fill="#3D72D7"
        d="M102.25 180.12 137.58 75.6a1.75 1.75 0 0 1 1.84-1.18l14.65 1.5a1.75 1.75 0 0 1 1.49 2.29l-34.5 103.08a1.75 1.75 0 0 1-1.66 1.2l-15.5-.06a1.74 1.74 0 0 1-.796-.196 1.752 1.752 0 0 1-.854-2.114"
      />
      <path
        fill="#F5F5F5"
        d="M58.74 131.41q-1.76.69.02 1.33 18.17 6.57 35.04 12.33c.262.092.49.26.652.484s.252.491.258.766a180 180 0 0 1-.41 15.92 5.5 5.5 0 0 1-.34 1.55q-.36.93-1.28.55l-57.17-23.73a.68.68 0 0 1-.41-.66l.74-15.53a1.01 1.01 0 0 1 .61-.88l55.9-23.96a1.06 1.06 0 0 1 .886.017 1.1 1.1 0 0 1 .584.683q.45 1.53.56 3 .55 7.5.3 14.95a.74.74 0 0 1-.48.66 3139 3139 0 0 1-33.74 12.24q-.43.15-.87.17-.64.03-.85.11m139.7-.17-35.69-12.46a.35.35 0 0 1-.24-.33q-.15-7.4.06-15.07a9.9 9.9 0 0 1 .56-3.13q.19-.5.7-.36 1.7.47 3.18 1.08 27.17 11.18 54.29 22.47.58.24.58.87l.03 15.71a.97.97 0 0 1-.59.89l-56.91 23.5a1.04 1.04 0 0 1-1.276-.399 1 1 0 0 1-.154-.451q-.89-8.95-.45-17.58a.888.888 0 0 1 .6-.79q18.49-6.23 35.33-12.68 1.73-.66-.02-1.27"
      />
    </g>
    <defs>
      <clipPath id="Htmx-Dark_svg__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgHtmxDark);
export default Memo;