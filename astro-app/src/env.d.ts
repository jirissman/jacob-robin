/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
interface Window {
  theme: {
    setTheme: (theme: "auto" | "dark" | "light") => void;
    getTheme: () => "auto" | "dark" | "light";
    getSystemTheme: () => "light" | "dark";
    getDefaultTheme: () => "auto" | "dark" | "light";
  };
}
