import { type HTMLAttributes, type ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: "default" | "surface" | "deep";
  container?: boolean;
  narrow?: boolean;
}

const backgroundStyles = {
  default: "bg-background",
  surface: "bg-surface",
  deep: "bg-deep",
};

export function Section({
  children,
  background = "default",
  container = true,
  narrow = false,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`
        section
        ${backgroundStyles[background]}
        ${className}
      `}
      {...props}
    >
      {container ? (
        <div
          className={`container ${narrow ? "max-w-3xl" : ""}`}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`
        mb-12
        ${centered ? "text-center" : ""}
        ${className}
      `}
    >
      <h2 className="text-balance">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-body max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
