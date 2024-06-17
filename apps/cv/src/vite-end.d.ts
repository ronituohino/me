/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HIDE: string;
  readonly VITE_ADDRESS: string;
  readonly VITE_PHONE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
