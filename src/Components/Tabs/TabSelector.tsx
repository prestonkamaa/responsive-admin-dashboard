import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`mr-8 group inline-flex items-center px-2 py-2 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? "border-green-600 text-green-600 focus:outline-none focus:text-green-600 focus:border-green-600"
        : "border-transparent text-black-500 hover:text-black-600 hover:border-black-300 focus:text-black-600 focus:border-black-300"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);