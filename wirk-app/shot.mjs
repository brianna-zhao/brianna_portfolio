import puppeteer from 'puppeteer-core'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const URL = process.argv[2] || 'http://localhost:4317/'
const PREFIX = process.argv[3] || '../wirk_assets/vp'

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
})
const page = await browser.newPage()
const VH = 950
await page.setViewport({ width: 1440, height: VH, deviceScaleFactor: 1 })
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })
const total = await page.evaluate(() => document.body.scrollHeight)
const steps = Math.ceil(total / VH)
for (let i = 0; i < steps; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * VH)
  await new Promise((r) => setTimeout(r, 700)) // let reveals settle
  await page.screenshot({ path: `${PREFIX}${i}.png` })
}
await browser.close()
console.log('captured', steps, 'viewports')
