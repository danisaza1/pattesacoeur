import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "pattesacoeur-brs3.vercel.app",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
