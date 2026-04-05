import {
  layoutNextLine, layoutWithLines, prepareWithSegments, walkLineRanges,
  type LayoutCursor, type PreparedTextWithSegments,
} from '@chenglou/pretext'

// ══════════════════════════════════════════════════════════════════════════
// EDITORIAL SECTION
// ══════════════════════════════════════════════════════════════════════════

const BF = '18px "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif'
const BLH = 30, HF = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif'
const GUT = 48, CGAP = 40, BGAP = 60, DCL = 3, MSL = 50, NR = 760

const HL = 'GENETIC ARCHITECTURE'

const BODY = `Genetic architecture is not a metaphor. It is the full blueprint of how genetic influences structure a trait — which variant types contribute, how large their effects are, how common they are in the population, how they interact with each other and with the environment, and which tissues and developmental windows matter. Once you understand architecture, you stop asking "what gene causes this disease?" and start asking "what is the full landscape of influences, and how do they converge?"

Most complex diseases follow composite architecture. That means they are shaped not by one type of variant but by a mixture: rare mutations with large individual effects sitting alongside hundreds of common variants with tiny individual effects. Neither layer alone is sufficient. Together, they explain why the same diagnosis can arise from completely different genetic origins, and why your polygenic background can modify whether a rare mutation ever causes disease at all.

Dilated cardiomyopathy illustrates the rare-end contribution. Ten to twenty-five percent of DCM patients carry a rare, often damaging mutation — most commonly in TTN, the gene encoding titin, the spring-like protein that maintains sarcomere elasticity. Others carry mutations in LMNA, which encodes a nuclear lamina protein critical for cardiac mechanical stability. But carrying one of these mutations does not guarantee disease. GWAS has identified over eighty common loci that collectively modify penetrance. Your polygenic background can tip a TTN carrier toward severe cardiomyopathy or protect them entirely.

Alzheimer's disease has the most intensely studied architecture of any common neurological disorder. On one end sit rare early-onset mutations in APP and PSEN1, which cause disease in nearly everyone who carries them. On the other end sits APOE ε4, a common variant in roughly fifteen percent of the population that elevates risk three to twelve times depending on dose. Between these extremes lies a large polygenic background of hundreds of common variants, plus rare coding variants in microglial genes such as TREM2 and PLCG2. What is striking is that these architecturally diverse inputs — from rare monogenic mutations to common variants to lipid metabolism alleles — all converge on microglial efferocytosis: the ability of brain immune cells to clear amyloid and cellular debris.

Autism spectrum disorder displays the most extreme genetic heterogeneity of the three. Some cases arise from de novo mutations — variants that appear fresh in the child and were not present in either parent, typically large disruptive events in genes essential for synaptic development. Others involve inherited rare variants. Still others show high polygenic loading with no single identifiable variant standing out. Syndromic forms such as Fragile X and Rett syndrome arise from single gene mutations that also cause other features. The female protective effect adds another layer: females appear to tolerate a higher burden of genetic risk before showing the ASD phenotype, suggesting buffering mechanisms that are not yet understood. All of these diverse routes funnel into disruptions in synaptic signaling and chromatin remodeling during early cortical development.

The paradox this creates is apparent only until you understand convergence. Many genetic routes lead to the same disease outcome because genes do not operate in isolation — they participate in pathways. A mutation in any node of the synaptic development pathway can disrupt the pathway's function even if different patients have mutations at entirely different nodes. Locus heterogeneity — different genes causing the same phenotype — and allelic heterogeneity — different mutations in the same gene — are expected features of pathway-level architecture, not anomalies.

This convergence principle has a direct therapeutic implication. You do not need to fix every mutation. You need to identify the impaired pathway and boost it. A patient with a TTN mutation and a patient with an LMNA mutation both have impaired sarcomere mechanics. A drug that improves sarcomere calcium sensitivity or reduces fibrotic remodeling could benefit both, regardless of which gene started the cascade. The architecture reveals the target.`

const PQS = [
  '"Many roads, one destination — genetic heterogeneity funnels into shared biological pathways."',
  '"Having the mutation doesn\'t guarantee disease. Your polygenic background modifies penetrance."',
]

// ── Layout utilities (same pattern as ch16) ────────────────────────────────

type Interval = { left: number; right: number }
type PL = { x: number; y: number; width: number; text: string }
type RO = { x: number; y: number; w: number; h: number }
type PqR = RO & { lines: PL[]; colIdx: number }

