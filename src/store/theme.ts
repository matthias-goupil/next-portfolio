import { create } from "zustand";

interface IThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void
}

export const useThemeStore = create<IThemeStore>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
}));
