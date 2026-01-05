/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite-plugin-pwa/client" />

declare const __APP_VERSION__: string;
declare const __APP_LICENSE__: string;

interface Window {
  __REACT_DEVTOOLS_GLOBAL_HOOK__?: {
    [key: string]: unknown;
  };
}
