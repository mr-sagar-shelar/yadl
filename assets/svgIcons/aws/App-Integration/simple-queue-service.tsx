import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSimpleQueueService = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Simple-Queue-Service_svg__a"
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
      <path fill="url(#Simple-Queue-Service_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m28.717 43.688 3.002-2.966a.99.99 0 0 0 .004-1.406l-3.002-3-1.419 1.402 1.288 1.288h-4.581v1.988h4.597l-1.3 1.284zm22.91.09 4.003-2.985c.25-.188.4-.482.4-.794a1 1 0 0 0-.4-.796l-4.003-2.981-1.201 1.59 1.601 1.194h-4.003v1.988h4.002l-1.601 1.193zM35.209 40c0 2.11-.365 4.101-1.048 5.833 1.8-.692 3.831-1.038 5.86-1.038 2.028 0 4.058.346 5.857 1.038-.681-1.732-1.047-3.722-1.047-5.833 0-2.11.366-4.1 1.047-5.833-3.6 1.383-8.116 1.383-11.717 0 .683 1.733 1.048 3.722 1.048 5.833m-4.902 9.651a.99.99 0 0 1 0-1.406c1.816-1.804 2.9-4.887 2.9-8.245s-1.084-6.44-2.9-8.245a.99.99 0 0 1 0-1.406 1.004 1.004 0 0 1 1.415 0c3.877 3.853 12.72 3.853 16.597 0a1.004 1.004 0 0 1 1.415 0 .99.99 0 0 1 0 1.406c-1.817 1.804-2.901 4.887-2.901 8.245s1.084 6.44 2.9 8.245a.99.99 0 0 1 0 1.406 1 1 0 0 1-1.414 0c-3.878-3.853-12.72-3.853-16.597 0a1.004 1.004 0 0 1-1.415 0m35.695-9.646c0-.927-.363-1.798-1.023-2.453a3.5 3.5 0 0 0-2.468-1.014c-.894 0-1.788.337-2.469 1.014a3.456 3.456 0 0 0 0 4.906 3.51 3.51 0 0 0 4.937 0 3.44 3.44 0 0 0 1.023-2.453m.392 3.859a5.5 5.5 0 0 1-3.883 1.595 5.5 5.5 0 0 1-3.884-1.595 5.437 5.437 0 0 1 0-7.718 5.52 5.52 0 0 1 7.767 0 5.437 5.437 0 0 1 0 7.718M20.98 40.028c0-.927-.363-1.798-1.023-2.453a3.48 3.48 0 0 0-2.468-1.016c-.932 0-1.808.36-2.469 1.016A3.43 3.43 0 0 0 14 40.028c0 .925.362 1.796 1.021 2.453 1.32 1.31 3.619 1.31 4.937 0a3.44 3.44 0 0 0 1.023-2.453m.392 3.859a5.5 5.5 0 0 1-3.883 1.595 5.5 5.5 0 0 1-3.884-1.595 5.44 5.44 0 0 1 0-7.718c2.143-2.128 5.626-2.128 7.767 0a5.44 5.44 0 0 1 0 7.718m33.524 10.97c-3.995 3.97-9.307 6.154-14.957 6.154s-10.963-2.185-14.957-6.155c-2.74-2.721-4.248-5.973-5.03-8.221l-1.892.65c.852 2.446 2.498 5.988 5.507 8.977C27.939 60.608 33.753 63 39.939 63c6.185 0 11.999-2.392 16.372-6.738 2.526-2.509 4.539-5.698 5.668-8.98l-1.893-.644c-1.033 3-2.876 5.92-5.19 8.218M19.95 33.366l-1.889-.653c1.21-3.464 3.168-6.653 5.512-8.98C27.943 19.39 33.755 17 39.939 17s11.996 2.391 16.366 6.733c2.466 2.45 4.535 5.724 5.672 8.981l-1.889.652c-1.044-2.982-2.938-5.981-5.198-8.227-3.992-3.967-9.302-6.15-14.95-6.15-5.65 0-10.96 2.183-14.952 6.15-2.134 2.12-3.923 5.043-5.038 8.227"
      />
    </g>
  </svg>
);
const Memo = memo(SvgSimpleQueueService);
export default Memo;
