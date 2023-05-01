/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://datahivebe.rabil.me/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
