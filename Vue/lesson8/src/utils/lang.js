import { createI18n } from "vue-i18n";
import lang from "../lang/lang.json"

const DEFAULT_LANG = "en";
const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;


export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLang,
  fallbackLocale: DEFAULT_LANG,
  messages: lang,
});