// src/app/page.tsx
"use client";

import { useState } from "react";
import Header from "@/src/components/Time/Header/Header";
import BackgroundColors from "@/src/components/Time/BackgroundColors/BackgroundColors";
import BreakTypesButtons from "../components/Time/BreakTypesButtons/BreakTypesButtons";

// import styles from "./page.module.css";

export default function Page() {
  const [showBackgroundColors, setShowBackgroundColors] = useState(false);

  return (
    <main className="app">
      <Header onOpenBackground={() => setShowBackgroundColors(true)} />
      <BackgroundColors
        isVisible={showBackgroundColors}
        onClose={() => setShowBackgroundColors(false)}
      />
      <BreakTypesButtons />
    </main>
  );
}
