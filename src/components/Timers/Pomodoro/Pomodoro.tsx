"use client";
import styles from "./Pomodoro.module.css";
import { useEffect, useState, useRef } from "react";

export default function Pomodoro() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [startButton, setStartButton] = useState("Start");
  const audioAlert = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioAlert.current = new Audio("/sound/pomodoroBreakAlert.mp3");
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
      if (audioAlert.current) audioAlert.current.play();
      // alert("Time for a Short Break");

      const timeout = setTimeout(() => {
        setTime(25 * 60);
        setIsRunning(false);
        setStartButton("Start");
      });
      return () => clearTimeout(timeout);
    }
  });
  function runTheTime() {
    if (startButton === "Start") {
      setIsRunning(true);
    } else if (startButton === "Pause ⏯️") {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className={styles.timerBox}>
      <p>
        {minutes}:{seconds < 10 ? "0" : ""}
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
