"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/conf/client";
import React from "react";

function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <div
      className="cursor-pointer font-poppins flex gap-2"
      onClick={() => {
        changeLocale(locale === "fr" ? "en" : "fr");
      }}
    >
      <span className="uppercase">{locale === 'en'? "en" : "fr"}</span>
      |
      <span className="uppercase text-gray-300">{locale === 'en'? "fr" : "en"}</span>

    </div>
  );
}

export default LanguageSwitcher;
