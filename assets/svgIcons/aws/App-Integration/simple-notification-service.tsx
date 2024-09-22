import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSimpleNotificationService = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Simple-Notification-Service_svg__a"
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
      <path fill="url(#Simple-Notification-Service_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M17 38c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m24 26c-11.686 0-21.711-8.534-23.806-20.02A3.98 3.98 0 0 0 20.857 41H27v-2h-6.143a3.985 3.985 0 0 0-3.662-2.98C19.285 24.71 29.511 16 41 16c4.313 0 8.832 1.622 13.429 4.821l1.142-1.642C50.633 15.743 45.73 14 41 14c-12.73 0-24.051 9.865-25.937 22.521C13.839 37.207 13 38.5 13 40s.839 2.793 2.063 3.478C16.97 56.341 28.056 66 41 66c5.407 0 10.942-1.843 15.585-5.189l-1.17-1.622C51.11 62.292 45.991 64 41 64M30.101 36.442c1.854.453 4.174.558 5.899.558 1.642 0 3.823-.095 5.629-.494l-4.524 9.047A1 1 0 0 0 37 46v4.453c-.801.511-2.167 1.359-3 1.533V46a1 1 0 0 0-.077-.385zM36 33c4.025 0 6.174.604 6.841 1-.667.396-2.816 1-6.841 1s-6.174-.604-6.841-1c.667-.396 2.816-1 6.841-1m-3 21h1q.065 0 .128-.008c1.224-.159 2.781-1.105 4.144-1.979l.263-.168c.289-.184.465-.503.465-.845v-4.764l5.559-11.116c.274-.319.441-.686.441-1.12 0-2.61-5.639-3-9-3s-9 .39-9 3c0 .366.12.684.32.967L32 46.2V53a1 1 0 0 0 1 1m29-1c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m0-30c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m2 15c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m-10 3h6.143c.446 1.72 1.999 3 3.857 3 2.206 0 4-1.794 4-4s-1.794-4-4-4c-1.858 0-3.411 1.28-3.857 3H54V26h4.143c.446 1.72 1.999 3 3.857 3 2.206 0 4-1.794 4-4s-1.794-4-4-4c-1.858 0-3.411 1.28-3.857 3H53a1 1 0 0 0-1 1v14h-7v2h7v14a1 1 0 0 0 1 1h5.143c.446 1.72 1.999 3 3.857 3 2.206 0 4-1.794 4-4s-1.794-4-4-4c-1.858 0-3.411 1.28-3.857 3H54z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgSimpleNotificationService);
export default Memo;
