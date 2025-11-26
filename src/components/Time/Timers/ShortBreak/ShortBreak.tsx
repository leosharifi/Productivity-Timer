"use client";
import styles from "./ShortBreak.module.css";
import { useEffect, useState, useRef } from "react";
import { useTimer } from "@/src/app/context/TimerContext";

export default function ShortBreak() {
  const { shortBreakMinutes } = useTimer();
  const [time, setTime] = useState(shortBreakMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [startButton, setStartButton] = useState("Start");
  const shortBreakAlert = useRef<HTMLAudioElement | null>(null);
  const startButtonClickAlert = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setTime(shortBreakMinutes * 60);
    }, 100);
  }, [shortBreakMinutes]);
  useEffect(() => {
    shortBreakAlert.current = new Audio("/sound/shortBreakAlert.mp3");
    startButtonClickAlert.current = new Audio(
      "/sound/StartButtonClickAlert.mp3"
    );
  }, []);
  useEffect(() => {
    if (!isRunning || time <= 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, time]);
  useEffect(() => {
    if (time === 0) {
      if (shortBreakAlert.current) shortBreakAlert.current.play();
      // alert("Do you like to focus or take a long Break");

      const timeout = setTimeout(() => {
        setTime(shortBreakMinutes * 60);
        setIsRunning(false);
        setStartButton("Start");
      });
      return () => clearTimeout(timeout);
    }
  }, [time, shortBreakMinutes]);
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
          .catch((error) => console.log("Audio failed:", error));
      }
    } else {
      setIsRunning(true);
      if (startButtonClickAlert.current) {
        startButtonClickAlert.current
          .play()
          .catch((err) => console.log("Audio failed:", err));
      }
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
