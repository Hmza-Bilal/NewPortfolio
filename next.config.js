/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/NewPortfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/NewPortfolio/" : "",
  trailingSlash: true,
  distDir: "out",
}

module.exports = nextConfig
