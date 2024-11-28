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
    domains: ["xcmumwwxdumpgaqwyavz.supabase.co"], // Add your external domain here
  },
};

export default nextConfig;
