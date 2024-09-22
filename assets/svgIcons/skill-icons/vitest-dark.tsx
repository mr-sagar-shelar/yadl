import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgVitestDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#FCC72B"
      d="m178.09 92.319-47.813 69.131a4.118 4.118 0 0 1-6.778-.01 4.08 4.08 0 0 1-.706-2.502l1.914-38.168-30.892-6.551a4.1 4.1 0 0 1-2.956-2.484 4.07 4.07 0 0 1 .435-3.83l47.814-69.131a4.123 4.123 0 0 1 4.699-1.56 4.1 4.1 0 0 1 2.079 1.571 4.07 4.07 0 0 1 .705 2.502l-1.914 38.168 30.892 6.55a4.1 4.1 0 0 1 1.792.874 4.07 4.07 0 0 1 .729 5.44"
    />
    <path
      fill="#729B1B"
      d="M128.019 219.451a9.7 9.7 0 0 1-3.706-.734 9.7 9.7 0 0 1-3.14-2.101l-45.178-45.175a9.68 9.68 0 0 1 6.85-16.508 9.68 9.68 0 0 1 6.84 2.817l38.334 38.329 83.51-83.506a9.683 9.683 0 0 1 13.634.055 9.69 9.69 0 0 1 2.837 6.807 9.69 9.69 0 0 1-2.781 6.828l-90.356 90.353a9.63 9.63 0 0 1-6.844 2.835"
    />
    <path
      fill="#729B1B"
      fillOpacity={0.5}
      d="M127.98 219.451a9.7 9.7 0 0 0 3.706-.734 9.7 9.7 0 0 0 3.14-2.101l45.178-45.175a9.68 9.68 0 0 0-13.691-13.691l-38.333 38.329-83.51-83.506a9.683 9.683 0 0 0-13.634.055 9.683 9.683 0 0 0-.056 13.635l90.356 90.353a9.65 9.65 0 0 0 6.844 2.835"
    />
  </svg>
);
const Memo = memo(SvgVitestDark);
export default Memo;