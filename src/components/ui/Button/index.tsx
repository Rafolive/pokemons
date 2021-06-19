import React from "react"
import { ButtonProps } from "./interface"
import "./button.scss"

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "",
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type="button"
      className={`btn ${variant} ${size && `size-${size}`}`.trim()}
    >
      {children}
    </button>
  )
}
