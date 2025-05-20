import { i18n } from "@/locales";
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that triggers a re-render of the component when the language changes.
 *
 * This hook listens for changes in the i18n language version and updates the component state
 * to force a re-render whenever the language changes.
 *
 * We store a ref to the current version of the language and only trigger a re-render
 * if the version changes. This prevents unnecessary re-renders.
 *
 * https://www.npmjs.com/package/i18n-js#events
 *
 * @returns {void}
 */
// @TODO: Figure out a better way to change language
export function useTriggerRerenderOnLanguageChange(): number {
  const [version, setVersion] = useState(i18n.version);
  const versionRef = useRef(i18n.version);
  useEffect(() => {
    const unsubscribe = i18n.onChange(() => {
      if (versionRef.current !== i18n.version) {
        versionRef.current = i18n.version;
        setVersion(i18n.version); // Trigger re-render
      }
    });
    return unsubscribe;
  }, []);
  return version;
}
