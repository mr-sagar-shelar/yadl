import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgBitBucketDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#BitBucket-Dark_svg__a)">
      <path
        fill="#242938"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <path
        fill="#2684FF"
        d="M46.292 52.03a5.66 5.66 0 0 0-2.357.48c-.74.328-1.4.81-1.93 1.415a5.4 5.4 0 0 0-1.14 2.082 5.4 5.4 0 0 0-.138 2.36l23.624 140.758a7.4 7.4 0 0 0 2.551 4.422 7.66 7.66 0 0 0 4.85 1.778h113.332a5.64 5.64 0 0 0 3.651-1.28 5.44 5.44 0 0 0 1.914-3.309l23.624-142.342a5.4 5.4 0 0 0-.138-2.36 5.4 5.4 0 0 0-1.141-2.081 5.56 5.56 0 0 0-1.929-1.414 5.66 5.66 0 0 0-2.358-.481zm99.475 101.731h-36.173L99.8 103.537h54.732z"
      />
      <path
        fill="url(#BitBucket-Dark_svg__b)"
        d="M206.616 103.467h-52.185l-8.758 50.184h-36.144l-42.677 49.72a7.62 7.62 0 0 0 4.865 1.801h113.27a5.63 5.63 0 0 0 3.648-1.279 5.43 5.43 0 0 0 1.912-3.306z"
      />
    </g>
    <defs>
      <linearGradient
        id="BitBucket-Dark_svg__b"
        x1={39228.9}
        x2={23538.7}
        y1={3347.5}
        y2={23660.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
      <clipPath id="BitBucket-Dark_svg__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgBitBucketDark);
export default Memo;