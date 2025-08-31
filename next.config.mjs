/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // For project pages, set `assetPrefix` or `basePath` as needed.
  // Example: assetPrefix: process.env.GITHUB_PAGES === 'true' ? 'https://<user>.github.io/<repo>' : undefined,
}

export default nextConfig

