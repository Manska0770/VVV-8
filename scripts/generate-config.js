const fs = require('fs')
const path = require('path')

const url = process.env.SUPABASE_URL || ''
const anon = process.env.SUPABASE_ANON_KEY || ''

const outDir = path.join(__dirname, '..', 'VVV-8')
const outPath = path.join(outDir, 'vvv-config.js')

const content = `window.VVV_SUPABASE_CONFIG = ${JSON.stringify({ SUPABASE_URL: url, SUPABASE_ANON_KEY: anon })};\n`;

try {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(outPath, content, { encoding: 'utf8' })
  console.log('VVV config written to', outPath)
} catch (err) {
  console.error('Failed to write vvv-config.js', err)
  process.exit(1)
}
