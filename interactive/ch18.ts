import {
  layoutNextLine, layoutWithLines, prepareWithSegments, walkLineRanges,
  type LayoutCursor, type PreparedTextWithSegments,
} from '@chenglou/pretext'

// ══════════════════════════════════════════════════════════════════════════
// EDITORIAL SECTION
// ══════════════════════════════════════════════════════════════════════════

const BODY_FONT = '18px "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif'
const BODY_LH = 30
const HF = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif'
const GUTTER = 48, COL_GAP = 40, BOTTOM_GAP = 60, DROP_CAP_LINES = 3, MIN_SLOT = 50, NARROW = 760

const HEADLINE = 'GENOME-WIDE ASSOCIATION'

const BODY = `Genome-wide association studies scan millions of positions in the human genome looking for variants that correlate with disease. The principle is simple: collect thousands of patients with a condition, thousands of healthy controls, and ask at each of a million SNPs whether the allele frequencies differ. Where they do, you may have found something real.

Before GWAS became feasible in the mid-2000s, medical genetics was largely a science of rare, severe mutations. Cystic fibrosis. Huntington disease. Single-gene disorders with clear Mendelian patterns. GWAS changed the game by confirming what Fisher predicted in 1918: common, complex diseases are shaped by thousands of common variants, each contributing a tiny effect. Heart disease, schizophrenia, type 2 diabetes — all turned out to be deeply polygenic.

A typical GWAS tests hundreds of thousands to a million SNPs simultaneously. For each one, a statistical test produces a p-value — the probability of seeing a difference this large by chance if the SNP truly has no effect. Small p-values suggest real associations. Large p-values suggest noise. But here is the catch: with a million tests and a threshold of p less than 0.05, you would expect 50,000 false positives. That is why GWAS demands a far stricter threshold of p less than 5 times 10 to the negative eighth — approximately one false positive per scan.

The results are displayed in a Manhattan plot. Each point is a SNP; the x-axis tracks chromosomal position; the y-axis shows the negative log base ten of the p-value. Signals above the genome-wide significance line of 7.3 form dramatic peaks above the noise floor. The peaks cluster at chromosomal loci that harbor genes relevant to the trait. For dilated cardiomyopathy, the peaks converge on sarcomere proteins, extracellular matrix genes, and ion channel regulators — exactly the biology you would expect for a disease of heart muscle.

But peaks in a Manhattan plot only tell you where associations live. Before trusting them, you check the QQ plot — the quantile-quantile plot. This compares the distribution of observed p-values against what random chance would produce. In a clean study, the points follow the diagonal until the very tail, where true signals lift off. If the points deviate from the diagonal early — across the whole distribution — something systematic is wrong. Population stratification, batch effects, cryptic relatedness. Any of these inflate p-values genome-wide and need correction.

Once you have validated loci, you can translate them into polygenic scores. A polygenic score sums the effect of every risk allele an individual carries, weighted by the effect size estimated from the GWAS. For dilated cardiomyopathy, a study of 14,256 cases and over a million controls identified 80 independent loci. Individuals in the top ten percent of the polygenic score distribution have 2.8 times the risk compared to the population average — a clinically meaningful signal derived entirely from common variants, with no rare pathogenic mutation required.`

const PULLQUOTES = [
  '"Testing 1 million SNPs at p < 0.05 would produce 50,000 false positives. That\'s why GWAS demands p < 5 × 10⁻⁸."',
  '"Top 10% polygenic score: 2.8-fold higher DCM risk — even without any rare pathogenic mutation."',
]

// ── Types & Layout utilities ───────────────────────────────────────────────

type Interval = { left: number; right: number }
type PosLine = { x: number; y: number; width: number; text: string }
type RectObs = { x: number; y: number; w: number; h: number }
type PqRect = RectObs & { lines: PosLine[]; colIdx: number }

function carve(base: Interval, blocked: Interval[]): Interval[] {
  let s = [base]
  for (const iv of blocked) { const n: Interval[] = []; for (const sl of s) { if (iv.right <= sl.left || iv.left >= sl.right) { n.push(sl); continue }; if (iv.left > sl.left) n.push({ left: sl.left, right: iv.left }); if (iv.right < sl.right) n.push({ left: iv.right, right: sl.right }) }; s = n }
  return s.filter(sl => sl.right - sl.left >= MIN_SLOT)
}

function layCol(p: PreparedTextWithSegments, cur: LayoutCursor, rx: number, ry: number, rw: number, rh: number, lh: number, rects: RectObs[], single: boolean) {
  let c = cur, lt = ry; const lines: PosLine[] = []; let done = false
  while (lt + lh <= ry + rh && !done) {
    const bl: Interval[] = []; for (const r of rects) { if (lt + lh <= r.y || lt >= r.y + r.h) continue; bl.push({ left: r.x, right: r.x + r.w }) }
    const slots = carve({ left: rx, right: rx + rw }, bl); if (!slots.length) { lt += lh; continue }
    const ord = single ? [slots.reduce((a, b) => (b.right - b.left > a.right - a.left) ? b : a)] : [...slots].sort((a, b) => a.left - b.left)
    for (const sl of ord) { const ln = layoutNextLine(p, c, sl.right - sl.left); if (!ln) { done = true; break }; lines.push({ x: Math.round(sl.left), y: Math.round(lt), text: ln.text, width: ln.width }); c = ln.end }
    lt += lh
  }
  return { lines, cursor: c }
}

function sync(pool: HTMLDivElement[], n: number, cls: string, par: HTMLElement) {
  while (pool.length < n) { const e = document.createElement('div'); e.className = cls; par.appendChild(e); pool.push(e) }
  for (let i = 0; i < pool.length; i++) pool[i]!.style.display = i < n ? '' : 'none'
}

function fitHL(text: string, mw: number, mh: number, ms = 82) {
  let lo = 20, hi = ms, best = lo, bl: PosLine[] = []
  while (lo <= hi) { const sz = Math.floor((lo + hi) / 2), f = `700 ${sz}px ${HF}`, lh = Math.round(sz * 0.93), p = prepareWithSegments(text, f); let brk = false, n = 0; walkLineRanges(p, mw, l => { n++; if (l.end.graphemeIndex !== 0) brk = true }); if (!brk && n * lh <= mh) { best = sz; const r = layoutWithLines(p, mw, lh); bl = r.lines.map((l, i) => ({ x: 0, y: i * lh, text: l.text, width: l.width })); lo = sz + 1 } else hi = sz - 1 }
  return { fontSize: best, lines: bl }
}

