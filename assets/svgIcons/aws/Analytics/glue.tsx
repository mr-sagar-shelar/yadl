import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgGlue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="Glue_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#4D27A8" />
        <stop offset="100%" stopColor="#A166FF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Glue_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M33 23h2v-2h-2zm-2 1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m10-7h2v-2h-2zm-2 1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m4 9h2v-2h-2zm-1-4h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m-2 10.5c-1.761 0-8.146-.075-12.299-1.096l10.145 16.062c.1.16.154.345.154.534v2.277c1.404.407 2.701.411 4 .016V49c0-.189.054-.374.154-.534l10.145-16.062C48.146 33.425 41.761 33.5 40 33.5m-15.746-2.808a1.32 1.32 0 0 1-.254-.755c0-2.845 9.384-3.371 14.978-3.432l.021 2c-6.872.075-11.071.859-12.551 1.443 1.57.656 6.195 1.552 13.552 1.552 7.338 0 11.957-.891 13.539-1.546-.646-.261-1.984-.647-4.66-.974l.242-1.985c6.062.74 6.879 1.902 6.879 2.942 0 .273-.095.523-.254.755L44 49.29V52a1 1 0 0 1-.627.928 8.8 8.8 0 0 1-3.307.656c-1.11 0-2.242-.215-3.412-.646A1 1 0 0 1 36 52v-2.71zm22.67 28.925a1 1 0 0 1-.217 1.09l-6 6a.997.997 0 0 1-1.414 0l-6-6A1 1 0 0 1 34 59h3v-3h2v4a1 1 0 0 1-1 1h-1.586L40 64.586 43.586 61H42a1 1 0 0 1-1-1v-4h2v3h3a1 1 0 0 1 .924.617"
      />
    </g>
  </svg>
);
const Memo = memo(SvgGlue);
export default Memo;
