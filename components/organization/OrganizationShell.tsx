import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "@/app/organization.css";

export function OrganizationShell({ children, pageClass }: { children: ReactNode; pageClass: string }) {
  return <><Header /><main className={`inner-page ${pageClass}`}>{children}</main><Footer /></>;
}
