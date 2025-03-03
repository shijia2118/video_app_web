/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ 指定静态导出模式
  images: {
    unoptimized: true, // ✅ 允许 `next/image` 组件在静态导出时正常工作
  },
}

module.exports = nextConfig
