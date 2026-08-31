import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Preserve every source asset byte-for-byte while still using next/image's
    // intrinsic sizing and native lazy-loading behavior.
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
