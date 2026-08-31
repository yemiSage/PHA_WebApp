import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="work-in-progress">
        <p>Product Hub Africa</p>
        <h1>Working on this page</h1>
        <span>This page is being prepared. Please check back soon.</span>
        <Link href="/">Go home</Link>
      </main>
      <Footer />
    </>
  );
}
