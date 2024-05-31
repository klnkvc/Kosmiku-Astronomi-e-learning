import React from "react";
import { Link } from "react-router-dom";

const Button = ({ variant = "primary", type, link, style, className, onClick, children }) => {
  let buttonClassName = "py-2 lg:py-3 px-14 rounded-[60px] transition-all duration-300 ";
  let textColorClass = "text-white text-sm lg:text-base";

  if (variant === "primary") {
    buttonClassName += "bg-based hover:bg-shadowBased";
  } else if (variant === "dark") {
    buttonClassName += "bg-black border-black hover:bg-zinc-900 hover:border-zinc-900 ";
  } else if (variant === "outline") {
    buttonClassName += "bg-none border-based border hover:bg-based";
  }

  return (
    <>
      {type === "clickable" && (
        <button onClick={onClick} className={`text-base ${buttonClassName} ${textColorClass} ${className}`} type="button">
          {children}
        </button>
      )}
      {type === "button" && (
        <button className={`text-base ${buttonClassName} ${textColorClass} ${className}`} type="submit">
          {children}
        </button>
      )}
      {link && (
        <Link className={`text-base h-fit ${buttonClassName} ${textColorClass} ${className}`} to={link}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