function carve(base: Interval, bl: Interval[]): Interval[] {
  let s = [base]; for (const iv of bl) { const n: Interval[] = []; for (const sl of s) { if (iv.right <= sl.left || iv.left >= sl.right) { n.push(sl); continue }; if (iv.left > sl.left) n.push({ left: sl.left, right: iv.left }); if (iv.right < sl.right) n.push({ left: iv.right, right: sl.right }) }; s = n }; return s.filter(sl => sl.right - sl.left >= MSL)
}
function layCol(p: PreparedTextWithSegments, cur: LayoutCursor, rx: number, ry: number, rw: number, rh: number, lh: number, rects: RO[], single: boolean) {
  let c = cur, lt = ry; const lines: PL[] = []; let done = false
  while (lt + lh <= ry + rh && !done) { const bl: Interval[] = []; for (const r of rects) { if (lt + lh <= r.y || lt >= r.y + r.h) continue; bl.push({ left: r.x, right: r.x + r.w }) }; const slots = carve({ left: rx, right: rx + rw }, bl); if (!slots.length) { lt += lh; continue }; const ord = single ? [slots.reduce((a, b) => (b.right - b.left > a.right - a.left) ? b : a)] : [...slots].sort((a, b) => a.left - b.left); for (const sl of ord) { const ln = layoutNextLine(p, c, sl.right - sl.left); if (!ln) { done = true; break }; lines.push({ x: Math.round(sl.left), y: Math.round(lt), text: ln.text, width: ln.width }); c = ln.end }; lt += lh }; return { lines, cursor: c }
}
function sync(pool: HTMLDivElement[], n: number, cls: string, par: HTMLElement) { while (pool.length < n) { const e = document.createElement('div'); e.className = cls; par.appendChild(e); pool.push(e) }; for (let i = 0; i < pool.length; i++) pool[i]!.style.display = i < n ? '' : 'none' }
function fitHL(text: string, mw: number, mh: number, ms = 82) { let lo = 20, hi = ms, best = lo, bl: PL[] = []; while (lo <= hi) { const sz = Math.floor((lo + hi) / 2), f = `700 ${sz}px ${HF}`, lh = Math.round(sz * 0.93), p = prepareWithSegments(text, f); let brk = false, n = 0; walkLineRanges(p, mw, l => { n++; if (l.end.graphemeIndex !== 0) brk = true }); if (!brk && n * lh <= mh) { best = sz; const r = layoutWithLines(p, mw, lh); bl = r.lines.map((l, i) => ({ x: 0, y: i * lh, text: l.text, width: l.width })); lo = sz + 1 } else hi = sz - 1 }; return { fontSize: best, lines: bl } }

const stage = document.getElementById('stage') as HTMLDivElement
const lP: HTMLDivElement[] = [], hlP: HTMLDivElement[] = [], pqLP: HTMLDivElement[] = [], pqBP: HTMLDivElement[] = []
await document.fonts.ready
const dcEl = document.createElement('div'); dcEl.className = 'drop-cap'; stage.appendChild(dcEl)

