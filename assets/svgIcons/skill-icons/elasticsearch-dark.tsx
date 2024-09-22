import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgElasticsearchDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#00A9E5"
      d="M173.5 98h-52.25c.25 1.25.75 2.5 1 3.5 1.75 6 2.75 12.25 3.25 18.75.25 2.5.25 5.25.25 7.75s0 5.25-.25 7.75c-.5 6.5-1.5 12.75-3.25 18.75-.25 1.25-.75 2.5-1 3.5h52.25c16.5 0 29.75-13.5 29.75-30S190 98 173.5 98"
    />
    <path
      fill="#353535"
      d="M125.5 135.75c.25-2.5.25-5.25.25-7.75s0-5.25-.25-7.75c-.5-6.5-1.5-12.75-3.25-18.75-.25-1.25-.75-2.5-1-3.5H40.5Q36 112.25 36 128t4.5 30h80.75c.25-1.25.75-2.5 1-3.5 1.75-6 2.75-12.25 3.25-18.75"
    />
    <path
      fill="#00BFB3"
      d="M182.5 168h-65q-3 6.75-6.75 12.75c-3.75 6.25-8.25 11.75-13.25 17-1.75 1.75-3.5 3.25-5.25 5-3.5 3.25-7.5 6-11.5 8.75 15.75 10.5 34.75 16.5 55 16.5 34.75 0 65.25-17.75 83.25-44.5-9.25-9.5-22.25-15.5-36.5-15.5"
    />
    <path
      fill="#019B8F"
      d="M110.75 180.75q3.75-6 6.75-12.75H44.25C52 185.75 64.75 201 81 211.5c4-2.75 7.75-5.5 11.5-8.75 1.75-1.5 3.5-3.25 5.25-5 4.75-5 9.25-10.75 13-17"
    />
    <path
      fill="#F9B110"
      d="M97.5 58.25c-1.75-1.75-3.5-3.25-5.25-5-3.5-3.25-7.5-6-11.5-8.75C64.75 55 52 70.25 44 88h73.5c-2-4.5-4.5-9-7-13-3.5-6.25-8-11.75-13-16.75"
    />
    <path
      fill="#FED10A"
      d="M135.75 28c-20.25 0-39.25 6-55 16.5 4 2.75 7.75 5.5 11.5 8.75 1.75 1.5 3.5 3.25 5.25 5 5 5.25 9.5 10.75 13.25 17q3.75 6 6.75 12.75h65c14.25 0 27.25-6 36.5-15.5C201 45.75 170.5 28 135.75 28"
    />
  </svg>
);
const Memo = memo(SvgElasticsearchDark);
export default Memo;