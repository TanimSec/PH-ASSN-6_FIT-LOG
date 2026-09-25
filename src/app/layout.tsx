import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Track your workouts with FitLog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FitLogProvider>
          <Navbar />
          {children}
        </FitLogProvider>
      </body>
    </html>
  );
}