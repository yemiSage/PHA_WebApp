import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/app/programmes.css";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="programme-page">{children}</main>
      <Footer />
    </>
  );
}
