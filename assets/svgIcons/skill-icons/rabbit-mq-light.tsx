import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgRabbitMqLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#F60"
      d="M196.813 112.43h-49.858a4.53 4.53 0 0 1-4.532-4.529V55.966A6.967 6.967 0 0 0 135.457 49h-17.798a6.966 6.966 0 0 0-6.967 6.966v51.621a4.867 4.867 0 0 1-4.846 4.866l-16.339.078a4.867 4.867 0 0 1-4.892-4.875l.101-51.679A6.963 6.963 0 0 0 77.75 49H59.967A6.966 6.966 0 0 0 53 55.966v145.426a6.184 6.184 0 0 0 6.185 6.184h137.628a6.184 6.184 0 0 0 6.187-6.184v-82.777a6.185 6.185 0 0 0-6.187-6.185m-23.381 54.602a8.11 8.11 0 0 1-8.111 8.108h-14.065a8.11 8.11 0 0 1-8.112-8.108v-14.058a8.11 8.11 0 0 1 8.112-8.108h14.065a8.11 8.11 0 0 1 8.111 8.108z"
    />
  </svg>
);
const Memo = memo(SvgRabbitMqLight);
export default Memo;
