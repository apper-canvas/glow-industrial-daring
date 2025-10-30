import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  className = "", 
  children,
  hover = false,
  ...props 
}, ref) => {
  const baseStyles = "bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden";
  const hoverStyles = hover ? "card-hover" : "";

  return (
    <div
      ref={ref}
      className={cn(baseStyles, hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;