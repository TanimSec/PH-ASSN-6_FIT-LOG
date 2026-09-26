import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1c1f26] bg-[#0f1115]">
      <div className="mx-auto flex min-h-[69px] max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:gap-4 sm:px-6 sm:py-0 md:px-12">
        {/* Logo */}

        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={20}
            height={20}
          />

          <span className="text-[12px] font-bold uppercase tracking-[0.5px] text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}

        <p className="text-center text-[11px] leading-4 text-[#8a92a0] sm:text-right sm:text-[12px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}