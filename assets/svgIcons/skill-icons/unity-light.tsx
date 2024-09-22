import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgUnityLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#4C4C4C"
      d="M216.042 167.814V74.743l-80.661-46.536v35.78l31.644 18.201c1.241.62 1.241 2.482 0 3.103l-37.642 21.716c-1.035.621-2.482.621-3.516 0L88.224 85.084c-1.24-.62-1.24-2.482 0-3.103l31.645-18.2V28L39.207 74.536v93.278-.414.414l31.024-17.787v-36.608c0-1.241 1.447-2.275 2.688-1.448l37.642 21.717c1.035.62 1.862 1.861 1.862 3.102v43.433c0 1.241-1.448 2.275-2.689 1.448l-31.644-18.2-31.024 17.786 80.662 46.536 80.662-46.536-31.024-17.786-31.644 18.2c-1.034.621-2.689-.207-2.689-1.448V136.79c0-1.241.621-2.482 1.861-3.102l37.643-21.717c1.034-.62 2.688.207 2.688 1.448v36.608z"
    />
    <path
      fill="#000"
      d="m127.521 228 80.662-46.535-31.024-17.787-31.644 18.2c-1.034.621-2.689-.207-2.689-1.448v-43.433c0-1.241.621-2.482 1.862-3.102l37.642-21.717c1.034-.62 2.689.207 2.689 1.448v36.608l31.023 17.787V74.743l-88.521 51.086z"
    />
    <path
      fill="gray"
      d="M135.174 28v35.78l31.644 18.201c1.241.62 1.241 2.482 0 3.103L129.176 106.8c-1.034.621-2.482.621-3.516 0L88.224 85.084c-1.24-.62-1.24-2.482 0-3.103l31.645-18.2V28L39.207 74.536l88.521 51.086 88.521-51.086z"
    />
    <path
      fill="#4C4C4C"
      d="m109.321 181.671-31.645-18.2-31.023 17.787 80.661 46.535V125.622L39 74.742v93.279-.414.414l31.024-17.787v-36.608c0-1.241 1.448-2.275 2.689-1.448l37.642 21.717c1.034.62 1.861 1.861 1.861 3.102v43.433c-.207 1.034-1.654 1.862-2.895 1.241"
    />
  </svg>
);
const Memo = memo(SvgUnityLight);
export default Memo;