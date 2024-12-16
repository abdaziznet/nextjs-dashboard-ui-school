/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "www.pexels.com", // Added this line
      },
    ],
  },
};

export default nextConfig;
