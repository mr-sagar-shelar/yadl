import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgRemixDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#fff"
      fillRule="evenodd"
      d="M187.903 168.726c1.361 17.488 1.361 25.686 1.361 34.634h-40.462c0-1.949.035-3.732.07-5.54.11-5.621.224-11.482-.687-23.318-1.203-17.329-8.665-21.179-22.386-21.179H62.16v-31.528h65.565c17.331 0 25.997-5.272 25.997-19.231 0-12.275-8.666-19.713-25.997-19.713H62.16V52h72.786c39.236 0 58.734 18.532 58.734 48.134 0 22.142-13.72 36.582-32.256 38.989 15.647 3.129 24.794 12.034 26.479 29.603"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M187.903 168.726c1.361 17.488 1.361 25.686 1.361 34.634h-40.462c0-1.949.035-3.732.07-5.54.11-5.621.224-11.482-.687-23.318-1.203-17.329-8.665-21.179-22.386-21.179H62.16v-31.528h65.565c17.331 0 25.997-5.272 25.997-19.231 0-12.275-8.666-19.713-25.997-19.713H62.16V52h72.786c39.236 0 58.734 18.532 58.734 48.134 0 22.142-13.72 36.582-32.256 38.989 15.647 3.129 24.794 12.034 26.479 29.603"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M62.16 203.36v-23.503h42.783c7.146 0 8.698 5.3 8.698 8.461v15.042z"
    />
    <path
      stroke="#fff"
      strokeOpacity={0.8}
      strokeWidth={0.32}
      d="M62 203.36v.16h51.801v-15.202c0-1.602-.392-3.755-1.701-5.512-1.314-1.765-3.539-3.109-7.157-3.109H62v23.663Z"
    />
  </svg>
);
const Memo = memo(SvgRemixDark);
export default Memo;
