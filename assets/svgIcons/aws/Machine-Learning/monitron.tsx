import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMonitron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="Monitron_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Monitron_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M40.5 23c8.929 0 16.207 7.134 16.475 16h-7.206l-4.521-10.325c-.161-.37-.532-.576-.937-.599a1 1 0 0 0-.912.638l-7.297 18.81-4.049-7.977a1 1 0 0 0-.892-.547h-7.136c.268-8.866 7.546-16 16.475-16m0 33c-8.592 0-15.663-6.603-16.424-15h6.471l4.785 9.427c.179.352.554.579.941.546a1 1 0 0 0 .883-.637l7.232-18.639 3.811 8.704a1 1 0 0 0 .916.599h7.809c-.761 8.397-7.832 15-16.424 15M22.076 41c.768 9.5 8.729 17 18.424 17s17.656-7.5 18.424-17H67a1 1 0 0 0 1-1v-4.875A2.13 2.13 0 0 0 65.875 33h-3.812a22.3 22.3 0 0 0-1.71-4.122l2.697-2.698a2.13 2.13 0 0 0 0-3.006l-6.224-6.223c-.803-.804-2.203-.803-3.006 0l-2.697 2.697A22.5 22.5 0 0 0 47 17.936v-3.811A2.13 2.13 0 0 0 44.875 12h-9.75A2.13 2.13 0 0 0 33 14.125v3.811a22.5 22.5 0 0 0-4.123 1.712l-2.697-2.697c-.803-.804-2.203-.803-3.006 0l-6.224 6.223a2.13 2.13 0 0 0 0 3.006l2.697 2.698A22.3 22.3 0 0 0 17.937 33h-3.812A2.13 2.13 0 0 0 12 35.125V36h2v-.875c0-.069.056-.125.125-.125h4.567a1 1 0 0 0 .967-.745 20.4 20.4 0 0 1 2.095-5.047 1 1 0 0 0-.157-1.209l-3.233-3.232a.127.127 0 0 1 0-.179l6.224-6.223h.178l3.232 3.232a1 1 0 0 0 1.21.157 20.4 20.4 0 0 1 5.048-2.095c.438-.117.744-.513.744-.967v-4.567c0-.069.056-.125.125-.125h9.75c.069 0 .125.056.125.125v4.567c0 .454.306.85.744.967a20.4 20.4 0 0 1 5.048 2.095 1 1 0 0 0 1.21-.157l3.232-3.232h.178l6.224 6.223a.126.126 0 0 1 0 .178l-3.233 3.233a1 1 0 0 0-.157 1.209 20.4 20.4 0 0 1 2.095 5.047 1 1 0 0 0 .967.745h4.567c.069 0 .125.056.125.125V39h-7.025c-.269-9.969-8.443-18-18.475-18s-18.206 8.031-18.475 18H13a1 1 0 0 0-1 1v4.875c0 1.171.953 2.125 2.125 2.125h4.883c.429 1.424 1 2.806 1.704 4.123l-2.688 2.701a2.13 2.13 0 0 0 0 2.998l6.191 6.22c.401.404.935.626 1.505.626h.002c.569 0 1.104-.222 1.507-.626l2.674-2.688A22.3 22.3 0 0 0 34 62.063v3.812c0 1.171.953 2.125 2.125 2.125h8.75A2.13 2.13 0 0 0 47 65.875v-3.812a22.3 22.3 0 0 0 4.097-1.709l2.675 2.689c.402.403.937.625 1.506.625h.002c.57 0 1.104-.222 1.505-.626l6.191-6.22a2.133 2.133 0 0 0 0-2.999l-2.688-2.7A22.5 22.5 0 0 0 61.992 47h3.883A2.13 2.13 0 0 0 68 44.875V44h-2v.875a.125.125 0 0 1-.125.125h-4.64a1 1 0 0 0-.966.745 20.5 20.5 0 0 1-2.086 5.048A1 1 0 0 0 58.339 52l3.219 3.233c.048.05.048.13 0 .178l-6.191 6.22h-.178l-3.21-3.227a1.004 1.004 0 0 0-1.214-.157 20.3 20.3 0 0 1-5.022 2.095 1 1 0 0 0-.743.966v4.567a.125.125 0 0 1-.125.125h-8.75a.125.125 0 0 1-.125-.125v-4.567a1 1 0 0 0-.743-.966 20.3 20.3 0 0 1-5.022-2.095 1 1 0 0 0-1.214.157l-3.21 3.227.709.706-.887-.706-6.191-6.219a.13.13 0 0 1 0-.178L22.661 52a1 1 0 0 0 .156-1.207 20.5 20.5 0 0 1-2.086-5.048 1 1 0 0 0-.966-.745h-5.64a.125.125 0 0 1-.125-.125V41z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgMonitron);
export default Memo;