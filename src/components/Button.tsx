import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import React from "react";

type ButtonVariation = "primary" | "secondary" | "success" | "warning" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

function getVariationCount(props: ButtonProps) {
  return [
    props.primary,
    props.secondary,
    props.success,
    props.warning,
    props.danger,
  ].filter(Boolean).length;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  // Runtime variation check (optional, for dev safety)
  if (getVariationCount({ primary, secondary, success, warning, danger } as ButtonProps) > 1) {
    throw new Error(
      "Only one of primary, secondary, success, warning, danger can be true"
    );
  }

  const classes = twMerge(
    classNames(rest.className, "flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
