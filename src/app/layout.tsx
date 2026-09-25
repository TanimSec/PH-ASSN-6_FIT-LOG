import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Toast from "@/components/Toast";
import { FitLogProvider } from "@/context/FitLogContext";

import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0c0d10] text-white`}>
        <FitLogProvider>
          <Navbar />

          {children}

          <Toast />
        </FitLogProvider>
      </body>
    </html>
  );
}