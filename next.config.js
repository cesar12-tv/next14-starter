/** @type {import('next').NextConfig} */
const nextConfig = {
  /* esto espara poder agregar imagenes desde internet con el url */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
