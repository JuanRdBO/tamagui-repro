import { useMemo } from "react";
import { t, l, LanguageItem, Language, i18n } from "@/locales";

export function useGetAllLanguages(): LanguageItem[] {
  return useMemo(
    () => [
      {
        code: Language.EN_US,
        name: t(l.english_language),
        metadata: {
          nativeName: "English",
          flagEmoji: "🇺🇸",
          flag: "https://hatscripts.github.io/circle-flags/flags/us.svg",
        },
      },
      {
        code: Language.ES_ES,
        name: t(l.spanish_language),
        metadata: {
          nativeName: "Español",
          flagEmoji: "🇪🇸",
          flag: "https://hatscripts.github.io/circle-flags/flags/es.svg",
        },
      },
      {
        code: Language.FR_FR,
        name: t(l.french_language),
        metadata: {
          nativeName: "Français",
          flagEmoji: "🇫🇷",
          flag: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
        },
      },
      {
        code: Language.PT_BR,
        name: t(l.portuguese_language),
        metadata: {
          nativeName: "Português",
          flagEmoji: "🇧🇷",
          flag: "https://hatscripts.github.io/circle-flags/flags/br.svg",
        },
      },
    ],
    [i18n.version],
  );
}
