import {
  layoutNextLine,
  layoutWithLines,
  prepareWithSegments,
  walkLineRanges,
  type LayoutCursor,
  type PreparedTextWithSegments,
} from '@chenglou/pretext'

// ══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ══════════════════════════════════════════════════════════════════════════

const BODY_FONT = '18px "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif'
const BODY_LINE_HEIGHT = 30
const HF = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif'
const GUTTER = 48
const COL_GAP = 40
const BOTTOM_GAP = 60
const DROP_CAP_LINES = 3
const MIN_SLOT_WIDTH = 50
const NARROW = 760

const HEADLINE_TEXT = 'FROM ALLELES TO THE POLYGENIC MODEL'

const BODY_TEXT = `Not all genetic variants work the same way. Some are like a light switch — flip it once, and the phenotype changes dramatically. Others are dimmer switches — you need thousands of them for a real difference.

When a single locus contributes additively, the F2 shows three phenotypic classes: 1:2:1. With two loci, five classes emerge in a 1:4:6:4:1 ratio — already hinting at a bell curve. As the number of loci grows to twelve thousand, the discrete steps blur into a smooth Gaussian. Add environmental variation and you get a truly continuous trait. The shape you see here — the golden curve that these words flow around — is this distribution. Every human trait that follows a bell curve is the signature of thousands of additive alleles acting together.

A genome-wide association study of 5.4 million people identified 12,111 independent SNPs associated with height alone, each nudging it by a fraction of a centimeter. Rare variants contribute too — low-LD rare variants account for 31 percent of height variance. But they still act additively, each adding its tiny vote to the cumulative total.

Dominant alleles are fundamentally different. Consider the FGFR3 receptor — the protein structure that these words flow around on the right. A single G380R mutation makes this transmembrane receptor constitutively active. It sits in the cell membrane, constantly signaling growth plate chondrocytes to stop dividing — even when they should grow. One mutant copy drops adult male height from 175 to 131 cm. That is a 44-centimeter shift from a single nucleotide change.

Achondroplasia affects 1 in 15,000 births. Eighty percent of cases are de novo mutations — appearing in children of parents with normal stature. The mutation arises spontaneously, and from that single nucleotide change, the entire skeletal phenotype is altered.

Marfan syndrome mirrors this in the opposite direction. FBN1 mutations disrupt fibrillin-1 microfibrils, weakening connective tissue scaffolding. When fibrillin-1 is defective, TGF-beta escapes regulation and drives excessive bone elongation beyond 193 cm. Over 1,000 different FBN1 mutations cause Marfan syndrome, but each is individually dominant.

The UK Biobank study of 361,194 individuals across 1,060 traits confirmed: about 700 traits showed additive heritability, while only 183 loci had dominant effects — explaining 0.5 percent of additive variance. Scientists separate these effects using orthogonalized dominance encoding. Additive: 0, 1, 2 — counting allele dosage. Dominance: 0, 1, 0 — capturing the heterozygote deviation. These two signals are orthogonal: statistically independent, each capturing genuinely different genetic architecture.

The result is clear. Most human traits are polygenic — shaped by thousands of additive alleles. The bell curves of height, BMI, blood pressure, and disease risk are this architecture's signature. Not one or two master switches, but thousands of tiny dials turning at once.`

const PULLQUOTES = [
  '"12,111 SNPs — each nudging height by a fraction of a centimeter — sum to the bell curve of human stature."',
  '"One nucleotide change. 44 centimeters lost. The dominant allele needs only a single flip."',
]

// ══════════════════════════════════════════════════════════════════════════
// TYPES
// ══════════════════════════════════════════════════════════════════════════

type Interval = { left: number; right: number }
type PositionedLine = { x: number; y: number; width: number; text: string }
type RectObstacle = { x: number; y: number; w: number; h: number }
type PullquoteRect = RectObstacle & { lines: PositionedLine[]; colIdx: number }
type HeadlineFit = { fontSize: number; lines: PositionedLine[] }

// Custom obstacle: returns horizontal blocked interval for a given y-band
type ShapeObstacle = {
  getInterval(bandTop: number, bandBottom: number): Interval | null
}

// ══════════════════════════════════════════════════════════════════════════
// BELL CURVE OBSTACLE
// ══════════════════════════════════════════════════════════════════════════

function makeBellCurveObstacle(
  centerX: number, peakY: number, // peak position
  curveWidth: number, curveHeight: number, // dimensions
  padding: number,
): ShapeObstacle {
  // The bell curve widens as you go down from the peak
  // At the peak (y=peakY), it's narrow; at the base (y=peakY+curveHeight), it's full width
  const sigma = curveHeight * 0.35 // controls how "tight" the bell is
  return {
    getInterval(bandTop: number, bandBottom: number): Interval | null {
      const bandMid = (bandTop + bandBottom) / 2
      // Only active between peak and base
      if (bandMid < peakY - padding || bandMid > peakY + curveHeight + padding) return null
      // Distance from peak
      const dy = bandMid - peakY
      if (dy < 0) {
        // Above peak: very narrow tip
        const t = Math.max(0, 1 + dy / (padding * 2))
        const halfW = (curveWidth * 0.02) * t
        if (halfW < 2) return null
        return { left: centerX - halfW - padding, right: centerX + halfW + padding }
      }
      // Gaussian: width increases as we descend from peak
      const t = dy / curveHeight
      const gaussianWidth = curveWidth * (1 - Math.exp(-0.5 * (t / 0.35) ** 2))
      // But also taper off near the base
      const taper = t > 0.85 ? (1 - t) / 0.15 : 1
      const halfW = (gaussianWidth / 2) * taper
      if (halfW < 3) return null
      return { left: centerX - halfW - padding, right: centerX + halfW + padding }
    }
  }
}

