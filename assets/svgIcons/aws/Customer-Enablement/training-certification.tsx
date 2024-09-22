import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTrainingCertification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Training-Certification_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#2E27AD" />
        <stop offset="100%" stopColor="#527FFF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Training-Certification_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m65.5 37.669-11-6.351a1.01 1.01 0 0 0-1 0l-11 6.35a1 1 0 0 0-.5.867v10.047l2-1.156v-8.315l10-5.772 10 5.773V50.66l-10 5.774-6.799-3.926-2 1.154 8.299 4.791a1 1 0 0 0 1 0l11-6.35a1 1 0 0 0 .5-.867V38.536a1 1 0 0 0-.5-.866M23 39.782c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5a6.51 6.51 0 0 1-6.5-6.5m42-13.817H16c-.553.317-1 .765-1 1.317v27.52a1 1 0 0 0 .504.868L36.78 67.833a1 1 0 0 0 .992 0L51.828 59.8l-2.004-1.158-4.215 2.409a17.1 17.1 0 0 0-1.885-5.65l-.426-.639-1.733 1 .448.67a15 15 0 0 1 1.714 5.695l-6.451 3.688L17.84 54.703a14.61 14.61 0 0 1 11.658-5.782c2.642 0 5.21.727 7.433 2.105l.344.283 1.851-1.069-.977-.8a1 1 0 0 0-.104-.076 16 16 0 0 0-4.755-1.985C36.077 45.98 38 43.106 38 39.782c0-4.686-3.813-8.5-8.5-8.5s-8.5 3.814-8.5 8.5c0 3.313 1.909 6.18 4.682 7.583A16.6 16.6 0 0 0 17 52.547V27.965h47v5l2 1.154v-6.837c0-.552-.447-1-1-1.317m-44.983-2 16.992-9.811L54 23.964h4l-20.491-11.83a1 1 0 0 0-1 0l-20.493 11.83zm13.574 34.092-1-1.733 19.236-11.106 1 1.731z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgTrainingCertification);
export default Memo;
