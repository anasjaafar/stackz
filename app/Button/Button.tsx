"use client";

import React, { useMemo } from "react";
import styles from "./styles.module.css";

type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  buttonStyle?: "default" | "frameless";
  disabled?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    buttonStyle = "default",
    disabled = false,
    className = "",
    leftIcon,
    rightIcon,
  } = props;

  const btnClass = useMemo(
    () => `
    ${styles.button} 
    ${buttonStyle === "default" && styles[variant]} 
    ${styles[size]} 
    ${buttonStyle === "frameless" && styles.frameless} ${className}`,
    [buttonStyle, className, size, variant]
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={btnClass}
      disabled={disabled}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
