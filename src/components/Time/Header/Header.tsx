"use client";

import { useState, useEffect, use } from "react";
import styles from "./Header.module.css";
import { useTimer } from "@/src/app/context/TimerContext";

interface HeaderProps {
  onOpenBackground: () => void;
}

export default function Header({ onOpenBackground }: HeaderProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { pomoMinutes, setPomoMinutes } = useTimer();
  const [pomoInput, setPomoInput] = useState(pomoMinutes.toString());
  const { shortBreakMinutes, setShortBreakMinutes } = useTimer();
  const [shortBreakInput, setShortBreakInput] = useState(
    shortBreakMinutes.toString()
  );
  const { longBreakMinutes, setLongBreakMinutes } = useTimer();
  const [longBreakInput, setLongBreakInput] = useState(
    longBreakMinutes.toString()
  );

  // const [saveInputVal, setSaveInputVal] = useState();
  useEffect(() => {
    setTimeout(() => {
      setPomoInput(pomoMinutes.toString());
      setLongBreakInput(longBreakMinutes.toString());
      setShortBreakInput(shortBreakMinutes.toString());
    }, 100);
  }, [pomoMinutes, longBreakMinutes, shortBreakMinutes]);

  const handleSavePomo = () => {
    const minutes = parseInt(pomoInput);
    if (isNaN(minutes) || minutes < 1) {
      alert("Please enter a valid number (1 or more)");
      setPomoInput(pomoMinutes.toString());
      return;
    }
    setPomoMinutes(minutes);
  };

  const handleSaveShorBreak = () => {
    const minutes = parseInt(shortBreakInput);
    if (isNaN(minutes) || minutes < 1) {
      alert("Please enter a valid number(1 or more)");
      setShortBreakInput(shortBreakMinutes.toString());
      return;
    }
    setShortBreakMinutes(minutes);
  };

  const handleSaveLongBreak = () => {
    const minutes = parseInt(longBreakInput);
    if (isNaN(minutes) || minutes < 1) {
      alert("Please enter a valid number (1 or more)");
      setLongBreakInput(longBreakMinutes.toString());
      return;
    }
    setLongBreakMinutes(minutes);
  };

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
            {/* Pomo Input */}
            <div className={styles.inputItemContainer}>
              <label htmlFor="save-time">Set Time for Pomodoro (min)</label>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  id="save-time"
                  className={styles.inputField}
                  placeholder="5"
                  min="1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPomoInput(e.target.value);
                  }}
                  value={pomoInput}
                  onKeyDown={(e) => e.key === "Enter" && handleSavePomo()}
                />
                <button
                  onClick={handleSavePomo}
                  className={styles.actionButton}
                >
                  Save
                </button>
              </div>
            </div>
            {/* ShortBreak Input */}
            <div className={styles.inputItemContainer}>
              <label htmlFor="save-time">Set Time for Short Break (min)</label>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  id="save-time"
                  className={styles.inputField}
                  placeholder="5"
                  min="1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setShortBreakInput(e.target.value);
                  }}
                  value={shortBreakInput}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveShorBreak()}
                />
                <button
                  onClick={handleSaveShorBreak}
                  className={styles.actionButton}
                >
                  Save
                </button>
              </div>
            </div>
            {/* LongBreak Input */}
            <div className={styles.inputItemContainer}>
              <label htmlFor="save-time">Set Time for Long Break (min)</label>
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  id="save-time"
                  className={styles.inputField}
                  placeholder="5"
                  min="1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setLongBreakInput(e.target.value);
                  }}
                  value={longBreakInput}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveLongBreak()}
                />
                <button
                  onClick={handleSaveLongBreak}
                  className={styles.actionButton}
                >
                  Save
                </button>
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
