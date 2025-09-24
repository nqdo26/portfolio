"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const texts = [
    t("hero.roles.0"),
    t("hero.roles.1"),
    t("hero.roles.2"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div className="h-8 overflow-hidden">
      <motion.p
        key={`${currentIndex}-${texts[currentIndex]}`}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl text-muted-foreground"
      >
        {texts[currentIndex]}
      </motion.p>
    </motion.div>
  );
}