// ══════════════════════════════════════════════════════════════════════════
// FGFR3 RECEPTOR OBSTACLE (simplified transmembrane receptor silhouette)
// ══════════════════════════════════════════════════════════════════════════

function makeReceptorObstacle(
  centerX: number, topY: number,
  width: number, height: number,
  padding: number,
): ShapeObstacle {
  // Receptor shape: extracellular domain (bulgy top) → narrow transmembrane → intracellular kinase (wider)
  return {
    getInterval(bandTop: number, bandBottom: number): Interval | null {
      const bandMid = (bandTop + bandBottom) / 2
      if (bandMid < topY - padding || bandMid > topY + height + padding) return null
      const t = (bandMid - topY) / height // 0=top, 1=bottom

      let halfW: number
      if (t < 0) {
        halfW = 2
      } else if (t < 0.15) {
        // Extracellular Ig-like domains: three bulges
        const localT = t / 0.15
        halfW = width * 0.35 * (0.7 + 0.3 * Math.sin(localT * Math.PI * 3))
      } else if (t < 0.25) {
        // Taper to membrane
        const localT = (t - 0.15) / 0.1
        halfW = width * 0.35 * (1 - localT * 0.5)
      } else if (t < 0.4) {
        // Transmembrane domain (narrow) — where G380R mutation is!
        halfW = width * 0.15
      } else if (t < 0.5) {
        // Widen to intracellular
        const localT = (t - 0.4) / 0.1
        halfW = width * (0.15 + localT * 0.2)
      } else if (t < 0.85) {
        // Intracellular tyrosine kinase domain
        const localT = (t - 0.5) / 0.35
        halfW = width * 0.35 * (0.8 + 0.2 * Math.sin(localT * Math.PI * 2))
      } else {
        // Taper off at bottom
        const localT = (t - 0.85) / 0.15
        halfW = width * 0.35 * (1 - localT)
      }

      if (halfW < 2) return null
      return { left: centerX - halfW - padding, right: centerX + halfW + padding }
    }
  }
}

// ══════════════════════════════════════════════════════════════════════════
// DRAW SHAPES (visual rendering on canvas overlay)
// ══════════════════════════════════════════════════════════════════════════

function drawBellCurve(ctx: CanvasRenderingContext2D, cx: number, peakY: number, w: number, h: number) {
  const nPoints = 100
  ctx.beginPath()
  // Right side of bell (top to bottom)
  for (let i = 0; i <= nPoints; i++) {
    const t = i / nPoints
    const y = peakY + t * h
    const gaussW = w * (1 - Math.exp(-0.5 * (t / 0.35) ** 2))
    const taper = t > 0.85 ? (1 - t) / 0.15 : 1
    const x = cx + (gaussW / 2) * taper
    if (i === 0) ctx.moveTo(cx, y)
    else ctx.lineTo(x, y)
  }
  // Left side (bottom to top)
  for (let i = nPoints; i >= 0; i--) {
    const t = i / nPoints
    const y = peakY + t * h
    const gaussW = w * (1 - Math.exp(-0.5 * (t / 0.35) ** 2))
    const taper = t > 0.85 ? (1 - t) / 0.15 : 1
    ctx.lineTo(cx - (gaussW / 2) * taper, y)
  }
  ctx.closePath()

  // Gradient fill
  const grad = ctx.createRadialGradient(cx, peakY + h * 0.3, 0, cx, peakY + h * 0.3, h * 0.7)
  grad.addColorStop(0, 'rgba(196,163,90,0.18)')
  grad.addColorStop(0.5, 'rgba(196,163,90,0.08)')
  grad.addColorStop(1, 'rgba(196,163,90,0.01)')
  ctx.fillStyle = grad
  ctx.fill()

  // Glow outline
  ctx.strokeStyle = 'rgba(196,163,90,0.35)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  // No text labels on canvas — they get buried under PreText lines
}

function drawReceptor(ctx: CanvasRenderingContext2D, cx: number, topY: number, w: number, h: number) {
  const nPoints = 80

  // Draw receptor silhouette
  ctx.beginPath()
  // Right side
  for (let i = 0; i <= nPoints; i++) {
    const t = i / nPoints
    const y = topY + t * h
    let halfW: number
    if (t < 0.15) {
      const lt = t / 0.15
      halfW = w * 0.35 * (0.7 + 0.3 * Math.sin(lt * Math.PI * 3))
    } else if (t < 0.25) {
      halfW = w * 0.35 * (1 - ((t - 0.15) / 0.1) * 0.5)
    } else if (t < 0.4) {
      halfW = w * 0.15
    } else if (t < 0.5) {
      halfW = w * (0.15 + ((t - 0.4) / 0.1) * 0.2)
    } else if (t < 0.85) {
      halfW = w * 0.35 * (0.8 + 0.2 * Math.sin(((t - 0.5) / 0.35) * Math.PI * 2))
    } else {
      halfW = w * 0.35 * (1 - (t - 0.85) / 0.15)
    }
    if (i === 0) ctx.moveTo(cx + halfW, y)
    else ctx.lineTo(cx + halfW, y)
  }
  // Left side
  for (let i = nPoints; i >= 0; i--) {
    const t = i / nPoints
    const y = topY + t * h
    let halfW: number
    if (t < 0.15) {
      halfW = w * 0.35 * (0.7 + 0.3 * Math.sin((t / 0.15) * Math.PI * 3))
    } else if (t < 0.25) {
      halfW = w * 0.35 * (1 - ((t - 0.15) / 0.1) * 0.5)
    } else if (t < 0.4) {
      halfW = w * 0.15
    } else if (t < 0.5) {
      halfW = w * (0.15 + ((t - 0.4) / 0.1) * 0.2)
    } else if (t < 0.85) {
      halfW = w * 0.35 * (0.8 + 0.2 * Math.sin(((t - 0.5) / 0.35) * Math.PI * 2))
    } else {
      halfW = w * 0.35 * (1 - (t - 0.85) / 0.15)
    }
    ctx.lineTo(cx - halfW, y)
  }
  ctx.closePath()

  // Gradient fill
  const grad = ctx.createLinearGradient(cx, topY, cx, topY + h)
  grad.addColorStop(0, 'rgba(100,140,255,0.12)')
  grad.addColorStop(0.3, 'rgba(100,140,255,0.06)')
  grad.addColorStop(0.33, 'rgba(255,107,74,0.15)') // TM domain — mutation site!
  grad.addColorStop(0.4, 'rgba(255,107,74,0.08)')
  grad.addColorStop(0.5, 'rgba(100,140,255,0.06)')
  grad.addColorStop(1, 'rgba(100,140,255,0.02)')
  ctx.fillStyle = grad
  ctx.fill()

  ctx.strokeStyle = 'rgba(100,140,255,0.3)'
  ctx.lineWidth = 1
  ctx.stroke()

  // Cell membrane line
  const memY = topY + h * 0.32
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.lineWidth = 12
  ctx.beginPath()
  ctx.moveTo(cx - w * 0.8, memY)
  ctx.lineTo(cx + w * 0.8, memY)
  ctx.stroke()

  // No text labels on canvas — they get buried under PreText lines
  // The G380R mutation site is indicated by the red glow in the gradient
}

