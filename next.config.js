/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    NEXTAUTH_SECRET: "clnfjdnfjljlhufbu7njnjnjnkdnk",
    API_URL: "https://alim-store-be.vercel.app",
  },
};

module.exports = nextConfig;
