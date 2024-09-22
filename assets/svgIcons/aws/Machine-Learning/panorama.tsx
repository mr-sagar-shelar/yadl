import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="Panorama_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Panorama_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M60 32.092a3 3 0 0 0-6 0 3 3 0 0 0 6 0m2 0c0 2.75-2.243 4.987-5 4.987a5 5 0 0 1-4.898-3.99H47v27.929h-2V32.092c0-.55.447-.998 1-.998h6.102A5 5 0 0 1 57 27.104c2.757 0 5 2.238 5 4.988M43 16.987a3 3 0 0 0-6 0 3 3 0 0 0 6 0m-2 4.887v33.16h-2v-33.16c-2.279-.464-4-2.479-4-4.887C35 14.237 37.243 12 40 12s5 2.237 5 4.987c0 2.408-1.721 4.423-4 4.887M25 25.11a3 3 0 0 0 3-2.993 3 3 0 0 0-6 0 3 3 0 0 0 3 2.993m10 12.397v23.51h-2V38.26L24.726 35.9a1 1 0 0 1-.726-.959v-7.937c-2.279-.464-4-2.478-4-4.887 0-2.75 2.243-4.987 5-4.987s5 2.237 5 4.987c0 2.409-1.721 4.423-4 4.887v7.185l8.274 2.358c.43.123.726.514.726.96m18 24.508h4V60.02h-4zm6 0h4V60.02h-4zM62.18 68H17.821C14.606 68 12 65.4 12 62.194v-2.352c0-3.207 2.606-5.806 5.821-5.806H30v1.995H17.501A3.496 3.496 0 0 0 14 59.523v2.991a3.496 3.496 0 0 0 3.5 3.491h44.999A3.496 3.496 0 0 0 66 62.513v-2.991a3.496 3.496 0 0 0-3.5-3.491H50v-1.995h12.179c3.215 0 5.821 2.599 5.821 5.806v2.352C68 65.4 65.394 68 62.18 68"
      />
    </g>
  </svg>
);
const Memo = memo(SvgPanorama);
export default Memo;