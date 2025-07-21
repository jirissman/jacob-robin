/**
 * Centralized default values for theme configuration
 */

export const DEFAULT_COLORS = {
  // Light theme defaults
  light: {
    primaryColor: "#1e61cd",
    secondaryColor: "#f9d7eb",
    backgroundColor: "#ffffff",
    surfaceColor: "#f8fafc",
    textColor: "#000000",
    borderColor: "#ced2d9",
  },
  // Dark theme defaults
  dark: {
    primaryColor: "#4a90e2",
    secondaryColor: "#8b5a8c",
    backgroundColor: "#17181C",
    surfaceColor: "#23262F",
    textColor: "#ffffff",
    borderColor: "#404040",
  },
} as const;

export const DEFAULT_TYPOGRAPHY = {
  sansSerifFont: "Inter",
  serifFont: "PT Serif",
  monospaceFont: "Fira Code",
  fontSize: {
    mobile: 16,
    desktop: 18,
  },
  lineHeight: 1.5,
} as const;

export const DEFAULT_LAYOUT = {
  maxWidth: "768px",
  customMaxWidth: "1200px",
} as const;

// Font options for Sanity schema
export const FONT_OPTIONS = {
  sansSerif: [
    { title: "Inter", value: "Inter" },
    { title: "Roboto", value: "Roboto" },
    { title: "Open Sans", value: "Open Sans" },
    { title: "Poppins", value: "Poppins" },
    { title: "Arial", value: "Arial" },
    { title: "Helvetica", value: "Helvetica" },
  ],
  serif: [
    { title: "Merriweather", value: "Merriweather" },
    { title: "Playfair Display", value: "Playfair Display" },
    { title: "Georgia", value: "Georgia" },
    { title: "Times New Roman", value: "Times New Roman" },
    { title: "Crimson Text", value: "Crimson Text" },
    { title: "Lora", value: "Lora" },
  ],
  monospace: [
    { title: "Fira Code", value: "Fira Code" },
    { title: "Source Code Pro", value: "Source Code Pro" },
    { title: "Monaco", value: "Monaco" },
    { title: "Consolas", value: "Consolas" },
    { title: "JetBrains Mono", value: "JetBrains Mono" },
    { title: "Courier New", value: "Courier New" },
  ],
};

// Layout width options for Sanity schema
export const LAYOUT_WIDTH_OPTIONS = [
  { title: "Small (768px)", value: "768px" },
  { title: "Medium (1024px)", value: "1024px" },
  { title: "Large (1280px)", value: "1280px" },
  { title: "Extra Large (1536px)", value: "1536px" },
  { title: "Full Width", value: "100%" },
  { title: "Custom", value: "custom" },
];
