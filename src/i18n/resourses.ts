import commonEn from "./locales/en/common.json";
import homeEn from "./locales/en/home.json";

export const resources = {
  en: {
    common: commonEn,
    home: homeEn,
  },
} as const;

export type Resources = typeof resources;
