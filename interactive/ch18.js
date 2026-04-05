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

// interactive/ch18.ts
var BODY_FONT = '18px "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif';
var BODY_LH = 30;
var HF = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif';
var GUTTER = 48;
var COL_GAP = 40;
var BOTTOM_GAP = 60;
var DROP_CAP_LINES = 3;
var MIN_SLOT = 50;
var NARROW = 760;
var HEADLINE = "GENOME-WIDE ASSOCIATION";
var BODY = `Genome-wide association studies scan millions of positions in the human genome looking for variants that correlate with disease. The principle is simple: collect thousands of patients with a condition, thousands of healthy controls, and ask at each of a million SNPs whether the allele frequencies differ. Where they do, you may have found something real.

Before GWAS became feasible in the mid-2000s, medical genetics was largely a science of rare, severe mutations. Cystic fibrosis. Huntington disease. Single-gene disorders with clear Mendelian patterns. GWAS changed the game by confirming what Fisher predicted in 1918: common, complex diseases are shaped by thousands of common variants, each contributing a tiny effect. Heart disease, schizophrenia, type 2 diabetes \u2014 all turned out to be deeply polygenic.

A typical GWAS tests hundreds of thousands to a million SNPs simultaneously. For each one, a statistical test produces a p-value \u2014 the probability of seeing a difference this large by chance if the SNP truly has no effect. Small p-values suggest real associations. Large p-values suggest noise. But here is the catch: with a million tests and a threshold of p less than 0.05, you would expect 50,000 false positives. That is why GWAS demands a far stricter threshold of p less than 5 times 10 to the negative eighth \u2014 approximately one false positive per scan.

The results are displayed in a Manhattan plot. Each point is a SNP; the x-axis tracks chromosomal position; the y-axis shows the negative log base ten of the p-value. Signals above the genome-wide significance line of 7.3 form dramatic peaks above the noise floor. The peaks cluster at chromosomal loci that harbor genes relevant to the trait. For dilated cardiomyopathy, the peaks converge on sarcomere proteins, extracellular matrix genes, and ion channel regulators \u2014 exactly the biology you would expect for a disease of heart muscle.

But peaks in a Manhattan plot only tell you where associations live. Before trusting them, you check the QQ plot \u2014 the quantile-quantile plot. This compares the distribution of observed p-values against what random chance would produce. In a clean study, the points follow the diagonal until the very tail, where true signals lift off. If the points deviate from the diagonal early \u2014 across the whole distribution \u2014 something systematic is wrong. Population stratification, batch effects, cryptic relatedness. Any of these inflate p-values genome-wide and need correction.

Once you have validated loci, you can translate them into polygenic scores. A polygenic score sums the effect of every risk allele an individual carries, weighted by the effect size estimated from the GWAS. For dilated cardiomyopathy, a study of 14,256 cases and over a million controls identified 80 independent loci. Individuals in the top ten percent of the polygenic score distribution have 2.8 times the risk compared to the population average \u2014 a clinically meaningful signal derived entirely from common variants, with no rare pathogenic mutation required.`;
var PULLQUOTES = [
  `"Testing 1 million SNPs at p < 0.05 would produce 50,000 false positives. That's why GWAS demands p < 5 \xD7 10\u207B\u2078."`,
  '"Top 10% polygenic score: 2.8-fold higher DCM risk \u2014 even without any rare pathogenic mutation."'
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
      { text: PULLQUOTES[0], ci: 0, yF: 0.38, wF: 0.52, side: "right" },
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
function sliderToSnps(v) {
  return Math.round(Math.pow(10, 3 + v / 100 * 3));
}
function sliderToThresh(v) {
  const logMin = Math.log10(5e-8), logMax = Math.log10(0.05);
  return Math.pow(10, logMin + v / 100 * (logMax - logMin));
}
var mtSnps = sliderToSnps(50);
var mtThresh = sliderToThresh(50);
function formatSnps(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "k";
  return n.toString();
}
function formatThresh(t) {
  if (t >= 0.01) return t.toFixed(2);
  if (t >= 1e-3) return t.toExponential(1);
  return t.toExponential(0);
}
function drawMultipleTesting(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const fp = mtSnps * mtThresh;
  const isGWAS = mtThresh <= 5e-8 * 1.01;
  const padT = 50, padB = 60, padL = 60, padR = 40;
  const cW = w - padL - padR, cH = h - padT - padB;
  const totalBarH = 28;
  const totalBarY = padT + cH * 0.15;
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  ctx.beginPath();
  ctx.roundRect(padL, totalBarY, cW, totalBarH, 4);
  ctx.fill();
  const fpFrac = Math.min(1, fp / mtSnps);
  const fpW = fpFrac * cW;
  const fpColor = isGWAS ? "#5a9a6a" : fp > 1e3 ? "#e06060" : "#c4a35a";
  const fpGrad = ctx.createLinearGradient(padL, 0, padL + fpW, 0);
  fpGrad.addColorStop(0, fpColor);
  fpGrad.addColorStop(1, fpColor.includes("#5a") ? "rgba(90,154,106,0.2)" : fpColor.includes("#e0") ? "rgba(224,96,96,0.2)" : "rgba(196,163,90,0.2)");
  ctx.fillStyle = fpGrad;
  ctx.globalAlpha = 0.8;
  if (fpW > 0) {
    ctx.beginPath();
    ctx.roundRect(padL, totalBarY, Math.max(fpW, 2), totalBarH, [4, fpFrac > 0.99 ? 4 : 0, fpFrac > 0.99 ? 4 : 0, 4]);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = '12px "Helvetica Neue", sans-serif';
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(`${formatSnps(mtSnps)} SNPs tested`, padL, totalBarY - 14);
  if (fpW > 40) {
    ctx.fillStyle = "#fff";
    ctx.font = 'bold 12px "Helvetica Neue", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("Expected false positives", padL + fpW / 2, totalBarY + totalBarH / 2);
  }
  const threshX = padL + fpFrac * cW;
  ctx.strokeStyle = fpColor;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(threshX, totalBarY - 5);
  ctx.lineTo(threshX, totalBarY + totalBarH + 5);
  ctx.stroke();
  ctx.setLineDash([]);
  const scatterY = totalBarY + totalBarH + 50;
  const scatterH = cH - (scatterY - padT) - 20;
  const nDots = Math.min(300, Math.max(50, Math.floor(cW / 3)));
  let seed = 9876;
  function rng() {
    seed = (seed * 16807 + 0) % 2147483647;
    return seed / 2147483647;
  }
  for (let i = 0; i < nDots; i++) {
    const x = padL + rng() * cW;
    const p = rng();
    const y = scatterY + (1 - p) * scatterH;
    const isFP = p < mtThresh;
    ctx.beginPath();
    ctx.arc(x, y, isFP ? 3.5 : 2, 0, Math.PI * 2);
    ctx.fillStyle = isFP ? fpColor : "rgba(255,255,255,0.15)";
    ctx.globalAlpha = isFP ? 0.85 : 0.4;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  ctx.save();
  ctx.translate(padL - 40, scatterY + scatterH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("p-value (uniform under null)", 0, 0);
  ctx.restore();
  const threshY = scatterY + (1 - mtThresh) * scatterH;
  ctx.strokeStyle = fpColor;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(padL, threshY);
  ctx.lineTo(padL + cW, threshY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = fpColor;
  ctx.font = 'bold 11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "right";
  ctx.fillText(`p = ${formatThresh(mtThresh)}`, padL + cW - 4, threshY - 5);
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("p = 0", padL, scatterY + scatterH + 16);
  ctx.fillText("p = 1", padL + cW, scatterY + scatterH + 16);
  const fpLabel = fp >= 1e3 ? `~${(fp / 1e3).toFixed(0)}k` : fp < 1 ? "<1" : `~${Math.round(fp)}`;
  ctx.fillStyle = fpColor;
  ctx.font = `bold ${Math.min(52, Math.max(28, 52 - String(fpLabel).length * 3))}px "Iowan Old Style", Palatino, serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText(fpLabel, w - padR, padT);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = '12px "Helvetica Neue", sans-serif';
  ctx.fillText("expected false positives", w - padR, padT + 56);
  ctx.restore();
}
function updateMTExp() {
  const fp = mtSnps * mtThresh;
  const el = document.getElementById("multiple-testing-explain");
  document.getElementById("fp-result").textContent = fp < 1 ? "Expected false positives: < 1" : fp >= 1e3 ? `~${(fp / 1e3).toFixed(0)},000 false positives` : `~${Math.round(fp)} false positives`;
  const isGWAS = mtThresh <= 5e-8 * 1.01;
  const isWorst = fp > 1e4;
  if (isGWAS) {
    document.getElementById("fp-sub").textContent = "Genome-wide significance threshold \u2014 approximately 1 false positive per scan";
    el.innerHTML = `At <strong>p &lt; 5 &times; 10&minus;8</strong> (the genome-wide significance threshold), you expect <strong>less than one false positive</strong> across the entire scan. This threshold was derived by applying a Bonferroni correction for approximately one million independent tests. It is now the universal standard in GWAS.`;
  } else if (isWorst) {
    document.getElementById("fp-sub").textContent = "This many false positives would make results uninterpretable";
    el.innerHTML = `With <strong>${formatSnps(mtSnps)} SNPs</strong> at p &lt; <strong>${formatThresh(mtThresh)}</strong>, you'd expect roughly <strong>${fp >= 1e3 ? (fp / 1e3).toFixed(0) + ",000" : Math.round(fp)} false positives</strong>. You'd have no way to know which associations are real. This is the multiple testing problem that prevented genetic association studies from being reliable before the genome-wide significance standard was established.`;
  } else {
    document.getElementById("fp-sub").textContent = "Expected under the null hypothesis";
    el.innerHTML = `Testing <strong>${formatSnps(mtSnps)} SNPs</strong> at p &lt; <strong>${formatThresh(mtThresh)}</strong> gives ~<strong>${fp < 1 ? "&lt;1" : Math.round(fp)}</strong> expected false positives. The fewer SNPs you test, the less stringent your threshold needs to be. The genome-wide threshold of 5 &times; 10&minus;8 corrects for ~1 million independent tests \u2014 roughly the number of independent haplotype blocks in the human genome.`;
  }
}
var MANHATTAN_PEAKS = [
  { chr: 1, posF: 0.22, negLogP: 9.4, name: "rs1801133", gene: "MTHFR", desc: "Methylenetetrahydrofolate reductase \u2014 homocysteine metabolism, cardiovascular risk." },
  { chr: 2, posF: 0.55, negLogP: 8.1, name: "rs7566605", gene: "INSIG2", desc: "Insulin-induced gene 2 \u2014 lipid biosynthesis, early obesity GWAS hit." },
  { chr: 5, posF: 0.4, negLogP: 11.2, name: "rs17817449", gene: "FTO", desc: "Fat mass and obesity associated \u2014 strongest common variant for BMI." },
  { chr: 6, posF: 0.35, negLogP: 14.5, name: "rs2395185", gene: "HLA-DRA", desc: "MHC class II locus \u2014 the most associated region for autoimmune diseases." },
  { chr: 9, posF: 0.72, negLogP: 8.8, name: "rs10757278", gene: "CDKN2B", desc: "CDKN2A/B locus on 9p21 \u2014 coronary artery disease, type 2 diabetes risk." },
  { chr: 12, posF: 0.6, negLogP: 9.7, name: "rs11066015", gene: "ALDH2", desc: "Aldehyde dehydrogenase 2 \u2014 alcohol metabolism, cardiovascular effects." },
  { chr: 16, posF: 0.3, negLogP: 10.3, name: "rs9939609", gene: "FTO", desc: "Secondary FTO peak \u2014 one of the most replicated obesity loci across populations." },
  { chr: 19, posF: 0.5, negLogP: 12.1, name: "rs4420638", gene: "APOE", desc: "APOE region \u2014 apolipoprotein E, LDL cholesterol, Alzheimer's disease risk." }
];
var CHR_LENS = [248, 242, 198, 190, 181, 171, 159, 145, 138, 133, 135, 133, 115, 107, 102, 90, 83, 80, 59, 63, 48, 51];
function buildManhattanData() {
  const snps = [];
  let s = 31337;
  function rng() {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  }
  function normalRng() {
    return Math.sqrt(-2 * Math.log(Math.max(rng(), 1e-10))) * Math.cos(2 * Math.PI * rng());
  }
  for (let chr = 1; chr <= 22; chr++) {
    const nSnps = 80;
    const peak = MANHATTAN_PEAKS.find((p) => p.chr === chr);
    for (let i = 0; i < nSnps; i++) {
      const posF = (i + rng() * 0.8 + 0.1) / nSnps;
      const chi2 = normalRng() * normalRng();
      const rawNLP = Math.max(0.05, -Math.log10(Math.exp(-chi2 / 2)) * rng() * 2 + rng() * 1.5);
      const negLogP = Math.min(rawNLP, 6.8);
      let peakId = void 0;
      if (peak && Math.abs(posF - peak.posF) < 0.12) {
        const dist = Math.abs(posF - peak.posF) / 0.12;
        const bonus = peak.negLogP * (1 - dist * dist) * (0.7 + rng() * 0.3);
        const finalNLP = negLogP + bonus;
        snps.push({ chr, pos: posF, negLogP: Math.min(finalNLP, peak.negLogP + 1), peakId: MANHATTAN_PEAKS.indexOf(peak) });
        continue;
      }
      snps.push({ chr, pos: posF, negLogP, peakId });
    }
  }
  return snps;
}
var manhattanData = buildManhattanData();
var manhattanHit = null;
function drawManhattan(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const padT = 30, padB = 50, padL = 52, padR = 20;
  const cW = w - padL - padR, cH = h - padT - padB;
  const maxNLP = 15.5, threshold = 7.3;
  const totalLen = CHR_LENS.reduce((a, b) => a + b, 0);
  const COL_A = "rgba(196,163,90,0.75)";
  const COL_B = "rgba(100,160,220,0.75)";
  const COL_HIT = "#ff6b6b";
  const chrOffsets = [];
  let cumLen = 0;
  for (let i = 0; i < 22; i++) {
    chrOffsets.push(cumLen);
    cumLen += CHR_LENS[i];
  }
  for (let i = 0; i < 22; i++) {
    if (i % 2 === 0) {
      const x0 = padL + chrOffsets[i] / totalLen * cW;
      const x1 = padL + (chrOffsets[i] + CHR_LENS[i]) / totalLen * cW;
      ctx.fillStyle = "rgba(255,255,255,0.015)";
      ctx.fillRect(x0, padT, x1 - x0, cH);
    }
  }
  for (let y = 0; y <= 14; y += 2) {
    const ys = padT + cH - y / maxNLP * cH;
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, ys);
    ctx.lineTo(padL + cW, ys);
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = '10px "Helvetica Neue", sans-serif';
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(`${y}`, padL - 6, ys);
  }
  const threshY = padT + cH - threshold / maxNLP * cH;
  ctx.strokeStyle = "rgba(224,96,96,0.6)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(padL, threshY);
  ctx.lineTo(padL + cW, threshY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "rgba(224,96,96,0.7)";
  ctx.font = 'bold 10px "Helvetica Neue", sans-serif';
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillText("p = 5\xD710\u207B\u2078", padL + 4, threshY - 2);
  for (const snp of manhattanData) {
    const chrX = chrOffsets[snp.chr - 1] + snp.pos * CHR_LENS[snp.chr - 1];
    const x = padL + chrX / totalLen * cW;
    const y = padT + cH - snp.negLogP / maxNLP * cH;
    const isHit = snp.peakId !== void 0 && snp.negLogP > threshold;
    const isSelected = snp.peakId === manhattanHit;
    ctx.beginPath();
    ctx.arc(x, y, isSelected ? 4 : isHit ? 3.5 : 2, 0, Math.PI * 2);
    ctx.fillStyle = isSelected ? "#fff" : isHit ? COL_HIT : snp.chr % 2 === 0 ? COL_B : COL_A;
    ctx.globalAlpha = isHit ? 0.95 : 0.45;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  for (let i = 0; i < 22; i++) {
    const midX = padL + (chrOffsets[i] + CHR_LENS[i] / 2) / totalLen * cW;
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = '9px "Helvetica Neue", sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    if (CHR_LENS[i] * cW / totalLen > 18) ctx.fillText(`${i + 1}`, midX, padT + cH + 8);
  }
  ctx.save();
  ctx.translate(12, padT + cH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("-log\u2081\u2080(p)", 0, 0);
  ctx.restore();
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText("Chromosomal Position", padL + cW / 2, h - 4);
  ctx.restore();
}
function getManhattanHitAtPoint(cv, ex, ey) {
  const rect = cv.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const w = cv.clientWidth, h = cv.clientHeight;
  const padT = 30, padB = 50, padL = 52, padR = 20;
  const cW = w - padL - padR, cH = h - padT - padB;
  const maxNLP = 15.5, threshold = 7.3;
  const totalLen = CHR_LENS.reduce((a, b) => a + b, 0);
  const mx = (ex - rect.left) / rect.width * w;
  const my = (ey - rect.top) / rect.height * h;
  let bestId = null, bestDist = 999;
  for (const snp of manhattanData) {
    if (snp.peakId === void 0 || snp.negLogP <= threshold) continue;
    const chrX = CHR_LENS.slice(0, snp.chr - 1).reduce((a, b) => a + b, 0) + snp.pos * CHR_LENS[snp.chr - 1];
    const x = padL + chrX / totalLen * cW;
    const y = padT + cH - snp.negLogP / maxNLP * cH;
    const dist = Math.hypot(mx - x, my - y);
    if (dist < 16 && dist < bestDist) {
      bestDist = dist;
      bestId = snp.peakId;
    }
  }
  return bestId;
}
function updateManhattanExp() {
  const el = document.getElementById("manhattan-explain");
  el.innerHTML = `A Manhattan plot shows every tested SNP at once. The <strong>background noise floor</strong> (most points) sits around &minus;log&#8321;&#8320;(p) \u2248 1&ndash;2. Above the <strong>red threshold line</strong> (p &lt; 5&times;10&minus;8, i.e. &minus;log&#8321;&#8320; = 7.3) are <em>genome-wide significant</em> hits. These peaks often correspond to known biology \u2014 HLA for autoimmunity, APOE for lipids, FTO for obesity. Click on the red dots to explore each locus.`;
}
var qqMode = "good";
function buildQQPoints(mode) {
  const N = 200;
  let s = 54321;
  function rng() {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  }
  const pts = [];
  for (let i = 1; i <= N; i++) {
    const expP = i / (N + 1);
    let obsP;
    if (mode === "good") {
      const rank = i / N;
      if (rank > 0.95) {
        obsP = expP * Math.pow(rng() * 1e-3 + 1e-4, 1 - rank);
      } else {
        obsP = expP * (0.85 + rng() * 0.3);
      }
    } else {
      const lambda = 1.45;
      const chiNominal = -2 * Math.log(Math.max(expP, 1e-10));
      const chiInflated = chiNominal * lambda;
      obsP = Math.exp(-chiInflated / 2);
      if (i / N > 0.97) obsP = obsP * 1e-3;
    }
    obsP = Math.max(1e-12, Math.min(1 - 1e-10, obsP));
    pts.push({ exp: -Math.log10(expP), obs: -Math.log10(obsP) });
  }
  return pts.sort((a, b) => a.exp - b.exp);
}
function drawQQ(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const padT = 30, padB = 55, padL = 60, padR = 30;
  const cW = w - padL - padR, cH = h - padT - padB;
  const pts = buildQQPoints(qqMode);
  const maxVal = Math.min(13, Math.max(...pts.map((p) => p.obs)) + 0.5);
  for (let v = 0; v <= 12; v += 2) {
    const x = padL + v / maxVal * cW;
    const y = padT + cH - v / maxVal * cH;
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, padT);
    ctx.lineTo(x, padT + cH);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(padL + cW, y);
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = '10px "Helvetica Neue", sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(`${v}`, x, padT + cH + 8);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(`${v}`, padL - 6, y);
  }
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(padL, padT + cH);
  ctx.lineTo(padL + cW, padT);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "rgba(255,255,255,0.04)";
  ctx.beginPath();
  for (let i = 0; i < pts.length; i++) {
    const exp = pts[i].exp;
    const x = padL + exp / maxVal * cW;
    const upper = exp + 1.36 / Math.sqrt(pts.length);
    const y = padT + cH - Math.min(upper, maxVal) / maxVal * cH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  for (let i = pts.length - 1; i >= 0; i--) {
    const exp = pts[i].exp;
    const x = padL + exp / maxVal * cW;
    const lower = Math.max(0, exp - 1.36 / Math.sqrt(pts.length));
    const y = padT + cH - lower / maxVal * cH;
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  const ptColor = qqMode === "good" ? "#c4a35a" : "#e06060";
  for (const pt of pts) {
    const x = padL + pt.exp / maxVal * cW;
    const y = padT + cH - Math.min(pt.obs, maxVal) / maxVal * cH;
    const isSignal = pt.obs > 7.3;
    ctx.beginPath();
    ctx.arc(x, y, isSignal ? 4 : 2.5, 0, Math.PI * 2);
    ctx.fillStyle = isSignal ? "#ff6b6b" : ptColor;
    ctx.globalAlpha = isSignal ? 0.9 : 0.6;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  const obsVals = pts.map((p) => p.obs);
  const medianObs = obsVals[Math.floor(obsVals.length / 2)];
  const medianExp = pts[Math.floor(pts.length / 2)].exp;
  const lambda = medianObs / (medianExp || 0.01);
  const lambdaColor = lambda > 1.1 ? "#e06060" : "#5a9a6a";
  ctx.fillStyle = lambdaColor;
  ctx.font = 'bold 16px "Helvetica Neue", sans-serif';
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText(`\u03BB = ${lambda.toFixed(2)}`, padL + cW - 4, padT + 4);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.fillText("genomic inflation factor", padL + cW - 4, padT + 24);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText("Expected \u2212log\u2081\u2080(p)", padL + cW / 2, h - 4);
  ctx.save();
  ctx.translate(14, padT + cH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Observed \u2212log\u2081\u2080(p)", 0, 0);
  ctx.restore();
  ctx.restore();
}
function updateQQExp() {
  const el = document.getElementById("qq-explain");
  if (qqMode === "good") {
    el.innerHTML = `<strong>Well-controlled GWAS (\u03BB \u2248 1.0)</strong>: Points follow the diagonal until the very tail, where real signals lift off. The genomic inflation factor <em>lambda</em> is close to 1.0 \u2014 indicating no systematic p-value inflation. The grey band is the 95% confidence interval under the null. This is what you want to see: most SNPs behave as expected, and only a handful are genuine hits.`;
  } else {
    el.innerHTML = `<strong>Confounded GWAS (\u03BB >> 1)</strong>: The entire distribution is shifted upward. Even in the bulk of the data \u2014 where no real associations should exist \u2014 observed p-values are smaller than expected. <em>Lambda</em> above ~1.1 signals a problem: population stratification, cryptic relatedness, or genotyping batch effects. These inflate test statistics genome-wide and produce false positives everywhere. A confounded study must be corrected before results can be trusted.`;
  }
}
var PGS_SNPS = [
  { id: "rs10497520", locus: "TTN", or: 1.15, freq: 0.18, active: false },
  { id: "rs2234962", locus: "SCN5A", or: 1.12, freq: 0.25, active: false },
  { id: "rs7312631", locus: "LMNA", or: 1.11, freq: 0.22, active: false },
  { id: "rs6599230", locus: "MYH7", or: 1.09, freq: 0.31, active: false },
  { id: "rs9349379", locus: "PHACTR1", or: 1.08, freq: 0.42, active: false },
  { id: "rs17293632", locus: "ELN", or: 1.08, freq: 0.28, active: false },
  { id: "rs3741559", locus: "KCNQ1", or: 1.07, freq: 0.35, active: false },
  { id: "rs10865331", locus: "COL1A1", or: 1.07, freq: 0.44, active: false },
  { id: "rs1333049", locus: "CDKN2B", or: 1.07, freq: 0.47, active: false },
  { id: "rs4977574", locus: "CDKN2A", or: 1.06, freq: 0.51, active: false },
  { id: "rs2681472", locus: "ATP2B1", or: 1.06, freq: 0.33, active: false },
  { id: "rs7903146", locus: "TCF7L2", or: 1.06, freq: 0.29, active: false },
  { id: "rs11191548", locus: "CYP17A1", or: 1.05, freq: 0.21, active: false },
  { id: "rs2107595", locus: "HDAC9", or: 1.05, freq: 0.16, active: false },
  { id: "rs646776", locus: "CELSR2", or: 1.05, freq: 0.38, active: false },
  { id: "rs4343", locus: "ACE", or: 1.04, freq: 0.55, active: false },
  { id: "rs11206510", locus: "PCSK9", or: 1.04, freq: 0.18, active: false },
  { id: "rs599839", locus: "SORT1", or: 1.04, freq: 0.22, active: false },
  { id: "rs3825807", locus: "ADAMTS7", or: 1.03, freq: 0.43, active: false },
  { id: "rs9818870", locus: "MRAS", or: 1.02, freq: 0.19, active: false }
];
function computePGS() {
  return PGS_SNPS.reduce((sum, s) => sum + (s.active ? Math.log(s.or) : 0), 0);
}
function popMeanPGS() {
  return PGS_SNPS.reduce((sum, s) => sum + 2 * s.freq * Math.log(s.or), 0);
}
function popSdPGS() {
  const variance = PGS_SNPS.reduce((sum, s) => sum + 2 * s.freq * (1 - s.freq) * Math.log(s.or) ** 2, 0);
  return Math.sqrt(variance);
}
function pgsToRisk(pgs) {
  const mean = popMeanPGS(), sd = popSdPGS();
  const z = (pgs - mean) / (sd || 0.01);
  const k = Math.log(2.8) / 1.28;
  return Math.exp(z * k);
}
function drawPGS(cv) {
  const ctx = cv.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * dpr;
  cv.height = cv.clientHeight * dpr;
  const w = cv.clientWidth, h = cv.clientHeight;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(dpr, dpr);
  const padT = 30, padB = 60, padL = 60, padR = 30;
  const cW = w - padL - padR, cH = h - padT - padB;
  const pgs = computePGS();
  const mean = popMeanPGS(), sd = popSdPGS();
  const xMin = mean - 4 * sd, xMax = mean + 4 * sd;
  const toX = (v) => padL + (v - xMin) / (xMax - xMin) * cW;
  const gaussH = cH * 0.72;
  function gauss(x) {
    return Math.exp(-0.5 * ((x - mean) / sd) ** 2) / (sd * Math.sqrt(2 * Math.PI));
  }
  const peakG = gauss(mean);
  const top10Thresh = mean + 1.282 * sd;
  ctx.fillStyle = "rgba(224,96,96,0.12)";
  ctx.beginPath();
  for (let px = 0; px <= cW; px++) {
    const v = xMin + px / cW * (xMax - xMin);
    if (v < top10Thresh) continue;
    const y = padT + gaussH - gauss(v) / peakG * gaussH;
    if (px === 0 || v - (xMin + (px - 1) / cW * (xMax - xMin)) < top10Thresh - mean) ctx.moveTo(toX(v), y);
    else ctx.lineTo(toX(v), y);
  }
  ctx.lineTo(padL + cW, padT + gaussH);
  ctx.lineTo(toX(top10Thresh), padT + gaussH);
  ctx.closePath();
  ctx.fill();
  const grad = ctx.createLinearGradient(padL, padT, padL + cW, padT);
  grad.addColorStop(0, "rgba(100,160,220,0.5)");
  grad.addColorStop(0.5, "rgba(196,163,90,0.6)");
  grad.addColorStop(1, "rgba(224,96,96,0.5)");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let px = 0; px <= cW; px++) {
    const v = xMin + px / cW * (xMax - xMin);
    const y = padT + gaussH - gauss(v) / peakG * gaussH;
    px === 0 ? ctx.moveTo(padL + px, y) : ctx.lineTo(padL + px, y);
  }
  ctx.stroke();
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, padT + gaussH);
  ctx.lineTo(padL + cW, padT + gaussH);
  ctx.stroke();
  const t10X = toX(top10Thresh);
  ctx.strokeStyle = "rgba(224,96,96,0.4)";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(t10X, padT);
  ctx.lineTo(t10X, padT + gaussH);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "rgba(224,96,96,0.7)";
  ctx.font = '10px "Helvetica Neue", sans-serif';
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Top 10%", t10X + 4, padT + 4);
  ctx.fillStyle = "rgba(224,96,96,0.6)";
  ctx.font = 'bold 11px "Helvetica Neue", sans-serif';
  ctx.fillText("2.8\xD7 risk", t10X + 4, padT + 18);
  const clampedPGS = Math.max(xMin, Math.min(xMax, pgs));
  const pgsX = toX(clampedPGS);
  const pgsY = padT + gaussH - gauss(clampedPGS) / peakG * gaussH;
  const rr = pgsToRisk(pgs);
  const markerColor = rr > 2 ? "#ff6b6b" : rr > 1.3 ? "#c4a35a" : "#5a9a6a";
  ctx.strokeStyle = markerColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pgsX, padT);
  ctx.lineTo(pgsX, padT + gaussH + 10);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(pgsX, pgsY, 6, 0, Math.PI * 2);
  ctx.fillStyle = markerColor;
  ctx.fill();
  ctx.fillStyle = markerColor;
  ctx.font = 'bold 12px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText("Your score", pgsX, padT - 4);
  ctx.fillStyle = markerColor;
  ctx.font = `bold 18px "Iowan Old Style", Palatino, serif`;
  ctx.textAlign = "center";
  ctx.fillText(`${rr.toFixed(2)}\xD7 relative risk`, pgsX, padT + gaussH + 36);
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText("Polygenic Score (PGS)", padL + cW / 2, h - 4);
  ctx.save();
  ctx.translate(14, padT + gaussH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Frequency", 0, 0);
  ctx.restore();
  const meanX = toX(mean);
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(meanX, padT + 10);
  ctx.lineTo(meanX, padT + gaussH);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = '10px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Mean", meanX, padT + gaussH + 4);
  ctx.restore();
}
function updatePGSExp() {
  const pgs = computePGS();
  const rr = pgsToRisk(pgs);
  const nActive = PGS_SNPS.filter((s) => s.active).length;
  const el = document.getElementById("pgs-explain");
  document.getElementById("pgs-result").textContent = `PGS = ${pgs.toFixed(3)}`;
  if (nActive === 0) {
    document.getElementById("pgs-sub").textContent = "No risk alleles selected \u2014 population average risk";
    el.innerHTML = `Toggle SNPs above to add risk alleles. Each one contributes a small amount to the polygenic score. The score is calculated as the <strong>sum of log(odds ratio) \xD7 copies of the risk allele</strong>. In a real clinical PGS, thousands of SNPs are included \u2014 not just 20. The DCM study identified <strong>80 independent loci</strong> using 14,256 cases and over a million controls.`;
  } else if (rr > 2) {
    document.getElementById("pgs-sub").textContent = `${nActive} risk alleles \u2014 ${rr.toFixed(2)}\xD7 relative risk for DCM`;
    el.innerHTML = `You're carrying <strong>${nActive} risk alleles</strong> with a combined PGS placing you in the <strong>high-risk range</strong>. Individuals in the top 10% of the DCM polygenic score distribution have <em>2.8-fold higher risk</em> than the population average \u2014 without any rare pathogenic mutation. Polygenic scores identify individuals who may benefit from enhanced cardiac screening or earlier intervention.`;
  } else if (rr > 1.3) {
    document.getElementById("pgs-sub").textContent = `${nActive} risk alleles \u2014 moderately elevated risk`;
    el.innerHTML = `With <strong>${nActive} risk alleles</strong>, your PGS is moderately above average. Each individual SNP has a small effect (OR 1.02\u20131.15), but they add up. This is the fundamental principle of polygenic architecture: <em>no single common variant is deterministic</em>, but the cumulative score carries real predictive power.`;
  } else {
    document.getElementById("pgs-sub").textContent = `${nActive} risk alleles \u2014 near-average risk`;
    el.innerHTML = `With <strong>${nActive} risk alleles</strong>, your score is near the population average. Notice how much you'd need to add to reach the 2.8\xD7 risk tier. This reflects a key property of polygenicity: risk is continuously distributed. Most people are near the middle; high-risk individuals are genuinely rare even among those with all common risk alleles.`;
  }
}
var snpsSlider = document.getElementById("snps-slider");
var threshSlider = document.getElementById("thresh-slider");
snpsSlider.addEventListener("input", function() {
  mtSnps = sliderToSnps(parseInt(this.value));
  document.getElementById("snps-val").textContent = formatSnps(mtSnps);
  drawMultipleTesting(document.getElementById("multiple-testing-canvas"));
  updateMTExp();
});
threshSlider.addEventListener("input", function() {
  mtThresh = sliderToThresh(parseInt(this.value));
  document.getElementById("thresh-val").textContent = formatThresh(mtThresh);
  drawMultipleTesting(document.getElementById("multiple-testing-canvas"));
  updateMTExp();
});
var manhattanCanvas = document.getElementById("manhattan-canvas");
manhattanCanvas.addEventListener("click", function(e) {
  const hitId = getManhattanHitAtPoint(this, e.clientX, e.clientY);
  if (hitId !== null) {
    manhattanHit = hitId;
    const peak = MANHATTAN_PEAKS[hitId];
    document.getElementById("manhattan-hit").textContent = `${peak.name} \u2014 ${peak.gene}`;
    document.getElementById("manhattan-hit-sub").textContent = peak.desc;
    drawManhattan(this);
  }
});
document.getElementById("qq-good-btn").addEventListener("click", function() {
  qqMode = "good";
  document.getElementById("qq-good-btn").classList.add("active");
  document.getElementById("qq-bad-btn").classList.remove("active");
  drawQQ(document.getElementById("qq-canvas"));
  updateQQExp();
});
document.getElementById("qq-bad-btn").addEventListener("click", function() {
  qqMode = "bad";
  document.getElementById("qq-bad-btn").classList.add("active");
  document.getElementById("qq-good-btn").classList.remove("active");
  drawQQ(document.getElementById("qq-canvas"));
  updateQQExp();
});
var snpGrid = document.getElementById("snp-grid");
for (let i = 0; i < PGS_SNPS.length; i++) {
  const snp = PGS_SNPS[i];
  const chip = document.createElement("div");
  chip.className = "snp-chip";
  chip.textContent = `${snp.locus} (OR ${snp.or.toFixed(2)})`;
  chip.dataset.idx = String(i);
  chip.addEventListener("click", function() {
    const idx = parseInt(this.dataset.idx);
    PGS_SNPS[idx].active = !PGS_SNPS[idx].active;
    this.classList.toggle("active", PGS_SNPS[idx].active);
    drawPGS(document.getElementById("pgs-canvas"));
    updatePGSExp();
  });
  snpGrid.appendChild(chip);
}
window.addEventListener("resize", () => {
  renderEditorial();
  drawMultipleTesting(document.getElementById("multiple-testing-canvas"));
  drawManhattan(document.getElementById("manhattan-canvas"));
  drawQQ(document.getElementById("qq-canvas"));
  drawPGS(document.getElementById("pgs-canvas"));
});
renderEditorial();
document.getElementById("snps-val").textContent = formatSnps(mtSnps);
document.getElementById("thresh-val").textContent = formatThresh(mtThresh);
drawMultipleTesting(document.getElementById("multiple-testing-canvas"));
updateMTExp();
drawManhattan(document.getElementById("manhattan-canvas"));
updateManhattanExp();
drawQQ(document.getElementById("qq-canvas"));
updateQQExp();
drawPGS(document.getElementById("pgs-canvas"));
updatePGSExp();
