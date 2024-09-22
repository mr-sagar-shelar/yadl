import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMatlabDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#49D"
      d="m33 138.187 53.797-21.735a139.8 139.8 0 0 1 18.36-19.912c4.455-2.363 12.825-1.08 28.148-20.115C148.155 57.863 152.88 42 159.832 42c11.003 0 19.103 23.76 31.388 59.737a780 780 0 0 0 30.779 80.798c-12.824-11.948-23.759-24.84-36.247-24.503-11.61.27-24.502 14.04-38.61 31.725-11.205 14.175-26.055 23.895-31.86 23.693 0 0-14.985-42.39-27.54-49.275a17.82 17.82 0 0 0-16.132 1.35L33 138.12z"
    />
    <path
      fill="url(#Matlab-Dark_svg__a)"
      d="M153.151 46.861c-4.522 6.075-9.99 17.213-19.845 29.565-15.322 19.035-23.625 17.753-28.147 20.115a132.8 132.8 0 0 0-18.36 19.913l22.275 16.267c18.9-25.785 29.025-53.73 36.922-71.82a92 92 0 0 1 7.155-14.04"
    />
    <path
      fill="url(#Matlab-Dark_svg__b)"
      d="M159.9 42c-14.715 0-24.772 77.49-79.11 120.757 15.255-2.497 28.485 35.37 34.56 50.693 27-4.59 48.6-56.228 70.403-55.418 12.487.473 23.422 12.555 36.247 24.503C192.705 120.975 179.003 42 159.9 42"
    />
    <defs>
      <linearGradient
        id="Matlab-Dark_svg__a"
        x1={132.921}
        x2={120.839}
        y1={123.467}
        y2={84.452}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#512" />
        <stop offset={0.23} stopColor="#523" />
        <stop offset={0.36} stopColor="#534" />
        <stop offset={0.51} stopColor="#645" />
        <stop offset={0.66} stopColor="#568" />
        <stop offset={0.84} stopColor="#29D" />
      </linearGradient>
      <linearGradient
        id="Matlab-Dark_svg__b"
        x1={220.043}
        x2={98.543}
        y1={147.86}
        y2={118.025}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.081} stopColor="#C33" />
        <stop offset={0.189} stopColor="#DE5239" />
        <stop offset={0.313} stopColor="#F06E3E" />
        <stop offset={0.421} stopColor="#FA8042" />
        <stop offset={0.5} stopColor="#FE8643" />
        <stop offset={0.58} stopColor="#FA7F42" />
        <stop offset={0.696} stopColor="#EF6C3E" />
        <stop offset={0.833} stopColor="#DC4C37" />
        <stop offset={0.916} stopColor="#CF3633" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SvgMatlabDark);
export default Memo;
