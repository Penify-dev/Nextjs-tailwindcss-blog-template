"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook for managing theme switching between dark and light modes.
 *
 * @returns {Array} An array containing the current mode ('dark' or 'light') and a function to set the mode.
 */
export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-schema:dark)";
  const storageKey = "theme";

  /**
   * Toggles the theme of the application between light and dark modes.
   *
   * @param {string} theme - The theme to apply. Must be either "dark" or "light".
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
   * Retrieves the user's preference from local storage or determines it based on the system's color scheme.
   *
   * @returns {string} The user's preference, either "dark" or "light".
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
     * Handles language change by updating user preferences, setting mode, and toggling theme.
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
