"use client";
import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

interface TimerContextType {
  pomoMinutes: number;
  setPomoMinutes: (minutes: number) => void;
  shortBreakMinutes: number;
  setShortBreakMinutes: (minutes: number) => void;
  longBreakMinutes: number;
  setLongBreakMinutes: (minutes: number) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);
const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [pomoMinutes, setPomoMinutes] = useState(25);
  const [shortBreakMinutes, setShortBreakMinutes] = useState(5);
  const [longBreakMinutes, setLongBreakMinutes] = useState(15);

  return (
    <TimerContext.Provider
      value={{
        pomoMinutes,
        setPomoMinutes,
        shortBreakMinutes,
        setShortBreakMinutes,
        longBreakMinutes,
        setLongBreakMinutes,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
