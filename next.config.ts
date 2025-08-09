import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/RUTER",
  assetPrefix: "/RUTER/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;