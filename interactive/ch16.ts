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

const HEADLINE = 'HERITABILITY'

const BODY = `If we add up all the genetic effects we've been studying, how much of the variation between people is actually due to genetics versus environment? This question leads to one of the most important — and most misunderstood — concepts in genetics: heritability.

In the early 1900s, Mendelians studied discrete traits following simple rules. Biometricians measured continuous traits like height and argued Mendelian laws couldn't explain them. In 1918, R.A. Fisher unified both camps. His insight: continuous variation arises from the combined small effects of many Mendelian genes. Each ingredient in a cake contributes a little to the final taste. No single gene determines a trait, but together they create something complex.

Fisher decomposed total phenotypic variance into components: VP equals the sum of VA, VD, VI, and VEnvironment. Additive variance VA captures the linear allele effects — each copy adds a fixed increment. Dominance variance VD captures heterozygote deviations. Epistatic variance VI captures gene-gene interactions. And environmental variance captures everything non-genetic: nutrition, lifestyle, chance.

Heritability — h-squared — is the proportion of phenotypic variance due to additive genetic differences. If height has h-squared of 0.68, that means 68 percent of the variation among people is explained by genetic differences. But this does not mean your height is 68 percent genetic. Heritability describes variation within a population, not how predetermined any individual's trait is.

Consider two fields planted with identical seed varieties. Field A has rich soil; Field B has poor soil. Within each field, heritability is high — the plants vary mostly due to genetic differences because they share the same environment. But the difference between the two fields is entirely environmental. Heritability tells you nothing about why Field A plants are taller on average.

We estimate heritability through covariance between relatives. Identical twins share 100 percent of DNA; fraternal twins share 50 percent. If identical twins are more similar in height than fraternal twins, that extra similarity reflects genetic influence. Twin studies estimate height heritability at about 0.80. SNP-based methods using LDSC give about 0.68 — lower because they miss rare variants and structural variation.

Heritability is not fixed. Height has h-squared of 0.68 in well-nourished populations. BMI has 0.30 — diet and exercise dominate. Blood pressure has 0.25 — stress, medication, and lifestyle play large roles. Change the environment and heritability changes too, even though genes haven't changed at all. Fisher's model, now over a century old, still underlies everything from twin studies to GWAS to polygenic risk scores.`