const stage = document.getElementById('stage') as HTMLDivElement
const lPool: HTMLDivElement[] = [], hlPool: HTMLDivElement[] = [], pqLP: HTMLDivElement[] = [], pqBP: HTMLDivElement[] = []
await document.fonts.ready
const dcEl = document.createElement('div'); dcEl.className = 'drop-cap'; stage.appendChild(dcEl)

function renderEditorial() {
  const pw = document.documentElement.clientWidth, isN = pw < NARROW
  const gut = isN ? 20 : GUTTER, cGap = isN ? 20 : COL_GAP
  const prep = prepareWithSegments(BODY, BODY_FONT)
  const pqF = `italic 19px ${HF}`, pqLH = 27
  const hl = fitHL(HEADLINE, Math.min(pw - gut * 2, 1000), isN ? 100 : 160, isN ? 40 : 92)
  const hlLH = Math.round(hl.fontSize * 0.93), hlFont = `700 ${hl.fontSize}px ${HF}`, hlH = hl.lines.length * hlLH
  const bTop = gut + hlH + (isN ? 12 : 20)
  const cc = pw > 1000 ? 3 : pw > 640 ? 2 : 1
  const cw = Math.floor((Math.min(pw, 1400) - gut * 2 - cGap * (cc - 1)) / cc)
  const cL = Math.round((pw - (cc * cw + (cc - 1) * cGap)) / 2)
  const bH = Math.max(700, Math.ceil(BODY.length / (cw / 9.5) / cc) * BODY_LH + 120)

  const dcT = BODY[0]!, dcSz = BODY_LH * DROP_CAP_LINES - 4, dcFont = `700 ${dcSz}px ${HF}`
  const dcP = prepareWithSegments(dcT, dcFont); let dcW = 0; walkLineRanges(dcP, 9999, l => { dcW = l.width })
  dcEl.textContent = dcT; dcEl.style.font = dcFont; dcEl.style.lineHeight = `${dcSz}px`; dcEl.style.left = `${cL}px`; dcEl.style.top = `${bTop}px`
  const dcR: RectObs = { x: cL - 2, y: bTop - 2, w: Math.ceil(dcW) + 10, h: DROP_CAP_LINES * BODY_LH + 2 }

  const pqRects: PqRect[] = []
  if (!isN && cc >= 2) {
    const specs = [
      { text: PULLQUOTES[0]!, ci: 0, yF: 0.38, wF: 0.52, side: 'right' as const },
      { text: PULLQUOTES[1]!, ci: cc > 2 ? 2 : 1, yF: 0.55, wF: 0.5, side: 'left' as const },
    ]
    for (const sp of specs) {
      if (sp.ci >= cc) continue
      const pp = prepareWithSegments(sp.text, pqF), pW = Math.round(cw * sp.wF)
      const pqL = layoutWithLines(pp, pW - 20, pqLH).lines, pH = pqL.length * pqLH + 16
      const cx = cL + sp.ci * (cw + cGap), pX = sp.side === 'right' ? cx + cw - pW : cx, pY = Math.round(bTop + bH * sp.yF)
      pqRects.push({ x: pX, y: pY, w: pW, h: pH, lines: pqL.map((l, i) => ({ x: pX + 20, y: pY + 8 + i * pqLH, text: l.text, width: l.width })), colIdx: sp.ci })
    }
  }

  const all: PosLine[] = []; let cur: LayoutCursor = { segmentIndex: 0, graphemeIndex: 1 }
  for (let ci = 0; ci < cc; ci++) {
    const cx = cL + ci * (cw + cGap), rects: RectObs[] = []; if (ci === 0) rects.push(dcR)
    for (const pq of pqRects) if (pq.colIdx === ci) rects.push({ x: pq.x, y: pq.y, w: pq.w, h: pq.h })
    const r = layCol(prep, cur, cx, bTop, cw, bH, BODY_LH, rects, isN); all.push(...r.lines); cur = r.cursor
  }
  const maxY = all.reduce((m, l) => Math.max(m, l.y), bTop) + BODY_LH + BOTTOM_GAP
  stage.style.height = `${maxY}px`

  sync(hlPool, hl.lines.length, 'headline-line', stage)
  for (let i = 0; i < hl.lines.length; i++) { const e = hlPool[i]!, l = hl.lines[i]!; e.textContent = l.text; e.style.left = `${gut}px`; e.style.top = `${gut + l.y}px`; e.style.font = hlFont; e.style.lineHeight = `${hlLH}px` }
  sync(lPool, all.length, 'line', stage)
  for (let i = 0; i < all.length; i++) { const e = lPool[i]!, l = all[i]!; e.textContent = l.text; e.style.left = `${l.x}px`; e.style.top = `${l.y}px`; e.style.font = BODY_FONT; e.style.lineHeight = `${BODY_LH}px` }
  let pqC = 0; for (const pq of pqRects) pqC += pq.lines.length
  sync(pqBP, pqRects.length, 'pullquote-box', stage); sync(pqLP, pqC, 'pullquote-line', stage)
  let pi = 0
  for (let i = 0; i < pqRects.length; i++) { const pq = pqRects[i]!, b = pqBP[i]!; b.style.left = `${pq.x}px`; b.style.top = `${pq.y}px`; b.style.width = `${pq.w}px`; b.style.height = `${pq.h}px`; for (const l of pq.lines) { const e = pqLP[pi]!; e.textContent = l.text; e.style.left = `${l.x}px`; e.style.top = `${l.y}px`; e.style.font = pqF; e.style.lineHeight = `${pqLH}px`; pi++ } }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 1: MULTIPLE TESTING PROBLEM
// ══════════════════════════════════════════════════════════════════════════

// Slider maps: snps 0-100 -> 1000 to 1,000,000 (log scale)
// thresh 0-100 -> 5e-8 to 0.05 (log scale)

function sliderToSnps(v: number): number {
  // 0 -> 1000, 100 -> 1,000,000
  return Math.round(Math.pow(10, 3 + v / 100 * 3))
}

function sliderToThresh(v: number): number {
  // 0 -> 5e-8, 100 -> 0.05
  const logMin = Math.log10(5e-8), logMax = Math.log10(0.05)
  return Math.pow(10, logMin + (v / 100) * (logMax - logMin))
}

let mtSnps = sliderToSnps(50)
let mtThresh = sliderToThresh(50)

function formatSnps(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'k'
  return n.toString()
}

function formatThresh(t: number): string {
  if (t >= 0.01) return t.toFixed(2)
  if (t >= 0.001) return t.toExponential(1)
  return t.toExponential(0)
}

function drawMultipleTesting(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight
  ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)

  const fp = mtSnps * mtThresh
  const isGWAS = mtThresh <= 5e-8 * 1.01

  // Layout: left panel shows the concept visually
  const padT = 50, padB = 60, padL = 60, padR = 40
  const cW = w - padL - padR, cH = h - padT - padB

  // Draw a bar representing all SNPs tested
  const totalBarH = 28
  const totalBarY = padT + cH * 0.15
  ctx.fillStyle = 'rgba(255,255,255,0.06)'
  ctx.beginPath(); ctx.roundRect(padL, totalBarY, cW, totalBarH, 4); ctx.fill()

  // Shade the "expected false positive" portion
  const fpFrac = Math.min(1, fp / mtSnps)
  const fpW = fpFrac * cW
  const fpColor = isGWAS ? '#5a9a6a' : fp > 1000 ? '#e06060' : '#c4a35a'
  const fpGrad = ctx.createLinearGradient(padL, 0, padL + fpW, 0)
  fpGrad.addColorStop(0, fpColor)
  fpGrad.addColorStop(1, fpColor.includes('#5a') ? 'rgba(90,154,106,0.2)' : fpColor.includes('#e0') ? 'rgba(224,96,96,0.2)' : 'rgba(196,163,90,0.2)')
  ctx.fillStyle = fpGrad; ctx.globalAlpha = 0.8
  if (fpW > 0) { ctx.beginPath(); ctx.roundRect(padL, totalBarY, Math.max(fpW, 2), totalBarH, [4, fpFrac > 0.99 ? 4 : 0, fpFrac > 0.99 ? 4 : 0, 4]); ctx.fill() }
  ctx.globalAlpha = 1

  // Label the bar
  ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
  ctx.fillText(`${formatSnps(mtSnps)} SNPs tested`, padL, totalBarY - 14)
  if (fpW > 40) {
    ctx.fillStyle = '#fff'; ctx.font = 'bold 12px "Helvetica Neue", sans-serif'
    ctx.textAlign = 'center'; ctx.fillText('Expected false positives', padL + fpW / 2, totalBarY + totalBarH / 2)
  }

  // Threshold annotation line
  const threshX = padL + fpFrac * cW
  ctx.strokeStyle = fpColor; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4])
  ctx.beginPath(); ctx.moveTo(threshX, totalBarY - 5); ctx.lineTo(threshX, totalBarY + totalBarH + 5); ctx.stroke(); ctx.setLineDash([])

  // Scatter plot below: visualize p-value distribution with highlighted FPs
  const scatterY = totalBarY + totalBarH + 50
  const scatterH = cH - (scatterY - padT) - 20
  const nDots = Math.min(300, Math.max(50, Math.floor(cW / 3)))

  // Seed-based random for reproducibility
  let seed = 9876
  function rng() { seed = (seed * 16807 + 0) % 2147483647; return seed / 2147483647 }

  for (let i = 0; i < nDots; i++) {
    const x = padL + rng() * cW
    const p = rng() // uniform p-value under null
    const y = scatterY + (1 - p) * scatterH
    const isFP = p < mtThresh

    ctx.beginPath(); ctx.arc(x, y, isFP ? 3.5 : 2, 0, Math.PI * 2)
    ctx.fillStyle = isFP ? fpColor : 'rgba(255,255,255,0.15)'
    ctx.globalAlpha = isFP ? 0.85 : 0.4
    ctx.fill(); ctx.globalAlpha = 1
  }

  // Y-axis label (p-value)
  ctx.save(); ctx.translate(padL - 40, scatterY + scatterH / 2); ctx.rotate(-Math.PI / 2)
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('p-value (uniform under null)', 0, 0); ctx.restore()

  // Threshold horizontal line on scatter
  const threshY = scatterY + (1 - mtThresh) * scatterH
  ctx.strokeStyle = fpColor; ctx.lineWidth = 1; ctx.setLineDash([4, 4])
  ctx.beginPath(); ctx.moveTo(padL, threshY); ctx.lineTo(padL + cW, threshY); ctx.stroke(); ctx.setLineDash([])
  ctx.fillStyle = fpColor; ctx.font = 'bold 11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'
  ctx.fillText(`p = ${formatThresh(mtThresh)}`, padL + cW - 4, threshY - 5)

  // Axis labels
  ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('p = 0', padL, scatterY + scatterH + 16)
  ctx.fillText('p = 1', padL + cW, scatterY + scatterH + 16)

  // Big FP number
  const fpLabel = fp >= 1000 ? `~${(fp / 1000).toFixed(0)}k` : fp < 1 ? '<1' : `~${Math.round(fp)}`
  ctx.fillStyle = fpColor; ctx.font = `bold ${Math.min(52, Math.max(28, 52 - String(fpLabel).length * 3))}px "Iowan Old Style", Palatino, serif`
  ctx.textAlign = 'right'; ctx.textBaseline = 'top'
  ctx.fillText(fpLabel, w - padR, padT)
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '12px "Helvetica Neue", sans-serif'
  ctx.fillText('expected false positives', w - padR, padT + 56)

  ctx.restore()
}

