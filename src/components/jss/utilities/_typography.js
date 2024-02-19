import { makeStyles } from "@material-ui/core/styles";

export const typographyStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6": {
      margin: "0 0 0.5rem",
      lineHeight: "1.1",
      color: "inherit",
    },
    ".h1, h1": { fontSize: "2rem" },
    ".h2, h2": { fontSize: "1.75rem" },
    ".h3, h3": { fontSize: "1.5rem" },
    ".h4, h4": { fontSize: "1.25rem" },
    ".h5, h5": { fontSize: "1rem" },
    ".h6, h6": { fontSize: "0.875rem" },
    a: { textDecoration: "none", color: "inherit" },
    ".caption": { font: "var(--font-caption)" },
    ".subtitle-1": { font: "var(--font-subtitle-1)" },
    ".subtitle-2": { font: "var(--font-subtitle-2)" },
    ".heading": { font: "var(--font-heading)" },
    ".title": { font: "var(--font-title)" },
    ".display-1": { font: "var(--font-display-1)" },
    ".display-2": { font: "var(--font-display-2)" },
    ".display-3": { font: "var(--font-display-3)" },
    ".display-4": { font: "var(--font-display-4)" },
    ".capitalize": { textTransform: "capitalize !important" },
    ".uppercase": { textTransform: "uppercase !important" },
    ".lowercase": { textTransform: "lowercase !important" },
    ".font-normal": { fontWeight: "normal !important" },
    ".font-light": { fontWeight: "300 !important" },
    ".font-medium": { fontWeight: "500 !important" },
    ".font-semibold": { fontWeight: "600 !important" },
    ".font-bold": { fontWeight: "700 !important" },
    ".text-11": { fontSize: "11px !important" },
    ".text-12": { fontSize: "12px !important" },
    ".text-13": { fontSize: "13px !important" },
    ".text-14": { fontSize: "14px !important" },
    ".text-16": { fontSize: "16px !important" },
    ".text-18": { fontSize: "18px !important" },
    ".text-20": { fontSize: "20px !important" },
    ".text-22": { fontSize: "22px !important" },
    ".text-24": { fontSize: "24px !important" },
    ".text-28": { fontSize: "28px !important" },
    ".text-30": { fontSize: "30px !important" },
    ".text-32": { fontSize: "32px !important" },
    ".text-36": { fontSize: "36px !important" },
    ".text-40": { fontSize: "40px !important" },
    ".text-44": { fontSize: "44px !important" },
    ".text-48": { fontSize: "48px !important" },
    ".text-54": { fontSize: "54px !important" },
    ".text-58": { fontSize: "58px !important" },
    ".text-62": { fontSize: "62px !important" },
    ".text-72": { fontSize: "72px !important" },
    ".text-small": { fontSize: "0.8125rem !important" },
    ".whitespace-pre-wrap": { whiteSpace: "pre-wrap", wordBreak: "break-word" },
    ".whitespace-pre": { whiteSpace: "pre" },
    ".whitespace-no-wrap": { whiteSpace: "nowrap" },
  },
}));
