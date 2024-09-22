import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCoffeeScriptLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#28334C"
      d="M66.708 90.68c17.462 4.443 39.812 6.665 66.694 6.665 27.504 0 49.321-2.222 66.738-6.665 18.573-4.31 27.505-10.131 27.505-15.64 0-3.91-3.999-7.732-11.242-10.665 1.644 1.111 2.933 2.933 2.933 4.932 0 5.599-8.443 10.176-25.327 13.997-15.685 3.421-35.636 5.865-59.985 5.865-23.505 0-44.389-2.444-59.496-5.643-16.218-3.999-24.705-8.309-24.705-13.996 0-2.355 1.067-4.355 4.31-6.665-10.13 3.91-15.64 7.242-15.64 12.219.578 5.643 9.642 11.286 28.215 15.596m39.057-17.951c18.928-1.644 24.438-13.819 46.61-15.818 10.886-.845 17.818 1.332 18.529 5.154.666 3.599-4.755 5.998-11.331 6.487-9.064.933-12.797-2.31-13.552-5.42-6.754.755-7.82 3.598-7.465 5.553.756 3.822 8.887 7.687 22.928 6.354 15.818-1.244 21.15-7.465 19.817-13.73-1.644-8.175-13.819-15.018-35.635-12.93-27.993 2.489-27.816 15.508-46.877 17.063-7.82.755-12.175-1.111-12.93-4.177-.49-3.11 3.332-4.577 7.82-4.932 4.177-.444 9.242.31 11.641 1.644 1.778-.933 2.355-1.866 2.178-2.933-.845-2.888-6.621-4.176-13.82-3.643-14.173 1.244-14.173 7.598-13.684 10.397 1.332 7.332 12.263 12.175 25.771 10.93m95.131 31.947c-17.507 4.088-39.812 6.754-66.739 6.754-27.459 0-49.854-2.844-67.271-6.665-15.64-3.999-23.994-8.442-26.927-12.975 1.511 10.22 4.088 20.129 7.42 29.548-3.998 2.489-7.597 5.599-10.841 9.776a37.54 37.54 0 0 0-8.487 25.815 30.07 30.07 0 0 0 11.864 21.817c7.243 5.643 15.063 7.331 23.994 5.643 3.421-.578 7.242-2.311 10.753-3.466-7.332 0-13.508-2.355-19.64-7.242-6.754-4.666-11.241-11.997-12.441-20.129-1.644-7.82 0-15.107 4.443-21.505 1.022-1.244 2.088-2.355 3.244-3.333 2.488 6.088 5.154 12.086 8.175 17.64 6.754 10.264 13.508 19.151 20.262 28.837 2.933 5.643 4.799 11.242 6.132 16.84a32.35 32.35 0 0 0 18.573 12.486c9.597 3.333 19.595 4.843 29.814 4.266h1.067a86.1 86.1 0 0 0 30.747-4.31 35.3 35.3 0 0 0 17.996-12.442h.577c1.067-5.554 2.889-11.152 5.555-16.84 6.664-9.731 13.507-18.573 20.172-28.837A174 174 0 0 0 228 91.879c-3.644 5.021-12.041 9.376-27.104 12.797"
    />
  </svg>
);
const Memo = memo(SvgCoffeeScriptLight);
export default Memo;