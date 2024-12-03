// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
//   experimental: {
//     legacyBrowsers: false,
//     browsersListForSwc: true,
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {},
  images: {
    domains: ["flagcdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xcmumwwxdumpgaqwyavz.supabase.co",
        pathname: "/w20/**",
        // pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
