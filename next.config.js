/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    loader: 'custom'
  },
  sassOptions: {
    includePaths: ['./src']
  }
}

module.exports = nextConfig
