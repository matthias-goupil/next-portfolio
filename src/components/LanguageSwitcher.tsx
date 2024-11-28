"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/conf/client";
import React from "react";

function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <div
      className="cursor-pointer font-poppins"
      onClick={() => {
        changeLocale(locale === "fr" ? "en" : "fr");
      }}
    >
      <span className="uppercase">{locale}</span>
    </div>
  );
}

export default LanguageSwitcher;
