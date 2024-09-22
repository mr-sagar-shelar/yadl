import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMastodonDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#2B90D9"
      d="M218.324 148.035c-2.768 14.007-24.795 29.336-50.093 32.306-13.192 1.548-26.181 2.971-40.031 2.346-22.65-1.02-40.522-5.316-40.522-5.316 0 2.168.136 4.233.407 6.164 2.945 21.983 22.166 23.3 40.372 23.914 18.376.618 34.739-4.456 34.739-4.456l.755 16.338s-12.853 6.788-35.751 8.036c-12.626.682-28.303-.312-46.563-5.065-39.603-10.309-46.413-51.824-47.455-93.948-.318-12.507-.122-24.3-.122-34.164 0-43.073 28.697-55.699 28.697-55.699 14.47-6.535 39.299-9.283 65.112-9.491h.634c25.812.207 50.658 2.956 65.127 9.491 0 0 28.696 12.626 28.696 55.7 0 0 .36 31.78-4.002 53.844"
    />
    <path
      fill="#fff"
      d="M188.477 97.532v52.155h-21.011V99.065c0-10.671-4.566-16.087-13.698-16.087-10.097 0-15.157 6.425-15.157 19.13v27.708h-20.887v-27.708c0-12.705-5.062-19.13-15.159-19.13-9.132 0-13.697 5.416-13.697 16.087v50.622H67.857V97.532c0-10.66 2.76-19.13 8.303-25.397 5.716-6.266 13.203-9.479 22.496-9.479 10.752 0 18.894 4.064 24.277 12.193l5.234 8.628 5.234-8.628c5.383-8.129 13.525-12.193 24.278-12.193 9.292 0 16.778 3.213 22.496 9.48 5.542 6.266 8.302 14.737 8.302 25.396"
    />
  </svg>
);
const Memo = memo(SvgMastodonDark);
export default Memo;
