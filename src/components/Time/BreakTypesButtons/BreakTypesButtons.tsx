import React from "react";
import styles from "./BreakTypesButton.module.css";
import Pomodoro from "../Timers/Pomodoro/Pomodoro";
import ShortBreak from "../Timers/ShortBreak/ShortBreak";
import LongBreak from "../Timers/LongBreak/LongBreak";
import { useState } from "react";

const BreakTypesButtons = () => {
  const [activeTimer, setActiveTimer] = useState<string>("pomodoro");

  return (
    <div className={styles.container}>
      <div className={styles.buttonBox}>
        <button
          className={`${styles.breakButton} ${
            activeTimer === "pomodoro" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveTimer("pomodoro");
            document.body.style.background = "#a92a2aff";
          }}
        >
          Pomodoro
        </button>
        <button
          className={` ${styles.breakButton} ${
            activeTimer === "shortBreak" ? styles.active : ""
          } `}
          onClick={() => {
            setActiveTimer("shortBreak");
            document.body.style.background =
              "linear-gradient(135deg, #667eea, #764ba2)";
          }}
        >
          Short Break
        </button>
        <button
          className={`${styles.breakButton} ${
            activeTimer === "longBreak" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveTimer("longBreak");
            document.body.style.background = `url('https://cdn.wallpapersafari.com/78/37/LJUnOz.jpg')`;
          }}
        >
          Long Break
        </button>
      </div>
      {activeTimer === "pomodoro" && <Pomodoro />}
      {activeTimer === "shortBreak" && <ShortBreak />}
      {activeTimer === "longBreak" && <LongBreak />}
    </div>
  );
};

export default BreakTypesButtons;
