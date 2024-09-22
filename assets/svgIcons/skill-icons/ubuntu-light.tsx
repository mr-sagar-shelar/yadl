import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgUbuntuLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#Ubuntu-Light_svg__a)">
      <path
        fill="#F4F2ED"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <path
        fill="#F47421"
        d="M127.5 206.25c43.492 0 78.75-35.258 78.75-78.75s-35.258-78.75-78.75-78.75-78.75 35.258-78.75 78.75 35.258 78.75 78.75 78.75"
      />
      <path
        stroke="#fff"
        strokeWidth={8.55}
        d="M127.5 165.694c21.094 0 38.194-17.1 38.194-38.194s-17.1-38.194-38.194-38.194-38.194 17.1-38.194 38.194 17.1 38.194 38.194 38.194Z"
      />
      <path
        fill="#F47421"
        d="M73.95 142.266c8.155 0 14.766-6.611 14.766-14.766s-6.611-14.766-14.766-14.766-14.766 6.611-14.766 14.766 6.611 14.766 14.766 14.766"
      />
      <path fill="#000" d="M157.25 127.5h17.5z" />
      <path stroke="#F47421" strokeWidth={3.238} d="M157.25 127.5h17.5" />
      <path
        fill="#fff"
        d="M73.95 138.013c5.806 0 10.513-4.707 10.513-10.513s-4.707-10.513-10.513-10.513-10.513 4.707-10.513 10.513 4.707 10.513 10.513 10.513"
      />
      <path
        fill="#F47421"
        d="M141.487 73.742c-4.077 7.062-1.657 16.093 5.405 20.17s16.093 1.658 20.17-5.405c4.078-7.062 1.658-16.093-5.404-20.17-7.063-4.078-16.093-1.658-20.171 5.404"
      />
      <path fill="#000" d="m112.625 153.264-8.75 15.156z" />
      <path
        stroke="#F47421"
        strokeWidth={3.238}
        d="m112.625 153.264-8.75 15.156"
      />
      <path
        fill="#fff"
        d="M145.17 75.868c-2.903 5.028-1.18 11.458 3.848 14.361s11.458 1.18 14.361-3.848 1.18-11.458-3.848-14.361-11.458-1.18-14.361 3.848"
      />
      <path
        fill="#F47421"
        d="M167.062 166.493c-4.077-7.063-13.108-9.482-20.17-5.405-7.063 4.078-9.482 13.108-5.405 20.171 4.078 7.062 13.108 9.482 20.171 5.404s9.482-13.108 5.404-20.17"
      />
      <path fill="#000" d="m112.625 101.736-8.75-15.156z" />
      <path
        stroke="#F47421"
        strokeWidth={3.238}
        d="m112.625 101.736-8.75-15.156"
      />
      <path
        fill="#fff"
        d="M163.379 168.619c-2.903-5.028-9.332-6.751-14.361-3.848-5.028 2.903-6.751 9.333-3.848 14.361s9.333 6.751 14.361 3.848 6.751-9.332 3.848-14.361"
      />
    </g>
    <defs>
      <clipPath id="Ubuntu-Light_svg__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgUbuntuLight);
export default Memo;
