import { I18n } from "i18n-js";
import en_US from "./en";
import es_ES from "./es";
import fr_FR from "./fr";
import pt_BR from "./pt";

import { enUS, es, ptBR, fr } from "date-fns/locale";
import { simpleObjectProxy } from "./utils";

/**
 * Use English as our "template" for translations. All other translations
 * should match the objects and keys within the English translation.
 */
export type Translation = typeof en_US;

export type TranslationKeys = keyof typeof en_US.translation;

export enum Language {
  EN_US = "en_US",
  ES_ES = "es_ES",
  FR_FR = "fr_FR",
  PT_BR = "pt_BR",
}

export type CurrencyItem = {
  symbol: string;
  name: keyof typeof l;
  flagEmoji: string;
  flag: string;
};

export type LanguageItem = {
  code: Language;
  name: string;
  metadata: {
    nativeName: string;
    flagEmoji: string;
    flag: string;
  };
};

export const resources: {
  [key in Language]: Translation;
} = {
  en_US,
  es_ES,
  fr_FR,
  pt_BR,
};

export const i18n = new I18n({
  en_US,
  es_ES,
  fr_FR,
  pt_BR,
});

export function getStringFromLanguage(language: Language): string | undefined {
  switch (language) {
    case Language.EN_US:
      return "en";
    case Language.ES_ES:
      return "es";
    case Language.FR_FR:
      return "fr";
    case Language.PT_BR:
      return "ptBR";
    default:
      return undefined;
  }
}

export function getLanguageFromString(language: string): Language {
  //Needs to be reworked if we want to support multiple sublanguages (like PT-PT and PT-BR)
  const language_part = language?.substring(0, 2);
  switch (language_part) {
    case "en":
      return Language.EN_US;
    case "es":
      return Language.ES_ES;
    case "fr":
      return Language.FR_FR;
    case "pt":
      return Language.PT_BR;
    default:
      return Language.EN_US;
  }
}

export function getDateFnsLocale() {
  switch (i18n.locale) {
    case Language.EN_US:
      return enUS;
    case Language.ES_ES:
      return es;
    case Language.FR_FR:
      return fr;
    case Language.PT_BR:
      return ptBR;
    default:
      return enUS;
  }
}

// Configure languages
i18n.defaultLocale = Language.EN_US;
i18n.locale = Language.EN_US;
i18n.enableFallback = true;
i18n.translations = Object.assign(
  {},
  ...Object.keys(resources).map((key) => ({
    [key]: resources[key as Language].translation,
  })),
);

export const updateLanguageLocale = (code: Language) => {
  i18n.locale = code;
};

/**
 * Returns a i18n string for a given object-keypath or string
 * and optional template literal args.
 *   `import * as i18n from "@/locales"`
 *
 * Type-safe usage:
 *   `i18n.t(i18n.l.account.hide, { accountName: 'myAccount' })`
 *
 * Alternative standard usage:
 *   `i18n.t('account.hide', { accountName: 'myAccount' })`
 */
export function t(keypath: string, args?: { [key: string]: string | number }) {
  // if it's anything truthy, try __keypath__ or fall back to the value
  // otherwise let falsy values fall through
  // @ts-expect-error
  return i18n.t(keypath ? keypath.__keypath__ || keypath : keypath, args);
}

/**
 * A proxied object used to generate keypaths for use with `i18n.translate` via
 *   `import * as i18n from '@/languages'`
 *
 * Type-safe usage:
 *   `i18n.t(i18n.l.account.hide)`
 *
 * Alternative standard usage:
 *   `i18n.t('account.hide')`
 */
export const l = simpleObjectProxy<Translation["translation"]>(en_US.translation);
