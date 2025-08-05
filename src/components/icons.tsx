import type { SVGProps } from "react";

export function LocalEchoLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z" />
      <path d="M12 2a10 10 0 00-7.53 16.59" />
      <path d="M21.53 9.41a10 10 0 00-16.12-.02" />
    </svg>
  );
}
