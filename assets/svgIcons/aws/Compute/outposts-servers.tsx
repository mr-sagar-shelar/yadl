import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgOutpostsServers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Outposts-servers_svg__a"
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
      <path fill="url(#Outposts-servers_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M66 48.994c0-.55-.448-1-1-1H23c-.552 0-1 .45-1 1v6c0 .551.448 1 1 1h42c.552 0 1-.449 1-1zm2 0v6c0 1.654-1.346 3-3 3H23c-1.654 0-3-1.346-3-3v-6c0-1.654 1.346-3 3-3h42c1.654 0 3 1.346 3 3m-43 4h3v-2h-3zm6 0h6v-2h-6zm9 0h23v-2H40zM19.29 33.416q.01.07.01.142a1 1 0 0 1-.798.98c-1.703.448-4.502 1.8-4.502 5.846q0 .202.01.4c.09 1.862.764 5.061 4.266 5.534l-.267 1.982c-5.266-.712-5.921-5.86-5.997-7.422a10 10 0 0 1-.012-.494c0-3.622 1.941-6.389 5.238-7.549q-.01-.248-.01-.495c0-4.11 2.752-8.376 6.404-9.922 4.271-1.81 8.799-.91 12.106 2.407.946.95 1.734 2.084 2.353 3.385a4.87 4.87 0 0 1 4.236-.75c2.114.618 3.546 2.514 3.917 5.135 2.188.486 6.327 2.117 6.327 9.807h-2c0-6.21-2.747-7.52-5.433-7.983a1 1 0 0 1-.825-1.098c-.166-2.053-1.113-3.522-2.546-3.94-1.182-.346-2.449.115-3.23 1.174a1.01 1.01 0 0 1-.952.395 1 1 0 0 1-.795-.656c-.575-1.626-1.405-2.99-2.468-4.057-1.301-1.305-4.872-4.112-9.911-1.977-2.906 1.231-5.183 4.78-5.183 8.08q0 .545.062 1.076"
      />
    </g>
  </svg>
);
const Memo = memo(SvgOutpostsServers);
export default Memo;
