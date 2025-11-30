import { NextPage } from "next";
import Link from "next/link";

const Button: NextPage<IButtonProps> = ({
  children,
  variant,
  className,
  href,
  target,
  ...props
}) => {
  const btnVariant =
    variant === "primary"
      ? "bg-accent-100 text-primary-100 hover:bg-accent-600"
      : variant === "secondary"
        ? "bg-accent-500 text-secondary-400 hover:bg-accent-700"
        : variant === "ghost"
          ? "bg-transparent text-secondary-400 border border-secondary-400 hover:border-secondary-400/50"
          : "";

  if (href) {
    return (
      <Link
        href={href}
        className={`text-sm md-text-base rounded-lg px-3.5 py-2.5 shadow-md transition-all duration-300 ${btnVariant} ${className}`}
        target={target}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`text-sm md-text-base rounded-lg px-3.5 py-2.5 shadow-md transition-all duration-300 ${btnVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
