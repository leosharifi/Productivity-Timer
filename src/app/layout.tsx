import "./globals.css";
import TimerProvider from "@/src/app/context/TimerContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productivity Timer",
  description: "Modern Pomodoro timer by Leo Nexus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1264.0" data-gr-ext-installed="">
        <TimerProvider>{children}</TimerProvider>
      </body>
    </html>
  );
}
