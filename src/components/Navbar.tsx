"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1c1f26] bg-[rgba(12,13,16,0.95)] backdrop-blur-[6px]">
      <div className="mx-auto flex h-[64px] sm:h-[80px] max-w-[1280px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-[10px] shrink-0">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={28}
            height={28}
            className="h-6 w-6 sm:h-7 sm:w-7"
          />

          <span className="text-[16px] sm:text-[18px] font-black uppercase tracking-[0.9px] text-white">
            FITLOG
          </span>
        </Link>

        <div className="flex items-center">
          <Link
            href="/"
            className="rounded-full bg-[#1a2312] px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-semibold text-[#c2f800] transition-colors"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="px-3 sm:px-4 py-1 sm:py-[5.5px] pl-3 sm:pl-5 text-[11px] sm:text-[12px] font-medium text-[#9ca3af] transition-colors hover:text-white"
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <Link href="/my-plan" className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] sm:text-[12px] font-medium text-[#d1d5db]">
              Plan
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c2f800] text-[11px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] sm:text-[12px] font-medium text-[#9ca3af]">
              Saved
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2d313b] text-[11px] font-medium text-[#d1d5db]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
