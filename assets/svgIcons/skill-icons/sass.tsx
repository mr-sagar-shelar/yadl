import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#CD6799" rx={60} />
    <g clipPath="url(#Sass_svg__a)">
      <path
        fill="#fff"
        d="M200.107 139.163c-6.974.036-13.034 1.716-18.109 4.198-1.862-3.687-3.724-6.973-4.053-9.383-.365-2.811-.803-4.527-.365-7.886s2.41-8.141 2.373-8.506-.438-2.081-4.454-2.118-7.484.767-7.886 1.826c-.402 1.058-1.168 3.468-1.679 5.951-.694 3.651-8.033 16.685-12.231 23.512-1.351-2.665-2.519-5.002-2.775-6.864-.365-2.811-.803-4.527-.365-7.886s2.41-8.142 2.373-8.507-.438-2.081-4.454-2.117-7.485.766-7.886 1.825c-.402 1.059-.84 3.542-1.68 5.951-.839 2.41-10.587 24.17-13.143 29.792a168 168 0 0 1-3.249 6.754s-.037.11-.146.292c-.694 1.351-1.096 2.081-1.096 2.081v.037c-.547.986-1.132 1.898-1.424 1.898-.219 0-.62-2.628.073-6.206 1.461-7.558 4.929-19.314 4.893-19.715 0-.219.657-2.264-2.264-3.323-2.848-1.059-3.87.694-4.126.694-.255 0-.438.621-.438.621s3.177-13.217-6.06-13.217c-5.769 0-13.728 6.316-17.67 12.012a5003 5003 0 0 0-13.437 7.338c-2.153 1.205-4.38 2.41-6.462 3.542-.146-.146-.292-.329-.438-.475-11.172-11.939-31.836-20.372-30.96-36.4.329-5.842 2.337-21.176 39.686-39.796 30.741-15.151 55.203-10.953 59.438-1.643 6.06 13.29-13.107 37.97-44.87 41.548-12.122 1.351-18.474-3.322-20.08-5.074-1.68-1.826-1.936-1.935-2.557-1.57-1.022.547-.365 2.19 0 3.139.95 2.483 4.856 6.864 11.464 9.018 5.842 1.899 20.044 2.958 37.24-3.687 19.241-7.448 34.283-28.15 29.865-45.491-4.417-17.598-33.625-23.403-61.263-13.582-16.43 5.842-34.246 15.042-47.061 27.017-15.225 14.24-17.634 26.616-16.648 31.8 3.541 18.401 28.915 30.376 39.065 39.248-.511.292-.986.548-1.387.767-5.075 2.519-24.425 12.632-29.245 23.33-5.476 12.121.877 20.81 5.075 21.978 13.034 3.615 26.433-2.884 33.626-13.618s6.316-24.68 2.993-31.069a.8.8 0 0 0-.146-.219c1.315-.767 2.665-1.57 3.98-2.337a196 196 0 0 1 7.338-4.126c-1.241 3.396-2.154 7.448-2.592 13.29-.547 6.864 2.264 15.772 5.951 19.277 1.643 1.533 3.578 1.57 4.82 1.57 4.308 0 6.243-3.578 8.397-7.813 2.628-5.185 5.002-11.209 5.002-11.209s-2.958 16.284 5.074 16.284c2.921 0 5.878-3.797 7.193-5.732v.036s.073-.109.219-.365c.292-.475.474-.767.474-.767v-.073c1.169-2.044 3.797-6.681 7.704-14.385 5.038-9.93 9.894-22.343 9.894-22.343s.438 3.03 1.935 8.068c.876 2.958 2.702 6.207 4.162 9.347-1.168 1.643-1.898 2.555-1.898 2.555l.036.037c-.949 1.241-1.971 2.592-3.103 3.906-3.98 4.747-8.726 10.187-9.383 11.757-.767 1.862-.584 3.212.876 4.308 1.059.803 2.957.912 4.892.803 3.578-.256 6.098-1.132 7.339-1.68 1.935-.693 4.199-1.752 6.316-3.322 3.907-2.884 6.28-7.01 6.061-12.45-.11-2.994-1.096-5.987-2.3-8.799.365-.511.693-1.022 1.058-1.533 6.171-9.018 10.953-18.912 10.953-18.912s.438 3.03 1.935 8.069c.73 2.555 2.227 5.33 3.542 8.032-5.805 4.71-9.383 10.186-10.661 13.764-2.3 6.645-.511 9.638 2.884 10.332 1.534.329 3.724-.401 5.331-1.095 2.044-.657 4.454-1.789 6.754-3.469 3.906-2.884 7.667-6.9 7.448-12.34-.11-2.482-.767-4.929-1.68-7.302 4.929-2.044 11.282-3.176 19.387-2.227 17.379 2.045 20.811 12.888 20.153 17.452-.657 4.563-4.308 7.046-5.513 7.813-1.204.767-1.606 1.022-1.496 1.57.146.803.73.766 1.752.62 1.424-.255 9.127-3.687 9.456-12.084.548-10.734-9.675-22.454-27.747-22.344M66.043 184.362c-5.768 6.279-13.8 8.653-17.269 6.645-3.724-2.155-2.264-11.428 4.82-18.073 4.307-4.052 9.857-7.813 13.544-10.113.84-.511 2.081-1.241 3.578-2.154.256-.146.402-.219.402-.219l.876-.548c2.592 9.493.11 17.854-5.95 24.462m41.986-28.551c-2.008 4.893-6.206 17.415-8.762 16.722-2.19-.585-3.541-10.077-.438-19.46 1.57-4.71 4.892-10.332 6.827-12.523 3.14-3.505 6.608-4.673 7.448-3.249 1.059 1.862-3.833 15.443-5.075 18.51m34.648 16.576c-.84.438-1.643.73-2.008.511-.256-.146.365-.73.365-.73s4.345-4.674 6.061-6.791c.985-1.242 2.154-2.702 3.395-4.345v.475c0 5.586-5.403 9.346-7.813 10.88m26.725-6.098c-.621-.438-.511-1.898 1.57-6.462.803-1.789 2.702-4.782 5.951-7.667.365 1.169.621 2.3.584 3.359-.036 7.047-5.075 9.675-8.105 10.77"
      />
    </g>
    <defs>
      <clipPath id="Sass_svg__a">
        <path fill="#fff" d="M28 53h200v149.909H28z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgSass);
export default Memo;
