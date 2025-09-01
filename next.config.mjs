/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Uncomment only if exporting static site (GitHub Pages)
  trailingSlash: true,
  // On Vercel, leave image optimization enabled (remove unoptimized)
  // For project pages, set `assetPrefix` or `basePath` as needed.
  // Example: assetPrefix: process.env.GITHUB_PAGES === 'true' ? 'https://<user>.github.io/<repo>' : undefined,
}

export default nextConfig
