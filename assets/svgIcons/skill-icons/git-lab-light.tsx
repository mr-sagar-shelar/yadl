import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgGitLabLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#E24329"
      d="m127.999 220.001 37.562-113.192h-75.12L128 219.997z"
    />
    <path
      fill="#FC6D26"
      d="M127.999 220.001 90.441 106.809h-52.64l90.198 113.188z"
    />
    <path
      fill="#FCA326"
      d="m37.8 106.806-11.417 34.4c-1.043 3.136.094 6.574 2.822 8.513L128 220.001 37.8 106.809z"
    />
    <path
      fill="#E24329"
      d="M37.8 106.805h52.641L67.817 38.63c-1.164-3.507-6.235-3.507-7.397 0L37.8 106.808z"
    />
    <path fill="#FC6D26" d="m128 220.001 37.562-113.192h52.643L128 219.997z" />
    <path
      fill="#FCA326"
      d="m218.203 106.806 11.416 34.4c1.041 3.136-.1 6.574-2.824 8.513L128 220.001l90.203-113.192z"
    />
    <path
      fill="#E24329"
      d="M218.202 106.805h-52.64l22.622-68.175c1.165-3.506 6.235-3.506 7.397 0l22.624 68.178z"
    />
  </svg>
);
const Memo = memo(SvgGitLabLight);
export default Memo;