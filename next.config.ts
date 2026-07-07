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
      {
        // Bridge MLS listing photos (via CloudFront CDN)
        protocol: "https",
        hostname: "dvvjkgh94f2v6.cloudfront.net",
      },
      {
        // Bridge MLS photos (alternate CDN)
        protocol: "https",
        hostname: "*.bridgedataoutput.com",
      },
    ],
  },
  // Remove X-Powered-By header for security
  poweredByHeader: false,
};

export default nextConfig;
