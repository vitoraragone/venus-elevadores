import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  color,
  bgColor,
  onClick,
  ariaLabel,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`block w-fit bg-${bgColor} font-semibold text-lg text-${color} px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110 hover:bg-${bgColor}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;
