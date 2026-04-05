import {
  layoutNextLine, layoutWithLines, prepareWithSegments, walkLineRanges,
  type LayoutCursor, type PreparedTextWithSegments,
} from '@chenglou/pretext'

// ══════════════════════════════════════════════════════════════════════════
// EDITORIAL
// ══════════════════════════════════════════════════════════════════════════

const BF = '18px "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif'
const BLH = 30, HF = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif'
const GUT = 48, CGAP = 40, BGAP = 60, DCL = 3, MSL = 50, NR = 760

const HL = 'PARTITIONED VARIANCE'

const BODY = `Fisher showed us how to decompose phenotypic variance into additive, dominance, epistatic, and environmental components. But in real biomedical research, the question goes further: when you measure a trait in a population, genetic and environmental sources are tangled together. Partitioning them apart is what lets us understand what is actually driving variation.

Two recent studies extend variance partitioning beyond the classical VP = VA + VD + VE + VEnvironment framework — and show how it works across multiple biological layers.

Yap and colleagues studied 247 children to ask how much variance in autism, diet, and stool consistency could be attributed to the gut microbiome. They created b-squared — the microbiome analog of heritability — which partitions trait variance into the fraction explained by microbial composition. For autism diagnosis, b-squared was 0 to 9 percent. For dietary patterns and stool consistency, it was 40 to 64 percent. The microbiome is a substantial source of variance for diet-related traits, but contributes almost nothing to neurodevelopmental variation.

This matters because it reveals a layered variance structure. Genetic factors affect neurodevelopment and behavior. Behavioral factors — including selective eating in autism — shape dietary choices. Dietary choices reshape the microbiome. Each layer partitions variance differently: genetics explains ASD, behavior mediates the connection, and the microbiome sits at the end of the chain capturing diet-related variance.

Ahlqvist and colleagues used a different partitioning approach with 2.48 million Swedish children. They decomposed variance into familial components — shared genetics and shared environment between siblings — versus unique environmental exposure during each pregnancy. At the population level, acetaminophen use was associated with ASD risk at a hazard ratio of 1.05 to 1.07. But when comparing siblings — effectively subtracting out additive familial variance and shared environment — the hazard ratio dropped to 1.0.

This sibling control design is a direct application of Fisher's framework. Siblings share approximately 50 percent of additive genetic variance and nearly all shared environmental variance. By comparing within families, the study isolated the unique environmental contribution of acetaminophen — and found it was zero. The initial association was entirely attributable to shared familial factors, not the drug itself.

Both studies demonstrate the same principle: until you partition variance into its components, you cannot determine which factors genuinely contribute to trait variation. The decomposition changes the answer to high-stakes biomedical questions.`

const PQS = [
  '"b² for ASD = 0–9%. b² for diet = 40–64%. The microbiome partitions variance for diet, not neurodevelopment."',
  '"Sibling control subtracts shared familial variance. What remains is unique environment — and for acetaminophen, it was zero."',
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
    const specs = [{ text: PQS[0]!, ci: 0, yF: 0.42, wF: 0.52, side: 'right' as const }, { text: PQS[1]!, ci: cc > 2 ? 2 : 1, yF: 0.5, wF: 0.5, side: 'left' as const }]
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
// HELPERS
// ══════════════════════════════════════════════════════════════════════════

function dpr() { return window.devicePixelRatio || 1 }
function initCanvas(cv: HTMLCanvasElement) {
  const d = dpr(); cv.width = cv.clientWidth * d; cv.height = cv.clientHeight * d
  const ctx = cv.getContext('2d')!; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(d, d)
  return { ctx, w: cv.clientWidth, h: cv.clientHeight }
}

function drawArrow(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string, lineWidth = 2) {
  const angle = Math.atan2(y2 - y1, x2 - x1), headLen = 10
  ctx.strokeStyle = color; ctx.lineWidth = lineWidth
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
  ctx.fillStyle = color; ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x2 - headLen * Math.cos(angle - 0.35), y2 - headLen * Math.sin(angle - 0.35))
  ctx.lineTo(x2 - headLen * Math.cos(angle + 0.35), y2 - headLen * Math.sin(angle + 0.35))
  ctx.closePath(); ctx.fill()
}

