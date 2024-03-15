/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.fajnegotowanie.pl',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