// ══════════════════════════════════════════════════════════════════════════
// LAYOUT ENGINE (extended with shape obstacles)
// ══════════════════════════════════════════════════════════════════════════

function carveSlots(base: Interval, blocked: Interval[]): Interval[] {
  let slots = [base]
  for (const iv of blocked) {
    const next: Interval[] = []
    for (const s of slots) {
      if (iv.right <= s.left || iv.left >= s.right) { next.push(s); continue }
      if (iv.left > s.left) next.push({ left: s.left, right: iv.left })
      if (iv.right < s.right) next.push({ left: iv.right, right: s.right })
    }
    slots = next
  }
  return slots.filter(s => s.right - s.left >= MIN_SLOT_WIDTH)
}

function layoutColumnEx(
  prepared: PreparedTextWithSegments, startCursor: LayoutCursor,
  regionX: number, regionY: number, regionW: number, regionH: number,
  lineHeight: number,
  rectObstacles: RectObstacle[],
  shapeObstacles: ShapeObstacle[],
  singleSlotOnly: boolean,
): { lines: PositionedLine[]; cursor: LayoutCursor } {
  let cursor = startCursor, lineTop = regionY
  const lines: PositionedLine[] = []
  let done = false
  while (lineTop + lineHeight <= regionY + regionH && !done) {
    const blocked: Interval[] = []
    for (const r of rectObstacles) {
      if (lineTop + lineHeight <= r.y || lineTop >= r.y + r.h) continue
      blocked.push({ left: r.x, right: r.x + r.w })
    }
    for (const s of shapeObstacles) {
      const iv = s.getInterval(lineTop, lineTop + lineHeight)
      if (iv) blocked.push(iv)
    }
    const slots = carveSlots({ left: regionX, right: regionX + regionW }, blocked)
    if (!slots.length) { lineTop += lineHeight; continue }
    const ordered = singleSlotOnly
      ? [slots.reduce((a, b) => (b.right - b.left > a.right - a.left) ? b : a)]
      : [...slots].sort((a, b) => a.left - b.left)
    for (const slot of ordered) {
      const line = layoutNextLine(prepared, cursor, slot.right - slot.left)
      if (!line) { done = true; break }
      lines.push({ x: Math.round(slot.left), y: Math.round(lineTop), text: line.text, width: line.width })
      cursor = line.end
    }
    lineTop += lineHeight
  }
  return { lines, cursor }
}

function syncPool(pool: HTMLDivElement[], count: number, cls: string, parent: HTMLElement) {
  while (pool.length < count) { const el = document.createElement('div'); el.className = cls; parent.appendChild(el); pool.push(el) }
  for (let i = 0; i < pool.length; i++) pool[i]!.style.display = i < count ? '' : 'none'
}

function fitHeadline(text: string, maxW: number, maxH: number, maxSz = 82): HeadlineFit {
  let lo = 20, hi = maxSz, best = lo, bestL: PositionedLine[] = []
  while (lo <= hi) {
    const sz = Math.floor((lo + hi) / 2), font = `700 ${sz}px ${HF}`, lh = Math.round(sz * 0.93)
    const p = prepareWithSegments(text, font)
    let brk = false, n = 0
    walkLineRanges(p, maxW, l => { n++; if (l.end.graphemeIndex !== 0) brk = true })
    if (!brk && n * lh <= maxH) {
      best = sz
      const r = layoutWithLines(p, maxW, lh)
      bestL = r.lines.map((l, i) => ({ x: 0, y: i * lh, text: l.text, width: l.width }))
      lo = sz + 1
    } else hi = sz - 1
  }
  return { fontSize: best, lines: bestL }
}

// ══════════════════════════════════════════════════════════════════════════
// EDITORIAL RENDER
// ══════════════════════════════════════════════════════════════════════════

const stage = document.getElementById('stage') as HTMLDivElement

// Canvas overlay for shape visuals
const shapeCanvas = document.createElement('canvas')
shapeCanvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;'
stage.appendChild(shapeCanvas)

const linePool: HTMLDivElement[] = [], hlPool: HTMLDivElement[] = []
const pqLPool: HTMLDivElement[] = [], pqBPool: HTMLDivElement[] = []

await document.fonts.ready
const dcEl = document.createElement('div'); dcEl.className = 'drop-cap'; stage.appendChild(dcEl)

function renderEditorial() {
  const pw = document.documentElement.clientWidth
  const isN = pw < NARROW
  const gut = isN ? 20 : GUTTER
  const cGap = isN ? 20 : COL_GAP

  const prepared = prepareWithSegments(BODY_TEXT, BODY_FONT)
  const pqFont = `italic 19px ${HF}`, pqLH = 27

  // Headline
  const hlW = Math.min(pw - gut * 2, 1000)
  const hl = fitHeadline(HEADLINE_TEXT, hlW, isN ? 120 : 180, isN ? 34 : 72)
  const hlLH = Math.round(hl.fontSize * 0.93)
  const hlFont = `700 ${hl.fontSize}px ${HF}`
  const hlH = hl.lines.length * hlLH

  // Body
  const bodyTop = gut + hlH + (isN ? 12 : 20)
  const colCount = pw > 1000 ? 3 : pw > 640 ? 2 : 1
  const maxCW = Math.min(pw, 1400)
  const colW = Math.floor((maxCW - gut * 2 - cGap * (colCount - 1)) / colCount)
  const contentLeft = Math.round((pw - (colCount * colW + (colCount - 1) * cGap)) / 2)

  // Estimate body height
  const estLines = Math.ceil(BODY_TEXT.length / (colW / 9.5))
  const bodyH = Math.max(700, Math.ceil(estLines / colCount) * BODY_LINE_HEIGHT + 120)

  // Clean editorial — no shape obstacles, just text + pullquotes
  const shapes: ShapeObstacle[] = []

  // Drop cap
  const dcT = BODY_TEXT[0]!
  const dcSz = BODY_LINE_HEIGHT * DROP_CAP_LINES - 4
  const dcFont = `700 ${dcSz}px ${HF}`
  const dcP = prepareWithSegments(dcT, dcFont)
  let dcW = 0; walkLineRanges(dcP, 9999, l => { dcW = l.width })
  const dcTW = Math.ceil(dcW) + 10
  dcEl.textContent = dcT; dcEl.style.font = dcFont; dcEl.style.lineHeight = `${dcSz}px`
  dcEl.style.left = `${contentLeft}px`; dcEl.style.top = `${bodyTop}px`
  const dcRect: RectObstacle = { x: contentLeft - 2, y: bodyTop - 2, w: dcTW, h: DROP_CAP_LINES * BODY_LINE_HEIGHT + 2 }

  // Pullquotes
  const pqRects: PullquoteRect[] = []
  if (!isN && colCount >= 2) {
    const specs = [
      { text: PULLQUOTES[0]!, colIdx: 0, yFrac: 0.55, wFrac: 0.5, side: 'right' as const },
      { text: PULLQUOTES[1]!, colIdx: colCount > 2 ? 2 : 1, yFrac: 0.6, wFrac: 0.52, side: 'left' as const },
    ]
    for (const sp of specs) {
      if (sp.colIdx >= colCount) continue
      const pqP = prepareWithSegments(sp.text, pqFont)
      const pqW = Math.round(colW * sp.wFrac)
      const pqLines = layoutWithLines(pqP, pqW - 20, pqLH).lines
      const pH = pqLines.length * pqLH + 16
      const cX = contentLeft + sp.colIdx * (colW + cGap)
      const pX = sp.side === 'right' ? cX + colW - pqW : cX
      const pY = Math.round(bodyTop + bodyH * sp.yFrac)
      const posL = pqLines.map((l, i) => ({ x: pX + 20, y: pY + 8 + i * pqLH, text: l.text, width: l.width }))
      pqRects.push({ x: pX, y: pY, w: pqW, h: pH, lines: posL, colIdx: sp.colIdx })
    }
  }

  // Layout body text
  const allLines: PositionedLine[] = []
  let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 1 }
  for (let ci = 0; ci < colCount; ci++) {
    const cX = contentLeft + ci * (colW + cGap)
    const rects: RectObstacle[] = []
    if (ci === 0) rects.push(dcRect)
    for (const pq of pqRects) if (pq.colIdx === ci) rects.push({ x: pq.x, y: pq.y, w: pq.w, h: pq.h })
    const res = layoutColumnEx(prepared, cursor, cX, bodyTop, colW, bodyH, BODY_LINE_HEIGHT, rects, shapes, isN)
    allLines.push(...res.lines)
    cursor = res.cursor
  }

  // Stage height
  const maxY = allLines.reduce((m, l) => Math.max(m, l.y), bodyTop) + BODY_LINE_HEIGHT + BOTTOM_GAP
  stage.style.height = `${maxY}px`

  // No shape canvas needed for clean editorial

  // ── DOM sync ──
  syncPool(hlPool, hl.lines.length, 'headline-line', stage)
  for (let i = 0; i < hl.lines.length; i++) {
    const el = hlPool[i]!, l = hl.lines[i]!
    el.textContent = l.text; el.style.left = `${gut}px`; el.style.top = `${gut + l.y}px`
    el.style.font = hlFont; el.style.lineHeight = `${hlLH}px`
  }

  syncPool(linePool, allLines.length, 'line', stage)
  for (let i = 0; i < allLines.length; i++) {
    const el = linePool[i]!, l = allLines[i]!
    el.textContent = l.text; el.style.left = `${l.x}px`; el.style.top = `${l.y}px`
    el.style.font = BODY_FONT; el.style.lineHeight = `${BODY_LINE_HEIGHT}px`
  }

  let pqLC = 0; for (const pq of pqRects) pqLC += pq.lines.length
  syncPool(pqBPool, pqRects.length, 'pullquote-box', stage)
  syncPool(pqLPool, pqLC, 'pullquote-line', stage)
  let pi = 0
  for (let i = 0; i < pqRects.length; i++) {
    const pq = pqRects[i]!
    const bx = pqBPool[i]!
    bx.style.left = `${pq.x}px`; bx.style.top = `${pq.y}px`
    bx.style.width = `${pq.w}px`; bx.style.height = `${pq.h}px`
    for (const l of pq.lines) {
      const el = pqLPool[pi]!
      el.textContent = l.text; el.style.left = `${l.x}px`; el.style.top = `${l.y}px`
      el.style.font = pqFont; el.style.lineHeight = `${pqLH}px`
      pi++
    }
  }
}

// ══════════════════════════════════════════════════════════════════════════
// SIMULATORS (same as before, below the editorial)
// ══════════════════════════════════════════════════════════════════════════

const LOCI_STEPS = [1, 2, 3, 5, 10, 50, 100, 1000]
let currentLoci = 1

function binomC(n: number, k: number) { if (k < 0 || k > n) return 0; let r = 1; for (let i = 0; i < Math.min(k, n - k); i++) r = r * (n - i) / (i + 1); return r }
function binomD(nl: number): number[] {
  const n = nl * 2
  // For large n, binomial coefficients overflow. Use normal approximation.
  if (n > 40) {
    const mean = n / 2, sd = Math.sqrt(n * 0.25)
    const pts = Math.min(n + 1, 200)
    const d: number[] = []
    for (let i = 0; i < pts; i++) {
      const k = (i / (pts - 1)) * n
      const z = (k - mean) / sd
      d.push(Math.exp(-0.5 * z * z))
    }
    const mx = Math.max(...d)
    return d.map(v => v / mx)
  }
  const d: number[] = []; let t = 0
  for (let k = 0; k <= n; k++) { const v = binomC(n, k); d.push(v); t += v }
  return d.map(v => v / t)
}
function gcd(a: number, b: number): number { a = Math.abs(a); b = Math.abs(b); while (b) { const t = b; b = a % b; a = t }; return a }
function dLabel(n: number) { if (n <= 3) { const d = binomD(n), t = 2 ** (n * 2); const c = d.map(v => Math.round(v * t)); let g = c[0]!; for (let i = 1; i < c.length; i++) g = gcd(g, c[i]!); return c.map(v => v / g).join(' : ') }; return `${n * 2 + 1} classes → Normal` }

function drawLoci(cv: HTMLCanvasElement, nl: number) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight
  ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)
  const dist = binomD(nl), n = dist.length, mx = Math.max(...dist)
  const p = { t: 30, b: 40, l: 24, r: 24 }, cW = w - p.l - p.r, cH = h - p.t - p.b
  ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '13px "Helvetica Neue",sans-serif'; ctx.textAlign = 'center'
  ctx.fillText(`${nl} ${nl === 1 ? 'locus' : 'loci'} · ${n} classes`, w / 2, 18)
  if (n <= 30) {
    const gap = Math.max(1, Math.min(6, cW / n * 0.12)), bW = Math.max(3, (cW - gap * (n - 1)) / n)
    for (let i = 0; i < n; i++) {
      const bH = (dist[i]! / mx) * cH, x = p.l + i * (bW + gap), y = p.t + cH - bH
      const g = ctx.createLinearGradient(x, y, x, p.t + cH); g.addColorStop(0, 'rgba(196,163,90,0.85)'); g.addColorStop(1, 'rgba(196,163,90,0.2)')
      ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(x, y, bW, bH, [3, 3, 0, 0]); ctx.fill()
    }
    if (n <= 15) { ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '10px "Helvetica Neue",sans-serif'; for (let i = 0; i < n; i++) ctx.fillText(`${i}`, p.l + i * (bW + gap) + bW / 2, h - p.b + 14) }
  } else {
    ctx.beginPath(); ctx.moveTo(p.l, p.t + cH)
    for (let i = 0; i < n; i++) { const x = p.l + (i / (n - 1)) * cW; ctx.lineTo(x, p.t + cH - (dist[i]! / mx) * cH) }
    ctx.lineTo(p.l + cW, p.t + cH); ctx.closePath()
    const g = ctx.createLinearGradient(0, p.t, 0, p.t + cH); g.addColorStop(0, 'rgba(196,163,90,0.5)'); g.addColorStop(1, 'rgba(196,163,90,0.03)')
    ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = 'rgba(196,163,90,0.8)'; ctx.lineWidth = 2
    ctx.beginPath(); for (let i = 0; i < n; i++) { const x = p.l + (i / (n - 1)) * cW, y = p.t + cH - (dist[i]! / mx) * cH; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y) }; ctx.stroke()
    ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.font = 'italic 12px "Helvetica Neue",sans-serif'; ctx.fillText('→ Normal Distribution', w / 2, h - 8)
  }
  ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '10px "Helvetica Neue",sans-serif'; ctx.fillText('# increasing alleles', w / 2, h - p.b + 28)
  ctx.restore()
}

function updateLociExp() {
  const el = document.getElementById('loci-explain')!
  if (currentLoci === 1) el.innerHTML = `With <strong>1 locus</strong>, 3 classes: AA, Aa, aa. Ratio <strong>1 : 2 : 1</strong>. Discrete, no overlap.`
  else if (currentLoci === 2) el.innerHTML = `With <strong>2 loci</strong>, 5 classes. Ratio <strong>1 : 4 : 6 : 4 : 1</strong>. The bell curve outline emerges.`
  else if (currentLoci <= 5) el.innerHTML = `<strong>${currentLoci} loci</strong>: ${currentLoci * 2 + 1} classes. The <em>Central Limit Theorem</em> converges toward normality.`
  else if (currentLoci <= 50) el.innerHTML = `<strong>${currentLoci} loci</strong>: nearly indistinguishable from a bell curve. Add environment and it's continuous.`
  else el.innerHTML = `<strong>${currentLoci >= 1000 ? '1,000+' : currentLoci} loci</strong>: the polygenic model. 12,111 SNPs for height. Each ±0.00001 cm.`
}

// Individual position
let addCount = 0, domMut: 'none' | 'achondroplasia' | 'marfan' = 'none'

function drawIndiv(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)
  const p = { t: 40, b: 36, l: 60, r: 40 }, cW = w - p.l - p.r, cH = h - p.t - p.b
  const mean = 175, sd = 7, minH = mean - 4 * sd, maxH = mean + 4 * sd
  ctx.beginPath(); ctx.moveTo(p.l, p.t + cH)
  for (let i = 0; i <= 200; i++) { const t = i / 200; const z = (minH + t * (maxH - minH) - mean) / sd; ctx.lineTo(p.l + t * cW, p.t + cH - Math.exp(-0.5 * z * z) * cH * 0.88) }
  ctx.lineTo(p.l + cW, p.t + cH); ctx.closePath()
  const g = ctx.createLinearGradient(0, p.t, 0, p.t + cH); g.addColorStop(0, 'rgba(255,255,255,0.1)'); g.addColorStop(1, 'rgba(255,255,255,0.01)'); ctx.fillStyle = g; ctx.fill()
  ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1.5; ctx.beginPath()
  for (let i = 0; i <= 200; i++) { const t = i / 200; const z = (minH + t * (maxH - minH) - mean) / sd; const x = p.l + t * cW, y = p.t + cH - Math.exp(-0.5 * z * z) * cH * 0.88; i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y) }; ctx.stroke()
  ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '10px "Helvetica Neue",sans-serif'; ctx.textAlign = 'center'
  for (let v = 140; v <= 210; v += 10) { if (v >= minH && v <= maxH) ctx.fillText(`${v}`, p.l + ((v - minH) / (maxH - minH)) * cW, h - 6) }
  const ae = addCount * 0.00001; let ih = mean + ae, ds = 0
  if (domMut === 'achondroplasia') { ds = -(mean - 131); ih = 131 + ae } else if (domMut === 'marfan') { ds = 193 - mean; ih = 193 + ae }
  if (domMut !== 'none') {
    const bx = p.l + ((mean - minH) / (maxH - minH)) * cW, tv = domMut === 'achondroplasia' ? 131 : 193
    const tx = p.l + Math.max(0, Math.min(1, (tv - minH) / (maxH - minH))) * cW
    const col = domMut === 'achondroplasia' ? 'rgba(255,107,74,0.6)' : 'rgba(74,158,255,0.6)'; const ay = p.t + cH * 0.25
    ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.setLineDash([6, 4]); ctx.beginPath(); ctx.moveTo(bx, ay); ctx.lineTo(tx, ay); ctx.stroke(); ctx.setLineDash([])
    ctx.fillStyle = col; const d = tx > bx ? 1 : -1; ctx.beginPath(); ctx.moveTo(tx, ay); ctx.lineTo(tx - d * 8, ay - 5); ctx.lineTo(tx - d * 8, ay + 5); ctx.closePath(); ctx.fill()
    ctx.font = 'bold 12px "Helvetica Neue",sans-serif'; ctx.textAlign = 'center'; ctx.fillText(`${ds > 0 ? '+' : ''}${ds} cm`, (bx + tx) / 2, ay - 10)
  }
  const mt = Math.max(0, Math.min(1, (ih - minH) / (maxH - minH))), mx = p.l + mt * cW
  const mc = domMut === 'achondroplasia' ? '#ff6b4a' : domMut === 'marfan' ? '#4a9eff' : '#c4a35a'
  ctx.strokeStyle = mc; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(mx, p.t); ctx.lineTo(mx, p.t + cH); ctx.stroke()
  ctx.fillStyle = mc; ctx.beginPath(); ctx.arc(mx, p.t + 8, 5, 0, Math.PI * 2); ctx.fill()
  ctx.font = 'bold 13px "Helvetica Neue",sans-serif'; ctx.textAlign = 'center'; const hl = ih === Math.round(ih) ? `${ih} cm` : `${ih.toFixed(5)} cm`; ctx.fillText(hl, mx, p.t - 6)
  if (domMut === 'none' && addCount !== 0) { ctx.fillStyle = 'rgba(196,163,90,0.35)'; ctx.font = 'italic 11px "Helvetica Neue",sans-serif'; ctx.textAlign = 'left'; ctx.fillText(`shift: ${ae > 0 ? '+' : ''}${ae.toFixed(5)} cm (invisible)`, p.l + 4, p.t + cH - 6) }
  ctx.restore()
  document.getElementById('result-height')!.textContent = hl; document.getElementById('result-height')!.style.color = mc
  document.getElementById('result-desc')!.textContent = domMut === 'none' ? (addCount === 0 ? 'population mean' : `${Math.abs(addCount)} alleles → ${ae > 0 ? '+' : ''}${ae.toFixed(5)} cm`) : `${domMut === 'achondroplasia' ? 'Achondroplasia (FGFR3)' : 'Marfan (FBN1)'}: ${ds > 0 ? '+' : ''}${ds} cm`
}

function updateIndivExp() {
  const el = document.getElementById('indiv-explain')!
  if (domMut === 'none') el.innerHTML = `Each additive allele: <strong>± 0.00001 cm</strong>. 50 alleles = 0.0005 cm. <em>Invisible</em> individually; powerful only when thousands act together.`
  else if (domMut === 'achondroplasia') el.innerHTML = `<strong>FGFR3 G380R</strong>: <strong>−44 cm</strong>. Constitutive receptor activation suppresses growth. <em>One copy suffices.</em>`
  else el.innerHTML = `<strong>FBN1</strong>: defective fibrillin-1 unleashes TGF-β → bone elongation beyond <strong>193 cm</strong>.`
}

// Genotype
let gtPat: 'additive' | 'dominant' | 'overdominant' = 'additive'
function drawGt(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)
  const p = { t: 24, b: 36, l: 40, r: 40 }, cW = w - p.l - p.r, cH = h - p.t - p.b
  const bW = Math.min(80, cW / 5), gap = (cW - bW * 3) / 2
  const vals: Record<string, [number, number, number]> = { additive: [0, 1, 2], dominant: [0, 1, 1], overdominant: [0, 1.5, 1] }
  const v = vals[gtPat]!, mx = Math.max(...v, 0.01), colors = ['rgba(150,150,150,0.7)', 'rgba(196,163,90,0.85)', 'rgba(100,140,255,0.7)'], labels = ['AA', 'AB', 'BB']
  for (let i = 0; i < 3; i++) { const bH = (v[i] / mx) * cH * 0.85, x = p.l + i * (bW + gap), y = p.t + cH - bH; const g = ctx.createLinearGradient(x, y, x, p.t + cH); g.addColorStop(0, colors[i]!); g.addColorStop(1, colors[i]!.replace(/[\d.]+\)$/, '0.12)')); ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(x, y, bW, Math.max(bH, 3), [5, 5, 0, 0]); ctx.fill(); ctx.fillStyle = '#fff'; ctx.font = 'bold 20px "Helvetica Neue",sans-serif'; ctx.textAlign = 'center'; ctx.fillText(`${v[i]}`, x + bW / 2, y - 10); ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '14px "Helvetica Neue",sans-serif'; ctx.fillText(labels[i]!, x + bW / 2, h - 10) }
  if (gtPat !== 'additive') { const exp = (v[0] + v[2]) / 2, ey = p.t + cH - (exp / mx) * cH * 0.85; ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(p.l, ey); ctx.lineTo(p.l + cW, ey); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.font = 'italic 11px "Helvetica Neue",sans-serif'; ctx.textAlign = 'right'; ctx.fillText(`additive expectation: ${exp.toFixed(1)}`, p.l + cW, ey - 6) }
  ctx.restore()
}
function updateGtExp() {
  const el = document.getElementById('gt-explain')!
  if (gtPat === 'additive') el.innerHTML = `<strong>Additive: 0→1→2</strong>. Linear dosage. ~700 of 1,060 UK Biobank traits.`
  else if (gtPat === 'dominant') el.innerHTML = `<strong>Dominant: 0→1→1</strong>. One copy suffices. Like achondroplasia.`
  else el.innerHTML = `<strong>Overdominant: 0→1.5→1</strong>. Heterozygote advantage — like sickle cell trait and malaria resistance.`
}

// Equalizer
let eqA = 50, eqD = 0
function drawEq(cv: HTMLCanvasElement) {
  const ctx = cv.getContext('2d')!; const dpr = window.devicePixelRatio || 1
  cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr
  const w = cv.clientWidth, h = cv.clientHeight; ctx.clearRect(0, 0, cv.width, cv.height); ctx.save(); ctx.scale(dpr, dpr)
  const p = { t: 28, b: 36, l: 40, r: 40 }, cW = w - p.l - p.r, cH = h - p.t - p.b, bW = Math.min(80, cW / 5), gap = (cW - bW * 3) / 2
  const a = eqA / 100, d = eqD / 100, vals = [0, a + d, 2 * a], aVals = [0, a, 2 * a], mx = Math.max(...vals, 0.01), labels = ['AA', 'AB', 'BB']
  ctx.font = '11px "Helvetica Neue",sans-serif'; ctx.textAlign = 'left'
  ctx.fillStyle = 'rgba(100,140,255,0.7)'; ctx.fillRect(p.l, 6, 10, 10); ctx.fillText('Additive', p.l + 14, 14)
  ctx.fillStyle = 'rgba(255,107,74,0.7)'; ctx.fillRect(p.l + 90, 6, 10, 10); ctx.fillText('Dominance', p.l + 104, 14)
  for (let i = 0; i < 3; i++) {
    const x = p.l + i * (bW + gap), aBH = (aVals[i]! / mx) * cH * 0.85
    const ag = ctx.createLinearGradient(x, p.t + cH - aBH, x, p.t + cH); ag.addColorStop(0, 'rgba(100,140,255,0.7)'); ag.addColorStop(1, 'rgba(100,140,255,0.12)'); ctx.fillStyle = ag; ctx.beginPath(); ctx.roundRect(x, p.t + cH - aBH, bW, Math.max(aBH, 2), [4, 4, 0, 0]); ctx.fill()
    if (i === 1 && d > 0) { const dBH = (d / mx) * cH * 0.85; const dg = ctx.createLinearGradient(x, p.t + cH - aBH - dBH, x, p.t + cH - aBH); dg.addColorStop(0, 'rgba(255,107,74,0.8)'); dg.addColorStop(1, 'rgba(255,107,74,0.15)'); ctx.fillStyle = dg; ctx.beginPath(); ctx.roundRect(x, p.t + cH - aBH - dBH, bW, dBH, [4, 4, 0, 0]); ctx.fill() }
    const tH = (vals[i]! / mx) * cH * 0.85; ctx.fillStyle = '#fff'; ctx.font = 'bold 16px "Helvetica Neue",sans-serif'; ctx.textAlign = 'center'; ctx.fillText(vals[i]!.toFixed(2), x + bW / 2, p.t + cH - tH - 8)
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '14px "Helvetica Neue",sans-serif'; ctx.fillText(labels[i]!, x + bW / 2, h - 10)
  }
  ctx.restore()
  document.getElementById('eq-encoding')!.innerHTML = `<strong>Additive:</strong> 0, ${a.toFixed(2)}, ${(2 * a).toFixed(2)} · <strong>Dominance:</strong> 0, ${d.toFixed(2)}, 0 · <strong>Combined:</strong> ${vals[0]!.toFixed(2)}, ${vals[1]!.toFixed(2)}, ${vals[2]!.toFixed(2)}`
}
function updateEqExp() {
  const el = document.getElementById('eq-explain')!
  const a = eqA / 100, d = eqD / 100
  const traitAB = a + d, traitBB = 2 * a

  if (eqD === 0 && eqA === 0) {
    el.innerHTML = `Try adjusting the sliders. <strong>Volume</strong> controls the additive effect — how much each additional allele contributes. <strong>Bass boost</strong> controls the dominance effect — the special bonus heterozygotes (AB) get that can't be explained by simply counting alleles.<br><br>The key insight: these two signals are <em>orthogonal</em> — mathematically independent. Additive encoding counts dosage: <strong>0, 1, 2</strong>. Dominance encoding captures the heterozygote deviation: <strong>0, 1, 0</strong>. By keeping them perpendicular, each measures a genuinely different aspect of genetic architecture.`
  } else if (eqD === 0) {
    el.innerHTML = `<strong>Pure additive effect.</strong> Bass boost is at zero — no dominance component.<br><br>The trait increases linearly with allele count: AA = 0, AB = ${a.toFixed(2)}, BB = ${traitBB.toFixed(2)}. Each B allele adds exactly ${a.toFixed(2)}. The heterozygote (AB) sits precisely at the midpoint between the two homozygotes.<br><br>This is how <strong>most human traits</strong> work. The UK Biobank found ~700 of 1,060 traits follow this pattern. Height, BMI, blood pressure — all primarily additive.`
  } else if (eqA === 0) {
    el.innerHTML = `<strong>Pure dominance effect.</strong> Volume is at zero — no additive component.<br><br>Only the heterozygote shows an effect: AA = 0, AB = ${d.toFixed(2)}, BB = 0. Both homozygotes are identical. Being AB gives you something <em>special</em> that neither AA nor BB has.<br><br>This is rare in nature. The UK Biobank found only <strong>183 loci</strong> with detectable dominance, explaining just 0.5% of additive variance. Dominance is the exception, not the rule.`
  } else {
    const midpoint = (0 + traitBB) / 2
    const deviation = traitAB - midpoint
    el.innerHTML = `<strong>Both components active.</strong><br><br>The <strong style="color:rgba(100,140,255,0.8)">blue bars</strong> show the additive component: 0 → ${a.toFixed(2)} → ${traitBB.toFixed(2)} (linear).<br>The <strong style="color:rgba(255,107,74,0.8)">red bar</strong> on AB shows the dominance boost: +${d.toFixed(2)}.<br><br>Combined trait: AA = 0, AB = ${traitAB.toFixed(2)}, BB = ${traitBB.toFixed(2)}.<br><br>Without orthogonalization, the AB value of ${traitAB.toFixed(2)} could look like "just a lot of additive effect." But by separating the signals, we see that AB <em>deviates</em> from the additive expectation (${midpoint.toFixed(2)}) by <strong>${deviation > 0 ? '+' : ''}${deviation.toFixed(2)}</strong>. That deviation is pure dominance.`
  }
}

