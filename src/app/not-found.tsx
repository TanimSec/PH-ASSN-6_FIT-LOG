import Link from "next/link";

import { oswald } from "@/app/fonts";

export default function NotFound() {
  return (
    <main className="flex flex-1 min-h-[calc(100vh-81px)] items-center justify-center px-4 sm:px-6">
      <div className="text-center">
        <p className="mb-3 text-xs font-semibold tracking-[2px] text-[#c2f800]">
          FITLOG
        </p>

        <h1
          className={`${oswald.className} text-5xl sm:text-6xl font-bold uppercase leading-none text-white`}
        >
          404
        </h1>

        <h2
          className={`${oswald.className} mt-4 text-xl sm:text-2xl font-bold uppercase text-white`}
        >
          WORKOUT NOT FOUND
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#9ca3af]">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="
            mt-6
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-[#c2f800]
            px-6
            py-3
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-black
            transition-opacity
            hover:opacity-90
          "
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}