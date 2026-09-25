import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-[#1c1f26] bg-[rgba(12,13,16,0.95)] backdrop-blur-[2px]">
      <div className="mx-auto flex h-[80px] max-w-[1280px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px]">
          <Image src="/assets/logo.png" alt="FitLog" width={28} height={28} />

          <span className="text-[18px] font-black uppercase tracking-[0.9px] text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center">
          {/* Active page */}
          <Link
            href="/"
            className="rounded-full bg-[#1a2312] px-4 py-1.5 text-[12px] font-semibold text-[#c2f800]"
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            className="px-4 py-[5.5px] pl-5 text-[12px] font-medium text-[#9ca3af] transition-colors hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Plan / Saved */}
        <div className="flex items-center gap-6">
          {/* Plan */}
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-[#d1d5db]">Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c2f800] text-[11px] font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-[#9ca3af]">
              Saved
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2d313b] text-[11px] font-medium text-[#d1d5db]">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