function updateMTExp() {
  const fp = mtSnps * mtThresh
  const el = document.getElementById('multiple-testing-explain')!
  document.getElementById('fp-result')!.textContent =
    fp < 1 ? 'Expected false positives: < 1' :
    fp >= 1000 ? `~${(fp / 1000).toFixed(0)},000 false positives` :
    `~${Math.round(fp)} false positives`

  const isGWAS = mtThresh <= 5e-8 * 1.01
  const isWorst = fp > 10000

  if (isGWAS) {
    document.getElementById('fp-sub')!.textContent = 'Genome-wide significance threshold — approximately 1 false positive per scan'
    el.innerHTML = `At <strong>p &lt; 5 &times; 10&minus;8</strong> (the genome-wide significance threshold), you expect <strong>less than one false positive</strong> across the entire scan. This threshold was derived by applying a Bonferroni correction for approximately one million independent tests. It is now the universal standard in GWAS.`
  } else if (isWorst) {
    document.getElementById('fp-sub')!.textContent = 'This many false positives would make results uninterpretable'
    el.innerHTML = `With <strong>${formatSnps(mtSnps)} SNPs</strong> at p &lt; <strong>${formatThresh(mtThresh)}</strong>, you'd expect roughly <strong>${fp >= 1000 ? (fp / 1000).toFixed(0) + ',000' : Math.round(fp)} false positives</strong>. You'd have no way to know which associations are real. This is the multiple testing problem that prevented genetic association studies from being reliable before the genome-wide significance standard was established.`
  } else {
    document.getElementById('fp-sub')!.textContent = 'Expected under the null hypothesis'
    el.innerHTML = `Testing <strong>${formatSnps(mtSnps)} SNPs</strong> at p &lt; <strong>${formatThresh(mtThresh)}</strong> gives ~<strong>${fp < 1 ? '&lt;1' : Math.round(fp)}</strong> expected false positives. The fewer SNPs you test, the less stringent your threshold needs to be. The genome-wide threshold of 5 &times; 10&minus;8 corrects for ~1 million independent tests — roughly the number of independent haplotype blocks in the human genome.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 2: MANHATTAN PLOT
// ══════════════════════════════════════════════════════════════════════════

type ManhattanSNP = { chr: number; pos: number; negLogP: number; peakId?: number }

const MANHATTAN_PEAKS: Array<{ chr: number; posF: number; negLogP: number; name: string; gene: string; desc: string }> = [
  { chr: 1,  posF: 0.22, negLogP: 9.4,  name: 'rs1801133', gene: 'MTHFR',    desc: 'Methylenetetrahydrofolate reductase — homocysteine metabolism, cardiovascular risk.' },
  { chr: 2,  posF: 0.55, negLogP: 8.1,  name: 'rs7566605', gene: 'INSIG2',   desc: 'Insulin-induced gene 2 — lipid biosynthesis, early obesity GWAS hit.' },
  { chr: 5,  posF: 0.4,  negLogP: 11.2, name: 'rs17817449', gene: 'FTO',     desc: 'Fat mass and obesity associated — strongest common variant for BMI.' },
  { chr: 6,  posF: 0.35, negLogP: 14.5, name: 'rs2395185', gene: 'HLA-DRA', desc: 'MHC class II locus — the most associated region for autoimmune diseases.' },
  { chr: 9,  posF: 0.72, negLogP: 8.8,  name: 'rs10757278', gene: 'CDKN2B',  desc: 'CDKN2A/B locus on 9p21 — coronary artery disease, type 2 diabetes risk.' },
  { chr: 12, posF: 0.6,  negLogP: 9.7,  name: 'rs11066015', gene: 'ALDH2',   desc: 'Aldehyde dehydrogenase 2 — alcohol metabolism, cardiovascular effects.' },
  { chr: 16, posF: 0.3,  negLogP: 10.3, name: 'rs9939609', gene: 'FTO',      desc: 'Secondary FTO peak — one of the most replicated obesity loci across populations.' },
  { chr: 19, posF: 0.5,  negLogP: 12.1, name: 'rs4420638', gene: 'APOE',     desc: 'APOE region — apolipoprotein E, LDL cholesterol, Alzheimer\'s disease risk.' },
]

// Chromosome lengths in relative units (approx proportional to real sizes)
const CHR_LENS = [248, 242, 198, 190, 181, 171, 159, 145, 138, 133, 135, 133, 115, 107, 102, 90, 83, 80, 59, 63, 48, 51]

function buildManhattanData(): ManhattanSNP[] {
  const snps: ManhattanSNP[] = []
  let s = 31337
  function rng() { s = (s * 16807 + 0) % 2147483647; return s / 2147483647 }
  function normalRng() { return Math.sqrt(-2 * Math.log(Math.max(rng(), 1e-10))) * Math.cos(2 * Math.PI * rng()) }

  for (let chr = 1; chr <= 22; chr++) {
    const nSnps = 80
    const peak = MANHATTAN_PEAKS.find(p => p.chr === chr)

    for (let i = 0; i < nSnps; i++) {
      const posF = (i + rng() * 0.8 + 0.1) / nSnps
      // Background noise: chi-squared(1) distributed p-values → negLogP mostly 0-3
      const chi2 = normalRng() * normalRng()
      const rawNLP = Math.max(0.05, -Math.log10(Math.exp(-chi2 / 2)) * rng() * 2 + rng() * 1.5)
      const negLogP = Math.min(rawNLP, 6.8) // cap background below threshold

      let peakId: number | undefined = undefined
      // Add signal near peak if this is a peak chromosome
      if (peak && Math.abs(posF - peak.posF) < 0.12) {
        const dist = Math.abs(posF - peak.posF) / 0.12
        const bonus = peak.negLogP * (1 - dist * dist) * (0.7 + rng() * 0.3)
        const finalNLP = negLogP + bonus
        snps.push({ chr, pos: posF, negLogP: Math.min(finalNLP, peak.negLogP + 1), peakId: MANHATTAN_PEAKS.indexOf(peak) })
        continue
      }

      snps.push({ chr, pos: posF, negLogP, peakId })
    }
  }
  return snps
}

const manhattanData = buildManhattanData()
let manhattanHit: number | null = null

function drawManhattan(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight
  ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)

  const padT = 30, padB = 50, padL = 52, padR = 20
  const cW = w - padL - padR, cH = h - padT - padB
  const maxNLP = 15.5, threshold = 7.3

  const totalLen = CHR_LENS.reduce((a, b) => a + b, 0)

  // Chromosome color alternation
  const COL_A = 'rgba(196,163,90,0.75)'
  const COL_B = 'rgba(100,160,220,0.75)'
  const COL_HIT = '#ff6b6b'

  // Build cumulative offsets
  const chrOffsets: number[] = []
  let cumLen = 0
  for (let i = 0; i < 22; i++) { chrOffsets.push(cumLen); cumLen += CHR_LENS[i]! }

  // Shade alternating chromosomes
  for (let i = 0; i < 22; i++) {
    if (i % 2 === 0) {
      const x0 = padL + (chrOffsets[i]! / totalLen) * cW
      const x1 = padL + ((chrOffsets[i]! + CHR_LENS[i]!) / totalLen) * cW
      ctx.fillStyle = 'rgba(255,255,255,0.015)'; ctx.fillRect(x0, padT, x1 - x0, cH)
    }
  }

  // Y axis gridlines
  for (let y = 0; y <= 14; y += 2) {
    const ys = padT + cH - (y / maxNLP) * cH
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(padL, ys); ctx.lineTo(padL + cW, ys); ctx.stroke()
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '10px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
    ctx.fillText(`${y}`, padL - 6, ys)
  }

  // Genome-wide significance threshold line
  const threshY = padT + cH - (threshold / maxNLP) * cH
  ctx.strokeStyle = 'rgba(224,96,96,0.6)'; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4])
  ctx.beginPath(); ctx.moveTo(padL, threshY); ctx.lineTo(padL + cW, threshY); ctx.stroke(); ctx.setLineDash([])
  ctx.fillStyle = 'rgba(224,96,96,0.7)'; ctx.font = 'bold 10px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'
  ctx.fillText('p = 5×10⁻⁸', padL + 4, threshY - 2)

  // Plot SNPs
  for (const snp of manhattanData) {
    const chrX = chrOffsets[snp.chr - 1]! + snp.pos * CHR_LENS[snp.chr - 1]!
    const x = padL + (chrX / totalLen) * cW
    const y = padT + cH - (snp.negLogP / maxNLP) * cH

    const isHit = snp.peakId !== undefined && snp.negLogP > threshold
    const isSelected = snp.peakId === manhattanHit

    ctx.beginPath(); ctx.arc(x, y, isSelected ? 4 : isHit ? 3.5 : 2, 0, Math.PI * 2)
    ctx.fillStyle = isSelected ? '#fff' : isHit ? COL_HIT : (snp.chr % 2 === 0 ? COL_B : COL_A)
    ctx.globalAlpha = isHit ? 0.95 : 0.45
    ctx.fill(); ctx.globalAlpha = 1
  }

  // Chromosome labels
  for (let i = 0; i < 22; i++) {
    const midX = padL + ((chrOffsets[i]! + CHR_LENS[i]! / 2) / totalLen) * cW
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '9px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top'
    if (CHR_LENS[i]! * cW / totalLen > 18) ctx.fillText(`${i + 1}`, midX, padT + cH + 8)
  }

  // Y-axis label
  ctx.save(); ctx.translate(12, padT + cH / 2); ctx.rotate(-Math.PI / 2)
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText('-log₁₀(p)', 0, 0); ctx.restore()

  // X axis label
  ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
  ctx.fillText('Chromosomal Position', padL + cW / 2, h - 4)

  ctx.restore()
}

function getManhattanHitAtPoint(cv: HTMLCanvasElement, ex: number, ey: number): number | null {
  const rect = cv.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  const w = cv.clientWidth, h = cv.clientHeight
  const padT = 30, padB = 50, padL = 52, padR = 20
  const cW = w - padL - padR, cH = h - padT - padB
  const maxNLP = 15.5, threshold = 7.3
  const totalLen = CHR_LENS.reduce((a, b) => a + b, 0)

  const mx = (ex - rect.left) / rect.width * w
  const my = (ey - rect.top) / rect.height * h

  let bestId: number | null = null, bestDist = 999
  for (const snp of manhattanData) {
    if (snp.peakId === undefined || snp.negLogP <= threshold) continue
    const chrX = CHR_LENS.slice(0, snp.chr - 1).reduce((a, b) => a + b, 0) + snp.pos * CHR_LENS[snp.chr - 1]!
    const x = padL + (chrX / totalLen) * cW
    const y = padT + cH - (snp.negLogP / maxNLP) * cH
    const dist = Math.hypot(mx - x, my - y)
    if (dist < 16 && dist < bestDist) { bestDist = dist; bestId = snp.peakId }
  }
  return bestId
}

function updateManhattanExp() {
  const el = document.getElementById('manhattan-explain')!
  el.innerHTML = `A Manhattan plot shows every tested SNP at once. The <strong>background noise floor</strong> (most points) sits around &minus;log&#8321;&#8320;(p) ≈ 1&ndash;2. Above the <strong>red threshold line</strong> (p &lt; 5&times;10&minus;8, i.e. &minus;log&#8321;&#8320; = 7.3) are <em>genome-wide significant</em> hits. These peaks often correspond to known biology — HLA for autoimmunity, APOE for lipids, FTO for obesity. Click on the red dots to explore each locus.`
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 3: QQ PLOT
// ══════════════════════════════════════════════════════════════════════════

let qqMode: 'good' | 'bad' = 'good'

function buildQQPoints(mode: 'good' | 'bad'): Array<{ exp: number; obs: number }> {
  const N = 200
  let s = 54321
  function rng() { s = (s * 16807 + 0) % 2147483647; return s / 2147483647 }

  const pts: Array<{ exp: number; obs: number }> = []

  for (let i = 1; i <= N; i++) {
    const expP = i / (N + 1)
    let obsP: number

    if (mode === 'good') {
      // Most p-values follow null; top 5% are real signals (inflated)
      const rank = i / N
      if (rank > 0.95) {
        // Real signal: observed much smaller than expected
        obsP = expP * Math.pow(rng() * 0.001 + 0.0001, 1 - rank)
      } else {
        // Null: scatter around diagonal
        obsP = expP * (0.85 + rng() * 0.3)
      }
    } else {
      // Confounded: entire distribution shifted (lambda > 1)
      const lambda = 1.45
      // Inflate chi-square by lambda → shift the whole distribution
      const chiNominal = -2 * Math.log(Math.max(expP, 1e-10))
      const chiInflated = chiNominal * lambda
      obsP = Math.exp(-chiInflated / 2)
      // Add some top signals too
      if (i / N > 0.97) obsP = obsP * 0.001
    }

    obsP = Math.max(1e-12, Math.min(1 - 1e-10, obsP))
    pts.push({ exp: -Math.log10(expP), obs: -Math.log10(obsP) })
  }

  // Sort by expected ascending
  return pts.sort((a, b) => a.exp - b.exp)
}

function drawQQ(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight
  ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)

  const padT = 30, padB = 55, padL = 60, padR = 30
  const cW = w - padL - padR, cH = h - padT - padB
  const pts = buildQQPoints(qqMode)
  const maxVal = Math.min(13, Math.max(...pts.map(p => p.obs)) + 0.5)

  // Grid
  for (let v = 0; v <= 12; v += 2) {
    const x = padL + (v / maxVal) * cW
    const y = padT + cH - (v / maxVal) * cH
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(x, padT); ctx.lineTo(x, padT + cH); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + cW, y); ctx.stroke()
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '10px "Helvetica Neue", sans-serif'
    ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText(`${v}`, x, padT + cH + 8)
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(`${v}`, padL - 6, y)
  }

  // Diagonal (expected = observed)
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4])
  ctx.beginPath(); ctx.moveTo(padL, padT + cH); ctx.lineTo(padL + cW, padT); ctx.stroke(); ctx.setLineDash([])

  // Confidence band (approximate 95% CI under null)
  ctx.fillStyle = 'rgba(255,255,255,0.04)'
  ctx.beginPath()
  for (let i = 0; i < pts.length; i++) {
    const exp = pts[i]!.exp
    const x = padL + (exp / maxVal) * cW
    const upper = exp + 1.36 / Math.sqrt(pts.length)
    const y = padT + cH - (Math.min(upper, maxVal) / maxVal) * cH
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
  }
  for (let i = pts.length - 1; i >= 0; i--) {
    const exp = pts[i]!.exp
    const x = padL + (exp / maxVal) * cW
    const lower = Math.max(0, exp - 1.36 / Math.sqrt(pts.length))
    const y = padT + cH - (lower / maxVal) * cH
    ctx.lineTo(x, y)
  }
  ctx.closePath(); ctx.fill()

  // Points
  const ptColor = qqMode === 'good' ? '#c4a35a' : '#e06060'
  for (const pt of pts) {
    const x = padL + (pt.exp / maxVal) * cW
    const y = padT + cH - (Math.min(pt.obs, maxVal) / maxVal) * cH
    const isSignal = pt.obs > 7.3
    ctx.beginPath(); ctx.arc(x, y, isSignal ? 4 : 2.5, 0, Math.PI * 2)
    ctx.fillStyle = isSignal ? '#ff6b6b' : ptColor
    ctx.globalAlpha = isSignal ? 0.9 : 0.6
    ctx.fill(); ctx.globalAlpha = 1
  }

  // Lambda annotation
  const obsVals = pts.map(p => p.obs)
  const medianObs = obsVals[Math.floor(obsVals.length / 2)]!
  const medianExp = pts[Math.floor(pts.length / 2)]!.exp
  const lambda = medianObs / (medianExp || 0.01)
  const lambdaColor = lambda > 1.1 ? '#e06060' : '#5a9a6a'
  ctx.fillStyle = lambdaColor; ctx.font = 'bold 16px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'top'
  ctx.fillText(`λ = ${lambda.toFixed(2)}`, padL + cW - 4, padT + 4)
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px "Helvetica Neue", sans-serif'
  ctx.fillText('genomic inflation factor', padL + cW - 4, padT + 24)

  // Axes labels
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px "Helvetica Neue", sans-serif'
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
  ctx.fillText('Expected −log₁₀(p)', padL + cW / 2, h - 4)
  ctx.save(); ctx.translate(14, padT + cH / 2); ctx.rotate(-Math.PI / 2)
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('Observed −log₁₀(p)', 0, 0); ctx.restore()

  ctx.restore()
}

