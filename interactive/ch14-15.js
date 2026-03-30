// node_modules/@chenglou/pretext/dist/bidi.js
var baseTypes = [
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "S",
  "B",
  "S",
  "WS",
  "B",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "B",
  "B",
  "B",
  "S",
  "WS",
  "ON",
  "ON",
  "ET",
  "ET",
  "ET",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "CS",
  "ON",
  "CS",
  "ON",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "B",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "CS",
  "ON",
  "ET",
  "ET",
  "ET",
  "ET",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ET",
  "ET",
  "EN",
  "EN",
  "ON",
  "L",
  "ON",
  "ON",
  "ON",
  "EN",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L"
];
var arabicTypes = [
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "CS",
  "AL",
  "ON",
  "ON",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "ET",
  "AN",
  "AN",
  "AL",
  "AL",
  "AL",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "ON",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL"
];
function classifyChar(charCode) {
  if (charCode <= 255)
    return baseTypes[charCode];
  if (1424 <= charCode && charCode <= 1524)
    return "R";
  if (1536 <= charCode && charCode <= 1791)
    return arabicTypes[charCode & 255];
  if (1792 <= charCode && charCode <= 2220)
    return "AL";
  return "L";
}
function computeBidiLevels(str) {
  const len = str.length;
  if (len === 0)
    return null;
  const types = new Array(len);
  let numBidi = 0;
  for (let i = 0; i < len; i++) {
    const t = classifyChar(str.charCodeAt(i));
    if (t === "R" || t === "AL" || t === "AN")
      numBidi++;
    types[i] = t;
  }
  if (numBidi === 0)
    return null;
  const startLevel = len / numBidi < 0.3 ? 0 : 1;
  const levels = new Int8Array(len);
  for (let i = 0; i < len; i++)
    levels[i] = startLevel;
  const e = startLevel & 1 ? "R" : "L";
  const sor = e;
  let lastType = sor;
  for (let i = 0; i < len; i++) {
    if (types[i] === "NSM")
      types[i] = lastType;
    else
      lastType = types[i];
  }
  lastType = sor;
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "EN")
      types[i] = lastType === "AL" ? "AN" : "EN";
    else if (t === "R" || t === "L" || t === "AL")
      lastType = t;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] === "AL")
      types[i] = "R";
  }
  for (let i = 1; i < len - 1; i++) {
    if (types[i] === "ES" && types[i - 1] === "EN" && types[i + 1] === "EN") {
      types[i] = "EN";
    }
    if (types[i] === "CS" && (types[i - 1] === "EN" || types[i - 1] === "AN") && types[i + 1] === types[i - 1]) {
      types[i] = types[i - 1];
    }
  }
  for (let i = 0; i < len; i++) {
    if (types[i] !== "EN")
      continue;
    let j;
    for (j = i - 1; j >= 0 && types[j] === "ET"; j--)
      types[j] = "EN";
    for (j = i + 1; j < len && types[j] === "ET"; j++)
      types[j] = "EN";
  }
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "WS" || t === "ES" || t === "ET" || t === "CS")
      types[i] = "ON";
  }
  lastType = sor;
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "EN")
      types[i] = lastType === "L" ? "L" : "EN";
    else if (t === "R" || t === "L")
      lastType = t;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] !== "ON")
      continue;
    let end = i + 1;
    while (end < len && types[end] === "ON")
      end++;
    const before = i > 0 ? types[i - 1] : sor;
    const after = end < len ? types[end] : sor;
    const bDir = before !== "L" ? "R" : "L";
    const aDir = after !== "L" ? "R" : "L";
    if (bDir === aDir) {
      for (let j = i; j < end; j++)
        types[j] = bDir;
    }
    i = end - 1;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] === "ON")
      types[i] = e;
  }
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if ((levels[i] & 1) === 0) {
      if (t === "R")
        levels[i]++;
      else if (t === "AN" || t === "EN")
        levels[i] += 2;
    } else if (t === "L" || t === "AN" || t === "EN") {
      levels[i]++;
    }
  }
  return levels;
}
function computeSegmentLevels(normalized, segStarts) {
  const bidiLevels = computeBidiLevels(normalized);
  if (bidiLevels === null)
    return null;
  const segLevels = new Int8Array(segStarts.length);
  for (let i = 0; i < segStarts.length; i++) {
    segLevels[i] = bidiLevels[segStarts[i]];
  }
  return segLevels;
}

// node_modules/@chenglou/pretext/dist/analysis.js
var collapsibleWhitespaceRunRe = /[ \t\n\r\f]+/g;
var needsWhitespaceNormalizationRe = /[\t\n\r\f]| {2,}|^ | $/;
function getWhiteSpaceProfile(whiteSpace) {
  const mode = whiteSpace ?? "normal";
  return mode === "pre-wrap" ? { mode, preserveOrdinarySpaces: true, preserveHardBreaks: true } : { mode, preserveOrdinarySpaces: false, preserveHardBreaks: false };
}
function normalizeWhitespaceNormal(text) {
  if (!needsWhitespaceNormalizationRe.test(text))
    return text;
  let normalized = text.replace(collapsibleWhitespaceRunRe, " ");
  if (normalized.charCodeAt(0) === 32) {
    normalized = normalized.slice(1);
  }
  if (normalized.length > 0 && normalized.charCodeAt(normalized.length - 1) === 32) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}
function normalizeWhitespacePreWrap(text) {
  if (!/[\r\f]/.test(text))
    return text.replace(/\r\n/g, "\n");
  return text.replace(/\r\n/g, "\n").replace(/[\r\f]/g, "\n");
}
var sharedWordSegmenter = null;
var segmenterLocale;
function getSharedWordSegmenter() {
  if (sharedWordSegmenter === null) {
    sharedWordSegmenter = new Intl.Segmenter(segmenterLocale, { granularity: "word" });
  }
  return sharedWordSegmenter;
}
var arabicScriptRe = /\p{Script=Arabic}/u;
var combiningMarkRe = /\p{M}/u;
var decimalDigitRe = /\p{Nd}/u;
function containsArabicScript(text) {
  return arabicScriptRe.test(text);
}
function isCJK(s) {
  for (const ch of s) {
    const c = ch.codePointAt(0);
    if (c >= 19968 && c <= 40959 || c >= 13312 && c <= 19903 || c >= 131072 && c <= 173791 || c >= 173824 && c <= 177983 || c >= 177984 && c <= 178207 || c >= 178208 && c <= 183983 || c >= 183984 && c <= 191471 || c >= 196608 && c <= 201551 || c >= 63744 && c <= 64255 || c >= 194560 && c <= 195103 || c >= 12288 && c <= 12351 || c >= 12352 && c <= 12447 || c >= 12448 && c <= 12543 || c >= 44032 && c <= 55215 || c >= 65280 && c <= 65519) {
      return true;
    }
  }
  return false;
}
var kinsokuStart = /* @__PURE__ */ new Set([
  "\uFF0C",
  "\uFF0E",
  "\uFF01",
  "\uFF1A",
  "\uFF1B",
  "\uFF1F",
  "\u3001",
  "\u3002",
  "\u30FB",
  "\uFF09",
  "\u3015",
  "\u3009",
  "\u300B",
  "\u300D",
  "\u300F",
  "\u3011",
  "\u3017",
  "\u3019",
  "\u301B",
  "\u30FC",
  "\u3005",
  "\u303B",
  "\u309D",
  "\u309E",
  "\u30FD",
  "\u30FE"
]);
var kinsokuEnd = /* @__PURE__ */ new Set([
  '"',
  "(",
  "[",
  "{",
  "\u201C",
  "\u2018",
  "\xAB",
  "\u2039",
  "\uFF08",
  "\u3014",
  "\u3008",
  "\u300A",
  "\u300C",
  "\u300E",
  "\u3010",
  "\u3016",
  "\u3018",
  "\u301A"
]);
var forwardStickyGlue = /* @__PURE__ */ new Set([
  "'",
  "\u2019"
]);
var leftStickyPunctuation = /* @__PURE__ */ new Set([
  ".",
  ",",
  "!",
  "?",
  ":",
  ";",
  "\u060C",
  "\u061B",
  "\u061F",
  "\u0964",
  "\u0965",
  "\u104A",
  "\u104B",
  "\u104C",
  "\u104D",
  "\u104F",
  ")",
  "]",
  "}",
  "%",
  '"',
  "\u201D",
  "\u2019",
  "\xBB",
  "\u203A",
  "\u2026"
]);
var arabicNoSpaceTrailingPunctuation = /* @__PURE__ */ new Set([
  ":",
  ".",
  "\u060C",
  "\u061B"
]);
var myanmarMedialGlue = /* @__PURE__ */ new Set([
  "\u104F"
]);
var closingQuoteChars = /* @__PURE__ */ new Set([
  "\u201D",
  "\u2019",
  "\xBB",
  "\u203A",
  "\u300D",
  "\u300F",
  "\u3011",
  "\u300B",
  "\u3009",
  "\u3015",
  "\uFF09"
]);
function isLeftStickyPunctuationSegment(segment) {
  if (isEscapedQuoteClusterSegment(segment))
    return true;
  let sawPunctuation = false;
  for (const ch of segment) {
    if (leftStickyPunctuation.has(ch)) {
      sawPunctuation = true;
      continue;
    }
    if (sawPunctuation && combiningMarkRe.test(ch))
      continue;
    return false;
  }
  return sawPunctuation;
}
function isCJKLineStartProhibitedSegment(segment) {
  for (const ch of segment) {
    if (!kinsokuStart.has(ch) && !leftStickyPunctuation.has(ch))
      return false;
  }
  return segment.length > 0;
}
function isForwardStickyClusterSegment(segment) {
  if (isEscapedQuoteClusterSegment(segment))
    return true;
  for (const ch of segment) {
    if (!kinsokuEnd.has(ch) && !forwardStickyGlue.has(ch) && !combiningMarkRe.test(ch))
      return false;
  }
  return segment.length > 0;
}
function isEscapedQuoteClusterSegment(segment) {
  let sawQuote = false;
  for (const ch of segment) {
    if (ch === "\\" || combiningMarkRe.test(ch))
      continue;
    if (kinsokuEnd.has(ch) || leftStickyPunctuation.has(ch) || forwardStickyGlue.has(ch)) {
      sawQuote = true;
      continue;
    }
    return false;
  }
  return sawQuote;
}
function splitTrailingForwardStickyCluster(text) {
  const chars = Array.from(text);
  let splitIndex = chars.length;
  while (splitIndex > 0) {
    const ch = chars[splitIndex - 1];
    if (combiningMarkRe.test(ch)) {
      splitIndex--;
      continue;
    }
    if (kinsokuEnd.has(ch) || forwardStickyGlue.has(ch)) {
      splitIndex--;
      continue;
    }
    break;
  }
  if (splitIndex <= 0 || splitIndex === chars.length)
    return null;
  return {
    head: chars.slice(0, splitIndex).join(""),
    tail: chars.slice(splitIndex).join("")
  };
}
function isRepeatedSingleCharRun(segment, ch) {
  if (segment.length === 0)
    return false;
  for (const part of segment) {
    if (part !== ch)
      return false;
  }
  return true;
}
function endsWithArabicNoSpacePunctuation(segment) {
  if (!containsArabicScript(segment) || segment.length === 0)
    return false;
  return arabicNoSpaceTrailingPunctuation.has(segment[segment.length - 1]);
}
function endsWithMyanmarMedialGlue(segment) {
  if (segment.length === 0)
    return false;
  return myanmarMedialGlue.has(segment[segment.length - 1]);
}
function splitLeadingSpaceAndMarks(segment) {
  if (segment.length < 2 || segment[0] !== " ")
    return null;
  const marks = segment.slice(1);
  if (/^\p{M}+$/u.test(marks)) {
    return { space: " ", marks };
  }
  return null;
}
function endsWithClosingQuote(text) {
  for (let i = text.length - 1; i >= 0; i--) {
    const ch = text[i];
    if (closingQuoteChars.has(ch))
      return true;
    if (!leftStickyPunctuation.has(ch))
      return false;
  }
  return false;
}
function classifySegmentBreakChar(ch, whiteSpaceProfile) {
  if (whiteSpaceProfile.preserveOrdinarySpaces || whiteSpaceProfile.preserveHardBreaks) {
    if (ch === " ")
      return "preserved-space";
    if (ch === "	")
      return "tab";
    if (whiteSpaceProfile.preserveHardBreaks && ch === "\n")
      return "hard-break";
  }
  if (ch === " ")
    return "space";
  if (ch === "\xA0" || ch === "\u202F" || ch === "\u2060" || ch === "\uFEFF") {
    return "glue";
  }
  if (ch === "\u200B")
    return "zero-width-break";
  if (ch === "\xAD")
    return "soft-hyphen";
  return "text";
}
function splitSegmentByBreakKind(segment, isWordLike, start, whiteSpaceProfile) {
  const pieces = [];
  let currentKind = null;
  let currentText = "";
  let currentStart = start;
  let currentWordLike = false;
  let offset = 0;
  for (const ch of segment) {
    const kind = classifySegmentBreakChar(ch, whiteSpaceProfile);
    const wordLike = kind === "text" && isWordLike;
    if (currentKind !== null && kind === currentKind && wordLike === currentWordLike) {
      currentText += ch;
      offset += ch.length;
      continue;
    }
    if (currentKind !== null) {
      pieces.push({
        text: currentText,
        isWordLike: currentWordLike,
        kind: currentKind,
        start: currentStart
      });
    }
    currentKind = kind;
    currentText = ch;
    currentStart = start + offset;
    currentWordLike = wordLike;
    offset += ch.length;
  }
  if (currentKind !== null) {
    pieces.push({
      text: currentText,
      isWordLike: currentWordLike,
      kind: currentKind,
      start: currentStart
    });
  }
  return pieces;
}
function isTextRunBoundary(kind) {
  return kind === "space" || kind === "preserved-space" || kind === "zero-width-break" || kind === "hard-break";
}
var urlSchemeSegmentRe = /^[A-Za-z][A-Za-z0-9+.-]*:$/;
function isUrlLikeRunStart(segmentation, index) {
  const text = segmentation.texts[index];
  if (text.startsWith("www."))
    return true;
  return urlSchemeSegmentRe.test(text) && index + 1 < segmentation.len && segmentation.kinds[index + 1] === "text" && segmentation.texts[index + 1] === "//";
}
function isUrlQueryBoundarySegment(text) {
  return text.includes("?") && (text.includes("://") || text.startsWith("www."));
}
function mergeUrlLikeRuns(segmentation) {
  const texts = segmentation.texts.slice();
  const isWordLike = segmentation.isWordLike.slice();
  const kinds = segmentation.kinds.slice();
  const starts = segmentation.starts.slice();
  for (let i = 0; i < segmentation.len; i++) {
    if (kinds[i] !== "text" || !isUrlLikeRunStart(segmentation, i))
      continue;
    let j = i + 1;
    while (j < segmentation.len && !isTextRunBoundary(kinds[j])) {
      texts[i] += texts[j];
      isWordLike[i] = true;
      const endsQueryPrefix = texts[j].includes("?");
      kinds[j] = "text";
      texts[j] = "";
      j++;
      if (endsQueryPrefix)
        break;
    }
  }
  let compactLen = 0;
  for (let read = 0; read < texts.length; read++) {
    const text = texts[read];
    if (text.length === 0)
      continue;
    if (compactLen !== read) {
      texts[compactLen] = text;
      isWordLike[compactLen] = isWordLike[read];
      kinds[compactLen] = kinds[read];
      starts[compactLen] = starts[read];
    }
    compactLen++;
  }
  texts.length = compactLen;
  isWordLike.length = compactLen;
  kinds.length = compactLen;
  starts.length = compactLen;
  return {
    len: compactLen,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeUrlQueryRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(segmentation.kinds[i]);
    starts.push(segmentation.starts[i]);
    if (!isUrlQueryBoundarySegment(text))
      continue;
    const nextIndex = i + 1;
    if (nextIndex >= segmentation.len || isTextRunBoundary(segmentation.kinds[nextIndex])) {
      continue;
    }
    let queryText = "";
    const queryStart = segmentation.starts[nextIndex];
    let j = nextIndex;
    while (j < segmentation.len && !isTextRunBoundary(segmentation.kinds[j])) {
      queryText += segmentation.texts[j];
      j++;
    }
    if (queryText.length > 0) {
      texts.push(queryText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(queryStart);
      i = j - 1;
    }
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
var numericJoinerChars = /* @__PURE__ */ new Set([
  ":",
  "-",
  "/",
  "\xD7",
  ",",
  ".",
  "+",
  "\u2013",
  "\u2014"
]);
var asciiPunctuationChainSegmentRe = /^[A-Za-z0-9_]+[,:;]*$/;
var asciiPunctuationChainTrailingJoinersRe = /[,:;]+$/;
function segmentContainsDecimalDigit(text) {
  for (const ch of text) {
    if (decimalDigitRe.test(ch))
      return true;
  }
  return false;
}
function isNumericRunSegment(text) {
  if (text.length === 0)
    return false;
  for (const ch of text) {
    if (decimalDigitRe.test(ch) || numericJoinerChars.has(ch))
      continue;
    return false;
  }
  return true;
}
function mergeNumericRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    const kind = segmentation.kinds[i];
    if (kind === "text" && isNumericRunSegment(text) && segmentContainsDecimalDigit(text)) {
      let mergedText = text;
      let j = i + 1;
      while (j < segmentation.len && segmentation.kinds[j] === "text" && isNumericRunSegment(segmentation.texts[j])) {
        mergedText += segmentation.texts[j];
        j++;
      }
      texts.push(mergedText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmentation.starts[i]);
      i = j - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(kind);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeAsciiPunctuationChains(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    const kind = segmentation.kinds[i];
    const wordLike = segmentation.isWordLike[i];
    if (kind === "text" && wordLike && asciiPunctuationChainSegmentRe.test(text)) {
      let mergedText = text;
      let j = i + 1;
      while (asciiPunctuationChainTrailingJoinersRe.test(mergedText) && j < segmentation.len && segmentation.kinds[j] === "text" && segmentation.isWordLike[j] && asciiPunctuationChainSegmentRe.test(segmentation.texts[j])) {
        mergedText += segmentation.texts[j];
        j++;
      }
      texts.push(mergedText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmentation.starts[i]);
      i = j - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function splitHyphenatedNumericRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    if (segmentation.kinds[i] === "text" && text.includes("-")) {
      const parts = text.split("-");
      let shouldSplit = parts.length > 1;
      for (let j = 0; j < parts.length; j++) {
        const part = parts[j];
        if (!shouldSplit)
          break;
        if (part.length === 0 || !segmentContainsDecimalDigit(part) || !isNumericRunSegment(part)) {
          shouldSplit = false;
        }
      }
      if (shouldSplit) {
        let offset = 0;
        for (let j = 0; j < parts.length; j++) {
          const part = parts[j];
          const splitText = j < parts.length - 1 ? `${part}-` : part;
          texts.push(splitText);
          isWordLike.push(true);
          kinds.push("text");
          starts.push(segmentation.starts[i] + offset);
          offset += splitText.length;
        }
        continue;
      }
    }
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(segmentation.kinds[i]);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeGlueConnectedTextRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  let read = 0;
  while (read < segmentation.len) {
    let text = segmentation.texts[read];
    let wordLike = segmentation.isWordLike[read];
    let kind = segmentation.kinds[read];
    let start = segmentation.starts[read];
    if (kind === "glue") {
      let glueText = text;
      const glueStart = start;
      read++;
      while (read < segmentation.len && segmentation.kinds[read] === "glue") {
        glueText += segmentation.texts[read];
        read++;
      }
      if (read < segmentation.len && segmentation.kinds[read] === "text") {
        text = glueText + segmentation.texts[read];
        wordLike = segmentation.isWordLike[read];
        kind = "text";
        start = glueStart;
        read++;
      } else {
        texts.push(glueText);
        isWordLike.push(false);
        kinds.push("glue");
        starts.push(glueStart);
        continue;
      }
    } else {
      read++;
    }
    if (kind === "text") {
      while (read < segmentation.len && segmentation.kinds[read] === "glue") {
        let glueText = "";
        while (read < segmentation.len && segmentation.kinds[read] === "glue") {
          glueText += segmentation.texts[read];
          read++;
        }
        if (read < segmentation.len && segmentation.kinds[read] === "text") {
          text += glueText + segmentation.texts[read];
          wordLike = wordLike || segmentation.isWordLike[read];
          read++;
          continue;
        }
        text += glueText;
      }
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(start);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function carryTrailingForwardStickyAcrossCJKBoundary(segmentation) {
  const texts = segmentation.texts.slice();
  const isWordLike = segmentation.isWordLike.slice();
  const kinds = segmentation.kinds.slice();
  const starts = segmentation.starts.slice();
  for (let i = 0; i < texts.length - 1; i++) {
    if (kinds[i] !== "text" || kinds[i + 1] !== "text")
      continue;
    if (!isCJK(texts[i]) || !isCJK(texts[i + 1]))
      continue;
    const split = splitTrailingForwardStickyCluster(texts[i]);
    if (split === null)
      continue;
    texts[i] = split.head;
    texts[i + 1] = split.tail + texts[i + 1];
    starts[i + 1] = starts[i] + split.head.length;
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function buildMergedSegmentation(normalized, profile, whiteSpaceProfile) {
  const wordSegmenter = getSharedWordSegmenter();
  let mergedLen = 0;
  const mergedTexts = [];
  const mergedWordLike = [];
  const mergedKinds = [];
  const mergedStarts = [];
  for (const s of wordSegmenter.segment(normalized)) {
    for (const piece of splitSegmentByBreakKind(s.segment, s.isWordLike ?? false, s.index, whiteSpaceProfile)) {
      const isText = piece.kind === "text";
      if (profile.carryCJKAfterClosingQuote && isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJK(piece.text) && isCJK(mergedTexts[mergedLen - 1]) && endsWithClosingQuote(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJKLineStartProhibitedSegment(piece.text) && isCJK(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && endsWithMyanmarMedialGlue(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.isWordLike && containsArabicScript(piece.text) && endsWithArabicNoSpacePunctuation(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = true;
      } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.text.length === 1 && piece.text !== "-" && piece.text !== "\u2014" && isRepeatedSingleCharRun(mergedTexts[mergedLen - 1], piece.text)) {
        mergedTexts[mergedLen - 1] += piece.text;
      } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && (isLeftStickyPunctuationSegment(piece.text) || piece.text === "-" && mergedWordLike[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
      } else {
        mergedTexts[mergedLen] = piece.text;
        mergedWordLike[mergedLen] = piece.isWordLike;
        mergedKinds[mergedLen] = piece.kind;
        mergedStarts[mergedLen] = piece.start;
        mergedLen++;
      }
    }
  }
  for (let i = 1; i < mergedLen; i++) {
    if (mergedKinds[i] === "text" && !mergedWordLike[i] && isEscapedQuoteClusterSegment(mergedTexts[i]) && mergedKinds[i - 1] === "text") {
      mergedTexts[i - 1] += mergedTexts[i];
      mergedWordLike[i - 1] = mergedWordLike[i - 1] || mergedWordLike[i];
      mergedTexts[i] = "";
    }
  }
  for (let i = mergedLen - 2; i >= 0; i--) {
    if (mergedKinds[i] === "text" && !mergedWordLike[i] && isForwardStickyClusterSegment(mergedTexts[i])) {
      let j = i + 1;
      while (j < mergedLen && mergedTexts[j] === "")
        j++;
      if (j < mergedLen && mergedKinds[j] === "text") {
        mergedTexts[j] = mergedTexts[i] + mergedTexts[j];
        mergedStarts[j] = mergedStarts[i];
        mergedTexts[i] = "";
      }
    }
  }
  let compactLen = 0;
  for (let read = 0; read < mergedLen; read++) {
    const text = mergedTexts[read];
    if (text.length === 0)
      continue;
    if (compactLen !== read) {
      mergedTexts[compactLen] = text;
      mergedWordLike[compactLen] = mergedWordLike[read];
      mergedKinds[compactLen] = mergedKinds[read];
      mergedStarts[compactLen] = mergedStarts[read];
    }
    compactLen++;
  }
  mergedTexts.length = compactLen;
  mergedWordLike.length = compactLen;
  mergedKinds.length = compactLen;
  mergedStarts.length = compactLen;
  const compacted = mergeGlueConnectedTextRuns({
    len: compactLen,
    texts: mergedTexts,
    isWordLike: mergedWordLike,
    kinds: mergedKinds,
    starts: mergedStarts
  });
  const withMergedUrls = carryTrailingForwardStickyAcrossCJKBoundary(mergeAsciiPunctuationChains(splitHyphenatedNumericRuns(mergeNumericRuns(mergeUrlQueryRuns(mergeUrlLikeRuns(compacted))))));
  for (let i = 0; i < withMergedUrls.len - 1; i++) {
    const split = splitLeadingSpaceAndMarks(withMergedUrls.texts[i]);
    if (split === null)
      continue;
    if (withMergedUrls.kinds[i] !== "space" && withMergedUrls.kinds[i] !== "preserved-space" || withMergedUrls.kinds[i + 1] !== "text" || !containsArabicScript(withMergedUrls.texts[i + 1])) {
      continue;
    }
    withMergedUrls.texts[i] = split.space;
    withMergedUrls.isWordLike[i] = false;
    withMergedUrls.kinds[i] = withMergedUrls.kinds[i] === "preserved-space" ? "preserved-space" : "space";
    withMergedUrls.texts[i + 1] = split.marks + withMergedUrls.texts[i + 1];
    withMergedUrls.starts[i + 1] = withMergedUrls.starts[i] + split.space.length;
  }
  return withMergedUrls;
}
function compileAnalysisChunks(segmentation, whiteSpaceProfile) {
  if (segmentation.len === 0)
    return [];
  if (!whiteSpaceProfile.preserveHardBreaks) {
    return [{
      startSegmentIndex: 0,
      endSegmentIndex: segmentation.len,
      consumedEndSegmentIndex: segmentation.len
    }];
  }
  const chunks = [];
  let startSegmentIndex = 0;
  for (let i = 0; i < segmentation.len; i++) {
    if (segmentation.kinds[i] !== "hard-break")
      continue;
    chunks.push({
      startSegmentIndex,
      endSegmentIndex: i,
      consumedEndSegmentIndex: i + 1
    });
    startSegmentIndex = i + 1;
  }
  if (startSegmentIndex < segmentation.len) {
    chunks.push({
      startSegmentIndex,
      endSegmentIndex: segmentation.len,
      consumedEndSegmentIndex: segmentation.len
    });
  }
  return chunks;
}
function analyzeText(text, profile, whiteSpace = "normal") {
  const whiteSpaceProfile = getWhiteSpaceProfile(whiteSpace);
  const normalized = whiteSpaceProfile.mode === "pre-wrap" ? normalizeWhitespacePreWrap(text) : normalizeWhitespaceNormal(text);
  if (normalized.length === 0) {
    return {
      normalized,
      chunks: [],
      len: 0,
      texts: [],
      isWordLike: [],
      kinds: [],
      starts: []
    };
  }
  const segmentation = buildMergedSegmentation(normalized, profile, whiteSpaceProfile);
  return {
    normalized,
    chunks: compileAnalysisChunks(segmentation, whiteSpaceProfile),
    ...segmentation
  };
}

// node_modules/@chenglou/pretext/dist/measurement.js
var measureContext = null;
var segmentMetricCaches = /* @__PURE__ */ new Map();
var cachedEngineProfile = null;
var emojiPresentationRe = /\p{Emoji_Presentation}/u;
var maybeEmojiRe = /[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u;
var sharedGraphemeSegmenter = null;
var emojiCorrectionCache = /* @__PURE__ */ new Map();
function getMeasureContext() {
  if (measureContext !== null)
    return measureContext;
  if (typeof OffscreenCanvas !== "undefined") {
    measureContext = new OffscreenCanvas(1, 1).getContext("2d");
    return measureContext;
  }
  if (typeof document !== "undefined") {
    measureContext = document.createElement("canvas").getContext("2d");
    return measureContext;
  }
  throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.");
}
function getSegmentMetricCache(font) {
  let cache = segmentMetricCaches.get(font);
  if (!cache) {
    cache = /* @__PURE__ */ new Map();
    segmentMetricCaches.set(font, cache);
  }
  return cache;
}
function getSegmentMetrics(seg, cache) {
  let metrics = cache.get(seg);
  if (metrics === void 0) {
    const ctx = getMeasureContext();
    metrics = {
      width: ctx.measureText(seg).width,
      containsCJK: isCJK(seg)
    };
    cache.set(seg, metrics);
  }
  return metrics;
}
function getEngineProfile() {
  if (cachedEngineProfile !== null)
    return cachedEngineProfile;
  if (typeof navigator === "undefined") {
    cachedEngineProfile = {
      lineFitEpsilon: 5e-3,
      carryCJKAfterClosingQuote: false,
      preferPrefixWidthsForBreakableRuns: false,
      preferEarlySoftHyphenBreak: false
    };
    return cachedEngineProfile;
  }
  const ua = navigator.userAgent;
  const vendor = navigator.vendor;
  const isSafari = vendor === "Apple Computer, Inc." && ua.includes("Safari/") && !ua.includes("Chrome/") && !ua.includes("Chromium/") && !ua.includes("CriOS/") && !ua.includes("FxiOS/") && !ua.includes("EdgiOS/");
  const isChromium = ua.includes("Chrome/") || ua.includes("Chromium/") || ua.includes("CriOS/") || ua.includes("Edg/");
  cachedEngineProfile = {
    lineFitEpsilon: isSafari ? 1 / 64 : 5e-3,
    carryCJKAfterClosingQuote: isChromium,
    preferPrefixWidthsForBreakableRuns: isSafari,
    preferEarlySoftHyphenBreak: isSafari
  };
  return cachedEngineProfile;
}
function parseFontSize(font) {
  const m = font.match(/(\d+(?:\.\d+)?)\s*px/);
  return m ? parseFloat(m[1]) : 16;
}
function getSharedGraphemeSegmenter() {
  if (sharedGraphemeSegmenter === null) {
    sharedGraphemeSegmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  }
  return sharedGraphemeSegmenter;
}
function isEmojiGrapheme(g) {
  return emojiPresentationRe.test(g) || g.includes("\uFE0F");
}
function textMayContainEmoji(text) {
  return maybeEmojiRe.test(text);
}
function getEmojiCorrection(font, fontSize) {
  let correction = emojiCorrectionCache.get(font);
  if (correction !== void 0)
    return correction;
  const ctx = getMeasureContext();
  ctx.font = font;
  const canvasW = ctx.measureText("\u{1F600}").width;
  correction = 0;
  if (canvasW > fontSize + 0.5 && typeof document !== "undefined" && document.body !== null) {
    const span = document.createElement("span");
    span.style.font = font;
    span.style.display = "inline-block";
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.textContent = "\u{1F600}";
    document.body.appendChild(span);
    const domW = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    if (canvasW - domW > 0.5) {
      correction = canvasW - domW;
    }
  }
  emojiCorrectionCache.set(font, correction);
  return correction;
}
function countEmojiGraphemes(text) {
  let count = 0;
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  for (const g of graphemeSegmenter.segment(text)) {
    if (isEmojiGrapheme(g.segment))
      count++;
  }
  return count;
}
function getEmojiCount(seg, metrics) {
  if (metrics.emojiCount === void 0) {
    metrics.emojiCount = countEmojiGraphemes(seg);
  }
  return metrics.emojiCount;
}
function getCorrectedSegmentWidth(seg, metrics, emojiCorrection) {
  if (emojiCorrection === 0)
    return metrics.width;
  return metrics.width - getEmojiCount(seg, metrics) * emojiCorrection;
}
function getSegmentGraphemeWidths(seg, metrics, cache, emojiCorrection) {
  if (metrics.graphemeWidths !== void 0)
    return metrics.graphemeWidths;
  const widths = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  for (const gs of graphemeSegmenter.segment(seg)) {
    const graphemeMetrics = getSegmentMetrics(gs.segment, cache);
    widths.push(getCorrectedSegmentWidth(gs.segment, graphemeMetrics, emojiCorrection));
  }
  metrics.graphemeWidths = widths.length > 1 ? widths : null;
  return metrics.graphemeWidths;
}
function getSegmentGraphemePrefixWidths(seg, metrics, cache, emojiCorrection) {
  if (metrics.graphemePrefixWidths !== void 0)
    return metrics.graphemePrefixWidths;
  const prefixWidths = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  let prefix = "";
  for (const gs of graphemeSegmenter.segment(seg)) {
    prefix += gs.segment;
    const prefixMetrics = getSegmentMetrics(prefix, cache);
    prefixWidths.push(getCorrectedSegmentWidth(prefix, prefixMetrics, emojiCorrection));
  }
  metrics.graphemePrefixWidths = prefixWidths.length > 1 ? prefixWidths : null;
  return metrics.graphemePrefixWidths;
}
function getFontMeasurementState(font, needsEmojiCorrection) {
  const ctx = getMeasureContext();
  ctx.font = font;
  const cache = getSegmentMetricCache(font);
  const fontSize = parseFontSize(font);
  const emojiCorrection = needsEmojiCorrection ? getEmojiCorrection(font, fontSize) : 0;
  return { cache, fontSize, emojiCorrection };
}

// node_modules/@chenglou/pretext/dist/line-break.js
function canBreakAfter(kind) {
  return kind === "space" || kind === "preserved-space" || kind === "tab" || kind === "zero-width-break" || kind === "soft-hyphen";
}
function getTabAdvance(lineWidth, tabStopAdvance) {
  if (tabStopAdvance <= 0)
    return 0;
  const remainder = lineWidth % tabStopAdvance;
  if (Math.abs(remainder) <= 1e-6)
    return tabStopAdvance;
  return tabStopAdvance - remainder;
}
function getBreakableAdvance(graphemeWidths, graphemePrefixWidths, graphemeIndex, preferPrefixWidths) {
  if (!preferPrefixWidths || graphemePrefixWidths === null) {
    return graphemeWidths[graphemeIndex];
  }
  return graphemePrefixWidths[graphemeIndex] - (graphemeIndex > 0 ? graphemePrefixWidths[graphemeIndex - 1] : 0);
}
function fitSoftHyphenBreak(graphemeWidths, initialWidth, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, cumulativeWidths) {
  let fitCount = 0;
  let fittedWidth = initialWidth;
  while (fitCount < graphemeWidths.length) {
    const nextWidth = cumulativeWidths ? initialWidth + graphemeWidths[fitCount] : fittedWidth + graphemeWidths[fitCount];
    const nextLineWidth = fitCount + 1 < graphemeWidths.length ? nextWidth + discretionaryHyphenWidth : nextWidth;
    if (nextLineWidth > maxWidth + lineFitEpsilon)
      break;
    fittedWidth = nextWidth;
    fitCount++;
  }
  return { fitCount, fittedWidth };
}
function findChunkIndexForStart(prepared, segmentIndex) {
  for (let i = 0; i < prepared.chunks.length; i++) {
    const chunk = prepared.chunks[i];
    if (segmentIndex < chunk.consumedEndSegmentIndex)
      return i;
  }
  return -1;
}
function normalizeLineStart(prepared, start) {
  let segmentIndex = start.segmentIndex;
  const graphemeIndex = start.graphemeIndex;
  if (segmentIndex >= prepared.widths.length)
    return null;
  if (graphemeIndex > 0)
    return start;
  const chunkIndex = findChunkIndexForStart(prepared, segmentIndex);
  if (chunkIndex < 0)
    return null;
  const chunk = prepared.chunks[chunkIndex];
  if (chunk.startSegmentIndex === chunk.endSegmentIndex && segmentIndex === chunk.startSegmentIndex) {
    return { segmentIndex, graphemeIndex: 0 };
  }
  if (segmentIndex < chunk.startSegmentIndex)
    segmentIndex = chunk.startSegmentIndex;
  while (segmentIndex < chunk.endSegmentIndex) {
    const kind = prepared.kinds[segmentIndex];
    if (kind !== "space" && kind !== "zero-width-break" && kind !== "soft-hyphen") {
      return { segmentIndex, graphemeIndex: 0 };
    }
    segmentIndex++;
  }
  if (chunk.consumedEndSegmentIndex >= prepared.widths.length)
    return null;
  return { segmentIndex: chunk.consumedEndSegmentIndex, graphemeIndex: 0 };
}
function walkPreparedLinesSimple(prepared, maxWidth, onLine) {
  const { widths, kinds, breakableWidths, breakablePrefixWidths } = prepared;
  if (widths.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  let lineStartSegmentIndex = 0;
  let lineStartGraphemeIndex = 0;
  let lineEndSegmentIndex = 0;
  let lineEndGraphemeIndex = 0;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakPaintWidth = 0;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakPaintWidth = 0;
  }
  function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    });
    lineW = 0;
    hasContent = false;
    clearPendingBreak();
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = graphemeIndex;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreak(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakPaintWidth = lineW - segmentWidth;
  }
  function appendBreakableSegment(segmentIndex) {
    appendBreakableSegmentFrom(segmentIndex, 0);
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        emitCurrentLine();
        startLineAtGrapheme(segmentIndex, g, gw);
      } else {
        lineW += gw;
        lineEndSegmentIndex = segmentIndex;
        lineEndGraphemeIndex = g + 1;
      }
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
  }
  let i = 0;
  while (i < widths.length) {
    const w = widths[i];
    const kind = kinds[i];
    if (!hasContent) {
      if (w > maxWidth && breakableWidths[i] !== null) {
        appendBreakableSegment(i);
      } else {
        startLineAtSegment(i, w);
      }
      updatePendingBreak(i, w);
      i++;
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      if (canBreakAfter(kind)) {
        appendWholeSegment(i, w);
        emitCurrentLine(i + 1, 0, lineW - w);
        i++;
        continue;
      }
      if (pendingBreakSegmentIndex >= 0) {
        emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
        continue;
      }
      if (w > maxWidth && breakableWidths[i] !== null) {
        emitCurrentLine();
        appendBreakableSegment(i);
        i++;
        continue;
      }
      emitCurrentLine();
      continue;
    }
    appendWholeSegment(i, w);
    updatePendingBreak(i, w);
    i++;
  }
  if (hasContent)
    emitCurrentLine();
  return lineCount;
}
function walkPreparedLines(prepared, maxWidth, onLine) {
  if (prepared.simpleLineWalkFastPath) {
    return walkPreparedLinesSimple(prepared, maxWidth, onLine);
  }
  const { widths, lineEndFitAdvances, lineEndPaintAdvances, kinds, breakableWidths, breakablePrefixWidths, discretionaryHyphenWidth, tabStopAdvance, chunks } = prepared;
  if (widths.length === 0 || chunks.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  let lineStartSegmentIndex = 0;
  let lineStartGraphemeIndex = 0;
  let lineEndSegmentIndex = 0;
  let lineEndGraphemeIndex = 0;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakFitWidth = 0;
  let pendingBreakPaintWidth = 0;
  let pendingBreakKind = null;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakFitWidth = 0;
    pendingBreakPaintWidth = 0;
    pendingBreakKind = null;
  }
  function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    });
    lineW = 0;
    hasContent = false;
    clearPendingBreak();
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = graphemeIndex;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreakForWholeSegment(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    const fitAdvance = kinds[segmentIndex] === "tab" ? 0 : lineEndFitAdvances[segmentIndex];
    const paintAdvance = kinds[segmentIndex] === "tab" ? segmentWidth : lineEndPaintAdvances[segmentIndex];
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakFitWidth = lineW - segmentWidth + fitAdvance;
    pendingBreakPaintWidth = lineW - segmentWidth + paintAdvance;
    pendingBreakKind = kinds[segmentIndex];
  }
  function appendBreakableSegment(segmentIndex) {
    appendBreakableSegmentFrom(segmentIndex, 0);
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        emitCurrentLine();
        startLineAtGrapheme(segmentIndex, g, gw);
      } else {
        lineW += gw;
        lineEndSegmentIndex = segmentIndex;
        lineEndGraphemeIndex = g + 1;
      }
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
  }
  function continueSoftHyphenBreakableSegment(segmentIndex) {
    if (pendingBreakKind !== "soft-hyphen")
      return false;
    const gWidths = breakableWidths[segmentIndex];
    if (gWidths === null)
      return false;
    const fitWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? breakablePrefixWidths[segmentIndex] ?? gWidths : gWidths;
    const usesPrefixWidths = fitWidths !== gWidths;
    const { fitCount, fittedWidth } = fitSoftHyphenBreak(fitWidths, lineW, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, usesPrefixWidths);
    if (fitCount === 0)
      return false;
    lineW = fittedWidth;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = fitCount;
    clearPendingBreak();
    if (fitCount === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
      return true;
    }
    emitCurrentLine(segmentIndex, fitCount, fittedWidth + discretionaryHyphenWidth);
    appendBreakableSegmentFrom(segmentIndex, fitCount);
    return true;
  }
  function emitEmptyChunk(chunk) {
    lineCount++;
    onLine?.({
      startSegmentIndex: chunk.startSegmentIndex,
      startGraphemeIndex: 0,
      endSegmentIndex: chunk.consumedEndSegmentIndex,
      endGraphemeIndex: 0,
      width: 0
    });
    clearPendingBreak();
  }
  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
    const chunk = chunks[chunkIndex];
    if (chunk.startSegmentIndex === chunk.endSegmentIndex) {
      emitEmptyChunk(chunk);
      continue;
    }
    hasContent = false;
    lineW = 0;
    lineStartSegmentIndex = chunk.startSegmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = chunk.startSegmentIndex;
    lineEndGraphemeIndex = 0;
    clearPendingBreak();
    let i = chunk.startSegmentIndex;
    while (i < chunk.endSegmentIndex) {
      const kind = kinds[i];
      const w = kind === "tab" ? getTabAdvance(lineW, tabStopAdvance) : widths[i];
      if (kind === "soft-hyphen") {
        if (hasContent) {
          lineEndSegmentIndex = i + 1;
          lineEndGraphemeIndex = 0;
          pendingBreakSegmentIndex = i + 1;
          pendingBreakFitWidth = lineW + discretionaryHyphenWidth;
          pendingBreakPaintWidth = lineW + discretionaryHyphenWidth;
          pendingBreakKind = kind;
        }
        i++;
        continue;
      }
      if (!hasContent) {
        if (w > maxWidth && breakableWidths[i] !== null) {
          appendBreakableSegment(i);
        } else {
          startLineAtSegment(i, w);
        }
        updatePendingBreakForWholeSegment(i, w);
        i++;
        continue;
      }
      const newW = lineW + w;
      if (newW > maxWidth + lineFitEpsilon) {
        const currentBreakFitWidth = lineW + (kind === "tab" ? 0 : lineEndFitAdvances[i]);
        const currentBreakPaintWidth = lineW + (kind === "tab" ? w : lineEndPaintAdvances[i]);
        if (pendingBreakKind === "soft-hyphen" && engineProfile.preferEarlySoftHyphenBreak && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
          emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
          continue;
        }
        if (pendingBreakKind === "soft-hyphen" && continueSoftHyphenBreakableSegment(i)) {
          i++;
          continue;
        }
        if (canBreakAfter(kind) && currentBreakFitWidth <= maxWidth + lineFitEpsilon) {
          appendWholeSegment(i, w);
          emitCurrentLine(i + 1, 0, currentBreakPaintWidth);
          i++;
          continue;
        }
        if (pendingBreakSegmentIndex >= 0 && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
          emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
          continue;
        }
        if (w > maxWidth && breakableWidths[i] !== null) {
          emitCurrentLine();
          appendBreakableSegment(i);
          i++;
          continue;
        }
        emitCurrentLine();
        continue;
      }
      appendWholeSegment(i, w);
      updatePendingBreakForWholeSegment(i, w);
      i++;
    }
    if (hasContent) {
      const finalPaintWidth = pendingBreakSegmentIndex === chunk.consumedEndSegmentIndex ? pendingBreakPaintWidth : lineW;
      emitCurrentLine(chunk.consumedEndSegmentIndex, 0, finalPaintWidth);
    }
  }
  return lineCount;
}
function layoutNextLineRange(prepared, start, maxWidth) {
  const normalizedStart = normalizeLineStart(prepared, start);
  if (normalizedStart === null)
    return null;
  if (prepared.simpleLineWalkFastPath) {
    return layoutNextLineRangeSimple(prepared, normalizedStart, maxWidth);
  }
  const chunkIndex = findChunkIndexForStart(prepared, normalizedStart.segmentIndex);
  if (chunkIndex < 0)
    return null;
  const chunk = prepared.chunks[chunkIndex];
  if (chunk.startSegmentIndex === chunk.endSegmentIndex) {
    return {
      startSegmentIndex: chunk.startSegmentIndex,
      startGraphemeIndex: 0,
      endSegmentIndex: chunk.consumedEndSegmentIndex,
      endGraphemeIndex: 0,
      width: 0
    };
  }
  const { widths, lineEndFitAdvances, lineEndPaintAdvances, kinds, breakableWidths, breakablePrefixWidths, discretionaryHyphenWidth, tabStopAdvance } = prepared;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineW = 0;
  let hasContent = false;
  const lineStartSegmentIndex = normalizedStart.segmentIndex;
  const lineStartGraphemeIndex = normalizedStart.graphemeIndex;
  let lineEndSegmentIndex = lineStartSegmentIndex;
  let lineEndGraphemeIndex = lineStartGraphemeIndex;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakFitWidth = 0;
  let pendingBreakPaintWidth = 0;
  let pendingBreakKind = null;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakFitWidth = 0;
    pendingBreakPaintWidth = 0;
    pendingBreakKind = null;
  }
  function finishLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    if (!hasContent)
      return null;
    return {
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    };
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreakForWholeSegment(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    const fitAdvance = kinds[segmentIndex] === "tab" ? 0 : lineEndFitAdvances[segmentIndex];
    const paintAdvance = kinds[segmentIndex] === "tab" ? segmentWidth : lineEndPaintAdvances[segmentIndex];
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakFitWidth = lineW - segmentWidth + fitAdvance;
    pendingBreakPaintWidth = lineW - segmentWidth + paintAdvance;
    pendingBreakKind = kinds[segmentIndex];
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        return finishLine();
      }
      lineW += gw;
      lineEndSegmentIndex = segmentIndex;
      lineEndGraphemeIndex = g + 1;
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
    return null;
  }
  function maybeFinishAtSoftHyphen(segmentIndex) {
    if (pendingBreakKind !== "soft-hyphen" || pendingBreakSegmentIndex < 0)
      return null;
    const gWidths = breakableWidths[segmentIndex] ?? null;
    if (gWidths !== null) {
      const fitWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? breakablePrefixWidths[segmentIndex] ?? gWidths : gWidths;
      const usesPrefixWidths = fitWidths !== gWidths;
      const { fitCount, fittedWidth } = fitSoftHyphenBreak(fitWidths, lineW, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, usesPrefixWidths);
      if (fitCount === gWidths.length) {
        lineW = fittedWidth;
        lineEndSegmentIndex = segmentIndex + 1;
        lineEndGraphemeIndex = 0;
        clearPendingBreak();
        return null;
      }
      if (fitCount > 0) {
        return finishLine(segmentIndex, fitCount, fittedWidth + discretionaryHyphenWidth);
      }
    }
    if (pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
      return finishLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
    }
    return null;
  }
  for (let i = normalizedStart.segmentIndex; i < chunk.endSegmentIndex; i++) {
    const kind = kinds[i];
    const startGraphemeIndex = i === normalizedStart.segmentIndex ? normalizedStart.graphemeIndex : 0;
    const w = kind === "tab" ? getTabAdvance(lineW, tabStopAdvance) : widths[i];
    if (kind === "soft-hyphen" && startGraphemeIndex === 0) {
      if (hasContent) {
        lineEndSegmentIndex = i + 1;
        lineEndGraphemeIndex = 0;
        pendingBreakSegmentIndex = i + 1;
        pendingBreakFitWidth = lineW + discretionaryHyphenWidth;
        pendingBreakPaintWidth = lineW + discretionaryHyphenWidth;
        pendingBreakKind = kind;
      }
      continue;
    }
    if (!hasContent) {
      if (startGraphemeIndex > 0) {
        const line = appendBreakableSegmentFrom(i, startGraphemeIndex);
        if (line !== null)
          return line;
      } else if (w > maxWidth && breakableWidths[i] !== null) {
        const line = appendBreakableSegmentFrom(i, 0);
        if (line !== null)
          return line;
      } else {
        startLineAtSegment(i, w);
      }
      updatePendingBreakForWholeSegment(i, w);
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      const currentBreakFitWidth = lineW + (kind === "tab" ? 0 : lineEndFitAdvances[i]);
      const currentBreakPaintWidth = lineW + (kind === "tab" ? w : lineEndPaintAdvances[i]);
      if (pendingBreakKind === "soft-hyphen" && engineProfile.preferEarlySoftHyphenBreak && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
        return finishLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
      }
      const softBreakLine = maybeFinishAtSoftHyphen(i);
      if (softBreakLine !== null)
        return softBreakLine;
      if (canBreakAfter(kind) && currentBreakFitWidth <= maxWidth + lineFitEpsilon) {
        appendWholeSegment(i, w);
        return finishLine(i + 1, 0, currentBreakPaintWidth);
      }
      if (pendingBreakSegmentIndex >= 0 && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
        return finishLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
      }
      if (w > maxWidth && breakableWidths[i] !== null) {
        const currentLine = finishLine();
        if (currentLine !== null)
          return currentLine;
        const line = appendBreakableSegmentFrom(i, 0);
        if (line !== null)
          return line;
      }
      return finishLine();
    }
    appendWholeSegment(i, w);
    updatePendingBreakForWholeSegment(i, w);
  }
  if (pendingBreakSegmentIndex === chunk.consumedEndSegmentIndex && lineEndGraphemeIndex === 0) {
    return finishLine(chunk.consumedEndSegmentIndex, 0, pendingBreakPaintWidth);
  }
  return finishLine(chunk.consumedEndSegmentIndex, 0, lineW);
}
function layoutNextLineRangeSimple(prepared, normalizedStart, maxWidth) {
  const { widths, kinds, breakableWidths, breakablePrefixWidths } = prepared;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineW = 0;
  let hasContent = false;
  const lineStartSegmentIndex = normalizedStart.segmentIndex;
  const lineStartGraphemeIndex = normalizedStart.graphemeIndex;
  let lineEndSegmentIndex = lineStartSegmentIndex;
  let lineEndGraphemeIndex = lineStartGraphemeIndex;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakPaintWidth = 0;
  function finishLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    if (!hasContent)
      return null;
    return {
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    };
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreak(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakPaintWidth = lineW - segmentWidth;
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        return finishLine();
      }
      lineW += gw;
      lineEndSegmentIndex = segmentIndex;
      lineEndGraphemeIndex = g + 1;
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
    return null;
  }
  for (let i = normalizedStart.segmentIndex; i < widths.length; i++) {
    const w = widths[i];
    const kind = kinds[i];
    const startGraphemeIndex = i === normalizedStart.segmentIndex ? normalizedStart.graphemeIndex : 0;
    if (!hasContent) {
      if (startGraphemeIndex > 0) {
        const line = appendBreakableSegmentFrom(i, startGraphemeIndex);
        if (line !== null)
          return line;
      } else if (w > maxWidth && breakableWidths[i] !== null) {
        const line = appendBreakableSegmentFrom(i, 0);
        if (line !== null)
          return line;
      } else {
        startLineAtSegment(i, w);
      }
      updatePendingBreak(i, w);
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      if (canBreakAfter(kind)) {
        appendWholeSegment(i, w);
        return finishLine(i + 1, 0, lineW - w);
      }
      if (pendingBreakSegmentIndex >= 0) {
        return finishLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
      }
      if (w > maxWidth && breakableWidths[i] !== null) {
        const currentLine = finishLine();
        if (currentLine !== null)
          return currentLine;
        const line = appendBreakableSegmentFrom(i, 0);
        if (line !== null)
          return line;
      }
      return finishLine();
    }
    appendWholeSegment(i, w);
    updatePendingBreak(i, w);
  }
  return finishLine();
}

// node_modules/@chenglou/pretext/dist/layout.js
var sharedGraphemeSegmenter2 = null;
var sharedLineTextCaches = /* @__PURE__ */ new WeakMap();
function getSharedGraphemeSegmenter2() {
  if (sharedGraphemeSegmenter2 === null) {
    sharedGraphemeSegmenter2 = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  }
  return sharedGraphemeSegmenter2;
}
function createEmptyPrepared(includeSegments) {
  if (includeSegments) {
    return {
      widths: [],
      lineEndFitAdvances: [],
      lineEndPaintAdvances: [],
      kinds: [],
      simpleLineWalkFastPath: true,
      segLevels: null,
      breakableWidths: [],
      breakablePrefixWidths: [],
      discretionaryHyphenWidth: 0,
      tabStopAdvance: 0,
      chunks: [],
      segments: []
    };
  }
  return {
    widths: [],
    lineEndFitAdvances: [],
    lineEndPaintAdvances: [],
    kinds: [],
    simpleLineWalkFastPath: true,
    segLevels: null,
    breakableWidths: [],
    breakablePrefixWidths: [],
    discretionaryHyphenWidth: 0,
    tabStopAdvance: 0,
    chunks: []
  };
}
function measureAnalysis(analysis, font, includeSegments) {
  const graphemeSegmenter = getSharedGraphemeSegmenter2();
  const engineProfile = getEngineProfile();
  const { cache, emojiCorrection } = getFontMeasurementState(font, textMayContainEmoji(analysis.normalized));
  const discretionaryHyphenWidth = getCorrectedSegmentWidth("-", getSegmentMetrics("-", cache), emojiCorrection);
  const spaceWidth = getCorrectedSegmentWidth(" ", getSegmentMetrics(" ", cache), emojiCorrection);
  const tabStopAdvance = spaceWidth * 8;
  if (analysis.len === 0)
    return createEmptyPrepared(includeSegments);
  const widths = [];
  const lineEndFitAdvances = [];
  const lineEndPaintAdvances = [];
  const kinds = [];
  let simpleLineWalkFastPath = analysis.chunks.length <= 1;
  const segStarts = includeSegments ? [] : null;
  const breakableWidths = [];
  const breakablePrefixWidths = [];
  const segments = includeSegments ? [] : null;
  const preparedStartByAnalysisIndex = Array.from({ length: analysis.len });
  const preparedEndByAnalysisIndex = Array.from({ length: analysis.len });
  function pushMeasuredSegment(text, width, lineEndFitAdvance, lineEndPaintAdvance, kind, start, breakable, breakablePrefix) {
    if (kind !== "text" && kind !== "space" && kind !== "zero-width-break") {
      simpleLineWalkFastPath = false;
    }
    widths.push(width);
    lineEndFitAdvances.push(lineEndFitAdvance);
    lineEndPaintAdvances.push(lineEndPaintAdvance);
    kinds.push(kind);
    segStarts?.push(start);
    breakableWidths.push(breakable);
    breakablePrefixWidths.push(breakablePrefix);
    if (segments !== null)
      segments.push(text);
  }
  for (let mi = 0; mi < analysis.len; mi++) {
    preparedStartByAnalysisIndex[mi] = widths.length;
    const segText = analysis.texts[mi];
    const segWordLike = analysis.isWordLike[mi];
    const segKind = analysis.kinds[mi];
    const segStart = analysis.starts[mi];
    if (segKind === "soft-hyphen") {
      pushMeasuredSegment(segText, 0, discretionaryHyphenWidth, discretionaryHyphenWidth, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    if (segKind === "hard-break") {
      pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    if (segKind === "tab") {
      pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    const segMetrics = getSegmentMetrics(segText, cache);
    if (segKind === "text" && segMetrics.containsCJK) {
      let unitText = "";
      let unitStart = 0;
      for (const gs of graphemeSegmenter.segment(segText)) {
        const grapheme = gs.segment;
        if (unitText.length === 0) {
          unitText = grapheme;
          unitStart = gs.index;
          continue;
        }
        if (kinsokuEnd.has(unitText) || kinsokuStart.has(grapheme) || leftStickyPunctuation.has(grapheme) || engineProfile.carryCJKAfterClosingQuote && isCJK(grapheme) && endsWithClosingQuote(unitText)) {
          unitText += grapheme;
          continue;
        }
        const unitMetrics = getSegmentMetrics(unitText, cache);
        const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
        pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
        unitText = grapheme;
        unitStart = gs.index;
      }
      if (unitText.length > 0) {
        const unitMetrics = getSegmentMetrics(unitText, cache);
        const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
        pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
      }
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    const w = getCorrectedSegmentWidth(segText, segMetrics, emojiCorrection);
    const lineEndFitAdvance = segKind === "space" || segKind === "preserved-space" || segKind === "zero-width-break" ? 0 : w;
    const lineEndPaintAdvance = segKind === "space" || segKind === "zero-width-break" ? 0 : w;
    if (segWordLike && segText.length > 1) {
      const graphemeWidths = getSegmentGraphemeWidths(segText, segMetrics, cache, emojiCorrection);
      const graphemePrefixWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? getSegmentGraphemePrefixWidths(segText, segMetrics, cache, emojiCorrection) : null;
      pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, graphemeWidths, graphemePrefixWidths);
    } else {
      pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, null, null);
    }
    preparedEndByAnalysisIndex[mi] = widths.length;
  }
  const chunks = mapAnalysisChunksToPreparedChunks(analysis.chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex);
  const segLevels = segStarts === null ? null : computeSegmentLevels(analysis.normalized, segStarts);
  if (segments !== null) {
    return {
      widths,
      lineEndFitAdvances,
      lineEndPaintAdvances,
      kinds,
      simpleLineWalkFastPath,
      segLevels,
      breakableWidths,
      breakablePrefixWidths,
      discretionaryHyphenWidth,
      tabStopAdvance,
      chunks,
      segments
    };
  }
  return {
    widths,
    lineEndFitAdvances,
    lineEndPaintAdvances,
    kinds,
    simpleLineWalkFastPath,
    segLevels,
    breakableWidths,
    breakablePrefixWidths,
    discretionaryHyphenWidth,
    tabStopAdvance,
    chunks
  };
}
function mapAnalysisChunksToPreparedChunks(chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex) {
  const preparedChunks = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const startSegmentIndex = chunk.startSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.startSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    const endSegmentIndex = chunk.endSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.endSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    const consumedEndSegmentIndex = chunk.consumedEndSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.consumedEndSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    preparedChunks.push({
      startSegmentIndex,
      endSegmentIndex,
      consumedEndSegmentIndex
    });
  }
  return preparedChunks;
}
function prepareInternal(text, font, includeSegments, options) {
  const analysis = analyzeText(text, getEngineProfile(), options?.whiteSpace);
  return measureAnalysis(analysis, font, includeSegments);
}
function prepareWithSegments(text, font, options) {
  return prepareInternal(text, font, true, options);
}
function getInternalPrepared(prepared) {
  return prepared;
}
function getSegmentGraphemes(segmentIndex, segments, cache) {
  let graphemes = cache.get(segmentIndex);
  if (graphemes !== void 0)
    return graphemes;
  graphemes = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter2();
  for (const gs of graphemeSegmenter.segment(segments[segmentIndex])) {
    graphemes.push(gs.segment);
  }
  cache.set(segmentIndex, graphemes);
  return graphemes;
}
function getLineTextCache(prepared) {
  let cache = sharedLineTextCaches.get(prepared);
  if (cache !== void 0)
    return cache;
  cache = /* @__PURE__ */ new Map();
  sharedLineTextCaches.set(prepared, cache);
  return cache;
}
function lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex) {
  return endSegmentIndex > 0 && kinds[endSegmentIndex - 1] === "soft-hyphen" && !(startSegmentIndex === endSegmentIndex && startGraphemeIndex > 0);
}
function buildLineTextFromRange(segments, kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
  let text = "";
  const endsWithDiscretionaryHyphen = lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex);
  for (let i = startSegmentIndex; i < endSegmentIndex; i++) {
    if (kinds[i] === "soft-hyphen" || kinds[i] === "hard-break")
      continue;
    if (i === startSegmentIndex && startGraphemeIndex > 0) {
      text += getSegmentGraphemes(i, segments, cache).slice(startGraphemeIndex).join("");
    } else {
      text += segments[i];
    }
  }
  if (endGraphemeIndex > 0) {
    if (endsWithDiscretionaryHyphen)
      text += "-";
    text += getSegmentGraphemes(endSegmentIndex, segments, cache).slice(startSegmentIndex === endSegmentIndex ? startGraphemeIndex : 0, endGraphemeIndex).join("");
  } else if (endsWithDiscretionaryHyphen) {
    text += "-";
  }
  return text;
}
function createLayoutLine(prepared, cache, width, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
  return {
    text: buildLineTextFromRange(prepared.segments, prepared.kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex),
    width,
    start: {
      segmentIndex: startSegmentIndex,
      graphemeIndex: startGraphemeIndex
    },
    end: {
      segmentIndex: endSegmentIndex,
      graphemeIndex: endGraphemeIndex
    }
  };
}
function materializeLayoutLine(prepared, cache, line) {
  return createLayoutLine(prepared, cache, line.width, line.startSegmentIndex, line.startGraphemeIndex, line.endSegmentIndex, line.endGraphemeIndex);
}
function toLayoutLineRange(line) {
  return {
    width: line.width,
    start: {
      segmentIndex: line.startSegmentIndex,
      graphemeIndex: line.startGraphemeIndex
    },
    end: {
      segmentIndex: line.endSegmentIndex,
      graphemeIndex: line.endGraphemeIndex
    }
  };
}
function stepLineRange(prepared, start, maxWidth) {
  const line = layoutNextLineRange(prepared, start, maxWidth);
  if (line === null)
    return null;
  return toLayoutLineRange(line);
}
function materializeLine(prepared, line) {
  return createLayoutLine(prepared, getLineTextCache(prepared), line.width, line.start.segmentIndex, line.start.graphemeIndex, line.end.segmentIndex, line.end.graphemeIndex);
}
function walkLineRanges(prepared, maxWidth, onLine) {
  if (prepared.widths.length === 0)
    return 0;
  return walkPreparedLines(getInternalPrepared(prepared), maxWidth, (line) => {
    onLine(toLayoutLineRange(line));
  });
}
function layoutNextLine(prepared, start, maxWidth) {
  const line = stepLineRange(prepared, start, maxWidth);
  if (line === null)
    return null;
  return materializeLine(prepared, line);
}
function layoutWithLines(prepared, maxWidth, lineHeight) {
  const lines = [];
  if (prepared.widths.length === 0)
    return { lineCount: 0, height: 0, lines };
  const graphemeCache = getLineTextCache(prepared);
  const lineCount = walkPreparedLines(getInternalPrepared(prepared), maxWidth, (line) => {
    lines.push(materializeLayoutLine(prepared, graphemeCache, line));
  });
  return { lineCount, height: lineCount * lineHeight, lines };
}

// interactive/ch14-15.ts
var BODY_FONT = '18px "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif';
var BODY_LINE_HEIGHT = 30;
var HF = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif';
var GUTTER = 48;
var COL_GAP = 40;
var BOTTOM_GAP = 60;
var DROP_CAP_LINES = 3;
var MIN_SLOT_WIDTH = 50;
var NARROW = 760;
var HEADLINE_TEXT = "FROM ALLELES TO THE POLYGENIC MODEL";
var BODY_TEXT = `Not all genetic variants work the same way. Some are like a light switch \u2014 flip it once, and the phenotype changes dramatically. Others are dimmer switches \u2014 you need thousands of them for a real difference.

When a single locus contributes additively, the F2 shows three phenotypic classes: 1:2:1. With two loci, five classes emerge in a 1:4:6:4:1 ratio \u2014 already hinting at a bell curve. As the number of loci grows to twelve thousand, the discrete steps blur into a smooth Gaussian. Add environmental variation and you get a truly continuous trait. The shape you see here \u2014 the golden curve that these words flow around \u2014 is this distribution. Every human trait that follows a bell curve is the signature of thousands of additive alleles acting together.

A genome-wide association study of 5.4 million people identified 12,111 independent SNPs associated with height alone, each nudging it by a fraction of a centimeter. Rare variants contribute too \u2014 low-LD rare variants account for 31 percent of height variance. But they still act additively, each adding its tiny vote to the cumulative total.

Dominant alleles are fundamentally different. Consider the FGFR3 receptor \u2014 the protein structure that these words flow around on the right. A single G380R mutation makes this transmembrane receptor constitutively active. It sits in the cell membrane, constantly signaling growth plate chondrocytes to stop dividing \u2014 even when they should grow. One mutant copy drops adult male height from 175 to 131 cm. That is a 44-centimeter shift from a single nucleotide change.

Achondroplasia affects 1 in 15,000 births. Eighty percent of cases are de novo mutations \u2014 appearing in children of parents with normal stature. The mutation arises spontaneously, and from that single nucleotide change, the entire skeletal phenotype is altered.

Marfan syndrome mirrors this in the opposite direction. FBN1 mutations disrupt fibrillin-1 microfibrils, weakening connective tissue scaffolding. When fibrillin-1 is defective, TGF-beta escapes regulation and drives excessive bone elongation beyond 193 cm. Over 1,000 different FBN1 mutations cause Marfan syndrome, but each is individually dominant.

The UK Biobank study of 361,194 individuals across 1,060 traits confirmed: about 700 traits showed additive heritability, while only 183 loci had dominant effects \u2014 explaining 0.5 percent of additive variance. Scientists separate these effects using orthogonalized dominance encoding. Additive: 0, 1, 2 \u2014 counting allele dosage. Dominance: 0, 1, 0 \u2014 capturing the heterozygote deviation. These two signals are orthogonal: statistically independent, each capturing genuinely different genetic architecture.

The result is clear. Most human traits are polygenic \u2014 shaped by thousands of additive alleles. The bell curves of height, BMI, blood pressure, and disease risk are this architecture's signature. Not one or two master switches, but thousands of tiny dials turning at once.`;
var PULLQUOTES = [
  '"12,111 SNPs \u2014 each nudging height by a fraction of a centimeter \u2014 sum to the bell curve of human stature."',
  '"One nucleotide change. 44 centimeters lost. The dominant allele needs only a single flip."'
];
function carveSlots(base, blocked) {
  let slots = [base];
  for (const iv of blocked) {
    const next = [];
    for (const s of slots) {
      if (iv.right <= s.left || iv.left >= s.right) {
        next.push(s);
        continue;
      }
      if (iv.left > s.left) next.push({ left: s.left, right: iv.left });
      if (iv.right < s.right) next.push({ left: iv.right, right: s.right });
    }
    slots = next;
  }
  return slots.filter((s) => s.right - s.left >= MIN_SLOT_WIDTH);
}
function layoutColumnEx(prepared, startCursor, regionX, regionY, regionW, regionH, lineHeight, rectObstacles, shapeObstacles, singleSlotOnly) {
  let cursor = startCursor, lineTop = regionY;
  const lines = [];
  let done = false;
  while (lineTop + lineHeight <= regionY + regionH && !done) {
    const blocked = [];
    for (const r of rectObstacles) {
      if (lineTop + lineHeight <= r.y || lineTop >= r.y + r.h) continue;
      blocked.push({ left: r.x, right: r.x + r.w });
    }
    for (const s of shapeObstacles) {
      const iv = s.getInterval(lineTop, lineTop + lineHeight);
      if (iv) blocked.push(iv);
    }
    const slots = carveSlots({ left: regionX, right: regionX + regionW }, blocked);
    if (!slots.length) {
      lineTop += lineHeight;
      continue;
    }
    const ordered = singleSlotOnly ? [slots.reduce((a, b) => b.right - b.left > a.right - a.left ? b : a)] : [...slots].sort((a, b) => a.left - b.left);
    for (const slot of ordered) {
      const line = layoutNextLine(prepared, cursor, slot.right - slot.left);
      if (!line) {
        done = true;
        break;
      }
      lines.push({ x: Math.round(slot.left), y: Math.round(lineTop), text: line.text, width: line.width });
      cursor = line.end;
    }
    lineTop += lineHeight;
  }
  return { lines, cursor };
}
function syncPool(pool, count, cls, parent) {
  while (pool.length < count) {
    const el = document.createElement("div");
    el.className = cls;
    parent.appendChild(el);
    pool.push(el);
  }
  for (let i = 0; i < pool.length; i++) pool[i].style.display = i < count ? "" : "none";
}
function fitHeadline(text, maxW, maxH, maxSz = 82) {
  let lo = 20, hi = maxSz, best = lo, bestL = [];
  while (lo <= hi) {
    const sz = Math.floor((lo + hi) / 2), font = `700 ${sz}px ${HF}`, lh = Math.round(sz * 0.93);
    const p = prepareWithSegments(text, font);
    let brk = false, n = 0;
    walkLineRanges(p, maxW, (l) => {
      n++;
      if (l.end.graphemeIndex !== 0) brk = true;
    });
    if (!brk && n * lh <= maxH) {
      best = sz;
      const r = layoutWithLines(p, maxW, lh);
      bestL = r.lines.map((l, i) => ({ x: 0, y: i * lh, text: l.text, width: l.width }));
      lo = sz + 1;
    } else hi = sz - 1;
  }
  return { fontSize: best, lines: bestL };
}
var stage = document.getElementById("stage");
var shapeCanvas = document.createElement("canvas");
shapeCanvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;";
stage.appendChild(shapeCanvas);
var linePool = [];
var hlPool = [];
var pqLPool = [];
var pqBPool = [];
await document.fonts.ready;
var dcEl = document.createElement("div");
dcEl.className = "drop-cap";
stage.appendChild(dcEl);
function renderEditorial() {
  const pw = document.documentElement.clientWidth;
  const isN = pw < NARROW;
  const gut = isN ? 20 : GUTTER;
  const cGap = isN ? 20 : COL_GAP;
  const prepared = prepareWithSegments(BODY_TEXT, BODY_FONT);
  const pqFont = `italic 19px ${HF}`, pqLH = 27;
  const hlW = Math.min(pw - gut * 2, 1e3);
  const hl = fitHeadline(HEADLINE_TEXT, hlW, isN ? 120 : 180, isN ? 34 : 72);
  const hlLH = Math.round(hl.fontSize * 0.93);
  const hlFont = `700 ${hl.fontSize}px ${HF}`;
  const hlH = hl.lines.length * hlLH;
  const bodyTop = gut + hlH + (isN ? 12 : 20);
  const colCount = pw > 1e3 ? 3 : pw > 640 ? 2 : 1;
  const maxCW = Math.min(pw, 1400);
  const colW = Math.floor((maxCW - gut * 2 - cGap * (colCount - 1)) / colCount);
  const contentLeft = Math.round((pw - (colCount * colW + (colCount - 1) * cGap)) / 2);
  const estLines = Math.ceil(BODY_TEXT.length / (colW / 9.5));
  const bodyH = Math.max(700, Math.ceil(estLines / colCount) * BODY_LINE_HEIGHT + 120);
  const shapes = [];
  const dcT = BODY_TEXT[0];
  const dcSz = BODY_LINE_HEIGHT * DROP_CAP_LINES - 4;
  const dcFont = `700 ${dcSz}px ${HF}`;
  const dcP = prepareWithSegments(dcT, dcFont);
  let dcW = 0;
  walkLineRanges(dcP, 9999, (l) => {
    dcW = l.width;
  });
  const dcTW = Math.ceil(dcW) + 10;
  dcEl.textContent = dcT;
  dcEl.style.font = dcFont;
  dcEl.style.lineHeight = `${dcSz}px`;
  dcEl.style.left = `${contentLeft}px`;
  dcEl.style.top = `${bodyTop}px`;
  const dcRect = { x: contentLeft - 2, y: bodyTop - 2, w: dcTW, h: DROP_CAP_LINES * BODY_LINE_HEIGHT + 2 };
  const pqRects = [];
  if (!isN && colCount >= 2) {
    const specs = [
      { text: PULLQUOTES[0], colIdx: 0, yFrac: 0.55, wFrac: 0.5, side: "right" },
      { text: PULLQUOTES[1], colIdx: colCount > 2 ? 2 : 1, yFrac: 0.6, wFrac: 0.52, side: "left" }
    ];
    for (const sp of specs) {
      if (sp.colIdx >= colCount) continue;
      const pqP = prepareWithSegments(sp.text, pqFont);
      const pqW = Math.round(colW * sp.wFrac);
      const pqLines = layoutWithLines(pqP, pqW - 20, pqLH).lines;
      const pH = pqLines.length * pqLH + 16;
      const cX = contentLeft + sp.colIdx * (colW + cGap);
      const pX = sp.side === "right" ? cX + colW - pqW : cX;
      const pY = Math.round(bodyTop + bodyH * sp.yFrac);
      const posL = pqLines.map((l, i) => ({ x: pX + 20, y: pY + 8 + i * pqLH, text: l.text, width: l.width }));
      pqRects.push({ x: pX, y: pY, w: pqW, h: pH, lines: posL, colIdx: sp.colIdx });
    }
  }
  const allLines = [];
  let cursor = { segmentIndex: 0, graphemeIndex: 1 };
  for (let ci = 0; ci < colCount; ci++) {
    const cX = contentLeft + ci * (colW + cGap);
    const rects = [];
    if (ci === 0) rects.push(dcRect);
    for (const pq of pqRects) if (pq.colIdx === ci) rects.push({ x: pq.x, y: pq.y, w: pq.w, h: pq.h });
    const res = layoutColumnEx(prepared, cursor, cX, bodyTop, colW, bodyH, BODY_LINE_HEIGHT, rects, shapes, isN);
    allLines.push(...res.lines);
    cursor = res.cursor;
  }
  const maxY = allLines.reduce((m, l) => Math.max(m, l.y), bodyTop) + BODY_LINE_HEIGHT + BOTTOM_GAP;
  stage.style.height = `${maxY}px`;
  syncPool(hlPool, hl.lines.length, "headline-line", stage);
  for (let i = 0; i < hl.lines.length; i++) {
    const el = hlPool[i], l = hl.lines[i];
    el.textContent = l.text;
    el.style.left = `${gut}px`;
    el.style.top = `${gut + l.y}px`;
    el.style.font = hlFont;
    el.style.lineHeight = `${hlLH}px`;
  }
  syncPool(linePool, allLines.length, "line", stage);
  for (let i = 0; i < allLines.length; i++) {
    const el = linePool[i], l = allLines[i];
    el.textContent = l.text;
    el.style.left = `${l.x}px`;
    el.style.top = `${l.y}px`;
    el.style.font = BODY_FONT;
    el.style.lineHeight = `${BODY_LINE_HEIGHT}px`;
  }
  let pqLC = 0;
  for (const pq of pqRects) pqLC += pq.lines.length;
  syncPool(pqBPool, pqRects.length, "pullquote-box", stage);
  syncPool(pqLPool, pqLC, "pullquote-line", stage);
  let pi = 0;
  for (let i = 0; i < pqRects.length; i++) {
    const pq = pqRects[i];
    const bx = pqBPool[i];
    bx.style.left = `${pq.x}px`;
    bx.style.top = `${pq.y}px`;
    bx.style.width = `${pq.w}px`;
    bx.style.height = `${pq.h}px`;
    for (const l of pq.lines) {
      const el = pqLPool[pi];
      el.textContent = l.text;
      el.style.left = `${l.x}px`;
      el.style.top = `${l.y}px`;
      el.style.font = pqFont;
      el.style.lineHeight = `${pqLH}px`;
      pi++;
    }
  }
}
var LOCI_STEPS = [1, 2, 3, 5, 10, 50, 100, 1e3];
var currentLoci = 1;
function binomC(n, k) {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < Math.min(k, n - k); i++) r = r * (n - i) / (i + 1);
  return r;
}
function binomD(nl) {
  const n = nl * 2;
  if (n > 40) {
    const mean = n / 2, sd = Math.sqrt(n * 0.25);
    const pts = Math.min(n + 1, 200);
    const d2 = [];
    for (let i = 0; i < pts; i++) {
      const k = i / (pts - 1) * n;
      const z = (k - mean) / sd;
      d2.push(Math.exp(-0.5 * z * z));
    }
    const mx = Math.max(...d2);
    return d2.map((v) => v / mx);
  }
  const d = [];
  let t = 0;
  for (let k = 0; k <= n; k++) {
    const v = binomC(n, k);
    d.push(v);
    t += v;
  }
  return d.map((v) => v / t);
}
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  ;
  return a;
}
function dLabel(n) {
  if (n <= 3) {
    const d = binomD(n), t = 2 ** (n * 2);
    const c = d.map((v) => Math.round(v * t));
    let g = c[0];
    for (let i = 1; i < c.length; i++) g = gcd(g, c[i]);
    return c.map((v) => v / g).join(" : ");
  }
  ;
  return `${n * 2 + 1} classes \u2192 Normal`;
}
function drawLoci(cv, nl) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const dist = binomD(nl), n = dist.length, mx = Math.max(...dist);
  const p = { t: 30, b: 40, l: 24, r: 24 }, cW = w - p.l - p.r, cH = h - p.t - p.b;
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = '13px "Helvetica Neue",sans-serif';
  ctx.textAlign = "center";
  ctx.fillText(`${nl} ${nl === 1 ? "locus" : "loci"} \xB7 ${n} classes`, w / 2, 18);
  if (n <= 30) {
    const gap = Math.max(1, Math.min(6, cW / n * 0.12)), bW = Math.max(3, (cW - gap * (n - 1)) / n);
    for (let i = 0; i < n; i++) {
      const bH = dist[i] / mx * cH, x = p.l + i * (bW + gap), y = p.t + cH - bH;
      const g = ctx.createLinearGradient(x, y, x, p.t + cH);
      g.addColorStop(0, "rgba(196,163,90,0.85)");
      g.addColorStop(1, "rgba(196,163,90,0.2)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.roundRect(x, y, bW, bH, [3, 3, 0, 0]);
      ctx.fill();
    }
    if (n <= 15) {
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = '10px "Helvetica Neue",sans-serif';
      for (let i = 0; i < n; i++) ctx.fillText(`${i}`, p.l + i * (bW + gap) + bW / 2, h - p.b + 14);
    }
  } else {
    ctx.beginPath();
    ctx.moveTo(p.l, p.t + cH);
    for (let i = 0; i < n; i++) {
      const x = p.l + i / (n - 1) * cW;
      ctx.lineTo(x, p.t + cH - dist[i] / mx * cH);
    }
    ctx.lineTo(p.l + cW, p.t + cH);
    ctx.closePath();
    const g = ctx.createLinearGradient(0, p.t, 0, p.t + cH);
    g.addColorStop(0, "rgba(196,163,90,0.5)");
    g.addColorStop(1, "rgba(196,163,90,0.03)");
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = "rgba(196,163,90,0.8)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const x = p.l + i / (n - 1) * cW, y = p.t + cH - dist[i] / mx * cH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ;
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.font = 'italic 12px "Helvetica Neue",sans-serif';
    ctx.fillText("\u2192 Normal Distribution", w / 2, h - 8);
  }
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.font = '10px "Helvetica Neue",sans-serif';
  ctx.fillText("# increasing alleles", w / 2, h - p.b + 28);
  ctx.restore();
}
function updateLociExp() {
  const el = document.getElementById("loci-explain");
  if (currentLoci === 1) el.innerHTML = `With <strong>1 locus</strong>, 3 classes: AA, Aa, aa. Ratio <strong>1 : 2 : 1</strong>. Discrete, no overlap.`;
  else if (currentLoci === 2) el.innerHTML = `With <strong>2 loci</strong>, 5 classes. Ratio <strong>1 : 4 : 6 : 4 : 1</strong>. The bell curve outline emerges.`;
  else if (currentLoci <= 5) el.innerHTML = `<strong>${currentLoci} loci</strong>: ${currentLoci * 2 + 1} classes. The <em>Central Limit Theorem</em> converges toward normality.`;
  else if (currentLoci <= 50) el.innerHTML = `<strong>${currentLoci} loci</strong>: nearly indistinguishable from a bell curve. Add environment and it's continuous.`;
  else el.innerHTML = `<strong>${currentLoci >= 1e3 ? "1,000+" : currentLoci} loci</strong>: the polygenic model. 12,111 SNPs for height. Each \xB10.00001 cm.`;
}
var addCount = 0;
var domMut = "none";
function drawIndiv(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const p = { t: 40, b: 36, l: 60, r: 40 }, cW = w - p.l - p.r, cH = h - p.t - p.b;
  const mean = 175, sd = 7, minH = mean - 4 * sd, maxH = mean + 4 * sd;
  ctx.beginPath();
  ctx.moveTo(p.l, p.t + cH);
  for (let i = 0; i <= 200; i++) {
    const t = i / 200;
    const z = (minH + t * (maxH - minH) - mean) / sd;
    ctx.lineTo(p.l + t * cW, p.t + cH - Math.exp(-0.5 * z * z) * cH * 0.88);
  }
  ctx.lineTo(p.l + cW, p.t + cH);
  ctx.closePath();
  const g = ctx.createLinearGradient(0, p.t, 0, p.t + cH);
  g.addColorStop(0, "rgba(255,255,255,0.1)");
  g.addColorStop(1, "rgba(255,255,255,0.01)");
  ctx.fillStyle = g;
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let i = 0; i <= 200; i++) {
    const t = i / 200;
    const z = (minH + t * (maxH - minH) - mean) / sd;
    const x = p.l + t * cW, y = p.t + cH - Math.exp(-0.5 * z * z) * cH * 0.88;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ;
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.font = '10px "Helvetica Neue",sans-serif';
  ctx.textAlign = "center";
  for (let v = 140; v <= 210; v += 10) {
    if (v >= minH && v <= maxH) ctx.fillText(`${v}`, p.l + (v - minH) / (maxH - minH) * cW, h - 6);
  }
  const ae = addCount * 1e-5;
  let ih = mean + ae, ds = 0;
  if (domMut === "achondroplasia") {
    ds = -(mean - 131);
    ih = 131 + ae;
  } else if (domMut === "marfan") {
    ds = 193 - mean;
    ih = 193 + ae;
  }
  if (domMut !== "none") {
    const bx = p.l + (mean - minH) / (maxH - minH) * cW, tv = domMut === "achondroplasia" ? 131 : 193;
    const tx = p.l + Math.max(0, Math.min(1, (tv - minH) / (maxH - minH))) * cW;
    const col = domMut === "achondroplasia" ? "rgba(255,107,74,0.6)" : "rgba(74,158,255,0.6)";
    const ay = p.t + cH * 0.25;
    ctx.strokeStyle = col;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(bx, ay);
    ctx.lineTo(tx, ay);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = col;
    const d = tx > bx ? 1 : -1;
    ctx.beginPath();
    ctx.moveTo(tx, ay);
    ctx.lineTo(tx - d * 8, ay - 5);
    ctx.lineTo(tx - d * 8, ay + 5);
    ctx.closePath();
    ctx.fill();
    ctx.font = 'bold 12px "Helvetica Neue",sans-serif';
    ctx.textAlign = "center";
    ctx.fillText(`${ds > 0 ? "+" : ""}${ds} cm`, (bx + tx) / 2, ay - 10);
  }
  const mt = Math.max(0, Math.min(1, (ih - minH) / (maxH - minH))), mx = p.l + mt * cW;
  const mc = domMut === "achondroplasia" ? "#ff6b4a" : domMut === "marfan" ? "#4a9eff" : "#c4a35a";
  ctx.strokeStyle = mc;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(mx, p.t);
  ctx.lineTo(mx, p.t + cH);
  ctx.stroke();
  ctx.fillStyle = mc;
  ctx.beginPath();
  ctx.arc(mx, p.t + 8, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = 'bold 13px "Helvetica Neue",sans-serif';
  ctx.textAlign = "center";
  const hl = ih === Math.round(ih) ? `${ih} cm` : `${ih.toFixed(5)} cm`;
  ctx.fillText(hl, mx, p.t - 6);
  if (domMut === "none" && addCount !== 0) {
    ctx.fillStyle = "rgba(196,163,90,0.35)";
    ctx.font = 'italic 11px "Helvetica Neue",sans-serif';
    ctx.textAlign = "left";
    ctx.fillText(`shift: ${ae > 0 ? "+" : ""}${ae.toFixed(5)} cm (invisible)`, p.l + 4, p.t + cH - 6);
  }
  ctx.restore();
  document.getElementById("result-height").textContent = hl;
  document.getElementById("result-height").style.color = mc;
  document.getElementById("result-desc").textContent = domMut === "none" ? addCount === 0 ? "population mean" : `${Math.abs(addCount)} alleles \u2192 ${ae > 0 ? "+" : ""}${ae.toFixed(5)} cm` : `${domMut === "achondroplasia" ? "Achondroplasia (FGFR3)" : "Marfan (FBN1)"}: ${ds > 0 ? "+" : ""}${ds} cm`;
}
function updateIndivExp() {
  const el = document.getElementById("indiv-explain");
  if (domMut === "none") el.innerHTML = `Each additive allele: <strong>\xB1 0.00001 cm</strong>. 50 alleles = 0.0005 cm. <em>Invisible</em> individually; powerful only when thousands act together.`;
  else if (domMut === "achondroplasia") el.innerHTML = `<strong>FGFR3 G380R</strong>: <strong>\u221244 cm</strong>. Constitutive receptor activation suppresses growth. <em>One copy suffices.</em>`;
  else el.innerHTML = `<strong>FBN1</strong>: defective fibrillin-1 unleashes TGF-\u03B2 \u2192 bone elongation beyond <strong>193 cm</strong>.`;
}
var gtPat = "additive";
function drawGt(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const p = { t: 24, b: 36, l: 40, r: 40 }, cW = w - p.l - p.r, cH = h - p.t - p.b;
  const bW = Math.min(80, cW / 5), gap = (cW - bW * 3) / 2;
  const vals = { additive: [0, 1, 2], dominant: [0, 1, 1], overdominant: [0, 1.5, 1] };
  const v = vals[gtPat], mx = Math.max(...v, 0.01), colors = ["rgba(150,150,150,0.7)", "rgba(196,163,90,0.85)", "rgba(100,140,255,0.7)"], labels = ["AA", "AB", "BB"];
  for (let i = 0; i < 3; i++) {
    const bH = v[i] / mx * cH * 0.85, x = p.l + i * (bW + gap), y = p.t + cH - bH;
    const g = ctx.createLinearGradient(x, y, x, p.t + cH);
    g.addColorStop(0, colors[i]);
    g.addColorStop(1, colors[i].replace(/[\d.]+\)$/, "0.12)"));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.roundRect(x, y, bW, Math.max(bH, 3), [5, 5, 0, 0]);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = 'bold 20px "Helvetica Neue",sans-serif';
    ctx.textAlign = "center";
    ctx.fillText(`${v[i]}`, x + bW / 2, y - 10);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = '14px "Helvetica Neue",sans-serif';
    ctx.fillText(labels[i], x + bW / 2, h - 10);
  }
  if (gtPat !== "additive") {
    const exp = (v[0] + v[2]) / 2, ey = p.t + cH - exp / mx * cH * 0.85;
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(p.l, ey);
    ctx.lineTo(p.l + cW, ey);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.font = 'italic 11px "Helvetica Neue",sans-serif';
    ctx.textAlign = "right";
    ctx.fillText(`additive expectation: ${exp.toFixed(1)}`, p.l + cW, ey - 6);
  }
  ctx.restore();
}
function updateGtExp() {
  const el = document.getElementById("gt-explain");
  if (gtPat === "additive") el.innerHTML = `<strong>Additive: 0\u21921\u21922</strong>. Linear dosage. ~700 of 1,060 UK Biobank traits.`;
  else if (gtPat === "dominant") el.innerHTML = `<strong>Dominant: 0\u21921\u21921</strong>. One copy suffices. Like achondroplasia.`;
  else el.innerHTML = `<strong>Overdominant: 0\u21921.5\u21921</strong>. Heterozygote advantage \u2014 like sickle cell trait and malaria resistance.`;
}
var eqA = 50;
var eqD = 0;
function drawEq(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const p = { t: 28, b: 36, l: 40, r: 40 }, cW = w - p.l - p.r, cH = h - p.t - p.b, bW = Math.min(80, cW / 5), gap = (cW - bW * 3) / 2;
  const a = eqA / 100, d = eqD / 100, vals = [0, a + d, 2 * a], aVals = [0, a, 2 * a], mx = Math.max(...vals, 0.01), labels = ["AA", "AB", "BB"];
  ctx.font = '11px "Helvetica Neue",sans-serif';
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(100,140,255,0.7)";
  ctx.fillRect(p.l, 6, 10, 10);
  ctx.fillText("Additive", p.l + 14, 14);
  ctx.fillStyle = "rgba(255,107,74,0.7)";
  ctx.fillRect(p.l + 90, 6, 10, 10);
  ctx.fillText("Dominance", p.l + 104, 14);
  for (let i = 0; i < 3; i++) {
    const x = p.l + i * (bW + gap), aBH = aVals[i] / mx * cH * 0.85;
    const ag = ctx.createLinearGradient(x, p.t + cH - aBH, x, p.t + cH);
    ag.addColorStop(0, "rgba(100,140,255,0.7)");
    ag.addColorStop(1, "rgba(100,140,255,0.12)");
    ctx.fillStyle = ag;
    ctx.beginPath();
    ctx.roundRect(x, p.t + cH - aBH, bW, Math.max(aBH, 2), [4, 4, 0, 0]);
    ctx.fill();
    if (i === 1 && d > 0) {
      const dBH = d / mx * cH * 0.85;
      const dg = ctx.createLinearGradient(x, p.t + cH - aBH - dBH, x, p.t + cH - aBH);
      dg.addColorStop(0, "rgba(255,107,74,0.8)");
      dg.addColorStop(1, "rgba(255,107,74,0.15)");
      ctx.fillStyle = dg;
      ctx.beginPath();
      ctx.roundRect(x, p.t + cH - aBH - dBH, bW, dBH, [4, 4, 0, 0]);
      ctx.fill();
    }
    const tH = vals[i] / mx * cH * 0.85;
    ctx.fillStyle = "#fff";
    ctx.font = 'bold 16px "Helvetica Neue",sans-serif';
    ctx.textAlign = "center";
    ctx.fillText(vals[i].toFixed(2), x + bW / 2, p.t + cH - tH - 8);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = '14px "Helvetica Neue",sans-serif';
    ctx.fillText(labels[i], x + bW / 2, h - 10);
  }
  ctx.restore();
  document.getElementById("eq-encoding").innerHTML = `<strong>Additive:</strong> 0, ${a.toFixed(2)}, ${(2 * a).toFixed(2)} \xB7 <strong>Dominance:</strong> 0, ${d.toFixed(2)}, 0 \xB7 <strong>Combined:</strong> ${vals[0].toFixed(2)}, ${vals[1].toFixed(2)}, ${vals[2].toFixed(2)}`;
}
function updateEqExp() {
  const el = document.getElementById("eq-explain");
  const a = eqA / 100, d = eqD / 100;
  const traitAB = a + d, traitBB = 2 * a;
  if (eqD === 0 && eqA === 0) {
    el.innerHTML = `Try adjusting the sliders. <strong>Volume</strong> controls the additive effect \u2014 how much each additional allele contributes. <strong>Bass boost</strong> controls the dominance effect \u2014 the special bonus heterozygotes (AB) get that can't be explained by simply counting alleles.<br><br>The key insight: these two signals are <em>orthogonal</em> \u2014 mathematically independent. Additive encoding counts dosage: <strong>0, 1, 2</strong>. Dominance encoding captures the heterozygote deviation: <strong>0, 1, 0</strong>. By keeping them perpendicular, each measures a genuinely different aspect of genetic architecture.`;
  } else if (eqD === 0) {
    el.innerHTML = `<strong>Pure additive effect.</strong> Bass boost is at zero \u2014 no dominance component.<br><br>The trait increases linearly with allele count: AA = 0, AB = ${a.toFixed(2)}, BB = ${traitBB.toFixed(2)}. Each B allele adds exactly ${a.toFixed(2)}. The heterozygote (AB) sits precisely at the midpoint between the two homozygotes.<br><br>This is how <strong>most human traits</strong> work. The UK Biobank found ~700 of 1,060 traits follow this pattern. Height, BMI, blood pressure \u2014 all primarily additive.`;
  } else if (eqA === 0) {
    el.innerHTML = `<strong>Pure dominance effect.</strong> Volume is at zero \u2014 no additive component.<br><br>Only the heterozygote shows an effect: AA = 0, AB = ${d.toFixed(2)}, BB = 0. Both homozygotes are identical. Being AB gives you something <em>special</em> that neither AA nor BB has.<br><br>This is rare in nature. The UK Biobank found only <strong>183 loci</strong> with detectable dominance, explaining just 0.5% of additive variance. Dominance is the exception, not the rule.`;
  } else {
    const midpoint = (0 + traitBB) / 2;
    const deviation = traitAB - midpoint;
    el.innerHTML = `<strong>Both components active.</strong><br><br>The <strong style="color:rgba(100,140,255,0.8)">blue bars</strong> show the additive component: 0 \u2192 ${a.toFixed(2)} \u2192 ${traitBB.toFixed(2)} (linear).<br>The <strong style="color:rgba(255,107,74,0.8)">red bar</strong> on AB shows the dominance boost: +${d.toFixed(2)}.<br><br>Combined trait: AA = 0, AB = ${traitAB.toFixed(2)}, BB = ${traitBB.toFixed(2)}.<br><br>Without orthogonalization, the AB value of ${traitAB.toFixed(2)} could look like "just a lot of additive effect." But by separating the signals, we see that AB <em>deviates</em> from the additive expectation (${midpoint.toFixed(2)}) by <strong>${deviation > 0 ? "+" : ""}${deviation.toFixed(2)}</strong>. That deviation is pure dominance.`;
  }
}
document.getElementById("loci-slider").addEventListener("input", function() {
  currentLoci = LOCI_STEPS[parseInt(this.value)];
  document.getElementById("loci-value").textContent = currentLoci >= 1e3 ? `${currentLoci / 1e3}k` : `${currentLoci}`;
  document.getElementById("dist-label").textContent = dLabel(currentLoci);
  drawLoci(document.getElementById("loci-canvas"), currentLoci);
  updateLociExp();
});
document.getElementById("additive-slider").addEventListener("input", function() {
  addCount = parseInt(this.value);
  document.getElementById("additive-value").textContent = `${addCount > 0 ? "+" : ""}${addCount}`;
  drawIndiv(document.getElementById("indiv-canvas"));
  updateIndivExp();
});
document.querySelectorAll("#dom-toggles .sim-btn").forEach((b) => b.addEventListener("click", () => {
  domMut = b.dataset.dom;
  document.querySelectorAll("#dom-toggles .sim-btn").forEach((x) => x.classList.toggle("active", x === b));
  drawIndiv(document.getElementById("indiv-canvas"));
  updateIndivExp();
}));
document.querySelectorAll("#gt-tabs .sim-btn").forEach((b) => b.addEventListener("click", () => {
  gtPat = b.dataset.pattern;
  document.querySelectorAll("#gt-tabs .sim-btn").forEach((x) => x.classList.toggle("active", x === b));
  drawGt(document.getElementById("genotype-canvas"));
  updateGtExp();
}));
document.getElementById("eq-additive").addEventListener("input", function() {
  eqA = parseInt(this.value);
  document.getElementById("eq-add-val").textContent = `${eqA}`;
  drawEq(document.getElementById("equalizer-canvas"));
  updateEqExp();
});
document.getElementById("eq-dominance").addEventListener("input", function() {
  eqD = parseInt(this.value);
  document.getElementById("eq-dom-val").textContent = `${eqD}`;
  drawEq(document.getElementById("equalizer-canvas"));
  updateEqExp();
});
window.addEventListener("resize", () => {
  renderEditorial();
  drawLoci(document.getElementById("loci-canvas"), currentLoci);
  drawIndiv(document.getElementById("indiv-canvas"));
  drawGt(document.getElementById("genotype-canvas"));
  drawEq(document.getElementById("equalizer-canvas"));
});
renderEditorial();
drawLoci(document.getElementById("loci-canvas"), currentLoci);
updateLociExp();
drawIndiv(document.getElementById("indiv-canvas"));
updateIndivExp();
drawGt(document.getElementById("genotype-canvas"));
updateGtExp();
drawEq(document.getElementById("equalizer-canvas"));
updateEqExp();
