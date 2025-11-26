"use client";
import styles from "./Pomodoro.module.css";
import { useEffect, useState, useRef } from "react";
import { useTimer } from "@/src/app/context/TimerContext";

export default function Pomodoro() {
  const { pomoMinutes } = useTimer();
  const [time, setTime] = useState(pomoMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [startButton, setStartButton] = useState("Start");
  const audioAlert = useRef<HTMLAudioElement | null>(null);
  const startButtonClickAlert = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setTime(pomoMinutes * 60);
      setIsRunning(false);
      setStartButton("Start");
    }, 100);
  }, [pomoMinutes]);

  useEffect(() => {
    audioAlert.current = new Audio("/sound/pomodoroBreakAlert.mp3");
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
      audioAlert.current?.play();

      setTimeout(() => {
        setTime(pomoMinutes * 60);
        setIsRunning(false);
        setStartButton("Start");
      }, 1000);
    }
  }, [time, pomoMinutes]);

  function runTheTime() {
    if (startButton === "Start") {
      setIsRunning(true);
      if (startButtonClickAlert.current) {
        startButtonClickAlert.current
          .play()
          .catch((err) => console.log("Audio failed", err));
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