function updateQQExp() {
  const el = document.getElementById('qq-explain')!
  if (qqMode === 'good') {
    el.innerHTML = `<strong>Well-controlled GWAS (λ ≈ 1.0)</strong>: Points follow the diagonal until the very tail, where real signals lift off. The genomic inflation factor <em>lambda</em> is close to 1.0 — indicating no systematic p-value inflation. The grey band is the 95% confidence interval under the null. This is what you want to see: most SNPs behave as expected, and only a handful are genuine hits.`
  } else {
    el.innerHTML = `<strong>Confounded GWAS (λ >> 1)</strong>: The entire distribution is shifted upward. Even in the bulk of the data — where no real associations should exist — observed p-values are smaller than expected. <em>Lambda</em> above ~1.1 signals a problem: population stratification, cryptic relatedness, or genotyping batch effects. These inflate test statistics genome-wide and produce false positives everywhere. A confounded study must be corrected before results can be trusted.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 4: POLYGENIC SCORE
// ══════════════════════════════════════════════════════════════════════════

type PGSSnp = { id: string; locus: string; or: number; freq: number; active: boolean }

const PGS_SNPS: PGSSnp[] = [
  { id: 'rs10497520', locus: 'TTN',    or: 1.15, freq: 0.18, active: false },
  { id: 'rs2234962',  locus: 'SCN5A',  or: 1.12, freq: 0.25, active: false },
  { id: 'rs7312631',  locus: 'LMNA',   or: 1.11, freq: 0.22, active: false },
  { id: 'rs6599230',  locus: 'MYH7',   or: 1.09, freq: 0.31, active: false },
  { id: 'rs9349379',  locus: 'PHACTR1',or: 1.08, freq: 0.42, active: false },
  { id: 'rs17293632', locus: 'ELN',    or: 1.08, freq: 0.28, active: false },
  { id: 'rs3741559',  locus: 'KCNQ1',  or: 1.07, freq: 0.35, active: false },
  { id: 'rs10865331', locus: 'COL1A1', or: 1.07, freq: 0.44, active: false },
  { id: 'rs1333049',  locus: 'CDKN2B', or: 1.07, freq: 0.47, active: false },
  { id: 'rs4977574',  locus: 'CDKN2A', or: 1.06, freq: 0.51, active: false },
  { id: 'rs2681472',  locus: 'ATP2B1', or: 1.06, freq: 0.33, active: false },
  { id: 'rs7903146',  locus: 'TCF7L2', or: 1.06, freq: 0.29, active: false },
  { id: 'rs11191548', locus: 'CYP17A1',or: 1.05, freq: 0.21, active: false },
  { id: 'rs2107595',  locus: 'HDAC9',  or: 1.05, freq: 0.16, active: false },
  { id: 'rs646776',   locus: 'CELSR2', or: 1.05, freq: 0.38, active: false },
  { id: 'rs4343',     locus: 'ACE',    or: 1.04, freq: 0.55, active: false },
  { id: 'rs11206510', locus: 'PCSK9',  or: 1.04, freq: 0.18, active: false },
  { id: 'rs599839',   locus: 'SORT1',  or: 1.04, freq: 0.22, active: false },
  { id: 'rs3825807',  locus: 'ADAMTS7',or: 1.03, freq: 0.43, active: false },
  { id: 'rs9818870',  locus: 'MRAS',   or: 1.02, freq: 0.19, active: false },
]

function computePGS(): number {
  return PGS_SNPS.reduce((sum, s) => sum + (s.active ? Math.log(s.or) : 0), 0)
}

// Risk model: population mean PGS = sum(2*freq*log(OR)), SD from variance
function popMeanPGS(): number {
  return PGS_SNPS.reduce((sum, s) => sum + 2 * s.freq * Math.log(s.or), 0)
}
function popSdPGS(): number {
  const variance = PGS_SNPS.reduce((sum, s) => sum + 2 * s.freq * (1 - s.freq) * Math.log(s.or) ** 2, 0)
  return Math.sqrt(variance)
}

function pgsToRisk(pgs: number): number {
  // Relative risk compared to population average
  // Use liability threshold model approximation:
  // RR ≈ exp(pgs - mean) for small effects, calibrated so top 10% = 2.8x
  const mean = popMeanPGS(), sd = popSdPGS()
  const z = (pgs - mean) / (sd || 0.01)
  // calibrate: top decile (z ≈ 1.28) → 2.8x; use exp(1.28 * k) = 2.8 → k = ln(2.8)/1.28
  const k = Math.log(2.8) / 1.28
  return Math.exp(z * k)
}

function drawPGS(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight
  ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)

  const padT = 30, padB = 60, padL = 60, padR = 30
  const cW = w - padL - padR, cH = h - padT - padB

  const pgs = computePGS()
  const mean = popMeanPGS(), sd = popSdPGS()

  // Draw normal distribution curve for population PGS
  const xMin = mean - 4 * sd, xMax = mean + 4 * sd
  const toX = (v: number) => padL + ((v - xMin) / (xMax - xMin)) * cW
  const gaussH = cH * 0.72

  function gauss(x: number) { return Math.exp(-0.5 * ((x - mean) / sd) ** 2) / (sd * Math.sqrt(2 * Math.PI)) }
  const peakG = gauss(mean)

  // Shade top 10%
  const top10Thresh = mean + 1.282 * sd
  ctx.fillStyle = 'rgba(224,96,96,0.12)'
  ctx.beginPath()
  for (let px = 0; px <= cW; px++) {
    const v = xMin + (px / cW) * (xMax - xMin)
    if (v < top10Thresh) continue
    const y = padT + gaussH - (gauss(v) / peakG) * gaussH
    if (px === 0 || v - (xMin + ((px - 1) / cW) * (xMax - xMin)) < top10Thresh - mean) ctx.moveTo(toX(v), y)
    else ctx.lineTo(toX(v), y)
  }
  ctx.lineTo(padL + cW, padT + gaussH); ctx.lineTo(toX(top10Thresh), padT + gaussH); ctx.closePath(); ctx.fill()

  // Normal curve
  const grad = ctx.createLinearGradient(padL, padT, padL + cW, padT)
  grad.addColorStop(0, 'rgba(100,160,220,0.5)')
  grad.addColorStop(0.5, 'rgba(196,163,90,0.6)')
  grad.addColorStop(1, 'rgba(224,96,96,0.5)')
  ctx.strokeStyle = grad; ctx.lineWidth = 2
  ctx.beginPath()
  for (let px = 0; px <= cW; px++) {
    const v = xMin + (px / cW) * (xMax - xMin)
    const y = padT + gaussH - (gauss(v) / peakG) * gaussH
    px === 0 ? ctx.moveTo(padL + px, y) : ctx.lineTo(padL + px, y)
  }
  ctx.stroke()

  // Baseline
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(padL, padT + gaussH); ctx.lineTo(padL + cW, padT + gaussH); ctx.stroke()

  // Top 10% label
  const t10X = toX(top10Thresh)
  ctx.strokeStyle = 'rgba(224,96,96,0.4)'; ctx.lineWidth = 1; ctx.setLineDash([4, 4])
  ctx.beginPath(); ctx.moveTo(t10X, padT); ctx.lineTo(t10X, padT + gaussH); ctx.stroke(); ctx.setLineDash([])
  ctx.fillStyle = 'rgba(224,96,96,0.7)'; ctx.font = '10px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top'
  ctx.fillText('Top 10%', t10X + 4, padT + 4)
  ctx.fillStyle = 'rgba(224,96,96,0.6)'; ctx.font = 'bold 11px "Helvetica Neue", sans-serif'
  ctx.fillText('2.8× risk', t10X + 4, padT + 18)

  // Current PGS marker
  const clampedPGS = Math.max(xMin, Math.min(xMax, pgs))
  const pgsX = toX(clampedPGS)
  const pgsY = padT + gaussH - (gauss(clampedPGS) / peakG) * gaussH
  const rr = pgsToRisk(pgs)
  const markerColor = rr > 2 ? '#ff6b6b' : rr > 1.3 ? '#c4a35a' : '#5a9a6a'

  ctx.strokeStyle = markerColor; ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(pgsX, padT); ctx.lineTo(pgsX, padT + gaussH + 10); ctx.stroke()
  ctx.beginPath(); ctx.arc(pgsX, pgsY, 6, 0, Math.PI * 2)
  ctx.fillStyle = markerColor; ctx.fill()

  // "You are here" label
  ctx.fillStyle = markerColor; ctx.font = 'bold 12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
  ctx.fillText('Your score', pgsX, padT - 4)

  // Risk annotation
  ctx.fillStyle = markerColor; ctx.font = `bold 18px "Iowan Old Style", Palatino, serif`; ctx.textAlign = 'center'
  ctx.fillText(`${rr.toFixed(2)}× relative risk`, pgsX, padT + gaussH + 36)

  // Axes
  ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
  ctx.fillText('Polygenic Score (PGS)', padL + cW / 2, h - 4)
  ctx.save(); ctx.translate(14, padT + gaussH / 2); ctx.rotate(-Math.PI / 2)
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('Frequency', 0, 0); ctx.restore()

  // Mean marker
  const meanX = toX(mean)
  ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1; ctx.setLineDash([3, 3])
  ctx.beginPath(); ctx.moveTo(meanX, padT + 10); ctx.lineTo(meanX, padT + gaussH); ctx.stroke(); ctx.setLineDash([])
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '10px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top'
  ctx.fillText('Mean', meanX, padT + gaussH + 4)

  ctx.restore()
}

function updatePGSExp() {
  const pgs = computePGS()
  const rr = pgsToRisk(pgs)
  const nActive = PGS_SNPS.filter(s => s.active).length
  const el = document.getElementById('pgs-explain')!

  document.getElementById('pgs-result')!.textContent = `PGS = ${pgs.toFixed(3)}`

  if (nActive === 0) {
    document.getElementById('pgs-sub')!.textContent = 'No risk alleles selected — population average risk'
    el.innerHTML = `Toggle SNPs above to add risk alleles. Each one contributes a small amount to the polygenic score. The score is calculated as the <strong>sum of log(odds ratio) × copies of the risk allele</strong>. In a real clinical PGS, thousands of SNPs are included — not just 20. The DCM study identified <strong>80 independent loci</strong> using 14,256 cases and over a million controls.`
  } else if (rr > 2) {
    document.getElementById('pgs-sub')!.textContent = `${nActive} risk alleles — ${rr.toFixed(2)}× relative risk for DCM`
    el.innerHTML = `You're carrying <strong>${nActive} risk alleles</strong> with a combined PGS placing you in the <strong>high-risk range</strong>. Individuals in the top 10% of the DCM polygenic score distribution have <em>2.8-fold higher risk</em> than the population average — without any rare pathogenic mutation. Polygenic scores identify individuals who may benefit from enhanced cardiac screening or earlier intervention.`
  } else if (rr > 1.3) {
    document.getElementById('pgs-sub')!.textContent = `${nActive} risk alleles — moderately elevated risk`
    el.innerHTML = `With <strong>${nActive} risk alleles</strong>, your PGS is moderately above average. Each individual SNP has a small effect (OR 1.02–1.15), but they add up. This is the fundamental principle of polygenic architecture: <em>no single common variant is deterministic</em>, but the cumulative score carries real predictive power.`
  } else {
    document.getElementById('pgs-sub')!.textContent = `${nActive} risk alleles — near-average risk`
    el.innerHTML = `With <strong>${nActive} risk alleles</strong>, your score is near the population average. Notice how much you'd need to add to reach the 2.8× risk tier. This reflects a key property of polygenicity: risk is continuously distributed. Most people are near the middle; high-risk individuals are genuinely rare even among those with all common risk alleles.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// WIRING
// ══════════════════════════════════════════════════════════════════════════

// Sim 1 wiring
const snpsSlider = document.getElementById('snps-slider') as HTMLInputElement
const threshSlider = document.getElementById('thresh-slider') as HTMLInputElement

snpsSlider.addEventListener('input', function () {
  mtSnps = sliderToSnps(parseInt(this.value))
  document.getElementById('snps-val')!.textContent = formatSnps(mtSnps)
  drawMultipleTesting(document.getElementById('multiple-testing-canvas') as HTMLCanvasElement)
  updateMTExp()
})

threshSlider.addEventListener('input', function () {
  mtThresh = sliderToThresh(parseInt(this.value))
  document.getElementById('thresh-val')!.textContent = formatThresh(mtThresh)
  drawMultipleTesting(document.getElementById('multiple-testing-canvas') as HTMLCanvasElement)
  updateMTExp()
})

// Sim 2 wiring (click on Manhattan plot)
const manhattanCanvas = document.getElementById('manhattan-canvas') as HTMLCanvasElement
manhattanCanvas.addEventListener('click', function (e) {
  const hitId = getManhattanHitAtPoint(this, e.clientX, e.clientY)
  if (hitId !== null) {
    manhattanHit = hitId
    const peak = MANHATTAN_PEAKS[hitId]!
    document.getElementById('manhattan-hit')!.textContent = `${peak.name} — ${peak.gene}`
    document.getElementById('manhattan-hit-sub')!.textContent = peak.desc
    drawManhattan(this)
  }
})

// Sim 3 wiring (QQ toggle)
document.getElementById('qq-good-btn')!.addEventListener('click', function () {
  qqMode = 'good'
  document.getElementById('qq-good-btn')!.classList.add('active')
  document.getElementById('qq-bad-btn')!.classList.remove('active')
  drawQQ(document.getElementById('qq-canvas') as HTMLCanvasElement)
  updateQQExp()
})
document.getElementById('qq-bad-btn')!.addEventListener('click', function () {
  qqMode = 'bad'
  document.getElementById('qq-bad-btn')!.classList.add('active')
  document.getElementById('qq-good-btn')!.classList.remove('active')
  drawQQ(document.getElementById('qq-canvas') as HTMLCanvasElement)
  updateQQExp()
})

// Sim 4 wiring (PGS SNP toggles)
const snpGrid = document.getElementById('snp-grid')!
for (let i = 0; i < PGS_SNPS.length; i++) {
  const snp = PGS_SNPS[i]!
  const chip = document.createElement('div')
  chip.className = 'snp-chip'
  chip.textContent = `${snp.locus} (OR ${snp.or.toFixed(2)})`
  chip.dataset.idx = String(i)
  chip.addEventListener('click', function () {
    const idx = parseInt(this.dataset.idx!)
    PGS_SNPS[idx]!.active = !PGS_SNPS[idx]!.active
    this.classList.toggle('active', PGS_SNPS[idx]!.active)
    drawPGS(document.getElementById('pgs-canvas') as HTMLCanvasElement)
    updatePGSExp()
  })
  snpGrid.appendChild(chip)
}

window.addEventListener('resize', () => {
  renderEditorial()
  drawMultipleTesting(document.getElementById('multiple-testing-canvas') as HTMLCanvasElement)
  drawManhattan(document.getElementById('manhattan-canvas') as HTMLCanvasElement)
  drawQQ(document.getElementById('qq-canvas') as HTMLCanvasElement)
  drawPGS(document.getElementById('pgs-canvas') as HTMLCanvasElement)
})

// Initial render
renderEditorial()

document.getElementById('snps-val')!.textContent = formatSnps(mtSnps)
document.getElementById('thresh-val')!.textContent = formatThresh(mtThresh)
drawMultipleTesting(document.getElementById('multiple-testing-canvas') as HTMLCanvasElement); updateMTExp()
drawManhattan(document.getElementById('manhattan-canvas') as HTMLCanvasElement); updateManhattanExp()
drawQQ(document.getElementById('qq-canvas') as HTMLCanvasElement); updateQQExp()
drawPGS(document.getElementById('pgs-canvas') as HTMLCanvasElement); updatePGSExp()
