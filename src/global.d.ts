// Type declarations to satisfy usage in main.tsx
export {}; // ensure this file is treated as a module

declare global {
  interface Window {
    __TAURI__?: any;
  }
  interface ImportMeta {
    env: any;
  }
}
