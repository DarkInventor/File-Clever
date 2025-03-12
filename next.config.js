/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "pub-2634e376131e440895b156c957526ab5.r2.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pub-2634e376131e440895b156c957526ab5.r2.dev",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
