// src/components/Header/Header.tsx
"use client";

import { useState } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  onOpenBackground: () => void;
}

export default function Header({ onOpenBackground }: HeaderProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <h1 onClick={() => window.location.reload()}>Productivity Timer</h1>
      </div>

      <div className={styles.settingsContainer}>
        <button
          className={styles.settingsButton}
          onClick={() => setDropdownVisible((v) => !v)}
          aria-expanded={dropdownVisible}
          aria-haspopup="true"
        >
          ⚙️ Settings
        </button>

        {dropdownVisible && (
          <div className={styles.dropdownContent}>
            <button
              className={styles.changeThemeButton}
              onClick={() => {
                onOpenBackground();
                setDropdownVisible(false);
              }}
            >
              🎨 Theme
            </button>

            <button
              className={styles.changeThemeButton}
              onClick={() => alert("Other setting")}
            >
              ⚙️ Other
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
