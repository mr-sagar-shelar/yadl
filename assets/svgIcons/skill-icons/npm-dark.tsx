import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgNpmDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#Npm-Dark_svg__a)">
      <path
        fill="#242938"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <g clipPath="url(#Npm-Dark_svg__b)">
        <path
          fill="#CB3837"
          d="M23 88h210v68.571H128V168H81.333v-11.429H23zm11.667 57.143H58v-34.286h11.667v34.286h11.666V99.429H34.667zM93 99.429v57.142h23.333v-11.428h23.334V99.429zm23.333 11.428H128v22.857h-11.667zm35-11.428v45.714h23.334v-34.286h11.666v34.286H198v-34.286h11.667v34.286h11.666V99.429z"
        />
        <path
          fill="#fff"
          d="M34.667 145.143H58v-34.286h11.667v34.286h11.666V99.429H34.667zM93 99.429v57.142h23.333v-11.428h23.334V99.429zm35 34.285h-11.667v-22.857H128zM151.333 99.429v45.714h23.334v-34.286h11.666v34.286H198v-34.286h11.667v34.286h11.666V99.429z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Npm-Dark_svg__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
      <clipPath id="Npm-Dark_svg__b">
        <path fill="#fff" d="M23 88h210v80H23z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgNpmDark);
export default Memo;
