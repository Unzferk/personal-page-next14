const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/home/projects',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/home/projects',
        permanent: true,
      },
      {
        source: '/es',
        destination: '/es/home/projects',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextIntl(config)
