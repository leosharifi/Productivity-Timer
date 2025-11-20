import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
