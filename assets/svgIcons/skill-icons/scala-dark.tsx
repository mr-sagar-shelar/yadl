import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgScalaDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#380D09"
      fillRule="evenodd"
      d="M65.186 102.421c1.745 2.405 16.456 6.941 38.399 11.665 21.944 4.206 44.764 20.812 62.512 15.691 12.004-3.47 25.027-34.39 25.027-38.983v-.471c0-3.207-2.405-5.781-6.488-7.922-16.738-8.553-19.907-11.702-26.112-9.995-32.212 8.892-89.085 4.347-93.337 30.015M65.186 165.206c1.745 2.442 16.456 6.94 38.399 11.674 24.518 4.47 45.839 19.039 63.596 13.91 12.004-3.471 23.943-32.609 23.943-37.211v-.453c0-3.196-2.405-5.78-6.488-7.911-12.768-6.79-29.639-14.268-35.834-12.561-32.269 8.873-75.402 10.825-83.615 32.552"
      clipRule="evenodd"
    />
    <path
      fill="#555"
      fillRule="evenodd"
      d="M65.007 115.916v.452a4 4 0 0 1 0-.452"
      clipRule="evenodd"
    />
    <path
      fill="#DE3423"
      fillRule="evenodd"
      d="M167.134 40.136c-29.667 8.572-76.732 13.41-102.09 13.41v48.423a.75.75 0 0 0 .18.452c17.304 0 70.725-5.658 102.956-14.522a122 122 0 0 0 16.493-5.479c3.942-1.773 6.488-3.64 6.488-5.582V28c-.038 4.602-12.023 8.676-24.027 12.136M167.134 102.931c-17.757 5.12-41.718 8.93-63.549 11.155-14.654 1.5-28.346 2.282-38.54 2.282v48.385a.76.76 0 0 0 .18.453c17.303 0 70.724-5.658 102.955-14.513a123 123 0 0 0 16.493-5.479c3.942-1.782 6.488-3.639 6.488-5.582V90.794c-.038 4.593-12.023 8.666-24.027 12.137M167.134 165.762c-17.757 5.121-41.718 8.921-63.549 11.156-14.673 1.499-28.384 2.282-38.578 2.282V228c17.125 0 70.819-5.611 103.136-14.513 11.91-3.281 22.981-7.016 22.981-11.071v-48.837c0 4.639-11.986 8.675-23.99 12.183"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgScalaDark);
export default Memo;