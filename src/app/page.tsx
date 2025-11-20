// src/app/page.tsx
"use client";

import { useState } from "react";
import Header from "@/src/components/Header/Header";
import BackgroundColors from "@/src/components/BackgroundColors/BackgroundColors";
import BreakTypesButtons from "../components/BreakTypesButtons/BreakTypesButtons";

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
