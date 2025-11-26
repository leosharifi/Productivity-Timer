import "./globals.css";
import TimerProvider from "@/src/app/context/TimerContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productivity Timer",
  description: "Modern Pomodoro timer by Leo Nexus",
  icons: {
    icon: "/images/appIcon.png",
    apple: "/images/appIcon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TimerProvider>{children}</TimerProvider>
      </body>
    </html>
  );
}
