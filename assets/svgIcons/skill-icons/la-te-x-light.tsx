import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgLaTeXLight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#000"
      d="M67.895 193.68h-2.147c-.86 8.853-2.062 19.614-17.178 19.614h-6.957c-4.037 0-4.208-.607-4.208-3.471v-46.085c0-2.951 0-4.166 8.073-4.166h2.834v-2.604c-3.092.261-10.821.261-14.343.261-3.35 0-10.049 0-12.969-.261v2.604h1.975c6.614 0 6.786.954 6.786 4.079v45.564c0 3.125-.172 4.079-6.786 4.079H21v2.691h44.576z"
    />
    <path
      fill="#000"
      d="M66.435 156.881c-.344-1.041-.516-1.388-1.632-1.388-1.117 0-1.374.347-1.718 1.388l-13.828 35.41c-.601 1.476-1.632 4.166-6.957 4.166v2.17h13.313v-2.17c-2.663 0-4.294-1.215-4.294-2.951 0-.434.085-.607.257-1.215l2.92-7.464h17.006l3.436 8.853c.171.347.343.781.343 1.041 0 1.736-3.264 1.736-4.895 1.736v2.17h16.92v-2.17h-1.203c-4.037 0-4.466-.607-5.067-2.343zm-3.436 6.162 7.644 19.615H55.355z"
    />
    <path
      fill="#000"
      d="M135.231 157.489H82.925L81.38 176.93h2.061c1.203-13.974 2.491-16.838 15.46-16.838 1.546 0 3.779 0 4.638.174 1.804.347 1.804 1.302 1.804 3.298v45.564c0 2.951 0 4.166-9.018 4.166h-3.436v2.691c3.521-.261 12.196-.261 16.147-.261s12.797 0 16.319.261v-2.691h-3.436c-9.018 0-9.018-1.215-9.018-4.166v-45.564c0-1.736 0-2.951 1.546-3.298.945-.174 3.264-.174 4.896-.174 12.883 0 14.171 2.864 15.374 16.838h2.147z"
    />
    <path
      fill="#000"
      d="M181.267 213.207h-2.147c-2.148 13.279-4.123 19.615-18.81 19.615h-11.337c-4.037 0-4.209-.608-4.209-3.472v-23.086h7.644c8.332 0 9.276 2.778 9.276 10.155h2.148v-22.913h-2.148c0 7.377-.944 10.068-9.276 10.068h-7.644v-20.743c0-2.864.172-3.471 4.209-3.471h10.994c13.14 0 15.374 4.773 16.748 16.837h2.147l-2.405-19.441H128.36v2.604h1.975c6.614 0 6.785.954 6.785 4.079v45.304c0 3.124-.171 4.079-6.785 4.079h-1.975v2.69h49.3z"
    />
    <path
      fill="#000"
      d="m207.119 182.571 11.767-17.358c1.804-2.777 4.724-5.554 12.368-5.641v-2.604h-20.442v2.604c3.436.087 5.326 1.996 5.326 3.992 0 .868-.172 1.042-.773 1.996l-9.792 14.581-10.993-16.664c-.172-.26-.602-.954-.602-1.302 0-1.041 1.89-2.516 5.497-2.603v-2.604c-2.92.261-9.19.261-12.453.261-2.663 0-7.988-.087-11.166-.261v2.604h1.632c4.724 0 6.356.607 7.988 3.037l15.717 24.041-14 20.916c-1.202 1.736-3.779 5.728-12.368 5.728v2.691h20.442v-2.691c-3.951-.086-5.411-2.43-5.411-3.992 0-.781.257-1.128.859-2.083l12.11-18.139 13.57 20.656c.172.347.43.694.43.955 0 1.041-1.89 2.517-5.583 2.603v2.691c3.006-.261 9.276-.261 12.454-.261 3.607 0 7.558.087 11.165.261v-2.691h-1.632c-4.466 0-6.27-.434-8.073-3.124z"
    />
    <path
      fill="teal"
      d="M66.772 20c1.51 2.72 3.08 5.04 4.718 7.052-.749-.11-1.52-.174-2.323-.165-1.583.017-3.276.28-5.11.857 3.2 2.68 5.905 4.636 8.29 6.143-3.685-1.177-7.654-1.345-12.317.868 3.406 2.13 6.264 3.671 8.766 4.822-3.9-.72-7.945-.392-12.359 2.519 2.915 1.299 5.435 2.274 7.672 3.015-3.672.128-7.305 1.262-10.862 4.636 3.085.765 5.728 1.272 8.053 1.61-2.845.575-5.637 1.94-8.342 4.667 2.096.453 3.983.795 5.71 1.053-2.126 1.028-4.14 2.62-5.979 5.06 2.416.187 4.553.27 6.474.278-2.325 1.076-4.501 2.776-6.443 5.504 3.45.172 6.332.155 8.818.01-2.732 1.117-5.25 3.004-7.403 6.267 4.287.063 7.683-.143 10.53-.495-3.534.96-6.806 2.89-9.498 6.97 3.463.05 6.354-.076 8.838-.31-3.036 1.654-5.644 4.164-7.361 8.445 3.126-.592 5.746-1.225 8.002-1.889-2.35 1.71-4.326 4.112-5.648 7.723a90 90 0 0 0 5.637-1.435c-1.507 1.822-2.67 4.103-3.325 7.093a88 88 0 0 0 6-2.447c-1.665 1.948-2.936 4.413-3.563 7.703 3.206-1.282 5.814-2.507 8.012-3.676-2.015 2.154-3.514 4.925-4.109 8.787 3.904-1.724 6.899-3.32 9.334-4.822-2.797 2.344-4.947 5.46-5.69 10.273 5.101-2.251 8.661-4.294 11.43-6.184-1.189 2.405-1.82 5.222-1.517 8.734 4.93-3.782 8.052-6.843 10.376-9.54-.157 1.742-.033 3.636.485 5.731 3.54-6.081 7.056-7.856 10.696-9.885-5.797 2.919-4.938 5.116-4.938 7.665 4.423-4.657 10.59-9.596 12.477-12.69-2.523 3.788-3.549 7.375-4.213 10.542-12.905 6.825-20.762 8.608-29.57 11.336 3.416 1.254 7.078 2.481 5.564 4.223l-4.037 4.027c2.58-.802 5.212-1.947 7.496-.382-.224 2.117-2.9 3.185-5.183 4.419 4.02-1.449 4.89-1.114 5.947-.774.528 2.536-1.305 3.9-2.499 5.575 10.128-7.7 23.342-13.783 32.648-16.324 13.09-4.408 29.968-8.99 34.558-20.164l4.605-18.43C161 78.17 165.95 72.13 168.298 64.79c14.985-2.899 27.101-1.852 39.741-1.528-1.152-.192-38.594-6.536-38.594-6.536-10.943-14.971-27.254-4.795-32.628 9.995-1.356 3.733-9.094 3.734-11.336-.01C116.614 47.62 89.687 27.438 66.773 20z"
    />
    <path
      fill="#fff"
      d="m155.177 59.07-.098.157c-.388.723-1.045 1.217-1.969 1.516-.923.298-2.106.394-3.484.334l-.866-.04.63.611c.319.308.409.553.413.768s-.088.446-.295.709c-.415.524-1.239 1.094-2.008 1.673l-.256.177.177.256c.641.984.935 1.742 1.004 2.323s-.066.999-.335 1.358c-.537.72-1.715 1.208-2.776 1.811l-.196.099.039.236c.091.554-.058 1.006-.453 1.457-.395.45-1.059.88-1.949 1.26l-.236.098.039.256c.178 1.185.534 2.217 1.28 2.874.682.602 1.715.76 3.032.493.229 1.263.558 2.412 1.319 3.17.77.767 1.991.994 3.622.57.367.885.904 1.515 1.516 1.93.672.454 1.551.637 2.273.862l.428-.461c-.717-.223-1.776-.567-2.347-.953s-1.035-.915-1.358-1.83l-.099-.316-.315.099c-1.677.515-2.607.283-3.248-.355-.64-.637-1-1.79-1.22-3.13l-.059-.354-.355.098c-1.382.361-2.199.177-2.756-.315-.52-.459-.828-1.272-1.004-2.283.801-.37 1.488-.776 1.929-1.28a2.42 2.42 0 0 0 .591-1.732c.977-.538 2.156-1 2.835-1.91.355-.476.539-1.101.453-1.83-.079-.665-.404-1.431-.965-2.343.689-.508 1.436-1.016 1.91-1.615.263-.333.461-.7.452-1.122-.004-.232-.227-.443-.354-.67 1.198.017 2.289-.062 3.189-.353.949-.307 1.694-.866 2.185-1.634 1.418.007 2.886.319 4.371.511 1.525.199 3.077.252 4.547-.393l-.275-.61c-1.301.57-2.69.547-4.174.354s-3.03-.543-4.587-.532z"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.661}
      d="M160.686 58.824a2.797 2.797 0 1 1-5.594 0 2.797 2.797 0 0 1 5.594 0Z"
    />
    <path
      fill="#fff"
      d="M169.041 56.2c-2.512 3.267-3.143 2.423-4.672 2.97l-.256.1.04.275c.588 3.281 2.533 4.324 4.051 5.517l.084-.266.404-.077c-1.521-1.195-3.186-2.208-3.791-4.997 1.113-.263 2.176.073 4.547-3.012zM72.344 33.88c4.746 2.942 12.556 5.976 17.572 9.146 2.759 1.757 5.237 3.507 7.165 5.02s3.354 3.075 3.879 3.583.88.268.531-.394-2.066-2.191-4.016-3.72-4.43-3.273-7.205-5.04c-5.552-3.535-12.067-6.696-17.925-8.596M71.49 27.05c1.99.46 4.926 2.156 8.19 3.972 3.265 1.815 6.824 4.049 10.08 6.22 3.256 2.172 5.766 4.073 7.773 5.605 1.906 1.63 2.847 2.687 3.212 2.684.05.01.099.01.177 0a.4.4 0 0 0 .275-.197.36.36 0 0 0 .02-.296c-.021-.063-.032-.097-.059-.137-.108-.162-.272-.314-.512-.532-.479-.437-1.272-1.079-2.283-1.85-2.023-1.544-4.962-3.648-8.23-5.828-3.266-2.179-6.85-4.432-10.137-6.26-1.17-.433-6.901-3.464-8.506-3.38M68.772 39.578c6.09 2.486 14.755 5.406 20.538 9.041 3.108 1.974 5.814 3.94 7.835 5.552a48 48 0 0 1 2.48 2.106c.627.576.979 1.098 1.182 1.24.423.3.748.1.551-.373-.148-.358-.638-.77-1.28-1.359-.64-.59-1.5-1.312-2.52-2.126a92 92 0 0 0-7.894-5.61c-6.258-3.975-13.74-7.469-20.892-8.471M64.085 45.103c4.746.003 14.552 4.348 18.685 6.525 6.7 3.574 12.795 8.168 16.162 11.379.374.356.92.042.492-.453-3.128-3.625-9.589-7.897-16.34-11.497s-13.74-5.96-19-5.954M61.342 51.355c7.136 1.044 15.69 3.925 21.922 7.046 3.478 1.766 6.58 3.657 8.958 5.335a28.7 28.7 0 0 1 4.567 4.055c.433.489.95.51.551-.354s-2.335-2.553-4.744-4.252c-2.41-1.7-5.53-3.595-9.036-5.375-7.01-3.56-14.994-6.36-22.218-6.455M63.697 56.666c-1.772-.154-3.368.21-4.994.413 6.34-.595 15.207 2.317 21.118 5.04 6.962 3.265 12.743 7.746 15.513 10.592.433.445.74-.122.512-.414-2.579-3.292-8.72-7.492-15.75-10.788-5.272-2.471-11.08-4.378-16.399-4.842M59.192 62.381c6.24.462 14.594 1.957 20.446 4.643 5.885 2.753 10.352 6.322 12.599 8.347.346.312.957.091.472-.472-2.05-2.383-6.82-5.68-12.776-8.465-5.957-2.787-13.194-4.571-20.741-4.053M64.796 67.574c-1.317-.045-1.934.202-3.204.339 4.235.186 10.965 1.313 14.681 2.574 4.823 1.674 8.789 4.194 11.045 6.162.435.38.76-.13.472-.453-2.113-2.37-6.406-4.64-11.3-6.339-3.67-1.273-7.745-2.15-11.694-2.283M64.614 73.715c9.053.611 14.528 2.206 18.724 5.965.314.282.81-.106.472-.472-4.306-4.666-12.784-5.966-19.196-5.493M71.585 79.153c-2.744-.22-5.04.38-7.541 1.212 7.319-1.167 10.362-.607 15.908 1.997.632.297.595-.403.315-.571-2.946-1.77-5.938-2.417-8.682-2.638M71.325 84.251c-2.595.23-4.799 1.121-6.615 2.599 7.248-2.794 9.252-2.238 14.795-.667.73.207.503-.495.217-.61-3.32-1.33-5.802-1.552-8.397-1.322M85.686 88.74c-3.867-.418-8.224.051-12.048.749-3.824.697-7.112 2.114-8.969 3.623 6.358-2.685 7.517-2.679 9.088-2.974 3.767-.687 7.5-.955 11.89-.748.398.019.378-.613.04-.65zM87.93 91.87c-4.19-.158-8.519.88-12.264 1.95s-6.524 2.53-8.357 4.02c3.709-1.783 7.16-2.99 8.534-3.39 3.692-1.056 7.417-1.97 12.127-1.91.366.005.603-.645-.04-.67M91.353 94.447c-3.947.583-8.085 1.749-11.694 2.973-3.607 1.224-6.175 2.678-7.85 4.418 4.29-2.463 6.65-3.327 8.047-3.808 3.564-1.209 6.891-2.05 11.615-2.933.567-.106.112-.684-.118-.65M93.36 97.735c-7.915 1.261-13.045 4.676-16.305 8.063 5.053-3.807 8.568-5.853 16.443-7.413.499-.1.348-.728-.138-.65M97.218 100.628c-7.962 1.226-12.553 6.066-14.465 9.261 5.037-5.032 8.957-7.771 14.602-8.611.572-.085.426-.737-.137-.65M99.62 103.149c-1.241.155-2.93 1.035-4.527 2.048s-2.801 2.245-3.52 3.833c1.924-1.985 2.693-2.522 3.874-3.282a17 17 0 0 1 4.331-1.949c.588-.171.144-.687-.157-.65"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.661}
      d="M160.686 58.824a2.797 2.797 0 1 1-5.594 0 2.797 2.797 0 0 1 5.594 0Z"
    />
    <path
      fill="#37C871"
      stroke="#fff"
      strokeWidth={0.661}
      d="M160.686 58.824a2.797 2.797 0 1 1-5.594 0 2.797 2.797 0 0 1 5.594 0Z"
    />
  </svg>
);
const Memo = memo(SvgLaTeXLight);
export default Memo;