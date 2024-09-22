import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPhotoshop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#001E36" rx={60} />
    <path
      fill="#31A8FF"
      d="M57.6 178.04V68.28c0-.747.32-1.173 1.067-1.173 1.813 0 3.52 0 5.973-.107 2.56-.107 5.227-.107 8.107-.213 2.88-.107 5.973-.107 9.28-.214 3.306-.106 6.506-.106 9.706-.106 8.747 0 16 1.066 21.974 3.306A38.1 38.1 0 0 1 128 78.52a34 34 0 0 1 7.787 12.16c1.6 4.48 2.453 9.067 2.453 13.867q0 13.76-6.4 22.72c-4.267 5.973-10.24 10.453-17.173 13.013-7.254 2.667-15.254 3.627-24 3.627-2.56 0-4.267 0-5.334-.107s-2.56-.107-4.586-.107v34.24c.106.747-.427 1.387-1.174 1.494H58.88c-.853 0-1.28-.427-1.28-1.387m23.253-90.347v35.84c1.494.107 2.88.214 4.16.214h5.654c4.16 0 8.32-.64 12.266-1.92 3.414-.96 6.4-2.987 8.747-5.654 2.24-2.666 3.307-6.293 3.307-10.986a17.56 17.56 0 0 0-2.454-9.494c-1.813-2.773-4.373-4.906-7.466-6.08-3.947-1.6-8.214-2.24-12.587-2.133-2.773 0-5.227 0-7.253.107-2.134-.107-3.627 0-4.374.106M204.8 117.027c-3.2-1.707-6.613-2.88-10.24-3.627-3.947-.853-7.893-1.387-11.947-1.387-2.133-.106-4.373.214-6.4.747-1.386.32-2.56 1.067-3.306 2.133-.534.854-.854 1.92-.854 2.88s.427 1.92 1.067 2.774c.96 1.173 2.24 2.133 3.627 2.88a98 98 0 0 0 7.573 3.52c5.76 1.92 11.307 4.586 16.427 7.786 3.52 2.24 6.4 5.227 8.426 8.854 1.707 3.413 2.56 7.146 2.454 10.986.106 5.014-1.387 10.027-4.16 14.187a26.73 26.73 0 0 1-11.947 9.493c-5.227 2.24-11.627 3.414-19.307 3.414-4.906 0-9.706-.427-14.506-1.387a43 43 0 0 1-10.88-3.413c-.747-.427-1.28-1.174-1.174-2.027v-18.56c0-.32.107-.747.427-.96s.64-.107.96.107c4.16 2.453 8.533 4.16 13.227 5.226 4.053 1.067 8.32 1.6 12.586 1.6 4.054 0 6.934-.533 8.854-1.493 1.706-.747 2.88-2.56 2.88-4.48 0-1.493-.854-2.88-2.56-4.267-1.707-1.386-5.227-2.986-10.454-5.013a65.3 65.3 0 0 1-15.146-7.68 27.6 27.6 0 0 1-8.107-9.067c-1.707-3.413-2.56-7.146-2.453-10.88 0-4.586 1.28-8.96 3.626-12.906 2.667-4.267 6.614-7.68 11.2-9.814 5.014-2.56 11.307-3.733 18.88-3.733 4.374 0 8.854.32 13.227.96 3.2.427 6.293 1.28 9.173 2.453.427.107.854.534 1.067.96.107.427.213.854.213 1.28v17.387c0 .427-.213.853-.533 1.067-.96.213-1.493.213-1.92 0"
    />
  </svg>
);
const Memo = memo(SvgPhotoshop);
export default Memo;