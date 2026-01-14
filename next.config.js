/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['buh74.su'], // если будут внешние изображения
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;