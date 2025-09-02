/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mayanksinghdhami.dev', 'github.com', 'aws.amazon.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY || 'default-key',
  },
}

module.exports = nextConfig
