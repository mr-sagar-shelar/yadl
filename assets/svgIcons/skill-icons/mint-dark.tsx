import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMintDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#Mint-Dark_svg__a)">
      <path
        fill="#242938"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <g clipPath="url(#Mint-Dark_svg__b)">
        <path
          fill="#fff"
          d="M127.5 215c48.325 0 87.5-39.175 87.5-87.5S175.825 40 127.5 40 40 79.175 40 127.5 79.175 215 127.5 215"
        />
        <path
          fill="#69B53F"
          d="M127.5 201.328c40.774 0 73.828-33.054 73.828-73.828S168.274 53.672 127.5 53.672 53.672 86.726 53.672 127.5s33.054 73.828 73.828 73.828"
        />
        <path
          fill="#F8F8F8"
          d="M79.648 83.066v61.524c.069 15.107 12.237 27.275 27.344 27.344h41.016c15.107-.069 27.275-12.237 27.344-27.344v-34.18c-.069-11.28-9.229-20.44-20.508-20.508-5.059 0-9.912 1.914-13.672 5.4a20.72 20.72 0 0 0-13.672-5.4c-11.279.069-20.439 9.229-20.508 20.508v34.18h13.672v-34.18c0-3.76 3.076-6.836 6.836-6.836s6.836 3.076 6.836 6.836v34.18h13.672v-34.18c0-3.76 3.076-6.836 6.836-6.836s6.836 3.076 6.836 6.836v34.18c.068 7.519-6.016 13.603-13.467 13.672h-41.221c-7.52.068-13.603-6.016-13.672-13.467V83.066z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Mint-Dark_svg__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
      <clipPath id="Mint-Dark_svg__b">
        <path fill="#fff" d="M40 40h175v175H40z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgMintDark);
export default Memo;
