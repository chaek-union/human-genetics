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

// interactive/ch16.ts
var BODY_FONT = '18px "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif';
var BODY_LH = 30;
var HF = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif';
var GUTTER = 48;
var COL_GAP = 40;
var BOTTOM_GAP = 60;
var DROP_CAP_LINES = 3;
var MIN_SLOT = 50;
var NARROW = 760;
var HEADLINE = "HERITABILITY";
var BODY = `If we add up all the genetic effects we've been studying, how much of the variation between people is actually due to genetics versus environment? This question leads to one of the most important \u2014 and most misunderstood \u2014 concepts in genetics: heritability.

In the early 1900s, Mendelians studied discrete traits following simple rules. Biometricians measured continuous traits like height and argued Mendelian laws couldn't explain them. In 1918, R.A. Fisher unified both camps. His insight: continuous variation arises from the combined small effects of many Mendelian genes. Each ingredient in a cake contributes a little to the final taste. No single gene determines a trait, but together they create something complex.

Fisher decomposed total phenotypic variance into components: VP equals the sum of VA, VD, VI, and VEnvironment. Additive variance VA captures the linear allele effects \u2014 each copy adds a fixed increment. Dominance variance VD captures heterozygote deviations. Epistatic variance VI captures gene-gene interactions. And environmental variance captures everything non-genetic: nutrition, lifestyle, chance.

Heritability \u2014 h-squared \u2014 is the proportion of phenotypic variance due to additive genetic differences. If height has h-squared of 0.68, that means 68 percent of the variation among people is explained by genetic differences. But this does not mean your height is 68 percent genetic. Heritability describes variation within a population, not how predetermined any individual's trait is.

Consider two fields planted with identical seed varieties. Field A has rich soil; Field B has poor soil. Within each field, heritability is high \u2014 the plants vary mostly due to genetic differences because they share the same environment. But the difference between the two fields is entirely environmental. Heritability tells you nothing about why Field A plants are taller on average.

We estimate heritability through covariance between relatives. Identical twins share 100 percent of DNA; fraternal twins share 50 percent. If identical twins are more similar in height than fraternal twins, that extra similarity reflects genetic influence. Twin studies estimate height heritability at about 0.80. SNP-based methods using LDSC give about 0.68 \u2014 lower because they miss rare variants and structural variation.

Heritability is not fixed. Height has h-squared of 0.68 in well-nourished populations. BMI has 0.30 \u2014 diet and exercise dominate. Blood pressure has 0.25 \u2014 stress, medication, and lifestyle play large roles. Change the environment and heritability changes too, even though genes haven't changed at all. Fisher's model, now over a century old, still underlies everything from twin studies to GWAS to polygenic risk scores.`;
var PULLQUOTES = [
  `"Heritability describes variation within a population \u2014 not how predetermined any individual's trait is."`,
  '"Same seeds, different soil. Heritability is high in both fields, but the difference between them is entirely environmental."'
];
function carve(base, blocked) {
  let s = [base];
  for (const iv of blocked) {
    const n = [];
    for (const sl of s) {
      if (iv.right <= sl.left || iv.left >= sl.right) {
        n.push(sl);
        continue;
      }
      ;
      if (iv.left > sl.left) n.push({ left: sl.left, right: iv.left });
      if (iv.right < sl.right) n.push({ left: iv.right, right: sl.right });
    }
    ;
    s = n;
  }
  return s.filter((sl) => sl.right - sl.left >= MIN_SLOT);
}
function layCol(p, cur, rx, ry, rw, rh, lh, rects, single) {
  let c = cur, lt = ry;
  const lines = [];
  let done = false;
  while (lt + lh <= ry + rh && !done) {
    const bl = [];
    for (const r of rects) {
      if (lt + lh <= r.y || lt >= r.y + r.h) continue;
      bl.push({ left: r.x, right: r.x + r.w });
    }
    const slots = carve({ left: rx, right: rx + rw }, bl);
    if (!slots.length) {
      lt += lh;
      continue;
    }
    const ord = single ? [slots.reduce((a, b) => b.right - b.left > a.right - a.left ? b : a)] : [...slots].sort((a, b) => a.left - b.left);
    for (const sl of ord) {
      const ln = layoutNextLine(p, c, sl.right - sl.left);
      if (!ln) {
        done = true;
        break;
      }
      ;
      lines.push({ x: Math.round(sl.left), y: Math.round(lt), text: ln.text, width: ln.width });
      c = ln.end;
    }
    lt += lh;
  }
  return { lines, cursor: c };
}
function sync(pool, n, cls, par) {
  while (pool.length < n) {
    const e = document.createElement("div");
    e.className = cls;
    par.appendChild(e);
    pool.push(e);
  }
  for (let i = 0; i < pool.length; i++) pool[i].style.display = i < n ? "" : "none";
}
function fitHL(text, mw, mh, ms = 82) {
  let lo = 20, hi = ms, best = lo, bl = [];
  while (lo <= hi) {
    const sz = Math.floor((lo + hi) / 2), f = `700 ${sz}px ${HF}`, lh = Math.round(sz * 0.93), p = prepareWithSegments(text, f);
    let brk = false, n = 0;
    walkLineRanges(p, mw, (l) => {
      n++;
      if (l.end.graphemeIndex !== 0) brk = true;
    });
    if (!brk && n * lh <= mh) {
      best = sz;
      const r = layoutWithLines(p, mw, lh);
      bl = r.lines.map((l, i) => ({ x: 0, y: i * lh, text: l.text, width: l.width }));
      lo = sz + 1;
    } else hi = sz - 1;
  }
  return { fontSize: best, lines: bl };
}
var stage = document.getElementById("stage");
var lPool = [];
var hlPool = [];
var pqLP = [];
var pqBP = [];
await document.fonts.ready;
var dcEl = document.createElement("div");
dcEl.className = "drop-cap";
stage.appendChild(dcEl);
function renderEditorial() {
  const pw = document.documentElement.clientWidth, isN = pw < NARROW;
  const gut = isN ? 20 : GUTTER, cGap = isN ? 20 : COL_GAP;
  const prep = prepareWithSegments(BODY, BODY_FONT);
  const pqF = `italic 19px ${HF}`, pqLH = 27;
  const hl = fitHL(HEADLINE, Math.min(pw - gut * 2, 1e3), isN ? 100 : 160, isN ? 40 : 92);
  const hlLH = Math.round(hl.fontSize * 0.93), hlFont = `700 ${hl.fontSize}px ${HF}`, hlH = hl.lines.length * hlLH;
  const bTop = gut + hlH + (isN ? 12 : 20);
  const cc = pw > 1e3 ? 3 : pw > 640 ? 2 : 1;
  const cw = Math.floor((Math.min(pw, 1400) - gut * 2 - cGap * (cc - 1)) / cc);
  const cL = Math.round((pw - (cc * cw + (cc - 1) * cGap)) / 2);
  const bH = Math.max(700, Math.ceil(BODY.length / (cw / 9.5) / cc) * BODY_LH + 120);
  const dcT = BODY[0], dcSz = BODY_LH * DROP_CAP_LINES - 4, dcFont = `700 ${dcSz}px ${HF}`;
  const dcP = prepareWithSegments(dcT, dcFont);
  let dcW = 0;
  walkLineRanges(dcP, 9999, (l) => {
    dcW = l.width;
  });
  dcEl.textContent = dcT;
  dcEl.style.font = dcFont;
  dcEl.style.lineHeight = `${dcSz}px`;
  dcEl.style.left = `${cL}px`;
  dcEl.style.top = `${bTop}px`;
  const dcR = { x: cL - 2, y: bTop - 2, w: Math.ceil(dcW) + 10, h: DROP_CAP_LINES * BODY_LH + 2 };
  const pqRects = [];
  if (!isN && cc >= 2) {
    const specs = [
      { text: PULLQUOTES[0], ci: 0, yF: 0.4, wF: 0.52, side: "right" },
      { text: PULLQUOTES[1], ci: cc > 2 ? 2 : 1, yF: 0.55, wF: 0.5, side: "left" }
    ];
    for (const sp of specs) {
      if (sp.ci >= cc) continue;
      const pp = prepareWithSegments(sp.text, pqF), pW = Math.round(cw * sp.wF);
      const pqL = layoutWithLines(pp, pW - 20, pqLH).lines, pH = pqL.length * pqLH + 16;
      const cx = cL + sp.ci * (cw + cGap), pX = sp.side === "right" ? cx + cw - pW : cx, pY = Math.round(bTop + bH * sp.yF);
      pqRects.push({ x: pX, y: pY, w: pW, h: pH, lines: pqL.map((l, i) => ({ x: pX + 20, y: pY + 8 + i * pqLH, text: l.text, width: l.width })), colIdx: sp.ci });
    }
  }
  const all = [];
  let cur = { segmentIndex: 0, graphemeIndex: 1 };
  for (let ci = 0; ci < cc; ci++) {
    const cx = cL + ci * (cw + cGap), rects = [];
    if (ci === 0) rects.push(dcR);
    for (const pq of pqRects) if (pq.colIdx === ci) rects.push({ x: pq.x, y: pq.y, w: pq.w, h: pq.h });
    const r = layCol(prep, cur, cx, bTop, cw, bH, BODY_LH, rects, isN);
    all.push(...r.lines);
    cur = r.cursor;
  }
  const maxY = all.reduce((m, l) => Math.max(m, l.y), bTop) + BODY_LH + BOTTOM_GAP;
  stage.style.height = `${maxY}px`;
  sync(hlPool, hl.lines.length, "headline-line", stage);
  for (let i = 0; i < hl.lines.length; i++) {
    const e = hlPool[i], l = hl.lines[i];
    e.textContent = l.text;
    e.style.left = `${gut}px`;
    e.style.top = `${gut + l.y}px`;
    e.style.font = hlFont;
    e.style.lineHeight = `${hlLH}px`;
  }
  sync(lPool, all.length, "line", stage);
  for (let i = 0; i < all.length; i++) {
    const e = lPool[i], l = all[i];
    e.textContent = l.text;
    e.style.left = `${l.x}px`;
    e.style.top = `${l.y}px`;
    e.style.font = BODY_FONT;
    e.style.lineHeight = `${BODY_LH}px`;
  }
  let pqC = 0;
  for (const pq of pqRects) pqC += pq.lines.length;
  sync(pqBP, pqRects.length, "pullquote-box", stage);
  sync(pqLP, pqC, "pullquote-line", stage);
  let pi = 0;
  for (let i = 0; i < pqRects.length; i++) {
    const pq = pqRects[i], b = pqBP[i];
    b.style.left = `${pq.x}px`;
    b.style.top = `${pq.y}px`;
    b.style.width = `${pq.w}px`;
    b.style.height = `${pq.h}px`;
    for (const l of pq.lines) {
      const e = pqLP[pi];
      e.textContent = l.text;
      e.style.left = `${l.x}px`;
      e.style.top = `${l.y}px`;
      e.style.font = pqF;
      e.style.lineHeight = `${pqLH}px`;
      pi++;
    }
  }
}
var va = 55;
var vd = 5;
var vi = 2;
var ve = 38;
function drawVariance(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const total = va + vd + vi + ve || 1;
  const fracs = [va / total, vd / total, vi / total, ve / total];
  const labels = ["VA (Additive)", "VD (Dominance)", "VI (Epistasis)", "VEnv (Environment)"];
  const colors = ["#c4a35a", "#6488ff", "#a070d0", "#5a9a6a"];
  const faintColors = ["rgba(196,163,90,0.15)", "rgba(100,136,255,0.15)", "rgba(160,112,208,0.15)", "rgba(90,154,106,0.15)"];
  const cx = Math.min(w * 0.28, 180), cy = h * 0.45, r = Math.min(cx - 20, h * 0.35);
  let startAngle = -Math.PI / 2;
  for (let i = 0; i < 4; i++) {
    if (fracs[i] < 1e-3) continue;
    const sweep = fracs[i] * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sweep);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.globalAlpha = 0.7;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "rgba(0,0,0,0.3)";
    ctx.lineWidth = 2;
    ctx.stroke();
    const midAngle = startAngle + sweep / 2;
    const lx = cx + (r + 24) * Math.cos(midAngle), ly = cy + (r + 24) * Math.sin(midAngle);
    ctx.fillStyle = colors[i];
    ctx.font = 'bold 13px "Helvetica Neue", sans-serif';
    ctx.textAlign = Math.cos(midAngle) > 0 ? "left" : "right";
    ctx.textBaseline = "middle";
    if (fracs[i] > 0.05) ctx.fillText(`${(fracs[i] * 100).toFixed(0)}%`, lx, ly);
    startAngle += sweep;
  }
  const h2 = va / total;
  ctx.fillStyle = "#c4a35a";
  ctx.font = `bold 28px ${HF}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`h\xB2 = ${h2.toFixed(2)}`, cx, cy - 8);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.fillText("narrow-sense", cx, cy + 16);
  const barX = w * 0.55, barW = Math.min(w * 0.38, 300), barH = h * 0.65, barTop = h * 0.15;
  let cumY = barTop;
  for (let i = 0; i < 4; i++) {
    const segH = fracs[i] * barH;
    if (segH < 1) continue;
    ctx.fillStyle = faintColors[i];
    ctx.fillRect(barX, cumY, barW, segH);
    ctx.fillStyle = colors[i];
    ctx.globalAlpha = 0.8;
    ctx.fillRect(barX, cumY, 6, segH);
    ctx.globalAlpha = 1;
    if (segH > 18) {
      ctx.fillStyle = colors[i];
      ctx.font = '13px "Helvetica Neue", sans-serif';
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(`${labels[i]} = ${(fracs[i] * 100).toFixed(1)}%`, barX + 16, cumY + segH / 2);
    }
    cumY += segH;
  }
  const h2H = fracs[0] * barH;
  if (h2H > 30) {
    ctx.strokeStyle = "rgba(196,163,90,0.4)";
    ctx.lineWidth = 1.5;
    const bx = barX + barW + 12;
    ctx.beginPath();
    ctx.moveTo(bx, barTop);
    ctx.lineTo(bx + 8, barTop);
    ctx.moveTo(bx + 8, barTop);
    ctx.lineTo(bx + 8, barTop + h2H);
    ctx.moveTo(bx, barTop + h2H);
    ctx.lineTo(bx + 8, barTop + h2H);
    ctx.stroke();
    ctx.fillStyle = "#c4a35a";
    ctx.font = 'bold 12px "Helvetica Neue", sans-serif';
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(`h\xB2 = VA/VP`, bx + 14, barTop + h2H / 2);
  }
  const broadH = (fracs[0] + fracs[1] + fracs[2]) * barH;
  if (broadH > h2H + 20) {
    ctx.strokeStyle = "rgba(100,136,255,0.3)";
    ctx.lineWidth = 1;
    const bx = barX + barW + 60;
    ctx.beginPath();
    ctx.moveTo(bx, barTop);
    ctx.lineTo(bx + 6, barTop);
    ctx.moveTo(bx + 6, barTop);
    ctx.lineTo(bx + 6, barTop + broadH);
    ctx.moveTo(bx, barTop + broadH);
    ctx.lineTo(bx + 6, barTop + broadH);
    ctx.stroke();
    ctx.fillStyle = "rgba(100,136,255,0.6)";
    ctx.font = '11px "Helvetica Neue", sans-serif';
    ctx.fillText(`H\xB2 = ${((va + vd + vi) / total).toFixed(2)}`, bx + 12, barTop + broadH / 2);
  }
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = '12px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("VP (total)", barX + barW / 2, barTop + barH + 20);
  ctx.restore();
}
function updateVarianceExp() {
  const el = document.getElementById("variance-explain");
  const total = va + vd + vi + ve || 1;
  const h2 = va / total, H2 = (va + vd + vi) / total;
  document.getElementById("h2-result").textContent = `h\xB2 = ${h2.toFixed(2)}`;
  document.getElementById("h2-sub").textContent = `Narrow-sense: ${(h2 * 100).toFixed(1)}% | Broad-sense H\xB2 = ${H2.toFixed(2)}`;
  if (ve / total > 0.6) {
    el.innerHTML = `Environment dominates \u2014 <strong>${(ve / total * 100).toFixed(0)}%</strong> of variance is non-genetic. Like BMI or blood pressure, where diet, exercise, and lifestyle create most of the individual differences. Heritability is low even though genetics still matters.`;
  } else if (va / total > 0.6) {
    el.innerHTML = `Additive variance dominates \u2014 <strong>h\xB2 = ${h2.toFixed(2)}</strong>. This looks like height in well-nourished populations. Genetic differences explain most of the variation. Fisher's additive model captures nearly everything.`;
  } else if (vd / total > 0.15) {
    el.innerHTML = `Unusually high dominance contribution (<strong>${(vd / total * 100).toFixed(0)}%</strong>). In reality, the UK Biobank found dominance explains only ~0.5% of additive variance for most traits. Dominance variance this large would be exceptional.`;
  } else {
    el.innerHTML = `A mixed picture: <strong>VA = ${(va / total * 100).toFixed(0)}%</strong>, <strong>VEnv = ${(ve / total * 100).toFixed(0)}%</strong>. Most real traits fall somewhere here. The narrow-sense h\xB2 of ${h2.toFixed(2)} means ${(h2 * 100).toFixed(0)}% of variation between individuals comes from additive genetic differences.`;
  }
}
var fieldA = 90;
var fieldB = 30;
function drawFields(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const padT = 50, padB = 60, padS = 40, gap = 60;
  const fW = (w - padS * 2 - gap) / 2, fH = h - padT - padB;
  const nPlants = 30;
  const geneticSD = 12;
  const seed = 42;
  function seededRand(s) {
    return function() {
      s = (s * 16807 + 0) % 2147483647;
      return s / 2147483647;
    };
  }
  const rng = seededRand(seed);
  function normalRand() {
    const u1 = rng(), u2 = rng();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  }
  const geneticEffects = [];
  for (let i = 0; i < nPlants; i++) geneticEffects.push(normalRand() * geneticSD);
  const envSD = 5;
  function drawField(fx, label, nutrition, color) {
    const baseMean = 80 + nutrition * 1;
    const plants = [];
    for (let i = 0; i < nPlants; i++) {
      plants.push(baseMean + geneticEffects[i] + normalRand() * envSD);
    }
    plants.sort((a, b) => a - b);
    const maxH = 200, minH = 50;
    const fieldMean = plants.reduce((a, b) => a + b, 0) / nPlants;
    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(fx, padT + fH);
    ctx.lineTo(fx + fW, padT + fH);
    ctx.stroke();
    const plantGap = fW / (nPlants + 1);
    for (let i = 0; i < nPlants; i++) {
      const x = fx + plantGap * (i + 1);
      const plantH = Math.max(10, (plants[i] - minH) / (maxH - minH) * fH * 0.85);
      const y = padT + fH - plantH;
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, padT + fH);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    const meanScreenH = (fieldMean - minH) / (maxH - minH) * fH * 0.85;
    const meanY = padT + fH - meanScreenH;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(fx, meanY);
    ctx.lineTo(fx + fW, meanY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    ctx.font = 'bold 13px "Helvetica Neue", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText(`\u03BC = ${fieldMean.toFixed(0)} cm`, fx + fW / 2, meanY - 10);
    ctx.fillStyle = "#fff";
    ctx.font = 'bold 16px "Helvetica Neue", sans-serif';
    ctx.fillText(label, fx + fW / 2, padT - 20);
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = '12px "Helvetica Neue", sans-serif';
    ctx.fillText(`Nutrition: ${nutrition}%`, fx + fW / 2, padT - 4);
    const genVar = geneticEffects.reduce((s, g) => s + g * g, 0) / nPlants;
    const envVar = envSD * envSD;
    const h2 = genVar / (genVar + envVar);
    ctx.fillStyle = "#c4a35a";
    ctx.font = 'bold 14px "Helvetica Neue", sans-serif';
    ctx.fillText(`h\xB2 \u2248 ${h2.toFixed(2)}`, fx + fW / 2, h - 16);
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = '11px "Helvetica Neue", sans-serif';
    ctx.fillText("(within this field)", fx + fW / 2, h - 2);
  }
  drawField(padS, "Field A", fieldA, "rgba(80,200,140,0.9)");
  drawField(padS + fW + gap, "Field B", fieldB, "rgba(200,140,80,0.9)");
  const arrowY = h - 42;
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(padS + fW + 8, arrowY);
  ctx.lineTo(padS + fW + gap - 8, arrowY);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = 'italic 11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("\u0394 = environment", padS + fW + gap / 2, arrowY - 8);
  ctx.restore();
}
function updateFieldsExp() {
  const el = document.getElementById("fields-explain");
  const diff = Math.abs(fieldA - fieldB);
  if (diff < 10) {
    el.innerHTML = `Both fields have similar nutrition. The plants look similar overall \u2014 and heritability is high in both. When environments are uniform, <strong>genetic differences dominate</strong> the variation within each field.`;
  } else if (diff > 50) {
    el.innerHTML = `Dramatic environmental contrast. Field A plants are much taller on average, but <strong>heritability is similarly high in both fields</strong>. The between-field difference is <em>entirely environmental</em>. This is why h\xB2 cannot explain group differences \u2014 it only describes variation <em>within</em> a group.`;
  } else {
    el.innerHTML = `Moderate nutritional difference. Notice: heritability is high in both fields individually, yet the <strong>mean difference</strong> between fields comes from environment alone. The same seeds in the same soil would grow the same.`;
  }
}
var twinH2 = 68;
function drawTwins(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const pad = { t: 50, b: 50, l: 70, r: 40 };
  const cW = (w - pad.l - pad.r - 80) / 2, cH = h - pad.t - pad.b;
  const h2 = twinH2 / 100;
  const rMZ = Math.min(0.98, h2 * 0.95 + 0.03);
  const rDZ = Math.min(0.95, h2 * 0.5 + 0.02);
  function seededRand(s) {
    return function() {
      s = (s * 16807 + 0) % 2147483647;
      return s / 2147483647;
    };
  }
  function drawScatter(ox, label, corr, color) {
    const rng = seededRand(label === "MZ" ? 123 : 456);
    function nrand() {
      const u1 = rng(), u2 = rng();
      return Math.sqrt(-2 * Math.log(Math.max(u1, 1e-3))) * Math.cos(2 * Math.PI * u2);
    }
    const n = 60;
    const mean = 170, sd = 8;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const g = nrand() * sd;
      const x = mean + g + nrand() * sd * Math.sqrt(1 - corr);
      const y = mean + g * corr + nrand() * sd * Math.sqrt(1 - corr * corr);
      pts.push([x, y]);
    }
    const axMin = 145, axMax = 200;
    const toX = (v) => ox + (v - axMin) / (axMax - axMin) * cW;
    const toY = (v) => pad.t + (1 - (v - axMin) / (axMax - axMin)) * cH;
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(ox, pad.t);
    ctx.lineTo(ox, pad.t + cH);
    ctx.lineTo(ox + cW, pad.t + cH);
    ctx.stroke();
    for (let v = 150; v <= 195; v += 10) {
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.font = '10px "Helvetica Neue", sans-serif';
      ctx.textAlign = "right";
      ctx.fillText(`${v}`, ox - 6, toY(v) + 3);
      ctx.textAlign = "center";
      ctx.fillText(`${v}`, toX(v), pad.t + cH + 16);
    }
    for (const [px, py] of pts) {
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(toX(px), toY(py), 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.strokeStyle = color;
    ctx.globalAlpha = 0.6;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(toX(axMin), toY(mean + (axMin - mean) * corr));
    ctx.lineTo(toX(axMax), toY(mean + (axMax - mean) * corr));
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#fff";
    ctx.font = 'bold 15px "Helvetica Neue", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText(`${label} Twins`, ox + cW / 2, pad.t - 24);
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.font = '12px "Helvetica Neue", sans-serif';
    ctx.fillText(`DNA shared: ${label === "MZ" ? "100" : "50"}%`, ox + cW / 2, pad.t - 8);
    ctx.fillStyle = color;
    ctx.font = `bold 16px "Helvetica Neue", sans-serif`;
    ctx.fillText(`r = ${corr.toFixed(2)}`, ox + cW / 2, pad.t + cH + 38);
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = '10px "Helvetica Neue", sans-serif';
    ctx.fillText("Twin 1 height (cm)", ox + cW / 2, h - 4);
    ctx.save();
    ctx.translate(ox - 44, pad.t + cH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Twin 2 height (cm)", 0, 0);
    ctx.restore();
  }
  drawScatter(pad.l, "MZ", rMZ, "rgba(196,163,90,0.8)");
  drawScatter(pad.l + cW + 80, "DZ", rDZ, "rgba(100,140,255,0.8)");
  ctx.restore();
}
function updateTwinsExp() {
  const el = document.getElementById("twins-explain");
  const h2 = twinH2 / 100;
  const rMZ = Math.min(0.98, h2 * 0.95 + 0.03), rDZ = Math.min(0.95, h2 * 0.5 + 0.02);
  document.getElementById("twin-h2-val").textContent = h2.toFixed(2);
  if (h2 > 0.7) {
    el.innerHTML = `High heritability (<strong>h\xB2 = ${h2.toFixed(2)}</strong>). MZ twins (r = ${rMZ.toFixed(2)}) are much more similar than DZ twins (r = ${rDZ.toFixed(2)}). The tighter MZ scatter shows that shared genetics creates strong trait resemblance. This is what we see for <strong>height</strong> (h\xB2 \u2248 0.80 from twin studies).`;
  } else if (h2 > 0.35) {
    el.innerHTML = `Moderate heritability (<strong>h\xB2 = ${h2.toFixed(2)}</strong>). MZ twins (r = ${rMZ.toFixed(2)}) are somewhat more similar than DZ twins (r = ${rDZ.toFixed(2)}), but there's considerable scatter in both. Environment contributes substantially \u2014 like <strong>BMI</strong> (h\xB2 \u2248 0.30), where diet and lifestyle matter.`;
  } else {
    el.innerHTML = `Low heritability (<strong>h\xB2 = ${h2.toFixed(2)}</strong>). Both scatter plots look similar \u2014 MZ twins (r = ${rMZ.toFixed(2)}) are barely more similar than DZ twins (r = ${rDZ.toFixed(2)}). Environmental factors dominate, like <strong>blood pressure</strong> (h\xB2 \u2248 0.25).`;
  }
}
var TRAITS = [
  { name: "Height", h2: 0.68, snpH2: 0.68, twinH2: 0.8, envNote: "Nutrition, childhood illness", color: "#c4a35a" },
  { name: "BMI", h2: 0.3, snpH2: 0.25, twinH2: 0.4, envNote: "Diet, exercise, lifestyle", color: "#6488ff" },
  { name: "Blood Pressure", h2: 0.25, snpH2: 0.2, twinH2: 0.3, envNote: "Stress, diet, medication", color: "#a070d0" },
  { name: "Education years", h2: 0.2, snpH2: 0.13, twinH2: 0.4, envNote: "Socioeconomic, access, culture", color: "#5ab89a" },
  { name: "Type 2 Diabetes", h2: 0.45, snpH2: 0.18, twinH2: 0.6, envNote: "Diet, obesity, age", color: "#d07050" }
];
function drawTraits(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const pad = { t: 40, b: 50, l: 140, r: 40 };
  const cW = w - pad.l - pad.r, cH = h - pad.t - pad.b;
  const barH = Math.min(40, (cH - 20 * (TRAITS.length - 1)) / TRAITS.length);
  const gap = (cH - barH * TRAITS.length) / (TRAITS.length - 1);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("0%", pad.l, pad.t - 8);
  ctx.fillText("50%", pad.l + cW * 0.5, pad.t - 8);
  ctx.fillText("100%", pad.l + cW, pad.t - 8);
  for (let p = 0; p <= 1; p += 0.25) {
    const x = pad.l + p * cW;
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, pad.t);
    ctx.lineTo(x, pad.t + cH);
    ctx.stroke();
  }
  for (let i = 0; i < TRAITS.length; i++) {
    const t = TRAITS[i];
    const y = pad.t + i * (barH + gap);
    ctx.fillStyle = t.color;
    ctx.font = 'bold 14px "Helvetica Neue", sans-serif';
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(t.name, pad.l - 14, y + barH / 2);
    ctx.fillStyle = "rgba(255,255,255,0.03)";
    ctx.beginPath();
    ctx.roundRect(pad.l, y, cW, barH, 4);
    ctx.fill();
    const genW = t.h2 * cW;
    const gr = ctx.createLinearGradient(pad.l, y, pad.l + genW, y);
    gr.addColorStop(0, t.color);
    gr.addColorStop(1, t.color.replace(")", ",0.4)").replace("rgb", "rgba"));
    ctx.fillStyle = gr;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.roundRect(pad.l, y, genW, barH, [4, 0, 0, 4]);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#fff";
    ctx.font = 'bold 13px "Helvetica Neue", sans-serif';
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    const labelX = genW > 50 ? pad.l + genW / 2 : pad.l + genW + 8;
    ctx.textAlign = genW > 50 ? "center" : "left";
    ctx.fillText(`h\xB2 = ${t.h2.toFixed(2)}`, labelX, y + barH / 2);
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.font = '11px "Helvetica Neue", sans-serif';
    ctx.textAlign = "left";
    ctx.fillText(t.envNote, pad.l + genW + (genW > cW * 0.5 ? -genW + 10 : 10), y + barH + 12);
    const twinX = pad.l + t.twinH2 * cW;
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(twinX, y + 2);
    ctx.lineTo(twinX, y + barH - 2);
    ctx.stroke();
    const snpX = pad.l + t.snpH2 * cW;
    ctx.strokeStyle = "rgba(196,163,90,0.4)";
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(snpX, y + 2);
    ctx.lineTo(snpX, y + barH - 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "left";
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 1;
  const ly = h - 16;
  ctx.beginPath();
  ctx.moveTo(pad.l, ly);
  ctx.lineTo(pad.l + 12, ly);
  ctx.stroke();
  ctx.fillText("Twin study h\xB2", pad.l + 18, ly + 3);
  ctx.strokeStyle = "rgba(196,163,90,0.4)";
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(pad.l + 120, ly);
  ctx.lineTo(pad.l + 132, ly);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillText("SNP-based h\xB2", pad.l + 138, ly + 3);
  ctx.restore();
}
function updateTraitsExp() {
  document.getElementById("traits-explain").innerHTML = `<strong>Height</strong> has the highest heritability (h\xB2 \u2248 0.68) \u2014 in well-nourished populations, genetics explains most individual differences. <strong>BMI</strong> and <strong>blood pressure</strong> have lower h\xB2 because diet, exercise, stress, and medication create large environmental variance.<br><br>Notice the gap between twin-study estimates (|) and SNP-based estimates (\u2307). Twin studies capture all genetic effects including rare variants; SNP-based methods miss some. This "missing heritability" gap narrows as sequencing technology improves.<br><br><strong>Key insight:</strong> h\xB2 is not a fixed property of a trait. It depends on the population and environment. In a population where everyone eats the same diet, BMI heritability would rise \u2014 not because genes changed, but because environmental variance shrank.`;
}
function wire(id, cb) {
  document.getElementById(id).addEventListener("input", function() {
    cb(parseInt(this.value));
  });
}
wire("va-slider", (v) => {
  va = v;
  document.getElementById("va-val").textContent = `${v}`;
  drawVariance(document.getElementById("variance-canvas"));
  updateVarianceExp();
});
wire("vd-slider", (v) => {
  vd = v;
  document.getElementById("vd-val").textContent = `${v}`;
  drawVariance(document.getElementById("variance-canvas"));
  updateVarianceExp();
});
wire("vi-slider", (v) => {
  vi = v;
  document.getElementById("vi-val").textContent = `${v}`;
  drawVariance(document.getElementById("variance-canvas"));
  updateVarianceExp();
});
wire("ve-slider", (v) => {
  ve = v;
  document.getElementById("ve-val").textContent = `${v}`;
  drawVariance(document.getElementById("variance-canvas"));
  updateVarianceExp();
});
wire("fieldA-slider", (v) => {
  fieldA = v;
  document.getElementById("fieldA-val").textContent = `${v}`;
  drawFields(document.getElementById("fields-canvas"));
  updateFieldsExp();
});
wire("fieldB-slider", (v) => {
  fieldB = v;
  document.getElementById("fieldB-val").textContent = `${v}`;
  drawFields(document.getElementById("fields-canvas"));
  updateFieldsExp();
});
wire("twin-h2-slider", (v) => {
  twinH2 = v;
  drawTwins(document.getElementById("twins-canvas"));
  updateTwinsExp();
});
window.addEventListener("resize", () => {
  renderEditorial();
  drawVariance(document.getElementById("variance-canvas"));
  drawFields(document.getElementById("fields-canvas"));
  drawTwins(document.getElementById("twins-canvas"));
  drawTraits(document.getElementById("traits-canvas"));
});
renderEditorial();
drawVariance(document.getElementById("variance-canvas"));
updateVarianceExp();
drawFields(document.getElementById("fields-canvas"));
updateFieldsExp();
drawTwins(document.getElementById("twins-canvas"));
updateTwinsExp();
drawTraits(document.getElementById("traits-canvas"));
updateTraitsExp();
