"use client";

import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-schema:dark)";
  const storageKey = "theme";

  /**
   * Toggles the theme of the application between "dark" and other themes.
   *
   * @param {string} theme - The theme to set. Must be either "dark" or another valid theme.
   * @throws {Error} If an invalid theme is provided.
   */
  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  /**
   * Retrieves the user's preference from local storage or system settings.
   *
   * @returns {string} - The user's preferred theme ("dark" or "light").
   */
  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    /**
     * Handles a change event by updating the user preference mode,
     * setting the new mode, and toggling the theme accordingly.
     *
     * @returns {void}
     */
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(mode)
  }, [mode])
  


  return [mode, setMode]
}
