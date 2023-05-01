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
    unoptimized: true,
  },
}

module.exports = nextConfig