function drawBox(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, label: string, color: string, fontSize = 14) {
  ctx.fillStyle = color.replace(/[\d.]+\)$/, '0.12)'); ctx.beginPath(); ctx.roundRect(x, y, w, h, 10); ctx.fill()
  ctx.strokeStyle = color.replace(/[\d.]+\)$/, '0.4)'); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.roundRect(x, y, w, h, 10); ctx.stroke()
  ctx.fillStyle = color; ctx.font = `600 ${fontSize}px "Helvetica Neue", sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText(label, x + w / 2, y + h / 2)
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 1: MICROBIOME & ASD (3-step reveal)
// ══════════════════════════════════════════════════════════════════════════

let microStep = 1

function drawMicro(cv: HTMLCanvasElement) {
  const { ctx, w, h } = initCanvas(cv)

  if (microStep === 1) {
    // Step 1: What is b²?
    ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = 'bold 16px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('h² measures genetic contribution.  b² measures microbiome contribution.', w / 2, h * 0.1)

    // h² box
    const bx1 = w * 0.1, by1 = h * 0.22, bw1 = w * 0.35, bh1 = h * 0.3
    ctx.fillStyle = 'rgba(196,163,90,0.08)'; ctx.beginPath(); ctx.roundRect(bx1, by1, bw1, bh1, 12); ctx.fill()
    ctx.strokeStyle = 'rgba(196,163,90,0.3)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(bx1, by1, bw1, bh1, 12); ctx.stroke()
    ctx.fillStyle = '#c4a35a'; ctx.font = 'bold 28px "Iowan Old Style", serif'; ctx.textAlign = 'center'
    ctx.fillText('h²', bx1 + bw1 / 2, by1 + 40)
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '13px "Helvetica Neue", sans-serif'
    ctx.fillText('= VA / VP', bx1 + bw1 / 2, by1 + 65)
    ctx.fillText('How much trait variance', bx1 + bw1 / 2, by1 + 90)
    ctx.fillText('is explained by GENETICS?', bx1 + bw1 / 2, by1 + 108)

    // b² box
    const bx2 = w * 0.55, by2 = by1
    ctx.fillStyle = 'rgba(80,200,140,0.08)'; ctx.beginPath(); ctx.roundRect(bx2, by2, bw1, bh1, 12); ctx.fill()
    ctx.strokeStyle = 'rgba(80,200,140,0.3)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(bx2, by2, bw1, bh1, 12); ctx.stroke()
    ctx.fillStyle = 'rgba(80,200,140,0.8)'; ctx.font = 'bold 28px "Iowan Old Style", serif'
    ctx.fillText('b²', bx2 + bw1 / 2, by2 + 40)
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '13px "Helvetica Neue", sans-serif'
    ctx.fillText('= VMicrobiome / VP', bx2 + bw1 / 2, by2 + 65)
    ctx.fillText('How much trait variance', bx2 + bw1 / 2, by2 + 90)
    ctx.fillText('is explained by MICROBIOME?', bx2 + bw1 / 2, by2 + 108)

    // Same logic
    drawArrow(ctx, bx1 + bw1, by1 + bh1 / 2, bx2, by2 + bh1 / 2, 'rgba(255,255,255,0.15)', 1)
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = 'italic 12px "Helvetica Neue", sans-serif'
    ctx.fillText('same logic', (bx1 + bw1 + bx2) / 2, by1 + bh1 / 2 - 10)

    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '14px "Helvetica Neue", sans-serif'
    ctx.fillText('Yap et al. (2021, Cell) — 247 children with and without ASD', w / 2, h * 0.72)
    ctx.fillText('Measured: autism diagnosis, dietary patterns, gut microbiome composition', w / 2, h * 0.72 + 22)

  } else if (microStep === 2) {
    // Step 2: Show b² values — microbiome explains diet, not ASD
    const barX = w * 0.15, barW = w * 0.7, barTop = h * 0.15, barH = h * 0.65
    const traits = [
      { name: 'ASD diagnosis', b2: 0.05, color: 'rgba(200,140,80,0.8)', note: '0–9%' },
      { name: 'Dietary diversity', b2: 0.52, color: 'rgba(80,200,140,0.8)', note: '~52%' },
      { name: 'Food selectivity', b2: 0.48, color: 'rgba(80,200,140,0.8)', note: '~48%' },
      { name: 'Stool consistency', b2: 0.64, color: 'rgba(100,180,220,0.8)', note: '~64%' },
    ]
    const rowH = barH / traits.length, gap = 16

    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = 'bold 15px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'
    ctx.fillText('b² — How much does the microbiome explain?', barX, barTop - 16)
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '12px "Helvetica Neue", sans-serif'
    ctx.fillText('(Yap et al. 2021, Cell — 247 children)', barX, barTop)

    for (let i = 0; i < traits.length; i++) {
      const t = traits[i]!, y = barTop + 20 + i * rowH, bH = rowH - gap
      // Label
      ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = '14px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'
      ctx.fillText(t.name, barX - 10, y + bH / 2 + 4)
      // Background bar (100%)
      ctx.fillStyle = 'rgba(255,255,255,0.03)'; ctx.beginPath(); ctx.roundRect(barX, y, barW, bH, 4); ctx.fill()
      // Value bar
      const vW = t.b2 * barW
      const g = ctx.createLinearGradient(barX, y, barX + vW, y)
      g.addColorStop(0, t.color); g.addColorStop(1, t.color.replace(/[\d.]+\)$/, '0.3)'))
      ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(barX, y, Math.max(vW, 4), bH, 4); ctx.fill()
      // Value label
      ctx.fillStyle = t.color; ctx.font = 'bold 16px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'
      ctx.fillText(t.note, barX + vW + 10, y + bH / 2 + 5)
    }

    // Insight callout
    ctx.fillStyle = 'rgba(196,163,90,0.6)'; ctx.font = 'bold 14px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('The microbiome explains DIET — not AUTISM.', w / 2, h * 0.92)

  } else {
    // Step 3: The real causal pathway
    const cx = w / 2, rowY = h * 0.18
    const boxes = [
      { label: 'ASD\n(Genetics &\nNeurodevelopment)', x: cx - 80, y: rowY, w: 160, h: 70, color: 'rgba(200,140,80,0.8)' },
      { label: 'Selective Eating\n(Behavior)', x: cx - 80, y: rowY + 110, w: 160, h: 56, color: 'rgba(196,163,90,0.8)' },
      { label: 'Altered Diet\n(Limited variety)', x: cx - 80, y: rowY + 206, w: 160, h: 56, color: 'rgba(150,180,100,0.8)' },
      { label: 'Different\nMicrobiome', x: cx - 80, y: rowY + 302, w: 160, h: 56, color: 'rgba(80,200,140,0.8)' },
    ]

    // Draw boxes
    for (const b of boxes) {
      ctx.fillStyle = b.color.replace(/[\d.]+\)$/, '0.1)'); ctx.beginPath(); ctx.roundRect(b.x, b.y, b.w, b.h, 10); ctx.fill()
      ctx.strokeStyle = b.color.replace(/[\d.]+\)$/, '0.4)'); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.roundRect(b.x, b.y, b.w, b.h, 10); ctx.stroke()
      ctx.fillStyle = b.color; ctx.font = '13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      const lines = b.label.split('\n')
      for (let li = 0; li < lines.length; li++) ctx.fillText(lines[li]!, b.x + b.w / 2, b.y + b.h / 2 + (li - (lines.length - 1) / 2) * 16)
    }

    // Arrows down
    for (let i = 0; i < 3; i++) {
      const from = boxes[i]!, to = boxes[i + 1]!
      drawArrow(ctx, cx, from.y + from.h + 4, cx, to.y - 4, 'rgba(196,163,90,0.6)', 2)
    }

    // Crossed-out wrong arrow
    const wrongX1 = boxes[3]!.x + boxes[3]!.w + 20, wrongY = (boxes[3]!.y + boxes[0]!.y + boxes[0]!.h) / 2
    ctx.strokeStyle = 'rgba(255,107,74,0.2)'; ctx.lineWidth = 2; ctx.setLineDash([6, 4])
    ctx.beginPath(); ctx.moveTo(boxes[3]!.x + boxes[3]!.w + 10, boxes[3]!.y + boxes[3]!.h / 2)
    ctx.lineTo(wrongX1 + 30, boxes[3]!.y + boxes[3]!.h / 2)
    ctx.lineTo(wrongX1 + 30, boxes[0]!.y + boxes[0]!.h / 2)
    ctx.lineTo(boxes[0]!.x + boxes[0]!.w + 10, boxes[0]!.y + boxes[0]!.h / 2); ctx.stroke(); ctx.setLineDash([])

    // X mark
    ctx.strokeStyle = 'rgba(255,107,74,0.6)'; ctx.lineWidth = 3
    const xc = wrongX1 + 30, xcy = wrongY
    ctx.beginPath(); ctx.moveTo(xc - 10, xcy - 10); ctx.lineTo(xc + 10, xcy + 10); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(xc + 10, xcy - 10); ctx.lineTo(xc - 10, xcy + 10); ctx.stroke()
    ctx.fillStyle = 'rgba(255,107,74,0.6)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('NOT causal', xc, xcy + 24)

    // Correct label
    ctx.fillStyle = 'rgba(80,200,140,0.5)'; ctx.font = 'bold 13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'left'
    ctx.fillText('✓ Actual pathway', boxes[0]!.x - 100, boxes[0]!.y + boxes[0]!.h / 2)

    ctx.fillStyle = 'rgba(196,163,90,0.5)'; ctx.font = 'italic 14px "Iowan Old Style", serif'; ctx.textAlign = 'center'
    ctx.fillText('The microbiome is a mirror — it reflects behavior, not a cause of ASD.', cx, h * 0.92)
  }
  ctx.restore()
}

function updateMicroExp() {
  const el = document.getElementById('micro-explain')!
  const stepEl = document.getElementById('micro-step')!
  if (microStep === 1) {
    stepEl.textContent = 'Step 1 of 3 — The b² metric'
    el.innerHTML = `Just as <strong>h²</strong> (heritability) measures the fraction of trait variance explained by genetic differences, <strong>b²</strong> measures the fraction explained by <em>microbiome</em> composition.<br><br>This is variance partitioning extended beyond genetics. Instead of asking "how much is genetic vs environmental?", Yap et al. asked: "how much of each trait's variation can be attributed to differences in gut bacteria?"<br><br>The answer depends entirely on <em>which trait</em> you measure.`
  } else if (microStep === 2) {
    stepEl.textContent = 'Step 2 of 3 — b² across traits'
    el.innerHTML = `The microbiome explains <strong>very different amounts of variance</strong> depending on the trait:<br><br>• <strong>ASD diagnosis</strong>: b² = 0–9% — the microbiome contributes almost nothing<br>• <strong>Dietary diversity</strong>: b² ≈ 52% — the microbiome captures diet-related variance strongly<br>• <strong>Stool consistency</strong>: b² ≈ 64% — digestive traits are closely tied to microbial composition<br><br>This is the power of partitioned variance: the same biological factor (microbiome) can be a major source of variance for one trait and negligible for another.`
  } else {
    stepEl.textContent = 'Step 3 of 3 — Layered variance structure'
    el.innerHTML = `The variance structure is <strong>layered</strong>. Each biological layer partitions variance differently:<br><br>1. <strong>Genetic factors (A)</strong> explain neurodevelopment → high contribution to ASD variance<br>2. <strong>Behavioral factors</strong> mediate between genes and environment → selective eating in ASD<br>3. <strong>Diet</strong> is shaped by behavior → high microbiome contribution (b² = 40–64%)<br>4. <strong>Microbiome</strong> sits at the end of the chain → captures diet variance, not ASD variance<br><br>VP can be decomposed not just into A + D + E, but across <em>biological layers</em>. Each layer has its own variance contribution, and they connect through mediating pathways.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 2: TYLENOL & ASD (3-step reveal)
