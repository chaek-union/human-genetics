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

// interactive/ch19.ts
var BF = '18px "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif';
var BLH = 30;
var HF = '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, serif';
var GUT = 48;
var CGAP = 40;
var BGAP = 60;
var DCL = 3;
var MSL = 50;
var NR = 760;
var HL = "GENETIC ARCHITECTURE";
var BODY = `Genetic architecture is not a metaphor. It is the full blueprint of how genetic influences structure a trait \u2014 which variant types contribute, how large their effects are, how common they are in the population, how they interact with each other and with the environment, and which tissues and developmental windows matter. Once you understand architecture, you stop asking "what gene causes this disease?" and start asking "what is the full landscape of influences, and how do they converge?"

Most complex diseases follow composite architecture. That means they are shaped not by one type of variant but by a mixture: rare mutations with large individual effects sitting alongside hundreds of common variants with tiny individual effects. Neither layer alone is sufficient. Together, they explain why the same diagnosis can arise from completely different genetic origins, and why your polygenic background can modify whether a rare mutation ever causes disease at all.

Dilated cardiomyopathy illustrates the rare-end contribution. Ten to twenty-five percent of DCM patients carry a rare, often damaging mutation \u2014 most commonly in TTN, the gene encoding titin, the spring-like protein that maintains sarcomere elasticity. Others carry mutations in LMNA, which encodes a nuclear lamina protein critical for cardiac mechanical stability. But carrying one of these mutations does not guarantee disease. GWAS has identified over eighty common loci that collectively modify penetrance. Your polygenic background can tip a TTN carrier toward severe cardiomyopathy or protect them entirely.

Alzheimer's disease has the most intensely studied architecture of any common neurological disorder. On one end sit rare early-onset mutations in APP and PSEN1, which cause disease in nearly everyone who carries them. On the other end sits APOE \u03B54, a common variant in roughly fifteen percent of the population that elevates risk three to twelve times depending on dose. Between these extremes lies a large polygenic background of hundreds of common variants, plus rare coding variants in microglial genes such as TREM2 and PLCG2. What is striking is that these architecturally diverse inputs \u2014 from rare monogenic mutations to common variants to lipid metabolism alleles \u2014 all converge on microglial efferocytosis: the ability of brain immune cells to clear amyloid and cellular debris.

Autism spectrum disorder displays the most extreme genetic heterogeneity of the three. Some cases arise from de novo mutations \u2014 variants that appear fresh in the child and were not present in either parent, typically large disruptive events in genes essential for synaptic development. Others involve inherited rare variants. Still others show high polygenic loading with no single identifiable variant standing out. Syndromic forms such as Fragile X and Rett syndrome arise from single gene mutations that also cause other features. The female protective effect adds another layer: females appear to tolerate a higher burden of genetic risk before showing the ASD phenotype, suggesting buffering mechanisms that are not yet understood. All of these diverse routes funnel into disruptions in synaptic signaling and chromatin remodeling during early cortical development.

The paradox this creates is apparent only until you understand convergence. Many genetic routes lead to the same disease outcome because genes do not operate in isolation \u2014 they participate in pathways. A mutation in any node of the synaptic development pathway can disrupt the pathway's function even if different patients have mutations at entirely different nodes. Locus heterogeneity \u2014 different genes causing the same phenotype \u2014 and allelic heterogeneity \u2014 different mutations in the same gene \u2014 are expected features of pathway-level architecture, not anomalies.

This convergence principle has a direct therapeutic implication. You do not need to fix every mutation. You need to identify the impaired pathway and boost it. A patient with a TTN mutation and a patient with an LMNA mutation both have impaired sarcomere mechanics. A drug that improves sarcomere calcium sensitivity or reduces fibrotic remodeling could benefit both, regardless of which gene started the cascade. The architecture reveals the target.`;
var PQS = [
  '"Many roads, one destination \u2014 genetic heterogeneity funnels into shared biological pathways."',
  `"Having the mutation doesn't guarantee disease. Your polygenic background modifies penetrance."`
];
function carve(base, bl) {
  let s = [base];
  for (const iv of bl) {
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
  ;
  return s.filter((sl) => sl.right - sl.left >= MSL);
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
    ;
    const slots = carve({ left: rx, right: rx + rw }, bl);
    if (!slots.length) {
      lt += lh;
      continue;
    }
    ;
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
    ;
    lt += lh;
  }
  ;
  return { lines, cursor: c };
}
function sync(pool, n, cls, par) {
  while (pool.length < n) {
    const e = document.createElement("div");
    e.className = cls;
    par.appendChild(e);
    pool.push(e);
  }
  ;
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
  ;
  return { fontSize: best, lines: bl };
}
var stage = document.getElementById("stage");
var lP = [];
var hlP = [];
var pqLP = [];
var pqBP = [];
await document.fonts.ready;
var dcEl = document.createElement("div");
dcEl.className = "drop-cap";
stage.appendChild(dcEl);
function renderEditorial() {
  const pw = document.documentElement.clientWidth, isN = pw < NR, gut = isN ? 20 : GUT, cGap = isN ? 20 : CGAP;
  const prep = prepareWithSegments(BODY, BF), pqF = `italic 19px ${HF}`, pqLH = 27;
  const hl = fitHL(HL, Math.min(pw - gut * 2, 1e3), isN ? 100 : 160, isN ? 32 : 72);
  const hlLH = Math.round(hl.fontSize * 0.93), hlFont = `700 ${hl.fontSize}px ${HF}`, hlH = hl.lines.length * hlLH;
  const bTop = gut + hlH + (isN ? 12 : 20), cc = pw > 1e3 ? 3 : pw > 640 ? 2 : 1;
  const cw = Math.floor((Math.min(pw, 1400) - gut * 2 - cGap * (cc - 1)) / cc);
  const cL = Math.round((pw - (cc * cw + (cc - 1) * cGap)) / 2);
  const bH = Math.max(700, Math.ceil(BODY.length / (cw / 9.5) / cc) * BLH + 120);
  const dcT = BODY[0], dcSz = BLH * DCL - 4, dcFont = `700 ${dcSz}px ${HF}`;
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
  const dcR = { x: cL - 2, y: bTop - 2, w: Math.ceil(dcW) + 10, h: DCL * BLH + 2 };
  const pqRects = [];
  if (!isN && cc >= 2) {
    const specs = [{ text: PQS[0], ci: 0, yF: 0.42, wF: 0.52, side: "right" }, { text: PQS[1], ci: cc > 2 ? 2 : 1, yF: 0.52, wF: 0.5, side: "left" }];
    for (const sp of specs) {
      if (sp.ci >= cc) continue;
      const pp = prepareWithSegments(sp.text, pqF), pW = Math.round(cw * sp.wF), pqL = layoutWithLines(pp, pW - 20, pqLH).lines, pH = pqL.length * pqLH + 16, cx = cL + sp.ci * (cw + cGap), pX = sp.side === "right" ? cx + cw - pW : cx, pY = Math.round(bTop + bH * sp.yF);
      pqRects.push({ x: pX, y: pY, w: pW, h: pH, lines: pqL.map((l, i) => ({ x: pX + 20, y: pY + 8 + i * pqLH, text: l.text, width: l.width })), colIdx: sp.ci });
    }
  }
  const all = [];
  let cur = { segmentIndex: 0, graphemeIndex: 1 };
  for (let ci = 0; ci < cc; ci++) {
    const cx = cL + ci * (cw + cGap), rects = [];
    if (ci === 0) rects.push(dcR);
    for (const pq of pqRects) if (pq.colIdx === ci) rects.push({ x: pq.x, y: pq.y, w: pq.w, h: pq.h });
    const r = layCol(prep, cur, cx, bTop, cw, bH, BLH, rects, isN);
    all.push(...r.lines);
    cur = r.cursor;
  }
  const maxY = all.reduce((m, l) => Math.max(m, l.y), bTop) + BLH + BGAP;
  stage.style.height = `${maxY}px`;
  sync(hlP, hl.lines.length, "headline-line", stage);
  for (let i = 0; i < hl.lines.length; i++) {
    const e = hlP[i], l = hl.lines[i];
    e.textContent = l.text;
    e.style.left = `${gut}px`;
    e.style.top = `${gut + l.y}px`;
    e.style.font = hlFont;
    e.style.lineHeight = `${hlLH}px`;
  }
  sync(lP, all.length, "line", stage);
  for (let i = 0; i < all.length; i++) {
    const e = lP[i], l = all[i];
    e.textContent = l.text;
    e.style.left = `${l.x}px`;
    e.style.top = `${l.y}px`;
    e.style.font = BF;
    e.style.lineHeight = `${BLH}px`;
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
var showRare = true;
var showCommon = true;
var showApoe = true;
function seededRand(seed) {
  let s = seed;
  return function() {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}
function genPoints() {
  const pts = [];
  const rng = seededRand(42);
  const rareGenes = ["TTN", "LMNA", "PSEN1", "APP", "SCN1A", "BRCA2"];
  for (let i = 0; i < 22; i++) {
    const freq = 1e-3 + rng() * 9e-3;
    const or = 2 + rng() * 18;
    const label = i < rareGenes.length ? rareGenes[i] : void 0;
    pts.push({ freq, or, label, category: "rare" });
  }
  for (let i = 0; i < 28; i++) {
    const freq = 0.05 + rng() * 0.45;
    const or = 1.01 + rng() * 0.29;
    pts.push({ freq, or, category: "common" });
  }
  pts.push({ freq: 0.15, or: 4.5, label: "APOE \u03B54", category: "apoe" });
  return pts;
}
var SCATTER_PTS = genPoints();
function drawComposite(cv) {
  const d = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * d;
  cv.height = cv.clientHeight * d;
  const ctx = cv.getContext("2d");
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(d, d);
  const w = cv.clientWidth, h = cv.clientHeight;
  const pad = { t: 40, b: 60, l: 80, r: 40 };
  const cW = w - pad.l - pad.r, cH = h - pad.t - pad.b;
  const logMin = Math.log10(8e-4), logMax = Math.log10(0.6);
  const toX = (f) => pad.l + (Math.log10(f) - logMin) / (logMax - logMin) * cW;
  const orMin = 0.8, orMax = 22;
  const toY = (or) => pad.t + (1 - (or - orMin) / (orMax - orMin)) * cH;
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  ctx.lineWidth = 1;
  for (const f of [1e-3, 0.01, 0.1, 0.5]) {
    const x = toX(f);
    ctx.beginPath();
    ctx.moveTo(x, pad.t);
    ctx.lineTo(x, pad.t + cH);
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = '11px "Helvetica Neue", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText(f < 0.01 ? f.toFixed(3) : f < 0.1 ? f.toFixed(2) : f.toString(), x, pad.t + cH + 18);
  }
  for (const or of [1, 2, 5, 10, 20]) {
    const y = toY(or);
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(pad.l + cW, y);
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = '11px "Helvetica Neue", sans-serif';
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(or === 1 ? "OR 1" : `${or}\xD7`, pad.l - 8, y);
  }
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = '13px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("Allele frequency", pad.l + cW / 2, h - 8);
  ctx.save();
  ctx.translate(20, pad.t + cH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText("Effect size (Odds Ratio)", 0, 0);
  ctx.restore();
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  const y1 = toY(1);
  ctx.beginPath();
  ctx.moveTo(pad.l, y1);
  ctx.lineTo(pad.l + cW, y1);
  ctx.stroke();
  ctx.setLineDash([]);
  const xBoundary = toX(0.02);
  if (showRare) {
    ctx.fillStyle = "rgba(220,80,60,0.04)";
    ctx.fillRect(pad.l, pad.t, xBoundary - pad.l, cH);
  }
  if (showCommon) {
    ctx.fillStyle = "rgba(196,163,90,0.04)";
    ctx.fillRect(xBoundary, pad.t, pad.l + cW - xBoundary, cH);
  }
  for (const pt of SCATTER_PTS) {
    const visible = pt.category === "rare" && showRare || pt.category === "common" && showCommon || pt.category === "apoe" && showApoe;
    if (!visible) continue;
    const x = toX(pt.freq), y = toY(pt.or);
    const color = pt.category === "rare" ? "rgba(220,90,70,0.85)" : pt.category === "apoe" ? "rgba(80,150,230,0.9)" : "rgba(196,163,90,0.75)";
    const r = pt.category === "apoe" ? 8 : pt.category === "rare" ? 5 : 4;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    if (pt.category === "apoe") {
      ctx.strokeStyle = "rgba(80,150,230,0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    if (pt.label) {
      ctx.fillStyle = color;
      ctx.font = 'bold 11px "Helvetica Neue", sans-serif';
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const lx2 = x + r + 4, ly2 = y;
      ctx.fillText(pt.label, lx2, ly2);
    }
  }
  const ly = pad.t + 10;
  const legendItems = [
    { color: "rgba(220,90,70,0.85)", label: "Rare variants", visible: showRare },
    { color: "rgba(196,163,90,0.75)", label: "Common GWAS", visible: showCommon },
    { color: "rgba(80,150,230,0.9)", label: "APOE \u03B54", visible: showApoe }
  ];
  let lx = pad.l + 10;
  for (const item of legendItems) {
    ctx.globalAlpha = item.visible ? 1 : 0.25;
    ctx.beginPath();
    ctx.arc(lx + 6, ly + 6, 5, 0, Math.PI * 2);
    ctx.fillStyle = item.color;
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = '12px "Helvetica Neue", sans-serif';
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(item.label, lx + 16, ly + 6);
    lx += 130;
    ctx.globalAlpha = 1;
  }
  ctx.restore();
}
function updateCompositeExp() {
  const el = document.getElementById("composite-explain");
  if (showRare && showCommon && showApoe) {
    el.innerHTML = `The full composite architecture: <strong>rare variants</strong> (red, left side) have large effects but low frequency. <strong>Common GWAS variants</strong> (gold, right side) each contribute minimally but in aggregate shift risk substantially. <strong>APOE \u03B54</strong> (blue) sits uniquely between \u2014 common enough to appear in ~15% of people, yet conferring 3\u201312\xD7 elevated risk. Most diseases need all three layers to explain the full genetic landscape.`;
  } else if (showRare && !showCommon && !showApoe) {
    el.innerHTML = `<strong>Rare variants only.</strong> These are the variants traditional genetics first discovered \u2014 large effects, easy to detect in families, devastating when inherited. TTN mutations impair titin elasticity in the heart. PSEN1 mutations cause early-onset Alzheimer's. But rare variants alone explain only 10\u201325% of DCM cases and <1% of Alzheimer's cases.`;
  } else if (!showRare && showCommon && !showApoe) {
    el.innerHTML = `<strong>Common GWAS variants only.</strong> Each dot shifts disease probability by 1\u201330%. Individually trivial. But summed across hundreds of loci into a <em>polygenic score</em>, they create a continuous gradient of liability. The top 5% of polygenic risk can have 2\u20134\xD7 elevated disease rates compared to the bottom 5%.`;
  } else if (!showRare && !showCommon && showApoe) {
    el.innerHTML = `<strong>APOE \u03B54 alone.</strong> A unique variant that defies easy categorization. Common (15% population frequency) yet powerful (3\u201312\xD7 risk increase). Two copies push risk even higher. APOE mediates lipid transport in the brain \u2014 \u03B54 impairs clearance of amyloid fragments from the extracellular space.`;
  } else {
    el.innerHTML = `Toggle the categories to compare how different variant types occupy different regions of the frequency\u2013effect landscape. The rare-common boundary is roughly 1\u20135% allele frequency. Notice that nothing prevents a common variant from having a large effect in principle \u2014 selection pressure tends to push large-effect variants down in frequency over generations.`;
  }
}
var riskStep = 0;
var RISK_STEPS = [
  { label: "Baseline", amyloid: 20, cognition: 28, description: "No elevated genetic risk factors. Baseline amyloid accumulation reflects normal aging. Cognition at 28/30 (MMSE equivalent). This is the starting point before any genetic risk stacking." },
  { label: "+ APOE \u03B54", amyloid: 45, cognition: 26, description: "Adding one copy of APOE \u03B54 substantially elevates amyloid burden. APOE \u03B54 impairs microglial clearance and promotes amyloid aggregation. Cognition begins to decline. Risk is elevated 3\u20134\xD7 over baseline." },
  { label: "+ High PGS", amyloid: 60, cognition: 24, description: "A high polygenic score stacks on APOE \u03B54 risk. Hundreds of common variants \u2014 each individually tiny \u2014 together add a substantial second layer of liability. Amyloid at 60%, cognition noticeably impaired." },
  { label: "+ Rare variant", amyloid: 75, cognition: 21, description: "A rare noncoding or regulatory variant (e.g., near BIN1 or CLU) further accelerates pathology. Rare variants with moderate-to-large effects can tip the balance when polygenic risk is already elevated. Cognitive decline now clinically significant." },
  { label: "+ Structural variant", amyloid: 85, cognition: 18, description: "Addition of a structural variant (CNV affecting APP dosage or a large deletion in a microglial gene) pushes amyloid burden to 85%. Cognition at 18/30. This multi-layer composite architecture explains why individuals with identical APOE status can have dramatically different outcomes." }
];
function drawRisk(cv) {
  const d = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * d;
  cv.height = cv.clientHeight * d;
  const ctx = cv.getContext("2d");
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(d, d);
  const w = cv.clientWidth, h = cv.clientHeight;
  const pad = { t: 50, b: 70, l: 60, r: 40 };
  const cW = w - pad.l - pad.r, cH = h - pad.t - pad.b;
  const stepW = cW / (RISK_STEPS.length - 1);
  const toYAmyloid = (v) => pad.t + (1 - v / 100) * cH;
  const toYCognition = (v) => pad.t + (1 - v / 30) * cH;
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  ctx.lineWidth = 1;
  for (let pct = 0; pct <= 100; pct += 20) {
    const y = toYAmyloid(pct);
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(pad.l + cW, y);
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = '11px "Helvetica Neue", sans-serif';
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(`${pct}%`, pad.l - 8, y);
  }
  for (let i = 0; i < RISK_STEPS.length; i++) {
    const x = pad.l + i * stepW;
    ctx.fillStyle = i <= riskStep ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)";
    ctx.font = i === riskStep ? 'bold 12px "Helvetica Neue", sans-serif' : '11px "Helvetica Neue", sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    const words = RISK_STEPS[i].label.split(" ");
    for (let wi = 0; wi < words.length; wi++) {
      ctx.fillText(words[wi], x, pad.t + cH + 18 + wi * 14);
    }
  }
  ctx.strokeStyle = "rgba(220,100,60,0.8)";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i <= riskStep; i++) {
    const x = pad.l + i * stepW, y = toYAmyloid(RISK_STEPS[i].amyloid);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.strokeStyle = "rgba(80,180,220,0.8)";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i <= riskStep; i++) {
    const x = pad.l + i * stepW, y = toYCognition(RISK_STEPS[i].cognition);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
  for (let i = 0; i <= riskStep; i++) {
    const step = RISK_STEPS[i];
    const x = pad.l + i * stepW;
    const isActive = i === riskStep;
    ctx.beginPath();
    ctx.arc(x, toYAmyloid(step.amyloid), isActive ? 7 : 5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(220,100,60,0.9)";
    ctx.fill();
    if (isActive) {
      ctx.strokeStyle = "rgba(220,100,60,0.4)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "rgba(220,100,60,0.9)";
      ctx.font = 'bold 13px "Helvetica Neue", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(`${step.amyloid}%`, x, toYAmyloid(step.amyloid) - 10);
    }
    ctx.beginPath();
    ctx.arc(x, toYCognition(step.cognition), isActive ? 7 : 5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(80,180,220,0.9)";
    ctx.fill();
    if (isActive) {
      ctx.strokeStyle = "rgba(80,180,220,0.4)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "rgba(80,180,220,0.9)";
      ctx.font = 'bold 13px "Helvetica Neue", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(`${step.cognition}/30`, x, toYCognition(step.cognition) - 10);
    }
  }
  ctx.fillStyle = "rgba(220,100,60,0.8)";
  ctx.font = '12px "Helvetica Neue", sans-serif';
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("Amyloid burden (%)", pad.l + cW - 130, pad.t + 16);
  ctx.fillStyle = "rgba(80,180,220,0.8)";
  ctx.fillText("Cognition (/30)", pad.l + cW - 130, pad.t + 34);
  ctx.strokeStyle = "rgba(80,180,220,0.2)";
  ctx.lineWidth = 1;
  for (const v of [0, 10, 20, 30]) {
    const y = toYCognition(v);
    ctx.fillStyle = "rgba(80,180,220,0.3)";
    ctx.font = '10px "Helvetica Neue", sans-serif';
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(`${v}`, pad.l + cW + 6, y);
  }
  ctx.restore();
}
function updateRiskExp() {
  const step = RISK_STEPS[riskStep];
  document.getElementById("risk-explain").innerHTML = `<strong>${step.label}:</strong> Amyloid ${step.amyloid}% \xB7 Cognition ${step.cognition}/30. ${step.description}`;
  for (let i = 0; i < RISK_STEPS.length; i++) {
    const btn = document.getElementById(`btn-step${i}`);
    btn.classList.toggle("active", i === riskStep);
  }
}
var activeDisease = "dcm";
var DISEASES = {
  dcm: {
    name: "Dilated Cardiomyopathy",
    color: "rgba(220,100,70,0.9)",
    inputs: [
      { label: "TTN mutations", sublabel: "titin truncating\n(rare, large effect)", color: "rgba(220,80,60,0.85)" },
      { label: "LMNA mutations", sublabel: "nuclear lamina\n(rare, large effect)", color: "rgba(200,70,100,0.85)" },
      { label: "80+ GWAS loci", sublabel: "common variants\n(small individual effect)", color: "rgba(196,163,90,0.85)" },
      { label: "PGS modifier", sublabel: "modifies penetrance\nof rare variants", color: "rgba(170,140,80,0.8)" }
    ],
    pathway: "Sarcomere / ECM integrity",
    outcome: "Dilated Cardiomyopathy",
    detail: "In DCM, rare TTN and LMNA mutations impair sarcomere elasticity and nuclear mechanical stability. Common variants across 80+ loci collectively modify the contractile environment. A patient with a TTN mutation and high polygenic risk has far worse prognosis than one with low polygenic background \u2014 the same rare variant, different outcomes."
  },
  ad: {
    name: "Alzheimer's Disease",
    color: "rgba(100,160,230,0.9)",
    inputs: [
      { label: "APP / PSEN1", sublabel: "rare early-onset\n(<1%, nearly 100% penetrant)", color: "rgba(80,120,220,0.85)" },
      { label: "APOE \u03B54", sublabel: "common, 15% freq\n(3\u201312\xD7 risk)", color: "rgba(100,160,230,0.85)" },
      { label: "TREM2 / PLCG2", sublabel: "rare microglial\n(moderate effect)", color: "rgba(60,200,180,0.85)" },
      { label: "Polygenic background", sublabel: "hundreds of loci\n(aggregate effect)", color: "rgba(196,163,90,0.8)" }
    ],
    pathway: "Microglial efferocytosis",
    outcome: "Alzheimer's Disease",
    detail: "Alzheimer's unites rare monogenic variants, common APOE alleles, rare microglial variants, and polygenic background through a single pathway: microglia fail to clear amyloid and cellular debris. APP/PSEN1 mutations increase amyloid production. APOE \u03B54 impairs lipid transport for clearance. TREM2 mutations reduce microglial phagocytic function. The inputs differ; the pathway disruption is shared."
  },
  asd: {
    name: "Autism Spectrum Disorder",
    color: "rgba(140,200,100,0.9)",
    inputs: [
      { label: "De novo variants", sublabel: "new mutations\nnot in parents", color: "rgba(120,200,80,0.85)" },
      { label: "Inherited rare", sublabel: "rare inherited\nfrom carrier parent", color: "rgba(100,180,70,0.85)" },
      { label: "Syndromic (FMR1, MECP2)", sublabel: "single-gene syndromes\n(high penetrance)", color: "rgba(200,140,60,0.85)" },
      { label: "Polygenic loading", sublabel: "30\u201340% of cases\nhave high PGS", color: "rgba(196,163,90,0.8)" }
    ],
    pathway: "Synaptic signaling / Chromatin remodeling",
    outcome: "Autism Spectrum Disorder",
    detail: "ASD has the broadest genetic heterogeneity of any neurodevelopmental disorder. De novo large-effect variants, inherited rare variants, monogenic syndromes, and high polygenic load all disrupt early cortical circuit formation. The female protective effect \u2014 women tolerate higher genetic burden before manifesting ASD \u2014 adds another layer to the architecture, likely involving sex-hormone modulation of synaptic pruning."
  }
};
function drawArrow(ctx, x1, y1, x2, y2, color, lw = 1.5) {
  const ang = Math.atan2(y2 - y1, x2 - x1), hLen = 8;
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - hLen * Math.cos(ang - 0.4), y2 - hLen * Math.sin(ang - 0.4));
  ctx.lineTo(x2 - hLen * Math.cos(ang + 0.4), y2 - hLen * Math.sin(ang + 0.4));
  ctx.closePath();
  ctx.fill();
}
function drawRoundRect(ctx, x, y, w, h, r, fillColor, strokeColor) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = fillColor;
  ctx.fill();
  if (strokeColor) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}
function drawConvergence(cv) {
  const d = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * d;
  cv.height = cv.clientHeight * d;
  const ctx = cv.getContext("2d");
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.scale(d, d);
  const w = cv.clientWidth, h = cv.clientHeight;
  const disease = DISEASES[activeDisease];
  const inputs = disease.inputs;
  const pad = { t: 30, b: 40, l: 30, r: 30 };
  const innerW = w - pad.l - pad.r;
  const inputBoxW = Math.min(innerW * 0.28, 200);
  const inputBoxH = 68;
  const inputGap = 12;
  const totalInputH = inputs.length * inputBoxH + (inputs.length - 1) * inputGap;
  const inputStartY = (h - totalInputH) / 2;
  const funnelX = pad.l + inputBoxW + (innerW - inputBoxW * 2 - 120) * 0.4;
  for (let i = 0; i < inputs.length; i++) {
    const inp = inputs[i];
    const bx = pad.l, by = inputStartY + i * (inputBoxH + inputGap);
    drawRoundRect(
      ctx,
      bx,
      by,
      inputBoxW,
      inputBoxH,
      10,
      inp.color.replace(/[\d.]+\)$/, "0.1)"),
      inp.color.replace(/[\d.]+\)$/, "0.35)")
    );
    ctx.fillStyle = inp.color;
    ctx.font = 'bold 13px "Helvetica Neue", sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(inp.label, bx + inputBoxW / 2, by + 10);
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.font = '11px "Helvetica Neue", sans-serif';
    const sublines = inp.sublabel.split("\n");
    for (let sl = 0; sl < sublines.length; sl++) {
      ctx.fillText(sublines[sl], bx + inputBoxW / 2, by + 28 + sl * 14);
    }
    const arrowStartX = bx + inputBoxW;
    const arrowStartY = by + inputBoxH / 2;
    const arrowEndX = funnelX;
    const arrowEndY = h / 2;
    drawArrow(ctx, arrowStartX, arrowStartY, arrowEndX - 4, arrowEndY, inp.color.replace(/[\d.]+\)$/, "0.4)"), 1.5);
  }
  const funnelTopW = 60, funnelBotW = 20, funnelH = h * 0.55;
  const funnelTopY = (h - funnelH) / 2, funnelBotY = funnelTopY + funnelH;
  const funnelTopX = funnelX - funnelTopW / 2, funnelBotX = funnelX - funnelBotW / 2;
  ctx.beginPath();
  ctx.moveTo(funnelTopX, funnelTopY);
  ctx.lineTo(funnelTopX + funnelTopW, funnelTopY);
  ctx.lineTo(funnelBotX + funnelBotW, funnelBotY);
  ctx.lineTo(funnelBotX, funnelBotY);
  ctx.closePath();
  ctx.fillStyle = disease.color.replace(/[\d.]+\)$/, "0.1)");
  ctx.fill();
  ctx.strokeStyle = disease.color.replace(/[\d.]+\)$/, "0.3)");
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = disease.color.replace(/[\d.]+\)$/, "0.6)");
  ctx.font = 'bold 11px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("converges", funnelX, h / 2);
  const pathwayBoxX = funnelX + funnelBotW / 2 + 20;
  const pathwayBoxW = Math.min(innerW * 0.26, 180);
  const pathwayBoxH = 56;
  const pathwayBoxY = (h - pathwayBoxH * 2 - 20) / 2;
  drawArrow(ctx, funnelX + funnelBotW / 2, h / 2, pathwayBoxX - 2, h / 2, disease.color.replace(/[\d.]+\)$/, "0.5)"), 2);
  drawRoundRect(
    ctx,
    pathwayBoxX,
    pathwayBoxY,
    pathwayBoxW,
    pathwayBoxH,
    10,
    disease.color.replace(/[\d.]+\)$/, "0.12)"),
    disease.color.replace(/[\d.]+\)$/, "0.4)")
  );
  ctx.fillStyle = disease.color;
  ctx.font = 'bold 12px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Shared Pathway", pathwayBoxX + pathwayBoxW / 2, pathwayBoxY + 8);
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.font = '11px "Helvetica Neue", sans-serif';
  const pathLines = disease.pathway.split(" / ");
  for (let pl = 0; pl < pathLines.length; pl++) {
    ctx.fillText(pathLines[pl], pathwayBoxX + pathwayBoxW / 2, pathwayBoxY + 26 + pl * 14);
  }
  const outcomeBoxY = pathwayBoxY + pathwayBoxH + 20;
  const outcomeBoxH = 44;
  drawArrow(
    ctx,
    pathwayBoxX + pathwayBoxW / 2,
    pathwayBoxY + pathwayBoxH,
    pathwayBoxX + pathwayBoxW / 2,
    outcomeBoxY - 2,
    disease.color.replace(/[\d.]+\)$/, "0.5)"),
    2
  );
  drawRoundRect(
    ctx,
    pathwayBoxX,
    outcomeBoxY,
    pathwayBoxW,
    outcomeBoxH,
    10,
    disease.color.replace(/[\d.]+\)$/, "0.2)"),
    disease.color.replace(/[\d.]+\)$/, "0.6)")
  );
  ctx.fillStyle = "#fff";
  ctx.font = 'bold 13px "Helvetica Neue", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(disease.outcome, pathwayBoxX + pathwayBoxW / 2, outcomeBoxY + outcomeBoxH / 2);
  ctx.save();
  ctx.translate(pad.l + inputBoxW / 2, h * 0.88);
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.font = 'italic 11px "Helvetica Neue", sans-serif';
  ctx.fillText("Locus heterogeneity", 0, 0);
  ctx.restore();
  ctx.restore();
}
function updateConvergenceExp() {
  const disease = DISEASES[activeDisease];
  document.getElementById("convergence-explain").innerHTML = `<strong>${disease.name}</strong>: ${disease.detail}`;
  const btns = { dcm: "btn-dcm", ad: "btn-ad", asd: "btn-asd" };
  for (const [key, id] of Object.entries(btns)) {
    document.getElementById(id).classList.toggle("active", key === activeDisease);
  }
}
function getCanvas(id) {
  return document.getElementById(id);
}
for (const [id, fn] of [["btn-rare", () => {
  showRare = !showRare;
}], ["btn-common", () => {
  showCommon = !showCommon;
}], ["btn-apoe", () => {
  showApoe = !showApoe;
}]]) {
  document.getElementById(id).addEventListener("click", function() {
    fn();
    this.classList.toggle("active");
    drawComposite(getCanvas("composite-canvas"));
    updateCompositeExp();
  });
}
for (let i = 0; i < RISK_STEPS.length; i++) {
  const idx = i;
  document.getElementById(`btn-step${i}`).addEventListener("click", () => {
    riskStep = idx;
    drawRisk(getCanvas("risk-canvas"));
    updateRiskExp();
  });
}
for (const key of ["dcm", "ad", "asd"]) {
  document.getElementById(`btn-${key}`).addEventListener("click", () => {
    activeDisease = key;
    drawConvergence(getCanvas("convergence-canvas"));
    updateConvergenceExp();
  });
}
window.addEventListener("resize", () => {
  renderEditorial();
  drawComposite(getCanvas("composite-canvas"));
  drawRisk(getCanvas("risk-canvas"));
  drawConvergence(getCanvas("convergence-canvas"));
});
renderEditorial();
drawComposite(getCanvas("composite-canvas"));
updateCompositeExp();
drawRisk(getCanvas("risk-canvas"));
updateRiskExp();
drawConvergence(getCanvas("convergence-canvas"));
updateConvergenceExp();
