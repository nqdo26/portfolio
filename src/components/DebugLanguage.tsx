"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function DebugLanguage() {
  const { t, language } = useLanguage();

  return (
    <div className="fixed top-20 right-4 bg-black/80 text-white p-4 rounded z-[100] text-sm">
      <div>Current Language: {language}</div>
      <div>hero.name: {t("hero.name")}</div>
      <div>nav.home: {t("nav.home")}</div>
      <div>Test direct: {t("hero.description")}</div>
    </div>
  );
}