// ══════════════════════════════════════════════════════════════════════════

let tylenolStep = 1

function drawTylenol(cv: HTMLCanvasElement) {
  const { ctx, w, h } = initCanvas(cv)

  if (tylenolStep === 1) {
    // Population-level: HR ≈ 1.05–1.07
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = 'bold 15px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('Population-level analysis — 2.48 million children (Sweden)', w / 2, h * 0.08)
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '12px "Helvetica Neue", sans-serif'
    ctx.fillText('Ahlqvist et al. 2024, JAMA', w / 2, h * 0.08 + 20)

    const barX = w * 0.2, barW = w * 0.6, cy = h * 0.45, barH = 50

    // Reference line at HR = 1.0
    ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1; ctx.setLineDash([5, 5])
    ctx.beginPath(); ctx.moveTo(barX, cy); ctx.lineTo(barX + barW, cy); ctx.stroke(); ctx.setLineDash([])
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'
    ctx.fillText('HR = 1.0 (no effect)', barX - 10, cy + 4)

    // HR bars
    const outcomes = [
      { name: 'Autism', hr: 1.05, color: 'rgba(200,140,80,0.8)' },
      { name: 'ADHD', hr: 1.07, color: 'rgba(100,140,255,0.8)' },
    ]
    const segW = barW / 3
    for (let i = 0; i < outcomes.length; i++) {
      const o = outcomes[i]!, x = barX + segW * (i + 0.5) - 40
      const deviation = (o.hr - 1.0) * barH * 20 // scale up for visibility
      const g = ctx.createLinearGradient(x, cy - deviation, x, cy)
      g.addColorStop(0, o.color); g.addColorStop(1, o.color.replace(/[\d.]+\)$/, '0.2)'))
      ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(x, cy - deviation, 80, deviation, [6, 6, 0, 0]); ctx.fill()
      ctx.fillStyle = o.color; ctx.font = 'bold 20px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
      ctx.fillText(`${o.hr.toFixed(2)}`, x + 40, cy - deviation - 14)
      ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '13px "Helvetica Neue", sans-serif'
      ctx.fillText(o.name, x + 40, cy + 24)
    }

    ctx.fillStyle = 'rgba(255,107,74,0.5)'; ctx.font = 'italic 14px "Iowan Old Style", serif'; ctx.textAlign = 'center'
    ctx.fillText('"Children exposed to acetaminophen had 5–7% higher risk"', w / 2, h * 0.78)
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '13px "Helvetica Neue", sans-serif'
    ctx.fillText('Looks concerning... but is it the drug?', w / 2, h * 0.78 + 24)

  } else if (tylenolStep === 2) {
    // Sibling control: HR drops to 1.0
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = 'bold 15px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('Population vs Sibling Control', w / 2, h * 0.06)

    const barX = w * 0.12, barW = w * 0.76, cy = h * 0.5, barH = 50

    // Reference line
    ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1; ctx.setLineDash([5, 5])
    ctx.beginPath(); ctx.moveTo(barX, cy); ctx.lineTo(barX + barW, cy); ctx.stroke(); ctx.setLineDash([])
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'right'
    ctx.fillText('HR = 1.0', barX - 6, cy + 4)

    const groups = [
      { label: 'POPULATION', items: [{ name: 'Autism', hr: 1.05, color: 'rgba(200,140,80,0.7)' }, { name: 'ADHD', hr: 1.07, color: 'rgba(100,140,255,0.7)' }] },
      { label: 'SIBLINGS', items: [{ name: 'Autism', hr: 1.00, color: 'rgba(200,140,80,0.7)' }, { name: 'ADHD', hr: 1.00, color: 'rgba(100,140,255,0.7)' }] },
    ]

    const halfW = barW / 2 - 20
    for (let gi = 0; gi < 2; gi++) {
      const g = groups[gi]!, gx = barX + gi * (halfW + 40)
      ctx.fillStyle = gi === 0 ? 'rgba(255,255,255,0.4)' : 'rgba(80,200,140,0.6)'
      ctx.font = `bold 13px "Helvetica Neue", sans-serif`; ctx.textAlign = 'center'
      ctx.fillText(g.label, gx + halfW / 2, cy - 100)

      for (let i = 0; i < g.items.length; i++) {
        const o = g.items[i]!, x = gx + (halfW / 3) * (i + 0.5) - 30
        const dev = Math.max(0, (o.hr - 1.0) * barH * 20)
        if (dev > 1) {
          const gr = ctx.createLinearGradient(x, cy - dev, x, cy)
          gr.addColorStop(0, o.color); gr.addColorStop(1, o.color.replace(/[\d.]+\)$/, '0.1)'))
          ctx.fillStyle = gr; ctx.beginPath(); ctx.roundRect(x, cy - dev, 60, dev, [6, 6, 0, 0]); ctx.fill()
        }
        ctx.fillStyle = o.hr > 1.0 ? o.color : 'rgba(80,200,140,0.8)'
        ctx.font = `bold ${o.hr > 1.0 ? 18 : 22}px "Helvetica Neue", sans-serif`; ctx.textAlign = 'center'
        ctx.fillText(o.hr.toFixed(2), x + 30, cy - dev - 12)
        ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '12px "Helvetica Neue", sans-serif'
        ctx.fillText(o.name, x + 30, cy + 20)
      }
    }

    // Big reveal
    ctx.fillStyle = 'rgba(80,200,140,0.6)'; ctx.font = 'bold 18px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('The association VANISHES in sibling comparison.', w / 2, h * 0.8)

  } else {
    // Step 3: Why — familial confounding diagram
    const cx = w / 2, topY = h * 0.1

    // Shared family factors at top
    drawBox(ctx, cx - 120, topY, 240, 55, 'Shared Family Factors', 'rgba(196,163,90,0.8)', 14)
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '11px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('Genetics, parental health, stress, SES, home environment', cx, topY + 70)

    // Two outcomes branching down
    drawBox(ctx, cx - 240, topY + 100, 180, 50, 'Acetaminophen use', 'rgba(100,140,255,0.7)')
    drawBox(ctx, cx + 60, topY + 100, 180, 50, 'Child ASD/ADHD risk', 'rgba(200,140,80,0.7)')

    // Arrows from shared factors to both
    drawArrow(ctx, cx - 60, topY + 55, cx - 150, topY + 100, 'rgba(196,163,90,0.5)', 2)
    drawArrow(ctx, cx + 60, topY + 55, cx + 150, topY + 100, 'rgba(196,163,90,0.5)', 2)

    // Crossed out direct arrow
    ctx.strokeStyle = 'rgba(255,107,74,0.25)'; ctx.lineWidth = 2; ctx.setLineDash([6, 4])
    ctx.beginPath(); ctx.moveTo(cx - 60, topY + 125); ctx.lineTo(cx + 60, topY + 125); ctx.stroke(); ctx.setLineDash([])
    ctx.strokeStyle = 'rgba(255,107,74,0.6)'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(cx - 12, topY + 115); ctx.lineTo(cx + 12, topY + 135); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx + 12, topY + 115); ctx.lineTo(cx - 12, topY + 135); ctx.stroke()

    // Sibling design explanation
    const sy = topY + 200
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = 'bold 14px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('The Sibling Control Design', cx, sy)

    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '13px "Helvetica Neue", sans-serif'
    const lines = [
      'Same mother, same father → shared genetics ✓',
      'Same household → shared environment ✓',
      'Different pregnancies → one with Tylenol, one without',
      '',
      'Result: when all shared factors are held constant,',
      'the unique effect of acetaminophen = ZERO.',
    ]
    for (let i = 0; i < lines.length; i++) {
      ctx.fillStyle = i >= 4 ? 'rgba(80,200,140,0.6)' : 'rgba(255,255,255,0.3)'
      if (i >= 4) ctx.font = 'bold 14px "Helvetica Neue", sans-serif'
      ctx.fillText(lines[i]!, cx, sy + 28 + i * 22)
    }
  }
  ctx.restore()
}

