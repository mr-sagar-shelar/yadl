import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgVDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#242938" rx={60} />
    <path
      fill="#536B8A"
      d="m159.906 222.623 67.749-188.394c1.148-3.195-.662-5.524-4.042-5.199l-53.278 5.133c-3.379.326-7.03 3.193-8.146 6.399L99.481 220.606c-1.117 3.206.733 5.809 4.128 5.809h51.858c1.697 0 3.542-1.297 4.116-2.895z"
    />
    <g filter="url(#V-Dark_svg__a)">
      <path
        fill="#000"
        d="m152.178 223.52-28.207-81.485 4.029-2.519 28.711 83.107z"
      />
    </g>
    <path
      fill="#5D87BF"
      d="m32.387 29.03 53.278 5.133c3.38.326 7.034 3.192 8.156 6.396l64.034 182.953c.56 1.602-.363 2.903-2.061 2.903h-52.185c-3.395 0-7.085-2.594-8.234-5.789L28.345 34.229c-1.148-3.195.662-5.524 4.042-5.199"
    />
    <defs>
      <filter
        id="V-Dark_svg__a"
        width={58.502}
        height={109.765}
        x={111.09}
        y={126.635}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_148_1050"
          stdDeviation={6.44}
        />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(SvgVDark);
export default Memo;