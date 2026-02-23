/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig