/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    serverExternalPackages: ["better-sqlite3", "@prisma/adapter-better-sqlite3"],

  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "facebook.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.facebook.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;