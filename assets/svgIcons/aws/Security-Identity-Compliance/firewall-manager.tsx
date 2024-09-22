import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFirewallManager = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient
        id="Firewall-Manager_svg__a"
        x1="0%"
        x2="100%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Firewall-Manager_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M63 40c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m5-3c0-2.757-2.243-5-5-5-.09 0-.174.022-.264.026a24.6 24.6 0 0 0-2.022-4.051l-1.697 1.058a22.7 22.7 0 0 1 1.776 3.503C59.146 33.355 58 35.039 58 37c0 2.547 1.922 4.632 4.388 4.938-.182 4.588-1.69 8.933-4.422 12.613l1.605 1.192c3.023-4.069 4.67-8.885 4.823-13.965C66.47 41.169 68 39.27 68 37M56 26c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m5-3c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5m-34-4c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3m8 0c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5m1.228-.527-.301-1.977c5.282-.802 10.753.156 15.39 2.653l-.949 1.761c-4.258-2.294-9.284-3.174-14.14-2.437M20 36c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3m5.343-12.738-1.252-1.56a24.7 24.7 0 0 0-7.135 9.302A5.003 5.003 0 0 0 12 36c0 1.983 1.17 3.686 2.848 4.493-.004.174-.02.345-.02.52a24.8 24.8 0 0 0 8.539 18.717l1.313-1.509a22.8 22.8 0 0 1-7.852-17.208l.001-.03c.058.002.112.017.171.017 2.757 0 5-2.243 5-5a5 5 0 0 0-3.039-4.597 22.7 22.7 0 0 1 6.382-8.141m26.233 33.361c-1.63 6.287-9.463 7.927-11.877 8.288-.596-2.024-1.95-7.976.692-13.663.167-.353.342-.706.538-1.056 1.506-2.692 2.72-5.206 2.324-8.703-.195-1.727-1.288-4.183-2.332-6.208 2.827 2.428 6.278 7.062 5.049 14.719a.998.998 0 0 0 1.614.938c.098-.079 2.11-1.744 2.989-5.818 1.214 1.551 2.695 4.94 1.003 11.503m-22.01-6.877c.088-.15.176-.3.277-.456 2.063-3.234 1.312-7.744.653-10.215 1.879 1.011 3.586 3.562 4.193 4.689a1 1 0 0 0 1.825-.142c1.882-5.351.683-9.25-.685-11.606.53.249 1.014.545 1.462.879 1.108 1.809 3.707 6.456 3.976 8.82.329 2.91-.702 5.031-2.085 7.503-.218.392-.415.784-.603 1.182-2.529 5.445-1.809 10.966-1.121 13.87-2.21-1.041-4.062-2.325-5.27-3.167-3.646-2.534-4.805-7.511-2.622-11.357m20.789-7.49a1 1 0 0 0-1.475.774 14 14 0 0 1-.665 3.123c-.382-10.264-8.829-14.436-9.699-14.838-1.439-1.079-3.162-1.791-5.277-2.161a.999.999 0 0 0-.812 1.753c.183.155 4.09 3.534 2.783 9.958-1.321-1.819-3.564-4.215-6.21-4.215a1 1 0 0 0-.933 1.362c.026.064 2.462 6.485.094 10.196-.113.175-.217.349-.351.579-2.672 4.709-1.249 10.84 3.236 13.958 1.619 1.128 4.327 3.016 7.616 4.196v-.001a1 1 0 0 0 .449.056c1.242-.113 12.192-1.349 14.402-9.872 2.933-11.383-2.908-14.731-3.158-14.868"
      />
    </g>
  </svg>
);
const Memo = memo(SvgFirewallManager);
export default Memo;