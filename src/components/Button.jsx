import React from "react";
import { Link } from "react-router-dom";

const Button = ({
    variant = "primary",
    type,
    link,
    style,
    className,
    onClick,
    children,
}) => {
    let buttonClassName = "py-4 px-10 rounded-[60px] ";
    let textColorClass = "text-white ";

    if (variant === "primary") {
        buttonClassName +=
            "bg-gradient-to-r from-based to-based-1 hover:from-based hover:to-shadowBased ";
    } else if (variant === "dark") {
        buttonClassName +=
            "bg-black border-black hover:bg-zinc-900 hover:border-zinc-900 ";
    } else if (variant === "outline") {
        buttonClassName +=
            "bg-transparant border border-based hover:bg-gradient-to-r hover:from-based hover:to-shadowBased text-black ";
    }

    return (
        <>
            {type === "clickable" && (
                <button
                    onClick={onClick}
                    className={`text-base ${buttonClassName} ${textColorClass} ${className}`}
                    type="button"
                >
                    {children}
                </button>
            )}
            {type === "button" && (
                <button
                    className={`text-base ${buttonClassName} ${textColorClass} ${className}`}
                    type="submit"
                >
                    {children}
                </button>
            )}
            {link && (
                <Link
                    className={`text-base h-fit ${buttonClassName} ${textColorClass} ${className}`}
                    to={link}
                >
                    {children}
                </Link>
            )}
        </>
    );
};

export default Button;