const PULLQUOTES = [
  '"Heritability describes variation within a population — not how predetermined any individual\'s trait is."',
  '"Same seeds, different soil. Heritability is high in both fields, but the difference between them is entirely environmental."',
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
      { text: PULLQUOTES[0]!, ci: 0, yF: 0.4, wF: 0.52, side: 'right' as const },
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
// SIM 1: VARIANCE PARTITIONING
// ══════════════════════════════════════════════════════════════════════════

let va = 55, vd = 5, vi = 2, ve = 38

function drawVariance(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)

  const total = va + vd + vi + ve || 1
  const fracs = [va / total, vd / total, vi / total, ve / total]
  const labels = ['VA (Additive)', 'VD (Dominance)', 'VI (Epistasis)', 'VEnv (Environment)']
  const colors = ['#c4a35a', '#6488ff', '#a070d0', '#5a9a6a']
  const faintColors = ['rgba(196,163,90,0.15)', 'rgba(100,136,255,0.15)', 'rgba(160,112,208,0.15)', 'rgba(90,154,106,0.15)']

  // Left: Pie chart
  const cx = Math.min(w * 0.28, 180), cy = h * 0.45, r = Math.min(cx - 20, h * 0.35)
  let startAngle = -Math.PI / 2
  for (let i = 0; i < 4; i++) {
    if (fracs[i]! < 0.001) continue
    const sweep = fracs[i]! * Math.PI * 2
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, startAngle, startAngle + sweep); ctx.closePath()
    ctx.fillStyle = colors[i]!; ctx.globalAlpha = 0.7; ctx.fill(); ctx.globalAlpha = 1
    ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 2; ctx.stroke()

    // Label
    const midAngle = startAngle + sweep / 2
    const lx = cx + (r + 24) * Math.cos(midAngle), ly = cy + (r + 24) * Math.sin(midAngle)
    ctx.fillStyle = colors[i]!; ctx.font = 'bold 13px "Helvetica Neue", sans-serif'
    ctx.textAlign = Math.cos(midAngle) > 0 ? 'left' : 'right'; ctx.textBaseline = 'middle'
    if (fracs[i]! > 0.05) ctx.fillText(`${(fracs[i]! * 100).toFixed(0)}%`, lx, ly)

    startAngle += sweep
  }

  // Center label
  const h2 = va / total
  ctx.fillStyle = '#c4a35a'; ctx.font = `bold 28px ${HF}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText(`h² = ${h2.toFixed(2)}`, cx, cy - 8)
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px "Helvetica Neue", sans-serif'
  ctx.fillText('narrow-sense', cx, cy + 16)

  // Right: Stacked bar
  const barX = w * 0.55, barW = Math.min(w * 0.38, 300), barH = h * 0.65, barTop = h * 0.15
  let cumY = barTop
  for (let i = 0; i < 4; i++) {
    const segH = fracs[i]! * barH
    if (segH < 1) continue
    ctx.fillStyle = faintColors[i]!
    ctx.fillRect(barX, cumY, barW, segH)
    ctx.fillStyle = colors[i]!; ctx.globalAlpha = 0.8
    ctx.fillRect(barX, cumY, 6, segH); ctx.globalAlpha = 1

    // Label
    if (segH > 18) {
      ctx.fillStyle = colors[i]!; ctx.font = '13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
      ctx.fillText(`${labels[i]} = ${(fracs[i]! * 100).toFixed(1)}%`, barX + 16, cumY + segH / 2)
    }
    cumY += segH
  }

  // Brace for h²
  const h2H = fracs[0]! * barH
  if (h2H > 30) {
    ctx.strokeStyle = 'rgba(196,163,90,0.4)'; ctx.lineWidth = 1.5
    const bx = barX + barW + 12
    ctx.beginPath(); ctx.moveTo(bx, barTop); ctx.lineTo(bx + 8, barTop); ctx.moveTo(bx + 8, barTop); ctx.lineTo(bx + 8, barTop + h2H); ctx.moveTo(bx, barTop + h2H); ctx.lineTo(bx + 8, barTop + h2H); ctx.stroke()
    ctx.fillStyle = '#c4a35a'; ctx.font = 'bold 12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
    ctx.fillText(`h² = VA/VP`, bx + 14, barTop + h2H / 2)
  }

  // H² brace (broad-sense)
  const broadH = (fracs[0]! + fracs[1]! + fracs[2]!) * barH
  if (broadH > h2H + 20) {
    ctx.strokeStyle = 'rgba(100,136,255,0.3)'; ctx.lineWidth = 1
    const bx = barX + barW + 60
    ctx.beginPath(); ctx.moveTo(bx, barTop); ctx.lineTo(bx + 6, barTop); ctx.moveTo(bx + 6, barTop); ctx.lineTo(bx + 6, barTop + broadH); ctx.moveTo(bx, barTop + broadH); ctx.lineTo(bx + 6, barTop + broadH); ctx.stroke()
    ctx.fillStyle = 'rgba(100,136,255,0.6)'; ctx.font = '11px "Helvetica Neue", sans-serif'
    ctx.fillText(`H² = ${((va + vd + vi) / total).toFixed(2)}`, bx + 12, barTop + broadH / 2)
  }

  // VP label
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('VP (total)', barX + barW / 2, barTop + barH + 20)

  ctx.restore()
}

function updateVarianceExp() {
  const el = document.getElementById('variance-explain')!
  const total = va + vd + vi + ve || 1
  const h2 = va / total, H2 = (va + vd + vi) / total
  document.getElementById('h2-result')!.textContent = `h² = ${h2.toFixed(2)}`
  document.getElementById('h2-sub')!.textContent = `Narrow-sense: ${(h2 * 100).toFixed(1)}% | Broad-sense H² = ${H2.toFixed(2)}`

  if (ve / total > 0.6) {
    el.innerHTML = `Environment dominates — <strong>${(ve / total * 100).toFixed(0)}%</strong> of variance is non-genetic. Like BMI or blood pressure, where diet, exercise, and lifestyle create most of the individual differences. Heritability is low even though genetics still matters.`
  } else if (va / total > 0.6) {
    el.innerHTML = `Additive variance dominates — <strong>h² = ${h2.toFixed(2)}</strong>. This looks like height in well-nourished populations. Genetic differences explain most of the variation. Fisher's additive model captures nearly everything.`
  } else if (vd / total > 0.15) {
    el.innerHTML = `Unusually high dominance contribution (<strong>${(vd / total * 100).toFixed(0)}%</strong>). In reality, the UK Biobank found dominance explains only ~0.5% of additive variance for most traits. Dominance variance this large would be exceptional.`
  } else {
    el.innerHTML = `A mixed picture: <strong>VA = ${(va / total * 100).toFixed(0)}%</strong>, <strong>VEnv = ${(ve / total * 100).toFixed(0)}%</strong>. Most real traits fall somewhere here. The narrow-sense h² of ${h2.toFixed(2)} means ${(h2 * 100).toFixed(0)}% of variation between individuals comes from additive genetic differences.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 2: TWO FIELDS
// ══════════════════════════════════════════════════════════════════════════

let fieldA = 90, fieldB = 30

function drawFields(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)

  const padT = 50, padB = 60, padS = 40, gap = 60
  const fW = (w - padS * 2 - gap) / 2, fH = h - padT - padB

  // Generate "plants" — same genetic variance, different mean based on nutrition
  const nPlants = 30
  const geneticSD = 12 // genetic variation (same for both)
  const seed = 42

  function seededRand(s: number) { return function () { s = (s * 16807 + 0) % 2147483647; return s / 2147483647 } }
  const rng = seededRand(seed)
  function normalRand() { const u1 = rng(), u2 = rng(); return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2) }

  const geneticEffects: number[] = []
  for (let i = 0; i < nPlants; i++) geneticEffects.push(normalRand() * geneticSD)

  const envSD = 5 // small environmental noise within each field

  function drawField(fx: number, label: string, nutrition: number, color: string) {
    const baseMean = 80 + nutrition * 1.0 // nutrition → mean height
    const plants: number[] = []
    for (let i = 0; i < nPlants; i++) {
      plants.push(baseMean + geneticEffects[i]! + normalRand() * envSD)
    }
    plants.sort((a, b) => a - b)

    const maxH = 200, minH = 50
    const fieldMean = plants.reduce((a, b) => a + b, 0) / nPlants

    // Ground line
    ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(fx, padT + fH); ctx.lineTo(fx + fW, padT + fH); ctx.stroke()

    // Plants as vertical lines (stems)
    const plantGap = fW / (nPlants + 1)
    for (let i = 0; i < nPlants; i++) {
      const x = fx + plantGap * (i + 1)
      const plantH = Math.max(10, ((plants[i]! - minH) / (maxH - minH)) * fH * 0.85)
      const y = padT + fH - plantH

      // Stem
      ctx.strokeStyle = color; ctx.globalAlpha = 0.6; ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(x, padT + fH); ctx.lineTo(x, y); ctx.stroke(); ctx.globalAlpha = 1

      // Leaf/top
      ctx.fillStyle = color; ctx.globalAlpha = 0.5
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1
    }

    // Mean line
    const meanScreenH = ((fieldMean - minH) / (maxH - minH)) * fH * 0.85
    const meanY = padT + fH - meanScreenH
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4])
    ctx.beginPath(); ctx.moveTo(fx, meanY); ctx.lineTo(fx + fW, meanY); ctx.stroke(); ctx.setLineDash([])

    // Mean label
    ctx.fillStyle = color; ctx.font = 'bold 13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText(`μ = ${fieldMean.toFixed(0)} cm`, fx + fW / 2, meanY - 10)

    // Field label
    ctx.fillStyle = '#fff'; ctx.font = 'bold 16px "Helvetica Neue", sans-serif'
    ctx.fillText(label, fx + fW / 2, padT - 20)
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '12px "Helvetica Neue", sans-serif'
    ctx.fillText(`Nutrition: ${nutrition}%`, fx + fW / 2, padT - 4)

    // h² within field
    const genVar = geneticEffects.reduce((s, g) => s + g * g, 0) / nPlants
    const envVar = envSD * envSD
    const h2 = genVar / (genVar + envVar)
    ctx.fillStyle = '#c4a35a'; ctx.font = 'bold 14px "Helvetica Neue", sans-serif'
    ctx.fillText(`h² ≈ ${h2.toFixed(2)}`, fx + fW / 2, h - 16)
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '11px "Helvetica Neue", sans-serif'
    ctx.fillText('(within this field)', fx + fW / 2, h - 2)
  }

  drawField(padS, 'Field A', fieldA, 'rgba(80,200,140,0.9)')
  drawField(padS + fW + gap, 'Field B', fieldB, 'rgba(200,140,80,0.9)')

  // Arrow between fields showing environmental difference
  const arrowY = h - 42
  ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.moveTo(padS + fW + 8, arrowY); ctx.lineTo(padS + fW + gap - 8, arrowY); ctx.stroke()
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = 'italic 11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('Δ = environment', padS + fW + gap / 2, arrowY - 8)

  ctx.restore()
}

function updateFieldsExp() {
  const el = document.getElementById('fields-explain')!
  const diff = Math.abs(fieldA - fieldB)
  if (diff < 10) {
    el.innerHTML = `Both fields have similar nutrition. The plants look similar overall — and heritability is high in both. When environments are uniform, <strong>genetic differences dominate</strong> the variation within each field.`
  } else if (diff > 50) {
    el.innerHTML = `Dramatic environmental contrast. Field A plants are much taller on average, but <strong>heritability is similarly high in both fields</strong>. The between-field difference is <em>entirely environmental</em>. This is why h² cannot explain group differences — it only describes variation <em>within</em> a group.`
  } else {
    el.innerHTML = `Moderate nutritional difference. Notice: heritability is high in both fields individually, yet the <strong>mean difference</strong> between fields comes from environment alone. The same seeds in the same soil would grow the same.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 3: TWIN STUDY
// ══════════════════════════════════════════════════════════════════════════

let twinH2 = 68

function drawTwins(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)

  const pad = { t: 50, b: 50, l: 70, r: 40 }
  const cW = (w - pad.l - pad.r - 80) / 2, cH = h - pad.t - pad.b

  const h2 = twinH2 / 100
  // MZ correlation ≈ h² (narrow-sense) when shared env is small
  // DZ correlation ≈ h²/2
  const rMZ = Math.min(0.98, h2 * 0.95 + 0.03)
  const rDZ = Math.min(0.95, h2 * 0.5 + 0.02)

  function seededRand(s: number) { return function () { s = (s * 16807 + 0) % 2147483647; return s / 2147483647 } }
  function drawScatter(ox: number, label: string, corr: number, color: string) {
    const rng = seededRand(label === 'MZ' ? 123 : 456)
    function nrand() { const u1 = rng(), u2 = rng(); return Math.sqrt(-2 * Math.log(Math.max(u1, 0.001))) * Math.cos(2 * Math.PI * u2) }

    // Generate correlated pairs
    const n = 60
    const mean = 170, sd = 8
    const pts: [number, number][] = []
    for (let i = 0; i < n; i++) {
      const g = nrand() * sd
      const x = mean + g + nrand() * sd * Math.sqrt(1 - corr)
      const y = mean + g * corr + nrand() * sd * Math.sqrt(1 - corr * corr)
      pts.push([x, y])
    }

    // Axes
    const axMin = 145, axMax = 200
    const toX = (v: number) => ox + ((v - axMin) / (axMax - axMin)) * cW
    const toY = (v: number) => pad.t + (1 - (v - axMin) / (axMax - axMin)) * cH

    ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(ox, pad.t); ctx.lineTo(ox, pad.t + cH); ctx.lineTo(ox + cW, pad.t + cH); ctx.stroke()

    // Grid
    for (let v = 150; v <= 195; v += 10) {
      ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.font = '10px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'
      ctx.fillText(`${v}`, ox - 6, toY(v) + 3)
      ctx.textAlign = 'center'
      ctx.fillText(`${v}`, toX(v), pad.t + cH + 16)
    }

    // Points
    for (const [px, py] of pts) {
      ctx.fillStyle = color; ctx.globalAlpha = 0.5
      ctx.beginPath(); ctx.arc(toX(px), toY(py), 3.5, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1
    }

    // Regression line
    ctx.strokeStyle = color; ctx.globalAlpha = 0.6; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(toX(axMin), toY(mean + (axMin - mean) * corr)); ctx.lineTo(toX(axMax), toY(mean + (axMax - mean) * corr)); ctx.stroke(); ctx.globalAlpha = 1

    // Labels
    ctx.fillStyle = '#fff'; ctx.font = 'bold 15px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText(`${label} Twins`, ox + cW / 2, pad.t - 24)
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '12px "Helvetica Neue", sans-serif'
    ctx.fillText(`DNA shared: ${label === 'MZ' ? '100' : '50'}%`, ox + cW / 2, pad.t - 8)

    // Correlation
    ctx.fillStyle = color; ctx.font = `bold 16px "Helvetica Neue", sans-serif`
    ctx.fillText(`r = ${corr.toFixed(2)}`, ox + cW / 2, pad.t + cH + 38)

    // Axis labels
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '10px "Helvetica Neue", sans-serif'
    ctx.fillText('Twin 1 height (cm)', ox + cW / 2, h - 4)
    ctx.save(); ctx.translate(ox - 44, pad.t + cH / 2); ctx.rotate(-Math.PI / 2)
    ctx.fillText('Twin 2 height (cm)', 0, 0); ctx.restore()
  }

  drawScatter(pad.l, 'MZ', rMZ, 'rgba(196,163,90,0.8)')
  drawScatter(pad.l + cW + 80, 'DZ', rDZ, 'rgba(100,140,255,0.8)')

  ctx.restore()
}

function updateTwinsExp() {
  const el = document.getElementById('twins-explain')!
  const h2 = twinH2 / 100
  const rMZ = Math.min(0.98, h2 * 0.95 + 0.03), rDZ = Math.min(0.95, h2 * 0.5 + 0.02)
  document.getElementById('twin-h2-val')!.textContent = h2.toFixed(2)

  if (h2 > 0.7) {
    el.innerHTML = `High heritability (<strong>h² = ${h2.toFixed(2)}</strong>). MZ twins (r = ${rMZ.toFixed(2)}) are much more similar than DZ twins (r = ${rDZ.toFixed(2)}). The tighter MZ scatter shows that shared genetics creates strong trait resemblance. This is what we see for <strong>height</strong> (h² ≈ 0.80 from twin studies).`
  } else if (h2 > 0.35) {
    el.innerHTML = `Moderate heritability (<strong>h² = ${h2.toFixed(2)}</strong>). MZ twins (r = ${rMZ.toFixed(2)}) are somewhat more similar than DZ twins (r = ${rDZ.toFixed(2)}), but there's considerable scatter in both. Environment contributes substantially — like <strong>BMI</strong> (h² ≈ 0.30), where diet and lifestyle matter.`
  } else {
    el.innerHTML = `Low heritability (<strong>h² = ${h2.toFixed(2)}</strong>). Both scatter plots look similar — MZ twins (r = ${rMZ.toFixed(2)}) are barely more similar than DZ twins (r = ${rDZ.toFixed(2)}). Environmental factors dominate, like <strong>blood pressure</strong> (h² ≈ 0.25).`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 4: TRAIT COMPARISON
// ══════════════════════════════════════════════════════════════════════════

const TRAITS = [
  { name: 'Height', h2: 0.68, snpH2: 0.68, twinH2: 0.80, envNote: 'Nutrition, childhood illness', color: '#c4a35a' },
  { name: 'BMI', h2: 0.30, snpH2: 0.25, twinH2: 0.40, envNote: 'Diet, exercise, lifestyle', color: '#6488ff' },
  { name: 'Blood Pressure', h2: 0.25, snpH2: 0.20, twinH2: 0.30, envNote: 'Stress, diet, medication', color: '#a070d0' },
  { name: 'Education years', h2: 0.20, snpH2: 0.13, twinH2: 0.40, envNote: 'Socioeconomic, access, culture', color: '#5ab89a' },
  { name: 'Type 2 Diabetes', h2: 0.45, snpH2: 0.18, twinH2: 0.60, envNote: 'Diet, obesity, age', color: '#d07050' },
]

function drawTraits(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)

  const pad = { t: 40, b: 50, l: 140, r: 40 }
  const cW = w - pad.l - pad.r, cH = h - pad.t - pad.b
  const barH = Math.min(40, (cH - 20 * (TRAITS.length - 1)) / TRAITS.length)
  const gap = (cH - barH * TRAITS.length) / (TRAITS.length - 1)

  // Header
  ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('0%', pad.l, pad.t - 8)
  ctx.fillText('50%', pad.l + cW * 0.5, pad.t - 8)
  ctx.fillText('100%', pad.l + cW, pad.t - 8)

  // Grid
  for (let p = 0; p <= 1; p += 0.25) {
    const x = pad.l + p * cW
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + cH); ctx.stroke()
  }

  for (let i = 0; i < TRAITS.length; i++) {
    const t = TRAITS[i]!
    const y = pad.t + i * (barH + gap)

    // Trait label
    ctx.fillStyle = t.color; ctx.font = 'bold 14px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
    ctx.fillText(t.name, pad.l - 14, y + barH / 2)

    // Full bar (VP = 100%)
    ctx.fillStyle = 'rgba(255,255,255,0.03)'; ctx.beginPath()
    ctx.roundRect(pad.l, y, cW, barH, 4); ctx.fill()

    // Genetic portion (h²)
    const genW = t.h2 * cW
    const gr = ctx.createLinearGradient(pad.l, y, pad.l + genW, y)
    gr.addColorStop(0, t.color); gr.addColorStop(1, t.color.replace(')', ',0.4)').replace('rgb', 'rgba'))
    ctx.fillStyle = gr; ctx.globalAlpha = 0.7; ctx.beginPath()
    ctx.roundRect(pad.l, y, genW, barH, [4, 0, 0, 4]); ctx.fill(); ctx.globalAlpha = 1

    // h² value
    ctx.fillStyle = '#fff'; ctx.font = 'bold 13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
    const labelX = genW > 50 ? pad.l + genW / 2 : pad.l + genW + 8
    ctx.textAlign = genW > 50 ? 'center' : 'left'
    ctx.fillText(`h² = ${t.h2.toFixed(2)}`, labelX, y + barH / 2)

    // Environment label
    ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'
    ctx.fillText(t.envNote, pad.l + genW + (genW > cW * 0.5 ? -genW + 10 : 10), y + barH + 12)

    // Twin vs SNP markers
    const twinX = pad.l + t.twinH2 * cW
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(twinX, y + 2); ctx.lineTo(twinX, y + barH - 2); ctx.stroke()

    const snpX = pad.l + t.snpH2 * cW
    ctx.strokeStyle = 'rgba(196,163,90,0.4)'; ctx.setLineDash([3, 3])
    ctx.beginPath(); ctx.moveTo(snpX, y + 2); ctx.lineTo(snpX, y + barH - 2); ctx.stroke(); ctx.setLineDash([])
  }

  // Legend
  ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'
  ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1
  const ly = h - 16
  ctx.beginPath(); ctx.moveTo(pad.l, ly); ctx.lineTo(pad.l + 12, ly); ctx.stroke()
  ctx.fillText('Twin study h²', pad.l + 18, ly + 3)
  ctx.strokeStyle = 'rgba(196,163,90,0.4)'; ctx.setLineDash([3, 3])
  ctx.beginPath(); ctx.moveTo(pad.l + 120, ly); ctx.lineTo(pad.l + 132, ly); ctx.stroke(); ctx.setLineDash([])
  ctx.fillText('SNP-based h²', pad.l + 138, ly + 3)

  ctx.restore()
}

function updateTraitsExp() {
  document.getElementById('traits-explain')!.innerHTML = `<strong>Height</strong> has the highest heritability (h² ≈ 0.68) — in well-nourished populations, genetics explains most individual differences. <strong>BMI</strong> and <strong>blood pressure</strong> have lower h² because diet, exercise, stress, and medication create large environmental variance.<br><br>Notice the gap between twin-study estimates (|) and SNP-based estimates (⌇). Twin studies capture all genetic effects including rare variants; SNP-based methods miss some. This "missing heritability" gap narrows as sequencing technology improves.<br><br><strong>Key insight:</strong> h² is not a fixed property of a trait. It depends on the population and environment. In a population where everyone eats the same diet, BMI heritability would rise — not because genes changed, but because environmental variance shrank.`
}

// ══════════════════════════════════════════════════════════════════════════
// WIRING
// ══════════════════════════════════════════════════════════════════════════

function wire(id: string, cb: (v: number) => void) {
  document.getElementById(id)!.addEventListener('input', function (this: HTMLInputElement) { cb(parseInt(this.value)) })
}

wire('va-slider', v => { va = v; document.getElementById('va-val')!.textContent = `${v}`; drawVariance(document.getElementById('variance-canvas') as HTMLCanvasElement); updateVarianceExp() })
wire('vd-slider', v => { vd = v; document.getElementById('vd-val')!.textContent = `${v}`; drawVariance(document.getElementById('variance-canvas') as HTMLCanvasElement); updateVarianceExp() })
wire('vi-slider', v => { vi = v; document.getElementById('vi-val')!.textContent = `${v}`; drawVariance(document.getElementById('variance-canvas') as HTMLCanvasElement); updateVarianceExp() })
wire('ve-slider', v => { ve = v; document.getElementById('ve-val')!.textContent = `${v}`; drawVariance(document.getElementById('variance-canvas') as HTMLCanvasElement); updateVarianceExp() })
wire('fieldA-slider', v => { fieldA = v; document.getElementById('fieldA-val')!.textContent = `${v}`; drawFields(document.getElementById('fields-canvas') as HTMLCanvasElement); updateFieldsExp() })
wire('fieldB-slider', v => { fieldB = v; document.getElementById('fieldB-val')!.textContent = `${v}`; drawFields(document.getElementById('fields-canvas') as HTMLCanvasElement); updateFieldsExp() })
wire('twin-h2-slider', v => { twinH2 = v; drawTwins(document.getElementById('twins-canvas') as HTMLCanvasElement); updateTwinsExp() })

window.addEventListener('resize', () => {
  renderEditorial()
  drawVariance(document.getElementById('variance-canvas') as HTMLCanvasElement)
  drawFields(document.getElementById('fields-canvas') as HTMLCanvasElement)
  drawTwins(document.getElementById('twins-canvas') as HTMLCanvasElement)
  drawTraits(document.getElementById('traits-canvas') as HTMLCanvasElement)
})

renderEditorial()
drawVariance(document.getElementById('variance-canvas') as HTMLCanvasElement); updateVarianceExp()
drawFields(document.getElementById('fields-canvas') as HTMLCanvasElement); updateFieldsExp()
drawTwins(document.getElementById('twins-canvas') as HTMLCanvasElement); updateTwinsExp()
drawTraits(document.getElementById('traits-canvas') as HTMLCanvasElement); updateTraitsExp()
