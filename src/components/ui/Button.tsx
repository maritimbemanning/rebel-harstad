import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gold text-[#0A0A0A]
    hover:bg-gold-light
    active:bg-gold-dark
  `,
  secondary: `
    bg-transparent text-gold
    border border-gold
    hover:bg-gold hover:text-[#0A0A0A]
  `,
  ghost: `
    bg-transparent text-gold
    hover:text-gold-light
    underline-offset-4 hover:underline
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      fullWidth,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-semibold uppercase tracking-widest
      rounded-sm
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? "w-full" : ""}
      ${className}
    `;

    // If href is provided, render as link
    if (href) {
      const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

      return (
        <a href={href} className={baseStyles} style={{ color: variant === 'primary' ? '#0A0A0A' : undefined }} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={baseStyles} style={{ color: variant === 'primary' ? '#0A0A0A' : undefined }} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
