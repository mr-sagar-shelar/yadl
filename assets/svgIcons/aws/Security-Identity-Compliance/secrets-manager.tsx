import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSecretsManager = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Secrets-Manager_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Secrets-Manager_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M38.76 43.36A1.241 1.241 0 1 0 40 42.12c-.683 0-1.24.556-1.24 1.24m-2 0A3.243 3.243 0 0 1 40 40.12a3.243 3.243 0 0 1 3.24 3.24A3.23 3.23 0 0 1 41 46.426V49h-2v-2.574a3.23 3.23 0 0 1-2.24-3.066M49 38H31v13h18v-3h-3v-2h3v-3h-3v-2h3zm-15-2h11.999L46 31c.001-2.616-2.857-4.998-5.996-5h-.003a6.6 6.6 0 0 0-4.238 1.575c-1.12.962-1.763 2.211-1.763 3.426zm14-4.999L47.999 36H50a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H30a1 1 0 0 1-1-1V37a1 1 0 0 1 1-1h2v-5c.001-1.798.897-3.599 2.459-4.942A8.63 8.63 0 0 1 40.001 24h.003c4.261.002 7.997 3.273 7.996 7.001M19.207 55.049l1.621-1.172c-2.735-3.78-4.247-8.215-4.432-12.877H19v-2h-2.601c.199-4.634 1.709-9.043 4.429-12.802l-1.621-1.173c-2.968 4.103-4.608 8.917-4.808 13.975H12v2h2.396c.186 5.086 1.828 9.926 4.811 14.049m34.631 4.159c-3.769 2.728-8.19 4.238-12.838 4.431V61h-2v2.639c-4.648-.192-9.07-1.702-12.841-4.431l-1.171 1.62c4.112 2.977 8.94 4.617 14.012 4.811V68h2v-2.361c5.072-.194 9.898-1.834 14.01-4.811zM26.159 20.866c3.771-2.728 8.193-4.238 12.841-4.43V19h2v-2.564c4.648.192 9.069 1.702 12.838 4.43l1.172-1.62c-4.112-2.976-8.938-4.616-14.01-4.81V12h-2v2.436c-5.072.193-9.9 1.833-14.012 4.81zM65.599 39c-.2-5.058-1.84-9.872-4.809-13.975l-1.621 1.173C61.89 29.957 63.4 34.366 63.599 39H61v2h2.602c-.186 4.662-1.697 9.097-4.433 12.877l1.621 1.172c2.984-4.123 4.625-8.963 4.812-14.049H68v-2zm-9.213-13.936 7.84-7.84-1.414-1.414-7.84 7.84zM23.612 55.01l-7.84 7.84 1.414 1.414 7.84-7.84zm5.054-27.757-14.841-14.84-1.414 1.414 14.841 14.84zM54.193 52.78l13.393 13.393-1.414 1.414-13.393-13.393z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgSecretsManager);
export default Memo;
