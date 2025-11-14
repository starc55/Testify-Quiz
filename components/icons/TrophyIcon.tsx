import React from 'react';

const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 18.75h-9a9 9 0 119 0zM16.5 18.75a9 9 0 00-9 0m9 0c.75 0 1.375-.224 2-.625m-11.5.625c.625.401 1.25.625 2 .625m0 0V21m0-2.25c.75 0 1.375.224 2 .625m-2-.625a2.25 2.25 0 01-2.25-2.25V15m2.25 1.5V15m0 0a2.25 2.25 0 012.25-2.25V15m-4.5 0a2.25 2.25 0 01-2.25-2.25V15m0 0V11.25m2.25 2.25V15"
    />
  </svg>
);

export default TrophyIcon;
