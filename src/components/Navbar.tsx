"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();

  console.log("NAVBAR PLAN:", plan);
  console.log("NAVBAR SAVED:", saved);

  return (
    <nav className="border-b border-[#1c1f26] bg-[rgba(12,13,16,0.95)] backdrop-blur-[2px]">
      <div className="mx-auto flex h-[80px] max-w-[1280px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-[10px]">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={28}
            height={28}
          />

          <span className="text-[18px] font-black uppercase tracking-[0.9px] text-white">
            FITLOG
          </span>
        </Link>

        <div className="flex items-center">
          <Link
            href="/"
            className="rounded-full bg-[#1a2312] px-4 py-1.5 text-[12px] font-semibold text-[#c2f800]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="px-4 py-[5.5px] pl-5 text-[12px] font-medium text-[#9ca3af]"
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-[#d1d5db]">
              Plan
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c2f800] text-[11px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan?tab=saved" className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-[#9ca3af]">
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