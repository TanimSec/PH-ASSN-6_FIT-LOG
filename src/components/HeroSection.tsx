import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[448px] max-w-[1232px] items-center justify-between gap-10 px-[33px]">
      {/* Left content */}
      <div className="max-w-[558px]">
        <p className="mb-4 text-xs font-semibold tracking-[2px] text-[#c2f800]">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p className="mt-6 max-w-[500px] text-sm leading-6 text-[#9ca3af]">
          Your personal library of focused workouts built to help you train
          consistently and track your progress.
        </p>

        <a
          href="#library"
          className="mt-8 inline-flex items-center rounded-full bg-[#c2f800] px-6 py-3 text-xs font-bold uppercase tracking-wide text-black"
        >
          BROWSE WORKOUTS
          <span className="ml-2">→</span>
        </a>
      </div>

      {/* Right image */}
      <div className="h-[334px] w-[334px] shrink-0 overflow-hidden rounded-2xl">
        <Image
          src="/assets/banner.png"
          alt="FitLog workout"
          width={334}
          height={334}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
