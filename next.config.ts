/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.co',
      },
      // You can add more patterns here if needed
    ],
  },
};

module.exports = nextConfig;