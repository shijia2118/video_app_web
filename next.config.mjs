/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildCache: false, // 关闭 Webpack 缓存
  },
}

export default nextConfig
