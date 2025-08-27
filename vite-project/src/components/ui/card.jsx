import React from 'react';
import { cn } from "../../lib/utils";

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm border border-neutral-200 p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };