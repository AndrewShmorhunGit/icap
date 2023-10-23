"use client";
import styles from "@/styles/modules/header.module.scss";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { useThemeContext } from "@/providers/theme.context";

export function ThemeButton() {
  const { toggleTheme, checkTheme, isLightTheme } = useThemeContext();
  const style = { position: "absolute", top: "1rem" };

  return (
    <label className={styles.switch}>
      <input
        className="relative"
        type="checkbox"
        name="theme"
        checked={checkTheme}
        onChange={toggleTheme}
      />

      <span className={styles.slider}></span>
      {isLightTheme ? (
        <MdDarkMode style={{ ...style, right: "0.5rem" }} size={20} />
      ) : (
        <BsFillSunFill style={{ ...style, left: "0.5rem" }} size={20} />
      )}
    </label>
  );
}
