import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "large" | "small";
  arrow?: boolean;
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "large",
  arrow = false,
  className = "",
}: ButtonProps) {
  return (
    <Link className={`button button--${variant} button--${size} ${className}`} href={href}>
      <span>{children}</span>
      {arrow ? (
        <Image
          aria-hidden="true"
          className="button__icon"
          src={variant === "primary" ? "/assets/arrow-light.svg" : "/assets/arrow-dark.svg"}
          width={20}
          height={20}
          alt=""
        />
      ) : null}
    </Link>
  );
}
