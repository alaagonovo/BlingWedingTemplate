import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**", // This is already fine for flagcdn.com
      },
      {
        protocol: "https",
        hostname: "xcmumwwxdumpgaqwyavz.supabase.co",
        pathname: "/storage/v1/object/public/**", // Adjusted to match the full image path
      },
    ],
  },
};

export default nextConfig;
