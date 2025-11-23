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
              className={styles.dropdownItem}
              onClick={() => {
                onOpenBackground();
                setDropdownVisible(false);
              }}
            >
              <span className={styles.icon}>🎨</span> Change Theme
            </button>

            <div className={styles.inputItemContainer}>
              <label htmlFor="save-time">Set Time for Pomodoro (min)</label>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  id="save-time"
                  className={styles.inputField}
                  placeholder="5"
                  min="1"
                />
                <button className={styles.actionButton}>Save</button>
              </div>
            </div>
            <div className={styles.inputItemContainer}>
              <label htmlFor="save-time">Set Time for Short Break (min)</label>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  id="save-time"
                  className={styles.inputField}
                  placeholder="5"
                  min="1"
                />
                <button className={styles.actionButton}>Save</button>
              </div>
            </div>
            <div className={styles.inputItemContainer}>
              <label htmlFor="save-time">Set Time for Long Break (min)</label>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  id="save-time"
                  className={styles.inputField}
                  placeholder="5"
                  min="1"
                />
                <button className={styles.actionButton}>Save</button>
              </div>
            </div>
            <button
              className={styles.dropdownItem}
              onClick={() => alert("Other setting")}
            >
              <span className={styles.icon}>⚙️</span> Other Settings
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