function updateTylenolExp() {
  const el = document.getElementById('tylenol-explain')!
  const stepEl = document.getElementById('tylenol-step')!
  if (tylenolStep === 1) {
    stepEl.textContent = 'Step 1 of 3 — Total variance (population level)'
    el.innerHTML = `At the population level, total phenotypic variance (VP) includes <strong>everything mixed together</strong>: additive genetic factors (A), shared family environment, and unique environmental exposures like medication use.<br><br>In 2.48 million Swedish children, the association between prenatal acetaminophen and ASD showed HR = 1.05–1.07. But this total variance hasn't been partitioned yet — we can't tell which component drives the association.`
  } else if (tylenolStep === 2) {
    stepEl.textContent = 'Step 2 of 3 — Subtract familial variance'
    el.innerHTML = `The <strong>sibling control design</strong> is a direct application of Fisher's variance decomposition. Siblings share ~50% of additive genetic variance (A) and nearly all shared environmental variance.<br><br>By comparing within families, the study <strong>subtracts out</strong> the shared components: VP<sub>sibling</sub> = VP<sub>total</sub> − A<sub>shared</sub> − E<sub>shared</sub>. What remains is only the <strong>unique environmental variance</strong> — factors that differ between pregnancies for the same mother.`
  } else {
    stepEl.textContent = 'Step 3 of 3 — What remains (unique environment)'
    el.innerHTML = `After partitioning out shared familial variance, the unique environmental contribution of acetaminophen = <strong>zero</strong> (HR = 1.0).<br><br>The initial association was entirely attributable to <strong>shared familial factors</strong> — the same genetics and family environment that influenced both medication use and child neurodevelopment. This demonstrates why Fisher's decomposition matters: VP = <strong>A</strong> + D + <strong>E<sub>shared</sub></strong> + E<sub>unique</sub>. Without separating the components, the shared familial variance (A + E<sub>shared</sub>) masked the true unique environmental effect.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIM 3: THE PRINCIPLE (side by side)
// ══════════════════════════════════════════════════════════════════════════

function drawPrinciple(cv: HTMLCanvasElement) {
  const { ctx, w, h } = initCanvas(cv)
  const mid = w / 2

  // Two columns
  const col1 = { x: 30, w: mid - 50 }, col2 = { x: mid + 20, w: mid - 50 }

  // Headers
  ctx.fillStyle = 'rgba(80,200,140,0.7)'; ctx.font = 'bold 16px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('Yap et al. (Cell, 2021)', col1.x + col1.w / 2, 30)
  ctx.fillStyle = 'rgba(100,140,255,0.7)'
  ctx.fillText('Ahlqvist et al. (JAMA, 2024)', col2.x + col2.w / 2, 30)

  // Divider
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(mid, 50); ctx.lineTo(mid, h - 30); ctx.stroke()

  // Step labels
  const steps = [
    { y: 70, label: '1. OBSERVE', c1: 'Microbiome differs\nin autistic children', c2: 'Acetaminophen use\nassociated with ASD risk' },
    { y: 170, label: '2. PARTITION', c1: 'b² for ASD = 0–9%\nb² for diet = 40–64%', c2: 'Population HR = 1.05–1.07\nSibling HR = 1.00' },
    { y: 280, label: '3. CONCLUDE', c1: 'Microbiome reflects diet,\nnot cause of ASD', c2: 'Familial confounding,\nnot drug effect' },
  ]

  for (const step of steps) {
    // Step label
    ctx.fillStyle = 'rgba(196,163,90,0.6)'; ctx.font = 'bold 12px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    ctx.fillText(step.label, mid, step.y)

    // Left column
    ctx.fillStyle = 'rgba(255,255,255,0.03)'; ctx.beginPath(); ctx.roundRect(col1.x, step.y + 10, col1.w, 60, 8); ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '13px "Helvetica Neue", sans-serif'; ctx.textAlign = 'center'
    const l1 = step.c1.split('\n'); for (let i = 0; i < l1.length; i++) ctx.fillText(l1[i]!, col1.x + col1.w / 2, step.y + 32 + i * 18)

    // Right column
    ctx.fillStyle = 'rgba(255,255,255,0.03)'; ctx.beginPath(); ctx.roundRect(col2.x, step.y + 10, col2.w, 60, 8); ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '13px "Helvetica Neue", sans-serif'
    const l2 = step.c2.split('\n'); for (let i = 0; i < l2.length; i++) ctx.fillText(l2[i]!, col2.x + col2.w / 2, step.y + 32 + i * 18)

    // Arrows down
    if (step !== steps[steps.length - 1]) {
      drawArrow(ctx, col1.x + col1.w / 2, step.y + 72, col1.x + col1.w / 2, step.y + 100, 'rgba(255,255,255,0.1)')
      drawArrow(ctx, col2.x + col2.w / 2, step.y + 72, col2.x + col2.w / 2, step.y + 100, 'rgba(255,255,255,0.1)')
    }
  }

  // Bottom principle
  ctx.fillStyle = 'rgba(196,163,90,0.15)'; ctx.beginPath(); ctx.roundRect(30, h - 70, w - 60, 50, 10); ctx.fill()
  ctx.strokeStyle = 'rgba(196,163,90,0.3)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(30, h - 70, w - 60, 50, 10); ctx.stroke()
  ctx.fillStyle = '#c4a35a'; ctx.font = 'bold 15px "Iowan Old Style", Palatino, serif'; ctx.textAlign = 'center'
  ctx.fillText('VP = A + D + E + Environment — decompose across layers, then interpret.', w / 2, h - 45)

  ctx.restore()
}

// ══════════════════════════════════════════════════════════════════════════
// WIRING
// ══════════════════════════════════════════════════════════════════════════

function wireSteps(sectionId: string, getStep: () => number, setStep: (v: number) => void, draw: (cv: HTMLCanvasElement) => void, updateExp: () => void, canvasId: string) {
  document.querySelectorAll(`#${sectionId} .sim-btn`).forEach(btn => {
    btn.addEventListener('click', () => {
      setStep(parseInt((btn as HTMLButtonElement).dataset.step!))
      document.querySelectorAll(`#${sectionId} .sim-btn`).forEach(b => b.classList.remove('active', 'reveal'))
      btn.classList.add('active')
      if (getStep() === 3) btn.classList.add('reveal')
      draw(document.getElementById(canvasId) as HTMLCanvasElement)
      updateExp()
    })
  })
}

