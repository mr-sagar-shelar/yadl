import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgWickr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="Wickr_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Wickr_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M33 25h14v-5.75c0-2.748-2.74-5.25-5.75-5.25h-2.5C35.74 14 33 16.502 33 19.25zm19 2H28c-.552 0-1 .449-1 1v20c0 .551.448 1 1 1h24c.552 0 1-.449 1-1V28c0-.551-.448-1-1-1m-21-2v-5.75c0-3.862 3.621-7.25 7.75-7.25h2.5c4.129 0 7.75 3.388 7.75 7.25V25h3c1.654 0 3 1.346 3 3v20c0 1.654-1.346 3-3 3H28c-1.654 0-3-1.346-3-3V28c0-1.654 1.346-3 3-3zm8.207 19.457 11.25-11.25-1.414-1.414-11.25 11.25zm3.75-11.25-1.414-1.414-11.25 11.25 1.414 1.414zM66 25.314v29.874c0 2.534-2.091 4.755-4.474 4.755l-24.48.055L37 67.006a1 1 0 0 1-1.707.701l-7.71-7.709-9.018-.054c-2.648 0-4.502-1.589-4.502-3.863L14 25.066C14 22.747 15.93 21 18.488 21H29v2H18.488C17.252 23 16 23.709 16 25.064l.063 31.015c0 1.775 2.089 1.865 2.508 1.865l9.435.056a1 1 0 0 1 .701.293l6.309 6.309.037-5.608a1 1 0 0 1 .998-.994l25.473-.057c1.396 0 2.476-1.481 2.476-2.755V25.314C64 24.038 62.884 23 61.512 23H51v-2h10.512C63.986 21 66 22.935 66 25.314"
      />
    </g>
  </svg>
);
const Memo = memo(SvgWickr);
export default Memo;
