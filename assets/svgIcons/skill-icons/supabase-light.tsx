import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSupabaseLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <g clipPath="url(#Supabase-Light_svg__a)">
      <path
        fill="url(#Supabase-Light_svg__b)"
        d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097z"
      />
      <path
        fill="url(#Supabase-Light_svg__c)"
        fillOpacity={0.2}
        d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097z"
      />
      <path
        fill="#3ECF8E"
        d="M112.207 31.666c5.061-6.375 15.323-2.882 15.445 5.256l.782 119.029H49.4c-14.497 0-22.582-16.744-13.567-28.097z"
      />
    </g>
    <defs>
      <linearGradient
        id="Supabase-Light_svg__b"
        x1={127.529}
        x2={198.661}
        y1={125.299}
        y2={155.132}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361" />
        <stop offset={1} stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient
        id="Supabase-Light_svg__c"
        x1={95.993}
        x2={128.433}
        y1={82.12}
        y2={143.187}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <clipPath id="Supabase-Light_svg__a">
        <path fill="#fff" d="M32 28h192.92v200H32z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgSupabaseLight);
export default Memo;