// ══════════════════════════════════════════════════════════════════════════
// WIRING
// ══════════════════════════════════════════════════════════════════════════

document.getElementById('loci-slider')!.addEventListener('input', function (this: HTMLInputElement) { currentLoci = LOCI_STEPS[parseInt(this.value)]!; document.getElementById('loci-value')!.textContent = currentLoci >= 1000 ? `${currentLoci / 1000}k` : `${currentLoci}`; document.getElementById('dist-label')!.textContent = dLabel(currentLoci); drawLoci(document.getElementById('loci-canvas') as HTMLCanvasElement, currentLoci); updateLociExp() })
document.getElementById('additive-slider')!.addEventListener('input', function (this: HTMLInputElement) { addCount = parseInt(this.value); document.getElementById('additive-value')!.textContent = `${addCount > 0 ? '+' : ''}${addCount}`; drawIndiv(document.getElementById('indiv-canvas') as HTMLCanvasElement); updateIndivExp() })
document.querySelectorAll('#dom-toggles .sim-btn').forEach(b => b.addEventListener('click', () => { domMut = (b as HTMLButtonElement).dataset.dom as typeof domMut; document.querySelectorAll('#dom-toggles .sim-btn').forEach(x => x.classList.toggle('active', x === b)); drawIndiv(document.getElementById('indiv-canvas') as HTMLCanvasElement); updateIndivExp() }))
document.querySelectorAll('#gt-tabs .sim-btn').forEach(b => b.addEventListener('click', () => { gtPat = (b as HTMLButtonElement).dataset.pattern as typeof gtPat; document.querySelectorAll('#gt-tabs .sim-btn').forEach(x => x.classList.toggle('active', x === b)); drawGt(document.getElementById('genotype-canvas') as HTMLCanvasElement); updateGtExp() }))
document.getElementById('eq-additive')!.addEventListener('input', function (this: HTMLInputElement) { eqA = parseInt(this.value); document.getElementById('eq-add-val')!.textContent = `${eqA}`; drawEq(document.getElementById('equalizer-canvas') as HTMLCanvasElement); updateEqExp() })
document.getElementById('eq-dominance')!.addEventListener('input', function (this: HTMLInputElement) { eqD = parseInt(this.value); document.getElementById('eq-dom-val')!.textContent = `${eqD}`; drawEq(document.getElementById('equalizer-canvas') as HTMLCanvasElement); updateEqExp() })
window.addEventListener('resize', () => { renderEditorial(); drawLoci(document.getElementById('loci-canvas') as HTMLCanvasElement, currentLoci); drawIndiv(document.getElementById('indiv-canvas') as HTMLCanvasElement); drawGt(document.getElementById('genotype-canvas') as HTMLCanvasElement); drawEq(document.getElementById('equalizer-canvas') as HTMLCanvasElement) })

// INIT
renderEditorial()
drawLoci(document.getElementById('loci-canvas') as HTMLCanvasElement, currentLoci); updateLociExp()
drawIndiv(document.getElementById('indiv-canvas') as HTMLCanvasElement); updateIndivExp()
drawGt(document.getElementById('genotype-canvas') as HTMLCanvasElement); updateGtExp()
drawEq(document.getElementById('equalizer-canvas') as HTMLCanvasElement); updateEqExp()
