import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgBashDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#242938"
      fillRule="evenodd"
      d="m203.819 68.835-63.14-37.48a23.79 23.79 0 0 0-24.361 0l-63.14 37.48C45.642 73.31 41 81.575 41 90.522v74.961c0 8.945 4.643 17.215 12.18 21.689l63.14 37.473a23.8 23.8 0 0 0 12.179 3.354 23.8 23.8 0 0 0 12.178-3.354l63.14-37.473c7.536-4.474 12.182-12.744 12.182-21.689v-74.96c0-8.948-4.646-17.214-12.18-21.688"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m118.527 220.808-63.14-37.474c-6.176-3.666-10.013-10.506-10.013-17.852V90.523c0-7.346 3.837-14.186 10.01-17.85l63.143-37.48a19.55 19.55 0 0 1 9.972-2.747c3.495 0 6.943.95 9.973 2.747l63.14 37.48c5.204 3.089 8.714 8.438 9.701 14.437-2.094-4.469-6.817-5.684-12.32-2.47l-59.734 36.897c-7.448 4.354-12.94 9.24-12.945 18.221v73.604c-.004 5.378 2.168 8.861 5.504 9.871-1.096.19-2.201.322-3.319.322a19.55 19.55 0 0 1-9.972-2.747m85.292-151.974-63.14-37.478A23.8 23.8 0 0 0 128.499 28a23.8 23.8 0 0 0-12.181 3.356l-63.14 37.478C45.642 73.308 41 81.576 41 90.524v74.958c0 8.945 4.643 17.215 12.18 21.689l63.14 37.475A23.84 23.84 0 0 0 128.499 228a23.83 23.83 0 0 0 12.178-3.354l63.142-37.475c7.536-4.474 12.18-12.744 12.18-21.689V90.523c0-8.947-4.644-17.215-12.18-21.689"
      clipRule="evenodd"
    />
    <path
      fill="#47B353"
      fillRule="evenodd"
      d="m187.267 172.729-15.722 9.41c-.417.243-.723.516-.726 1.017v4.114c0 .503.338.712.754.467l15.966-9.703c.416-.243.48-.708.483-1.209v-3.629c0-.5-.338-.71-.755-.467"
      clipRule="evenodd"
    />
    <path
      fill="#242938"
      fillRule="evenodd"
      d="M153.788 138.098c.509-.258.928.059.935.725l.053 5.439c2.277-.906 4.255-1.148 6.047-.734.389.104.561.633.402 1.261l-1.197 4.82c-.093.364-.298.732-.545.961a1.3 1.3 0 0 1-.315.234.7.7 0 0 1-.472.077c-.818-.185-2.763-.61-5.823.94-3.21 1.625-4.333 4.414-4.311 6.484.027 2.472 1.295 3.221 5.673 3.296 5.834.097 8.355 2.646 8.416 8.522.06 5.77-3.02 11.966-7.732 15.763l.104 5.384c.006.648-.415 1.391-.924 1.649l-3.189 1.837c-.511.258-.93-.06-.937-.708l-.055-5.296c-2.731 1.135-5.499 1.409-7.267.699-.333-.13-.476-.622-.344-1.182l1.156-4.868c.092-.384.295-.768.571-1.012q.147-.142.299-.219c.183-.092.362-.112.514-.055 1.905.642 4.342.342 6.685-.844 2.977-1.506 4.968-4.542 4.937-7.558-.029-2.737-1.51-3.874-5.113-3.901-4.586.013-8.861-.891-8.932-7.642-.057-5.558 2.833-11.342 7.408-14.999l-.057-5.435c-.007-.668.401-1.403.926-1.667z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgBashDark);
export default Memo;