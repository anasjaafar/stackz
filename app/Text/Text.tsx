"use client";

import React from "react";
import styles from "./styles.module.css";

type TextProps = {
  children: React.ReactNode;
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "bold";
  align?: "left" | "center" | "right";
  color?: "default" | "muted" | "primary" | "danger";
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  as: Component = "p",
  size = "md",
  weight = "normal",
  align = "left",
  color = "default",
  className = "",
}) => {
  const textStyle = `${styles.text} ${styles[size]}${styles[weight]}${styles[align]}${styles[color]}${className}`;
  return <Component className={textStyle}>{children}</Component>;
};

export default Text;
