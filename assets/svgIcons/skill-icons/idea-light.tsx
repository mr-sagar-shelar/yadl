import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgIdeaLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="url(#Idea-Light_svg__a)"
      d="m78.571 184-48.285-38.286 24-44.571L123.143 128z"
    />
    <path
      fill="url(#Idea-Light_svg__b)"
      d="m228 81.429-3.714 115.714L147.429 228l-46.286-29.714L168.857 128l-29.714-64.857 26.571-32z"
    />
    <path
      fill="url(#Idea-Light_svg__c)"
      d="m228 81.429-60.857 72-28-90.286 26.571-32z"
    />
    <path
      fill="url(#Idea-Light_svg__d)"
      d="M124.286 194 44 223.143 56.857 178l16.857-55.429L28 107.143 56.857 28l62.857 7.714 61.715 70.572z"
    />
    <path fill="#000" d="M190.571 66.572H67.143V190H190.57z" />
    <path
      fill="#fff"
      d="M124.857 166.857H78.571v7.714h46.286zM112 92v-9.428H86.286V92h7.428v32.286h-7.428v9.428H112v-9.428h-7.143V92zM136.571 134.572c-4 0-7.428-.858-10-2.286-2.571-1.429-4.857-3.429-6.571-5.429l7.143-8c1.428 1.715 2.857 2.857 4.286 3.715s3.142 1.428 4.857 1.428c2 0 3.714-.571 5.143-2 1.142-1.428 1.714-3.428 1.714-6.571V82.572h11.428V116c0 3.143-.285 5.714-1.142 8-.858 2.286-2 4-3.715 5.714-1.428 1.429-3.428 2.858-5.714 3.429-2.286.857-4.571 1.429-7.429 1.429"
    />
    <defs>
      <linearGradient
        id="Idea-Light_svg__a"
        x1={30.256}
        x2={123.192}
        y1={142.541}
        y2={142.541}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.258} stopColor="#F97A12" />
        <stop offset={0.459} stopColor="#B07B58" />
        <stop offset={0.724} stopColor="#577BAE" />
        <stop offset={0.91} stopColor="#1E7CE5" />
        <stop offset={1} stopColor="#087CFA" />
      </linearGradient>
      <linearGradient
        id="Idea-Light_svg__b"
        x1={101.621}
        x2={254.926}
        y1={99.086}
        y2={183.914}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F97A12" />
        <stop offset={0.072} stopColor="#CB7A3E" />
        <stop offset={0.154} stopColor="#9E7B6A" />
        <stop offset={0.242} stopColor="#757B91" />
        <stop offset={0.334} stopColor="#537BB1" />
        <stop offset={0.432} stopColor="#387CCC" />
        <stop offset={0.538} stopColor="#237CE0" />
        <stop offset={0.655} stopColor="#147CEF" />
        <stop offset={0.792} stopColor="#0B7CF7" />
        <stop offset={1} stopColor="#087CFA" />
      </linearGradient>
      <linearGradient
        id="Idea-Light_svg__c"
        x1={208.651}
        x2={165.972}
        y1={150.615}
        y2={23.088}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE315D" />
        <stop offset={0.078} stopColor="#CB417E" />
        <stop offset={0.16} stopColor="#9E4E9B" />
        <stop offset={0.247} stopColor="#755BB4" />
        <stop offset={0.339} stopColor="#5365CA" />
        <stop offset={0.436} stopColor="#386DDB" />
        <stop offset={0.541} stopColor="#2374E9" />
        <stop offset={0.658} stopColor="#1478F3" />
        <stop offset={0.794} stopColor="#0B7BF8" />
        <stop offset={1} stopColor="#087CFA" />
      </linearGradient>
      <linearGradient
        id="Idea-Light_svg__d"
        x1={58.63}
        x2={186.639}
        y1={75.066}
        y2={286.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE315D" />
        <stop offset={0.04} stopColor="#F63462" />
        <stop offset={0.104} stopColor="#DF3A71" />
        <stop offset={0.167} stopColor="#C24383" />
        <stop offset={0.291} stopColor="#AD4A91" />
        <stop offset={0.55} stopColor="#755BB4" />
        <stop offset={0.917} stopColor="#1D76ED" />
        <stop offset={1} stopColor="#087CFA" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SvgIdeaLight);
export default Memo;
