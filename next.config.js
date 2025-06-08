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
  // Replace 'your-repo-name' with your actual repository name
  basePath: process.env.NODE_ENV === "production" ? "/NewPortfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/NewPortfolio/" : "",
  trailingSlash: true,
}

module.exports = nextConfig
