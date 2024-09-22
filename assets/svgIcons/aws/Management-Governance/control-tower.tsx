import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgControlTower = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Control-Tower_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#B0084D" />
        <stop offset="100%" stopColor="#FF4F8B" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Control-Tower_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m37.197 58.85-1.419 1.419-2.837-2.838 1.419-1.418zM23.009 44.664l2.84 2.838-1.42 1.418-2.838-2.838zm5.676 5.675 2.837 2.837-1.419 1.418-2.836-2.837zm24.56-18.799-2.844-2.829 1.414-1.422 2.845 2.829zm5.692 5.659-2.845-2.83 1.414-1.422 2.845 2.83zM44.71 23.05l1.415-1.421 2.844 2.829-1.414 1.422zm13.322 21.651 1.414 1.422-2.845 2.83-1.414-1.423zm-5.691 5.659 1.414 1.422-2.844 2.83-1.415-1.423zm-5.69 5.659 1.414 1.422-2.845 2.829-1.415-1.423zM22.15 37.197l-1.419-1.419 2.837-2.838 1.418 1.419zm11.348-11.349L32.08 24.43l2.839-2.838 1.418 1.418zm-5.674 5.674-1.418-1.419 2.837-2.836 1.418 1.418zm8.97 5.271a5.2 5.2 0 0 1 2.703-1.436v4.14h-4.14a5.2 5.2 0 0 1 1.436-2.704m7.413 0a5.2 5.2 0 0 1 1.436 2.704h-4.14v-4.14a5.2 5.2 0 0 1 2.704 1.436m0 7.414a5.2 5.2 0 0 1-2.704 1.436v-4.14h4.14a5.2 5.2 0 0 1-1.436 2.704m-7.414 0a5.2 5.2 0 0 1-1.436-2.704h4.14v4.14a5.2 5.2 0 0 1-2.704-1.436m-5.615-.404-2.3-2.3h4.455a7.2 7.2 0 0 0 2.042 4.122 7.2 7.2 0 0 0 4.122 2.042v4.455l-2.3-2.3-1.419 1.419 4.722 4.721 4.722-4.721-1.419-1.419-2.3 2.3v-4.455a7.2 7.2 0 0 0 4.122-2.042 7.2 7.2 0 0 0 2.042-4.122h4.455l-2.3 2.3 1.419 1.419 4.721-4.722-4.721-4.722-1.419 1.419 2.3 2.3h-4.455a7.196 7.196 0 0 0-6.164-6.163v-4.456l2.3 2.3 1.419-1.419-4.722-4.721-4.722 4.721 1.419 1.419 2.3-2.3v4.456a7.196 7.196 0 0 0-6.164 6.163h-4.455l2.3-2.3-1.419-1.419-4.721 4.722 4.721 4.722zm9.322 21.36-1.591-1.59L40.5 61.98l1.591 1.591zm-4.428-1.59L40.5 68l4.428-4.428-4.428-4.428zM15.837 40.5l1.59-1.591L19.02 40.5l-1.591 1.591zm1.59-4.428L13 40.5l4.428 4.428 4.428-4.428zM61.982 40.5l1.591-1.591 1.591 1.591-1.59 1.591zm1.591-4.428L59.144 40.5l4.428 4.428L68 40.5zM40.5 15.837l1.591 1.59L40.5 19.02l-1.591-1.591zm4.428 1.59L40.5 13l-4.428 4.428 4.428 4.428z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgControlTower);
export default Memo;
