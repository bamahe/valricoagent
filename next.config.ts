import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force trailing slashes so Google doesn't index both /page and /page/
  trailingSlash: true,
  // Allow Unsplash images via next/image
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Remove X-Powered-By header for security
  poweredByHeader: false,
};

export default nextConfig;
