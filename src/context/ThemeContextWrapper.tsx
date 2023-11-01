import { useState, useEffect, ReactNode } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("themePreference") || "light");

  const changeCurrentTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("themePreference", newTheme);
  };

  useEffect(() => {
    if (theme === "light") document.body.classList.remove("dark-theme");
    else document.body.classList.add("dark-theme");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
