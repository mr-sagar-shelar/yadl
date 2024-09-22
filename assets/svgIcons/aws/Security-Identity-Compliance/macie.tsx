import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMacie = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="Macie_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Macie_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M55.556 41.837a449 449 0 0 0-5.258-4.012c1.729-3.054 3.75-6.532 4.652-7.262 2.483 1.535 10.401 15.24 11.006 18.834-1.946-1.036-6.76-4.75-10.4-7.56m-15.754 8.158c-.625-.385-1.828-2.08-3.207-4.254q.432-.683.926-1.472c1.862-2.968 4.942-7.881 6.05-8.533.641.199 2.212 1.254 4.11 2.638-2.294 4.068-6.342 11.201-7.879 11.62m-8.1-.644c-.696-.799-1.944-3.034-2.73-4.446-1.988-3.562-2.73-4.796-3.782-4.832-.868-.031-1.802.759-5.52 4.138-1.436 1.306-3.543 3.22-5.001 4.331 2.056-4.482 8.33-15.483 10.417-18.156.947 1.323 2.864 4.653 4.456 7.417 1.898 3.297 3.425 5.902 4.679 7.933-.99 1.546-1.958 2.994-2.518 3.615m34.834-4.273c-1.902-4.259-8.846-16.574-11.614-16.574-1.427 0-2.857 2.14-6.253 8.122-2.707-1.96-4.26-2.873-5.105-2.9-1.532-.025-3.188 2.21-7.759 9.5l-.389.62c-1.443-2.375-2.952-4.993-4.122-7.025-4.534-7.875-5.166-8.781-6.145-8.817-.69-.026-1.333-.048-6.53 8.937-2.333 4.031-5.284 9.479-6.253 11.912-.295.74-.661 1.662.02 2.24 1.277 1.084 3.271-.533 8.65-5.42 1.361-1.239 3.157-2.87 3.985-3.447.54.695 1.508 2.429 2.183 3.638 2.283 4.093 3.26 5.643 4.484 5.678h.038c.868 0 1.663-.846 3.677-3.937C37.502 50.814 38.697 52 39.718 52h.016c2.29-.026 4.817-4.002 9.574-12.422a467 467 0 0 1 5.006 3.825c10.494 8.098 12.099 9.051 13.21 7.857.62-.669.932-1.88-.987-6.183"
      />
    </g>
  </svg>
);
const Memo = memo(SvgMacie);
export default Memo;
