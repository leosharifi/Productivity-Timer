import "./globals.css";
import TimerProvider from "@/src/app/context/TimerContext";

export const metadata = {
  title: "Productivity Timer",
  description: "Pomodoro app",
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