function renderEditorial() {
  const pw = document.documentElement.clientWidth, isN = pw < NR, gut = isN ? 20 : GUT, cGap = isN ? 20 : CGAP
  const prep = prepareWithSegments(BODY, BF), pqF = `italic 19px ${HF}`, pqLH = 27
  const hl = fitHL(HL, Math.min(pw - gut * 2, 1000), isN ? 100 : 160, isN ? 32 : 72)
  const hlLH = Math.round(hl.fontSize * 0.93), hlFont = `700 ${hl.fontSize}px ${HF}`, hlH = hl.lines.length * hlLH
  const bTop = gut + hlH + (isN ? 12 : 20), cc = pw > 1000 ? 3 : pw > 640 ? 2 : 1
  const cw = Math.floor((Math.min(pw, 1400) - gut * 2 - cGap * (cc - 1)) / cc)
  const cL = Math.round((pw - (cc * cw + (cc - 1) * cGap)) / 2)
  const bH = Math.max(700, Math.ceil(BODY.length / (cw / 9.5) / cc) * BLH + 120)
  const dcT = BODY[0]!, dcSz = BLH * DCL - 4, dcFont = `700 ${dcSz}px ${HF}`
  const dcP = prepareWithSegments(dcT, dcFont); let dcW = 0; walkLineRanges(dcP, 9999, l => { dcW = l.width })
  dcEl.textContent = dcT; dcEl.style.font = dcFont; dcEl.style.lineHeight = `${dcSz}px`; dcEl.style.left = `${cL}px`; dcEl.style.top = `${bTop}px`
  const dcR: RO = { x: cL - 2, y: bTop - 2, w: Math.ceil(dcW) + 10, h: DCL * BLH + 2 }
  const pqRects: PqR[] = []
  if (!isN && cc >= 2) {
    const specs = [{ text: PQS[0]!, ci: 0, yF: 0.42, wF: 0.52, side: 'right' as const }, { text: PQS[1]!, ci: cc > 2 ? 2 : 1, yF: 0.52, wF: 0.5, side: 'left' as const }]
    for (const sp of specs) { if (sp.ci >= cc) continue; const pp = prepareWithSegments(sp.text, pqF), pW = Math.round(cw * sp.wF), pqL = layoutWithLines(pp, pW - 20, pqLH).lines, pH = pqL.length * pqLH + 16, cx = cL + sp.ci * (cw + cGap), pX = sp.side === 'right' ? cx + cw - pW : cx, pY = Math.round(bTop + bH * sp.yF); pqRects.push({ x: pX, y: pY, w: pW, h: pH, lines: pqL.map((l, i) => ({ x: pX + 20, y: pY + 8 + i * pqLH, text: l.text, width: l.width })), colIdx: sp.ci }) }
  }
  const all: PL[] = []; let cur: LayoutCursor = { segmentIndex: 0, graphemeIndex: 1 }
  for (let ci = 0; ci < cc; ci++) { const cx = cL + ci * (cw + cGap), rects: RO[] = []; if (ci === 0) rects.push(dcR); for (const pq of pqRects) if (pq.colIdx === ci) rects.push({ x: pq.x, y: pq.y, w: pq.w, h: pq.h }); const r = layCol(prep, cur, cx, bTop, cw, bH, BLH, rects, isN); all.push(...r.lines); cur = r.cursor }
  const maxY = all.reduce((m, l) => Math.max(m, l.y), bTop) + BLH + BGAP; stage.style.height = `${maxY}px`
  sync(hlP, hl.lines.length, 'headline-line', stage); for (let i = 0; i < hl.lines.length; i++) { const e = hlP[i]!, l = hl.lines[i]!; e.textContent = l.text; e.style.left = `${gut}px`; e.style.top = `${gut + l.y}px`; e.style.font = hlFont; e.style.lineHeight = `${hlLH}px` }
  sync(lP, all.length, 'line', stage); for (let i = 0; i < all.length; i++) { const e = lP[i]!, l = all[i]!; e.textContent = l.text; e.style.left = `${l.x}px`; e.style.top = `${l.y}px`; e.style.font = BF; e.style.lineHeight = `${BLH}px` }
  let pqC = 0; for (const pq of pqRects) pqC += pq.lines.length; sync(pqBP, pqRects.length, 'pullquote-box', stage); sync(pqLP, pqC, 'pullquote-line', stage)
  let pi = 0; for (let i = 0; i < pqRects.length; i++) { const pq = pqRects[i]!, b = pqBP[i]!; b.style.left = `${pq.x}px`; b.style.top = `${pq.y}px`; b.style.width = `${pq.w}px`; b.style.height = `${pq.h}px`; for (const l of pq.lines) { const e = pqLP[pi]!; e.textContent = l.text; e.style.left = `${l.x}px`; e.style.top = `${l.y}px`; e.style.font = pqF; e.style.lineHeight = `${pqLH}px`; pi++ } }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 1: COMPOSITE ARCHITECTURE — SCATTER PLOT
// ══════════════════════════════════════════════════════════════════════════

let showRare = true, showCommon = true, showApoe = true

// Generate reproducible scatter points
function seededRand(seed: number) {
  let s = seed
  return function () { s = (s * 16807 + 0) % 2147483647; return s / 2147483647 }
}

interface ScatterPoint { freq: number; or: number; label?: string; category: 'rare' | 'common' | 'apoe' }

function genPoints(): ScatterPoint[] {
  const pts: ScatterPoint[] = []
  const rng = seededRand(42)
  // Rare variants: freq 0.001–0.01, OR 2–20
  const rareGenes = ['TTN', 'LMNA', 'PSEN1', 'APP', 'SCN1A', 'BRCA2']
  for (let i = 0; i < 22; i++) {
    const freq = 0.001 + rng() * 0.009
    const or = 2 + rng() * 18
    const label = i < rareGenes.length ? rareGenes[i] : undefined
    pts.push({ freq, or, label, category: 'rare' })
  }
  // Common GWAS variants: freq 0.05–0.5, OR 1.01–1.3
  for (let i = 0; i < 28; i++) {
    const freq = 0.05 + rng() * 0.45
    const or = 1.01 + rng() * 0.29
    pts.push({ freq, or, category: 'common' })
  }
  // APOE ε4 — special
  pts.push({ freq: 0.15, or: 4.5, label: 'APOE ε4', category: 'apoe' })
  return pts
}

const SCATTER_PTS = genPoints()

function drawComposite(cv: HTMLCanvasElement) {
  const d = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * d; cv.height = cv.clientHeight * d
  const ctx = cv.getContext('2d')!; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(d, d)
  const w = cv.clientWidth, h = cv.clientHeight

  const pad = { t: 40, b: 60, l: 80, r: 40 }
  const cW = w - pad.l - pad.r, cH = h - pad.t - pad.b

  // log scale for freq (0.001 to 0.5)
  const logMin = Math.log10(0.0008), logMax = Math.log10(0.6)
  const toX = (f: number) => pad.l + ((Math.log10(f) - logMin) / (logMax - logMin)) * cW
  // OR axis 1 to 22, linear
  const orMin = 0.8, orMax = 22
  const toY = (or: number) => pad.t + (1 - (or - orMin) / (orMax - orMin)) * cH

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1
  for (const f of [0.001, 0.01, 0.1, 0.5]) {
    const x = toX(f)
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + cH); ctx.stroke()
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText(f < 0.01 ? f.toFixed(3) : f < 0.1 ? f.toFixed(2) : f.toString(), x, pad.t + cH + 18)
  }
  for (const or of [1, 2, 5, 10, 20]) {
    const y = toY(or)
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cW, y); ctx.stroke()
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
    ctx.fillText(or === 1 ? 'OR 1' : `${or}×`, pad.l - 8, y)
  }

  // Axis labels
  ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'
  ctx.fillText('Allele frequency', pad.l + cW / 2, h - 8)
  ctx.save(); ctx.translate(20, pad.t + cH / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'
  ctx.fillText('Effect size (Odds Ratio)', 0, 0); ctx.restore()

  // OR=1 baseline
  ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4])
  const y1 = toY(1); ctx.beginPath(); ctx.moveTo(pad.l, y1); ctx.lineTo(pad.l + cW, y1); ctx.stroke(); ctx.setLineDash([])

  // "Common variants zone" and "Rare variants zone" background
  const xBoundary = toX(0.02)
  if (showRare) {
    ctx.fillStyle = 'rgba(220,80,60,0.04)'
    ctx.fillRect(pad.l, pad.t, xBoundary - pad.l, cH)
  }
  if (showCommon) {
    ctx.fillStyle = 'rgba(196,163,90,0.04)'
    ctx.fillRect(xBoundary, pad.t, pad.l + cW - xBoundary, cH)
  }

  // Points
  for (const pt of SCATTER_PTS) {
    const visible = (pt.category === 'rare' && showRare) || (pt.category === 'common' && showCommon) || (pt.category === 'apoe' && showApoe)
    if (!visible) continue
    const x = toX(pt.freq), y = toY(pt.or)
    const color = pt.category === 'rare' ? 'rgba(220,90,70,0.85)' : pt.category === 'apoe' ? 'rgba(80,150,230,0.9)' : 'rgba(196,163,90,0.75)'
    const r = pt.category === 'apoe' ? 8 : pt.category === 'rare' ? 5 : 4

    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = color; ctx.fill()
    if (pt.category === 'apoe') {
      ctx.strokeStyle = 'rgba(80,150,230,0.5)'; ctx.lineWidth = 2; ctx.stroke()
    }

    if (pt.label) {
      ctx.fillStyle = color; ctx.font = 'bold 11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
      const lx = x + r + 4, ly = y
      ctx.fillText(pt.label, lx, ly)
    }
  }

  // Legend
  const ly = pad.t + 10
  const legendItems: { color: string; label: string; visible: boolean }[] = [
    { color: 'rgba(220,90,70,0.85)', label: 'Rare variants', visible: showRare },
    { color: 'rgba(196,163,90,0.75)', label: 'Common GWAS', visible: showCommon },
    { color: 'rgba(80,150,230,0.9)', label: 'APOE ε4', visible: showApoe },
  ]
  let lx = pad.l + 10
  for (const item of legendItems) {
    ctx.globalAlpha = item.visible ? 1 : 0.25
    ctx.beginPath(); ctx.arc(lx + 6, ly + 6, 5, 0, Math.PI * 2)
    ctx.fillStyle = item.color; ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = '12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
    ctx.fillText(item.label, lx + 16, ly + 6)
    lx += 130
    ctx.globalAlpha = 1
  }

  ctx.restore()
}

