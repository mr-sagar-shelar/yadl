import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCypressLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#Cypress-Light_svg__a)">
      <path
        fill="#F4F2ED"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <path
        fill="#1B1E2E"
        d="M101.859 109.68c6.978 0 12.648 3.731 15.555 10.211l.218.51 11.703-3.986-.236-.601c-4.525-11.067-14.974-17.93-27.24-17.93-8.632 0-15.647 2.767-21.444 8.464-5.76 5.662-8.668 12.779-8.668 21.152 0 8.319 2.926 15.399 8.668 21.042 5.797 5.698 12.812 8.464 21.444 8.464 12.266 0 22.697-6.88 27.24-17.929l.236-.601-11.721-3.986-.2.528c-2.617 6.389-8.432 10.193-15.555 10.193-4.852 0-8.96-1.693-12.194-5.042-3.29-3.386-4.943-7.663-4.943-12.669 0-5.042 1.618-9.229 4.943-12.778 3.253-3.35 7.342-5.042 12.194-5.042"
      />
      <path
        fill="url(#Cypress-Light_svg__b)"
        d="m152.669 210.085-3.489-11.522c31.474-9.575 52.627-38.135 52.627-71.063 0-9.083-1.617-17.966-4.816-26.376l11.231-4.277c3.725 9.793 5.615 20.095 5.615 30.671-.018 38.244-24.587 71.427-61.168 82.567"
      />
      <path
        fill="#69D3A7"
        d="M198.554 105.73c-9.613-31.418-38.162-52.515-71.054-52.515-4.471 0-8.941.4-13.302 1.183l-2.126-11.85a87.3 87.3 0 0 1 15.428-1.383c38.198 0 71.363 24.519 82.539 61.015z"
      />
      <path
        fill="url(#Cypress-Light_svg__c)"
        d="M46.706 157.935c-3.671-9.72-5.525-19.968-5.525-30.435 0-44.596 33.42-81.53 77.742-85.898l1.181 11.977c-38.144 3.768-66.91 35.55-66.91 73.921 0 9.011 1.598 17.839 4.742 26.194z"
      />
      <path
        fill="#1B1E2E"
        d="m175.148 98.977-16.664 42.302-16.791-42.302h-13.739l23.552 57.738-17.155 41.684 12.012 2.403 41.76-101.825z"
      />
      <path
        fill="url(#Cypress-Light_svg__d)"
        d="m136.513 193.157-2.526 6.134c-.581 1.402-1.908 2.366-3.398 2.421-1.036.036-2.053.073-3.107.073-32.983 0-62.35-22.116-71.418-53.789l-11.557 3.313c10.54 36.787 44.65 62.49 82.957 62.508h.018c1.199 0 2.398-.018 3.598-.073 6.16-.255 11.666-4.132 14.029-9.866l3.416-8.318z"
      />
    </g>
    <defs>
      <linearGradient
        id="Cypress-Light_svg__b"
        x1={220.45}
        x2={143.302}
        y1={128.046}
        y2={177.914}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.081} stopColor="#69D3A7" />
        <stop offset={1} stopColor="#69D3A7" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Cypress-Light_svg__c"
        x1={98.766}
        x2={50.215}
        y1={42.257}
        y2={145.059}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69D3A7" />
        <stop offset={0.823} stopColor="#2AB586" />
        <stop offset={1} stopColor="#1CAE7F" />
      </linearGradient>
      <linearGradient
        id="Cypress-Light_svg__d"
        x1={41.059}
        x2={168.061}
        y1={167.026}
        y2={206.818}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.077} stopColor="#1CAE7F" />
        <stop offset={0.164} stopColor="#1CA379" />
        <stop offset={0.316} stopColor="#1C8568" />
        <stop offset={0.516} stopColor="#1B554D" />
        <stop offset={0.719} stopColor="#1B1E2E" />
      </linearGradient>
      <clipPath id="Cypress-Light_svg__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgCypressLight);
export default Memo;