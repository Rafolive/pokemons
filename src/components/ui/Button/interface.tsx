import { ReactNode, ButtonHTMLAttributes } from "react"

type Variant = "success" | "warning" | "default"
type Size = "sm" | "md"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  startIcon?: Boolean
  endIcon?: Boolean
}
