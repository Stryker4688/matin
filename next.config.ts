// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // برای خروجی استاتیک
  basePath: process.env.NODE_ENV === "production" ? "/REPO_NAME" : "", // نام ریپو
  images: {
    unoptimized: true, // برای GitHub Pages نیاز است
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true, // برای GitHub Pages بهتر است
};

export default nextConfig;