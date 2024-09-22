import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSublimeDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#Sublime-Dark_svg__a)">
      <path
        fill="#242938"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <g clipPath="url(#Sublime-Dark_svg__b)">
        <path
          fill="url(#Sublime-Dark_svg__c)"
          d="M194.595 127.919c0-2.049-1.514-3.23-3.372-2.643l-127.82 40.532c-1.863.59-3.373 2.733-3.373 4.777v41.426c0 2.049 1.51 3.234 3.372 2.643l127.821-40.528c1.858-.591 3.372-2.733 3.372-4.782z"
        />
        <path
          fill="#FF9800"
          d="M60.03 126.599c0 2.049 1.51 4.191 3.372 4.782l127.839 40.535c1.862.591 3.372-.594 3.372-2.639v-41.429c0-2.045-1.51-4.187-3.372-4.778L63.402 82.534c-1.862-.59-3.372.591-3.372 2.64z"
        />
        <path
          fill="#FF9800"
          d="M194.595 42.795c0-2.049-1.514-3.234-3.372-2.643L63.403 80.68c-1.863.59-3.373 2.733-3.373 4.782v41.425c0 2.049 1.51 3.23 3.372 2.643l127.821-40.532c1.858-.59 3.372-2.733 3.372-4.778z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Sublime-Dark_svg__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
      <clipPath id="Sublime-Dark_svg__b">
        <path fill="#fff" d="M40 40h175v175H40z" />
      </clipPath>
      <linearGradient
        id="Sublime-Dark_svg__c"
        x1={7476.84}
        x2={8041.22}
        y1={5387.54}
        y2={3500.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9700" />
        <stop offset={0.53} stopColor="#F48E00" />
        <stop offset={1} stopColor="#D06F00" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SvgSublimeDark);
export default Memo;