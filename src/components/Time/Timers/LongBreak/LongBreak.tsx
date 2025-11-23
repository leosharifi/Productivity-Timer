"use client";
import styles from "./LongBreak.module.css";
import { useEffect, useState, useRef } from "react";

export default function LongBreak() {
  const intialVal = 15 * 60;
  const [time, setTime] = useState(intialVal);
  const [isRunning, setIsRunning] = useState(false);
  const [startButton, setStartButton] = useState("Start");

  const longBreakAlert = useRef<HTMLAudioElement | null>(null);
  const startButtonClickAlert = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    longBreakAlert.current = new Audio("/sound/longBreakAlert.mp3");
    startButtonClickAlert.current = new Audio(
      "/sound/StartButtonClickAlert.mp3"
    );
  }, []);

  useEffect(() => {
    if (!isRunning || time <= 0) return;

    const interval = setInterval(() => {
      setTime((p) => p - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, time]);

  useEffect(() => {
    if (time === 0) {
      if (longBreakAlert.current) longBreakAlert.current.play();
      // alert("Time to Focus");

      const timeout = setTimeout(() => {
        setTime(intialVal);
        setIsRunning(false);
        setStartButton("Start");
      });
      return () => clearTimeout(timeout);
    }
  }, [time, intialVal]);

  function runTheTime() {
    if (startButton === "Start") {
      setIsRunning(true);
      if (startButtonClickAlert.current) {
        startButtonClickAlert.current
          .play()
          .catch((error) => console.log("Audio failed:", error));
      }
    } else if (startButton === "Pause ⏯️") {
      setIsRunning(false);
      if (startButtonClickAlert.current) {
        startButtonClickAlert.current
          .play()
          .catch((err) => console.log("Audio failed", err));
      }
    } else {
      setIsRunning(true);
      if (startButtonClickAlert.current) {
        startButtonClickAlert.current
          .play()
          .catch((err) => console.log("Audio failed", err));
      }
    }
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className={styles.timerBox}>
      <p>
        {minutes}:{seconds < 10 ? 0 : ""}
        {seconds}
      </p>
      <button
        onClick={() => {
          setStartButton(startButton === "Start" ? "Pause ⏯️" : "Start");
          runTheTime();
        }}
      >
        {startButton}
      </button>
    </div>
  );
}
