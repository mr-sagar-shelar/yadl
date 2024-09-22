import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTypeScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#007ACC" rx={60} />
    <path
      fill="#fff"
      d="m56.611 128.849-.081 10.484h33.32v94.679h23.569000000000003v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565-.122-.162-20.399-.244-44.983-.203l-44.739.122zM206.567 118.108c6.501 1.626 11.459 4.511 16.01 9.224 2.357 2.52 5.851 7.112 6.136 8.209.081.325-11.053 7.802-17.798 11.987-.244.163-1.22-.894-2.317-2.519-3.291-4.795-6.745-6.868-12.028-7.233-7.761-.529-12.759 3.535-12.718 10.321 0 1.991.284 3.169 1.097 4.795 1.706 3.535 4.876 5.648 14.832 9.955 18.326 7.884 26.168 13.085 31.045 20.48 5.445 8.249 6.664 21.415 2.966 31.208-4.063 10.646-14.141 17.879-28.323 20.277-4.388.772-14.791.65-19.504-.203-10.281-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.121-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.259 2.357-2.154 3.332-4.389 3.332-7.68 0-2.967-.366-4.267-1.91-6.502-1.991-2.844-6.054-5.242-17.595-10.24-13.206-5.689-18.895-9.224-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.219-12.678-.447-16.335 2.722-12.759 12.353-21.658 26.25-24.3 4.511-.853 14.994-.528 19.424.569"
    />
  </svg>
);
const Memo = memo(SvgTypeScript);
export default Memo;
