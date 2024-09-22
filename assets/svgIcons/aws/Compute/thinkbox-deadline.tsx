import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgThinkboxDeadline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Thinkbox-Deadline_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#C8511B" />
        <stop offset="100%" stopColor="#F90" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Thinkbox-Deadline_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M62.775 52.93 41.388 65.28V54.086l10.695-6.174 4.376 2.526 1-1.732-4.377-2.526V33.832l6.317-3.648 3.376-1.95zm-24.31-9.593v-4.442l3.848-2.221v4.442zm.923 9.594-9.694 5.597V47.334l6.77-3.91v1.645a1 1 0 0 0 1.5.866l1.424-.821zm0-24.695v7.817l-2.423 1.399a1 1 0 0 0-.5.866v2.798l-6.771 3.909V33.832zM28.695 32.1l-4.377-2.527-1 1.732 4.376 2.526V46.18L18 51.776V27.08l21.387-12.348v11.194zm22.387 2.887V46.18l-9.694 5.596v-7.818l2.425-1.4c.31-.178.5-.508.5-.866v-2.8zm-9.694-7.906 9.694-5.597v11.193l-6.77 3.908v-1.643a1 1 0 0 0-1.5-.866l-1.424.823zm22.888-1.444-4.877-2.816-1 1.733 3.376 1.949-8.693 5.019v-11.77a1.002 1.002 0 0 0-1.5-.866L41.388 24.77V14.73l3.376 1.95 1-1.731-4.873-2.814-.003-.002a1 1 0 0 0-1 0L16.5 25.637a1 1 0 0 0-.5.866v27.005c0 .358.19.688.5.866h.002l4.875 2.816 1-1.732L19 53.508l8.693-5.02V60.26a.998.998 0 0 0 1.5.866l10.194-5.885v10.038l-3.377-1.95-1 1.733 4.877 2.815a.99.99 0 0 0 1 0l23.387-13.503c.31-.178.5-.508.5-.866V26.503a1 1 0 0 0-.5-.866"
      />
    </g>
  </svg>
);
const Memo = memo(SvgThinkboxDeadline);
export default Memo;