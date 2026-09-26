import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-0 max-w-[1232px] flex-col items-center justify-between gap-8 px-4 py-10 sm:px-6 sm:py-14 md:gap-10 md:px-[33px] lg:min-h-[448px] lg:flex-row lg:py-0">
      {/* Left content */}
      <div className="flex w-full max-w-[558px] flex-col items-center text-center lg:items-start lg:text-left">
        <p className="mb-3 text-xs font-semibold tracking-[2px] text-[#c2f800] sm:mb-4">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl sm:leading-[1.05] lg:text-5xl">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p className="mt-4 max-w-[500px] text-sm leading-6 text-[#9ca3af] sm:mt-6">
          Your personal library of focused workouts built to help you train
          consistently and track your progress.
        </p>

        <a
          href="#library"
          className="mt-6 inline-flex items-center rounded-full bg-[#c2f800] px-6 py-3 text-xs font-bold uppercase tracking-wide text-black transition-all hover:opacity-90 active:scale-95 sm:mt-8"
        >
          BROWSE WORKOUTS
          <span className="ml-2">→</span>
        </a>
      </div>

      {/* Right image */}
      <div className="relative h-[240px] w-[240px] shrink-0 overflow-hidden rounded-2xl shadow-xl sm:h-[290px] sm:w-[290px] lg:h-[334px] lg:w-[334px]">
        <Image
          src="/assets/banner.png"
          alt="FitLog workout"
          width={334}
          height={334}
          priority
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
