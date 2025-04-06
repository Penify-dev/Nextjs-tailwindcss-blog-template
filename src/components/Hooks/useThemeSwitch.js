"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to manage theme switching functionality.
 *
 * This hook allows components to toggle between light and dark themes based on user preference or system settings. It listens for changes in the user's preferred color scheme and updates the theme accordingly.
 *
 * @returns {Array} An array containing the current mode (either "dark" or "light") and a function to set the mode.
 */
export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-schema:dark)";
  const storageKey = "theme";

  /**
   * Toggles the theme of the application between 'dark' and 'light'.
   *
   * @param {string} theme - The theme to set. Must be either "dark" or "light".
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
   * Retrieves user preference from local storage or determines it based on media query.
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
     * Handles changes by updating the mode, setting it, and toggling the theme accordingly.
     *
     * @function
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
