import fs from 'node:fs/promises'
import path from 'node:path'

async function main() {
  const root = path.resolve(process.cwd())
  const srcSvg = path.join(root, 'src', 'app', 'icon.svg')
  const outApple = path.join(root, 'src', 'app', 'apple-icon.png')
  const outPng = path.join(root, 'src', 'app', 'icon.png')

  let sharp
  try {
    // Lazy import to avoid issues if sharp is not installed locally
    const mod = await import('sharp')
    sharp = mod.default || mod
  } catch (err) {
    console.warn('[gen-icons] sharp not available, skipping PNG generation')
    return
  }

  try {
    const svg = await fs.readFile(srcSvg)
    await sharp(svg).resize(180, 180).png({ compressionLevel: 9 }).toFile(outApple)
    await sharp(svg).resize(512, 512).png({ compressionLevel: 9 }).toFile(outPng)
    console.log('[gen-icons] Generated apple-icon.png and icon.png')
  } catch (err) {
    console.warn('[gen-icons] Failed to generate PNG icons:', err?.message || err)
  }
}

main()

