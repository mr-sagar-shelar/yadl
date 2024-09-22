import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgAbletonLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#1F2120"
      d="M36 177.4c0 .9-.8 1.5-1.5 1.5H23.6c-.9 0-1.6-.6-1.6-1.5V78.6c0-.6.8-1.4 1.6-1.4h10.8c.8 0 1.5.8 1.5 1.4zm28.3 0c0 .9-.8 1.5-1.5 1.5H52c-.9 0-1.6-.6-1.6-1.5V78.6c0-.6.8-1.4 1.6-1.4h10.8c.8 0 1.5.8 1.5 1.4zm28.3 0c0 .9-.8 1.5-1.5 1.5H80.3c-.9 0-1.6-.6-1.6-1.5V78.6c0-.6.8-1.4 1.6-1.4h10.8c.8 0 1.5.8 1.5 1.4zm28.5 0c0 .9-.8 1.5-1.5 1.5h-10.8c-.9 0-1.6-.6-1.6-1.5V78.6c0-.6.8-1.4 1.6-1.4h10.8c.8 0 1.5.8 1.5 1.4zM232.5 77c.9 0 1.5.8 1.5 1.6v11.1c0 .9-.6 1.7-1.5 1.7h-96.1c-.6 0-1.4-.8-1.4-1.7V78.6c0-.8.8-1.6 1.4-1.6zm0 29.3c.9 0 1.5.8 1.5 1.6V119c0 .9-.6 1.7-1.5 1.7h-96.1c-.6 0-1.4-.8-1.4-1.7v-11.1c0-.8.8-1.6 1.4-1.6zm0 29.1c.9 0 1.5.8 1.5 1.6v11.1c0 .9-.6 1.7-1.5 1.7h-96.1c-.6 0-1.4-.8-1.4-1.7V137c0-.8.8-1.6 1.4-1.6zm0 29.1c.9 0 1.5.8 1.5 1.6v11.1c0 .9-.6 1.7-1.5 1.7h-96.1c-.6 0-1.4-.8-1.4-1.7v-11.1c0-.8.8-1.6 1.4-1.6z"
    />
  </svg>
);
const Memo = memo(SvgAbletonLight);
export default Memo;
