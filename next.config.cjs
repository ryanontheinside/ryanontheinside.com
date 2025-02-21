/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://ryanontheinside.com/:path*>; rel="canonical"'
          },
          {
            key: 'Last-Modified',
            value: new Date().toUTCString()
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig 