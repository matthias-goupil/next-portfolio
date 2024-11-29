"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store/theme";

export default function ThemeSwitche() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") document.querySelector("html")?.classList.add("dark");
    else document.querySelector("html")?.classList.remove("dark");
  }, [theme]);

  return (
    <div className="cursor-pointer" onClick={toggleTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </div>
  );
}
