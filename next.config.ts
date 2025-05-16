import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/personal',
  assetPrefix: '/personal',
  trailingSlash: true,
};

export default nextConfig;