wireSteps('micro-controls', () => microStep, v => { microStep = v }, drawMicro, updateMicroExp, 'micro-canvas')
wireSteps('tylenol-controls', () => tylenolStep, v => { tylenolStep = v }, drawTylenol, updateTylenolExp, 'tylenol-canvas')

window.addEventListener('resize', () => {
  renderEditorial()
  drawMicro(document.getElementById('micro-canvas') as HTMLCanvasElement)
  drawTylenol(document.getElementById('tylenol-canvas') as HTMLCanvasElement)
  drawPrinciple(document.getElementById('principle-canvas') as HTMLCanvasElement)
})

renderEditorial()
drawMicro(document.getElementById('micro-canvas') as HTMLCanvasElement); updateMicroExp()
drawTylenol(document.getElementById('tylenol-canvas') as HTMLCanvasElement); updateTylenolExp()
drawPrinciple(document.getElementById('principle-canvas') as HTMLCanvasElement)
document.getElementById('principle-explain')!.innerHTML = `Both studies extend Fisher's variance framework to real biomedical questions:<br><br><strong>Yap et al.</strong> partitioned variance across <em>biological layers</em> — genome, behavior, diet, microbiome — using b² to measure each layer's contribution. The microbiome explains diet variance (b² = 40–64%) but not ASD variance (b² = 0–9%).<br><br><strong>Ahlqvist et al.</strong> partitioned variance into <em>familial vs unique</em> components — using sibling controls to subtract shared A and shared E. The unique environmental effect of acetaminophen was zero.<br><br>Fisher's framework — VP = A + D + E + Environment — is not just about genes. It extends to any source of biological variation. Whether you're measuring microbiome contribution (b²), familial contribution, or unique environmental exposure, the logic is the same: <strong>decompose, then interpret</strong>.`
