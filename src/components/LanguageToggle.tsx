"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
      className="font-semibold"
    >
      {language === "vi" ? "EN" : "VI"}
    </Button>
  );
}
