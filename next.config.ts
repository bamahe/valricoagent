import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force trailing slashes so Google doesn't index both /page and /page/
  trailingSlash: true,
};

export default nextConfig;
