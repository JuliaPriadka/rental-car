import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ac.goit.global',
        port: '',
        pathname: '/**', // Разрешает любые пути и папки на этом домене
      },
    ],
  },
};

export default nextConfig;