function updateCompositeExp() {
  const el = document.getElementById('composite-explain')!
  if (showRare && showCommon && showApoe) {
    el.innerHTML = `The full composite architecture: <strong>rare variants</strong> (red, left side) have large effects but low frequency. <strong>Common GWAS variants</strong> (gold, right side) each contribute minimally but in aggregate shift risk substantially. <strong>APOE ε4</strong> (blue) sits uniquely between — common enough to appear in ~15% of people, yet conferring 3–12× elevated risk. Most diseases need all three layers to explain the full genetic landscape.`
  } else if (showRare && !showCommon && !showApoe) {
    el.innerHTML = `<strong>Rare variants only.</strong> These are the variants traditional genetics first discovered — large effects, easy to detect in families, devastating when inherited. TTN mutations impair titin elasticity in the heart. PSEN1 mutations cause early-onset Alzheimer's. But rare variants alone explain only 10–25% of DCM cases and <1% of Alzheimer's cases.`
  } else if (!showRare && showCommon && !showApoe) {
    el.innerHTML = `<strong>Common GWAS variants only.</strong> Each dot shifts disease probability by 1–30%. Individually trivial. But summed across hundreds of loci into a <em>polygenic score</em>, they create a continuous gradient of liability. The top 5% of polygenic risk can have 2–4× elevated disease rates compared to the bottom 5%.`
  } else if (!showRare && !showCommon && showApoe) {
    el.innerHTML = `<strong>APOE ε4 alone.</strong> A unique variant that defies easy categorization. Common (15% population frequency) yet powerful (3–12× risk increase). Two copies push risk even higher. APOE mediates lipid transport in the brain — ε4 impairs clearance of amyloid fragments from the extracellular space.`
  } else {
    el.innerHTML = `Toggle the categories to compare how different variant types occupy different regions of the frequency–effect landscape. The rare-common boundary is roughly 1–5% allele frequency. Notice that nothing prevents a common variant from having a large effect in principle — selection pressure tends to push large-effect variants down in frequency over generations.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 2: RISK ACCUMULATION (Alzheimer's K-ROAD inspired)
// ══════════════════════════════════════════════════════════════════════════

let riskStep = 0

const RISK_STEPS = [
  { label: 'Baseline', amyloid: 20, cognition: 28, description: 'No elevated genetic risk factors. Baseline amyloid accumulation reflects normal aging. Cognition at 28/30 (MMSE equivalent). This is the starting point before any genetic risk stacking.' },
  { label: '+ APOE ε4', amyloid: 45, cognition: 26, description: 'Adding one copy of APOE ε4 substantially elevates amyloid burden. APOE ε4 impairs microglial clearance and promotes amyloid aggregation. Cognition begins to decline. Risk is elevated 3–4× over baseline.' },
  { label: '+ High PGS', amyloid: 60, cognition: 24, description: 'A high polygenic score stacks on APOE ε4 risk. Hundreds of common variants — each individually tiny — together add a substantial second layer of liability. Amyloid at 60%, cognition noticeably impaired.' },
  { label: '+ Rare variant', amyloid: 75, cognition: 21, description: 'A rare noncoding or regulatory variant (e.g., near BIN1 or CLU) further accelerates pathology. Rare variants with moderate-to-large effects can tip the balance when polygenic risk is already elevated. Cognitive decline now clinically significant.' },
  { label: '+ Structural variant', amyloid: 85, cognition: 18, description: 'Addition of a structural variant (CNV affecting APP dosage or a large deletion in a microglial gene) pushes amyloid burden to 85%. Cognition at 18/30. This multi-layer composite architecture explains why individuals with identical APOE status can have dramatically different outcomes.' },
]

function drawRisk(cv: HTMLCanvasElement) {
  const d = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * d; cv.height = cv.clientHeight * d
  const ctx = cv.getContext('2d')!; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(d, d)
  const w = cv.clientWidth, h = cv.clientHeight

  const pad = { t: 50, b: 70, l: 60, r: 40 }
  const cW = w - pad.l - pad.r, cH = h - pad.t - pad.b
  const stepW = cW / (RISK_STEPS.length - 1)

  // Y axes: amyloid 0–100, cognition 0–30
  const toYAmyloid = (v: number) => pad.t + (1 - v / 100) * cH
  const toYCognition = (v: number) => pad.t + (1 - v / 30) * cH

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1
  for (let pct = 0; pct <= 100; pct += 20) {
    const y = toYAmyloid(pct)
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cW, y); ctx.stroke()
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
    ctx.fillText(`${pct}%`, pad.l - 8, y)
  }

  // Step labels (x axis)
  for (let i = 0; i < RISK_STEPS.length; i++) {
    const x = pad.l + i * stepW
    ctx.fillStyle = i <= riskStep ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)'
    ctx.font = i === riskStep ? 'bold 12px "Helvetica Neue", sans-serif' : '11px "Helvetica Neue", sans-serif'
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'
    const words = RISK_STEPS[i]!.label.split(' ')
    for (let wi = 0; wi < words.length; wi++) {
      ctx.fillText(words[wi]!, x, pad.t + cH + 18 + wi * 14)
    }
  }

  // Amyloid line (orange-red)
  ctx.strokeStyle = 'rgba(220,100,60,0.8)'; ctx.lineWidth = 2.5
  ctx.beginPath()
  for (let i = 0; i <= riskStep; i++) {
    const x = pad.l + i * stepW, y = toYAmyloid(RISK_STEPS[i]!.amyloid)
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  }
  ctx.stroke()

  // Cognition line (blue-teal)
  ctx.strokeStyle = 'rgba(80,180,220,0.8)'; ctx.lineWidth = 2.5
  ctx.beginPath()
  for (let i = 0; i <= riskStep; i++) {
    const x = pad.l + i * stepW, y = toYCognition(RISK_STEPS[i]!.cognition)
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  }
  ctx.stroke()

  // Dots
  for (let i = 0; i <= riskStep; i++) {
    const step = RISK_STEPS[i]!
    const x = pad.l + i * stepW
    const isActive = i === riskStep

    // Amyloid dot
    ctx.beginPath(); ctx.arc(x, toYAmyloid(step.amyloid), isActive ? 7 : 5, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(220,100,60,0.9)'; ctx.fill()
    if (isActive) {
      ctx.strokeStyle = 'rgba(220,100,60,0.4)'; ctx.lineWidth = 2; ctx.stroke()
      ctx.fillStyle = 'rgba(220,100,60,0.9)'; ctx.font = 'bold 13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
      ctx.fillText(`${step.amyloid}%`, x, toYAmyloid(step.amyloid) - 10)
    }

    // Cognition dot
    ctx.beginPath(); ctx.arc(x, toYCognition(step.cognition), isActive ? 7 : 5, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(80,180,220,0.9)'; ctx.fill()
    if (isActive) {
      ctx.strokeStyle = 'rgba(80,180,220,0.4)'; ctx.lineWidth = 2; ctx.stroke()
      ctx.fillStyle = 'rgba(80,180,220,0.9)'; ctx.font = 'bold 13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
      ctx.fillText(`${step.cognition}/30`, x, toYCognition(step.cognition) - 10)
    }
  }

  // Labels for lines
  ctx.fillStyle = 'rgba(220,100,60,0.8)'; ctx.font = '12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
  ctx.fillText('Amyloid burden (%)', pad.l + cW - 130, pad.t + 16)
  ctx.fillStyle = 'rgba(80,180,220,0.8)'
  ctx.fillText('Cognition (/30)', pad.l + cW - 130, pad.t + 34)

  // Right y-axis (cognition)
  ctx.strokeStyle = 'rgba(80,180,220,0.2)'; ctx.lineWidth = 1
  for (const v of [0, 10, 20, 30]) {
    const y = toYCognition(v)
    ctx.fillStyle = 'rgba(80,180,220,0.3)'; ctx.font = '10px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
    ctx.fillText(`${v}`, pad.l + cW + 6, y)
  }

  ctx.restore()
}

function updateRiskExp() {
  const step = RISK_STEPS[riskStep]!
  document.getElementById('risk-explain')!.innerHTML = `<strong>${step.label}:</strong> Amyloid ${step.amyloid}% · Cognition ${step.cognition}/30. ${step.description}`

  // Update buttons
  for (let i = 0; i < RISK_STEPS.length; i++) {
    const btn = document.getElementById(`btn-step${i}`)!
    btn.classList.toggle('active', i === riskStep)
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 3: THREE DISEASES, ONE PRINCIPLE
// ══════════════════════════════════════════════════════════════════════════

type DiseaseKey = 'dcm' | 'ad' | 'asd'
let activeDisease: DiseaseKey = 'dcm'

interface DiseaseData {
  name: string
  color: string
  inputs: { label: string; sublabel: string; color: string }[]
  pathway: string
  outcome: string
  detail: string
}

const DISEASES: Record<DiseaseKey, DiseaseData> = {
  dcm: {
    name: 'Dilated Cardiomyopathy',
    color: 'rgba(220,100,70,0.9)',
    inputs: [
      { label: 'TTN mutations', sublabel: 'titin truncating\n(rare, large effect)', color: 'rgba(220,80,60,0.85)' },
      { label: 'LMNA mutations', sublabel: 'nuclear lamina\n(rare, large effect)', color: 'rgba(200,70,100,0.85)' },
      { label: '80+ GWAS loci', sublabel: 'common variants\n(small individual effect)', color: 'rgba(196,163,90,0.85)' },
      { label: 'PGS modifier', sublabel: 'modifies penetrance\nof rare variants', color: 'rgba(170,140,80,0.8)' },
    ],
    pathway: 'Sarcomere / ECM integrity',
    outcome: 'Dilated Cardiomyopathy',
    detail: 'In DCM, rare TTN and LMNA mutations impair sarcomere elasticity and nuclear mechanical stability. Common variants across 80+ loci collectively modify the contractile environment. A patient with a TTN mutation and high polygenic risk has far worse prognosis than one with low polygenic background — the same rare variant, different outcomes.',
  },
  ad: {
    name: "Alzheimer's Disease",
    color: 'rgba(100,160,230,0.9)',
    inputs: [
      { label: 'APP / PSEN1', sublabel: 'rare early-onset\n(<1%, nearly 100% penetrant)', color: 'rgba(80,120,220,0.85)' },
      { label: 'APOE ε4', sublabel: 'common, 15% freq\n(3–12× risk)', color: 'rgba(100,160,230,0.85)' },
      { label: 'TREM2 / PLCG2', sublabel: 'rare microglial\n(moderate effect)', color: 'rgba(60,200,180,0.85)' },
      { label: 'Polygenic background', sublabel: 'hundreds of loci\n(aggregate effect)', color: 'rgba(196,163,90,0.8)' },
    ],
    pathway: 'Microglial efferocytosis',
    outcome: "Alzheimer's Disease",
    detail: "Alzheimer's unites rare monogenic variants, common APOE alleles, rare microglial variants, and polygenic background through a single pathway: microglia fail to clear amyloid and cellular debris. APP/PSEN1 mutations increase amyloid production. APOE ε4 impairs lipid transport for clearance. TREM2 mutations reduce microglial phagocytic function. The inputs differ; the pathway disruption is shared.",
  },
  asd: {
    name: 'Autism Spectrum Disorder',
    color: 'rgba(140,200,100,0.9)',
    inputs: [
      { label: 'De novo variants', sublabel: 'new mutations\nnot in parents', color: 'rgba(120,200,80,0.85)' },
      { label: 'Inherited rare', sublabel: 'rare inherited\nfrom carrier parent', color: 'rgba(100,180,70,0.85)' },
      { label: 'Syndromic (FMR1, MECP2)', sublabel: 'single-gene syndromes\n(high penetrance)', color: 'rgba(200,140,60,0.85)' },
      { label: 'Polygenic loading', sublabel: '30–40% of cases\nhave high PGS', color: 'rgba(196,163,90,0.8)' },
    ],
    pathway: 'Synaptic signaling / Chromatin remodeling',
    outcome: 'Autism Spectrum Disorder',
    detail: 'ASD has the broadest genetic heterogeneity of any neurodevelopmental disorder. De novo large-effect variants, inherited rare variants, monogenic syndromes, and high polygenic load all disrupt early cortical circuit formation. The female protective effect — women tolerate higher genetic burden before manifesting ASD — adds another layer to the architecture, likely involving sex-hormone modulation of synaptic pruning.',
  },
}

function drawArrow(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string, lw = 1.5) {
  const ang = Math.atan2(y2 - y1, x2 - x1), hLen = 8
  ctx.strokeStyle = color; ctx.lineWidth = lw
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
  ctx.fillStyle = color; ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x2 - hLen * Math.cos(ang - 0.4), y2 - hLen * Math.sin(ang - 0.4))
  ctx.lineTo(x2 - hLen * Math.cos(ang + 0.4), y2 - hLen * Math.sin(ang + 0.4))
  ctx.closePath(); ctx.fill()
}

function drawRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number, fillColor: string, strokeColor?: string) {
  ctx.beginPath(); ctx.roundRect(x, y, w, h, r)
  ctx.fillStyle = fillColor; ctx.fill()
  if (strokeColor) { ctx.strokeStyle = strokeColor; ctx.lineWidth = 1.5; ctx.stroke() }
}

function drawConvergence(cv: HTMLCanvasElement) {
  const d = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * d; cv.height = cv.clientHeight * d
  const ctx = cv.getContext('2d')!; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(d, d)
  const w = cv.clientWidth, h = cv.clientHeight

  const disease = DISEASES[activeDisease]
  const inputs = disease.inputs

  const pad = { t: 30, b: 40, l: 30, r: 30 }
  const innerW = w - pad.l - pad.r

  // Layout: input boxes on left, funnel in middle, pathway+outcome on right
  const inputBoxW = Math.min(innerW * 0.28, 200)
  const inputBoxH = 68
  const inputGap = 12
  const totalInputH = inputs.length * inputBoxH + (inputs.length - 1) * inputGap
  const inputStartY = (h - totalInputH) / 2

  // Funnel center x
  const funnelX = pad.l + inputBoxW + (innerW - inputBoxW * 2 - 120) * 0.4

  // Draw input boxes
  for (let i = 0; i < inputs.length; i++) {
    const inp = inputs[i]!
    const bx = pad.l, by = inputStartY + i * (inputBoxH + inputGap)
    drawRoundRect(ctx, bx, by, inputBoxW, inputBoxH, 10,
      inp.color.replace(/[\d.]+\)$/, '0.1)'),
      inp.color.replace(/[\d.]+\)$/, '0.35)'))

    ctx.fillStyle = inp.color; ctx.font = 'bold 13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top'
    ctx.fillText(inp.label, bx + inputBoxW / 2, by + 10)
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '11px "Helvetica Neue", sans-serif'
    const sublines = inp.sublabel.split('\n')
    for (let sl = 0; sl < sublines.length; sl++) {
      ctx.fillText(sublines[sl]!, bx + inputBoxW / 2, by + 28 + sl * 14)
    }

    // Arrow from box to funnel
    const arrowStartX = bx + inputBoxW
    const arrowStartY = by + inputBoxH / 2
    const arrowEndX = funnelX
    const arrowEndY = h / 2
    drawArrow(ctx, arrowStartX, arrowStartY, arrowEndX - 4, arrowEndY, inp.color.replace(/[\d.]+\)$/, '0.4)'), 1.5)
  }

  // Funnel shape
  const funnelTopW = 60, funnelBotW = 20, funnelH = h * 0.55
  const funnelTopY = (h - funnelH) / 2, funnelBotY = funnelTopY + funnelH
  const funnelTopX = funnelX - funnelTopW / 2, funnelBotX = funnelX - funnelBotW / 2

  ctx.beginPath()
  ctx.moveTo(funnelTopX, funnelTopY)
  ctx.lineTo(funnelTopX + funnelTopW, funnelTopY)
  ctx.lineTo(funnelBotX + funnelBotW, funnelBotY)
  ctx.lineTo(funnelBotX, funnelBotY)
  ctx.closePath()
  ctx.fillStyle = disease.color.replace(/[\d.]+\)$/, '0.1)'); ctx.fill()
  ctx.strokeStyle = disease.color.replace(/[\d.]+\)$/, '0.3)'); ctx.lineWidth = 1.5; ctx.stroke()

  ctx.fillStyle = disease.color.replace(/[\d.]+\)$/, '0.6)'); ctx.font = 'bold 11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText('converges', funnelX, h / 2)

  // Arrow from funnel to pathway box
  const pathwayBoxX = funnelX + funnelBotW / 2 + 20
  const pathwayBoxW = Math.min(innerW * 0.26, 180)
  const pathwayBoxH = 56
  const pathwayBoxY = (h - pathwayBoxH * 2 - 20) / 2

  drawArrow(ctx, funnelX + funnelBotW / 2, h / 2, pathwayBoxX - 2, h / 2, disease.color.replace(/[\d.]+\)$/, '0.5)'), 2)

  // Pathway box
  drawRoundRect(ctx, pathwayBoxX, pathwayBoxY, pathwayBoxW, pathwayBoxH, 10,
    disease.color.replace(/[\d.]+\)$/, '0.12)'),
    disease.color.replace(/[\d.]+\)$/, '0.4)'))
  ctx.fillStyle = disease.color; ctx.font = 'bold 12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top'
  ctx.fillText('Shared Pathway', pathwayBoxX + pathwayBoxW / 2, pathwayBoxY + 8)
  ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = '11px "Helvetica Neue", sans-serif'
  const pathLines = disease.pathway.split(' / ')
  for (let pl = 0; pl < pathLines.length; pl++) {
    ctx.fillText(pathLines[pl]!, pathwayBoxX + pathwayBoxW / 2, pathwayBoxY + 26 + pl * 14)
  }

  // Arrow to outcome box
  const outcomeBoxY = pathwayBoxY + pathwayBoxH + 20
  const outcomeBoxH = 44
  drawArrow(ctx, pathwayBoxX + pathwayBoxW / 2, pathwayBoxY + pathwayBoxH,
    pathwayBoxX + pathwayBoxW / 2, outcomeBoxY - 2, disease.color.replace(/[\d.]+\)$/, '0.5)'), 2)

  drawRoundRect(ctx, pathwayBoxX, outcomeBoxY, pathwayBoxW, outcomeBoxH, 10,
    disease.color.replace(/[\d.]+\)$/, '0.2)'),
    disease.color.replace(/[\d.]+\)$/, '0.6)'))
  ctx.fillStyle = '#fff'; ctx.font = 'bold 13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText(disease.outcome, pathwayBoxX + pathwayBoxW / 2, outcomeBoxY + outcomeBoxH / 2)

  // Locus heterogeneity label
  ctx.save(); ctx.translate(pad.l + inputBoxW / 2, h * 0.88); ctx.textAlign = 'center'
  ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = 'italic 11px "Helvetica Neue", sans-serif'
  ctx.fillText('Locus heterogeneity', 0, 0); ctx.restore()

  ctx.restore()
}

function updateConvergenceExp() {
  const disease = DISEASES[activeDisease]
  document.getElementById('convergence-explain')!.innerHTML = `<strong>${disease.name}</strong>: ${disease.detail}`

  const btns: Record<DiseaseKey, string> = { dcm: 'btn-dcm', ad: 'btn-ad', asd: 'btn-asd' }
  for (const [key, id] of Object.entries(btns) as [DiseaseKey, string][]) {
    document.getElementById(id)!.classList.toggle('active', key === activeDisease)
  }
}

// ══════════════════════════════════════════════════════════════════════════
// WIRING
// ══════════════════════════════════════════════════════════════════════════

function getCanvas(id: string) { return document.getElementById(id) as HTMLCanvasElement }

// Sim 1 toggles
for (const [id, fn] of [['btn-rare', () => { showRare = !showRare }], ['btn-common', () => { showCommon = !showCommon }], ['btn-apoe', () => { showApoe = !showApoe }]] as [string, () => void][]) {
  document.getElementById(id)!.addEventListener('click', function (this: HTMLButtonElement) {
    fn(); this.classList.toggle('active'); drawComposite(getCanvas('composite-canvas')); updateCompositeExp()
  })
}

// Sim 2 steps
for (let i = 0; i < RISK_STEPS.length; i++) {
  const idx = i
  document.getElementById(`btn-step${i}`)!.addEventListener('click', () => {
    riskStep = idx; drawRisk(getCanvas('risk-canvas')); updateRiskExp()
  })
}

// Sim 3 disease tabs
for (const key of ['dcm', 'ad', 'asd'] as DiseaseKey[]) {
  document.getElementById(`btn-${key}`)!.addEventListener('click', () => {
    activeDisease = key; drawConvergence(getCanvas('convergence-canvas')); updateConvergenceExp()
  })
}

window.addEventListener('resize', () => {
  renderEditorial()
  drawComposite(getCanvas('composite-canvas'))
  drawRisk(getCanvas('risk-canvas'))
  drawConvergence(getCanvas('convergence-canvas'))
})

renderEditorial()
drawComposite(getCanvas('composite-canvas')); updateCompositeExp()
drawRisk(getCanvas('risk-canvas')); updateRiskExp()
drawConvergence(getCanvas('convergence-canvas')); updateConvergenceExp()
