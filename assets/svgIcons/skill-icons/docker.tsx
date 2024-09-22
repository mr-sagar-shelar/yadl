import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgDocker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#2396ED" rx={60} />
    <path
      fill="#fff"
      d="M141.187 122.123h20.717v-18.744h-20.717zm-24.662 0h20.716v-18.744h-20.716zm-24.17 0h20.717v-18.744H92.355zm-24.17 0H88.41v-18.744H68.186zm-24.662 0H64.24v-18.744H43.523zm24.663-22.69h20.223V80.69H68.186zm24.17 0h20.716V80.69H92.355zm24.169 0h20.716V80.69h-20.716zm0-22.69h20.716V58h-20.716zM228 113.739s-8.879-8.386-27.129-5.426c-1.973-14.305-17.264-22.69-17.264-22.69s-14.304 17.264-3.946 36.501c-2.959 1.48-7.892 3.453-15.291 3.453H28.726c-2.467 9.372-2.467 71.521 65.602 71.521 48.832 0 85.333-22.689 102.597-64.123C222.574 134.948 228 113.738 228 113.738"
    />
  </svg>
);
const Memo = memo(SvgDocker);
export default Memo;
