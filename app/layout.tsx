import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Football Career Simulator",
  description: "Build a club. Shape a generation. Leave your legacy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
