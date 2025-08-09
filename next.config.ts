import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/RUTER",  // Ruta base para GitHub Pages (ajustalo si es distinto)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
