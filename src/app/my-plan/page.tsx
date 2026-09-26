"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { oswald } from "@/app/fonts";
import { useFitLog } from "@/context/FitLogContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import Footer from "@/components/Footer";

type Tab = "plan" | "saved";
type SortOption = "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const activeWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = useMemo(() => {
    return [...activeWorkouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }, [activeWorkouts, sortBy]);

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <>
      <main className="mx-auto w-full max-w-[1280px] flex-1">
        <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10">
          {/* =================================
              TITLE & DESCRIPTION
          ================================= */}

          <section className="flex flex-col gap-1.5 sm:gap-2">
            <h1
              className={`${oswald.className} text-[26px] sm:text-[30px] font-bold uppercase leading-tight sm:leading-9 tracking-[-0.75px] text-white`}
            >
              MY PLAN
            </h1>

            <p className="text-[13px] sm:text-[14px] leading-5 text-[#8a92a0]">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </section>

          {/* =================================
              METRICS
          ================================= */}

          <section className="flex min-h-0 sm:min-h-[122px] items-center rounded-2xl border border-[#232732] bg-[#13161d] px-4 py-4 sm:px-6 sm:py-5 md:px-[25px] md:pb-[25px] md:pt-[33px]">
            {/* Exercises */}

            <div className="min-w-0 flex-1 pr-2 sm:pr-4 md:pr-6">
              <p className="pb-1 text-[11px] sm:text-[12px] leading-4 text-[#8a92a0]">
                Exercises
              </p>

              <p
                className={`${oswald.className} text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-tight sm:leading-10 text-[#ccff00]`}
              >
                {plan.length}
              </p>
            </div>

            {/* Minutes */}

            <div className="min-w-0 flex-1 border-l border-[rgba(35,39,50,0.6)] pl-3 sm:pl-6 md:pl-[33px] pr-2 sm:pr-4 md:pr-8">
              <p className="pb-1 text-[11px] sm:text-[12px] leading-4 text-[#8a92a0]">
                Minutes
              </p>

              <p
                className={`${oswald.className} text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-tight sm:leading-10 text-white`}
              >
                {totalMinutes}
              </p>
            </div>

            {/* Calories */}

            <div className="min-w-0 flex-1 border-l border-[rgba(35,39,50,0.6)] pl-3 sm:pl-6 md:pl-[33px]">
              <p className="pb-1 text-[11px] sm:text-[12px] leading-4 text-[#8a92a0]">
                Calories
              </p>

              <p
                className={`${oswald.className} text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-tight sm:leading-10 text-white`}
              >
                {totalCalories}
              </p>
            </div>
          </section>

          {/* =================================
              TABS + SORT
          ================================= */}

          <section className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Tabs */}

            <div className="flex w-fit items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-[5px]">
              <button
                type="button"
                onClick={() => setActiveTab("plan")}
                className={`rounded-lg px-4 py-1.5 text-[12px] leading-4 transition-colors ${
                  activeTab === "plan"
                    ? "border border-[#2b303d] bg-[#1f242d] font-bold text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                    : "font-normal text-[#8a92a0] hover:text-white"
                }`}
              >
                Today&apos;s Plan
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`rounded-lg px-4 py-1.5 text-[12px] leading-4 transition-colors ${
                  activeTab === "saved"
                    ? "border border-[#2b303d] bg-[#1f242d] font-bold text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                    : "font-normal text-[#8a92a0] hover:text-white"
                }`}
              >
                Saved
              </button>
            </div>

            {/* Sort */}

            <div className="flex items-center gap-3">
              <span className="text-[12px] leading-4 text-[#8a92a0]">
                Sort By
              </span>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value as SortOption)
                  }
                  className="h-[34px] w-[93px] appearance-none rounded-[9px] border border-[#232732] bg-[#13161d] px-3 pr-8 text-[12px] text-white outline-none"
                >
                  <option value="duration">Duration</option>
                  <option value="calories">Calories</option>
                  <option value="rating">Rating</option>
                </select>

                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#8a92a0]">
                 ⌄
                </span>
              </div>
            </div>
          </section>

          {/* =================================
              WORKOUT LIST
          ================================= */}

          <section>
            {sortedWorkouts.length === 0 ? (
              <EmptyState activeTab={activeTab} />
            ) : (
              <div className="flex flex-col gap-4">
                {sortedWorkouts.map((workout) => (
                  <PlanWorkoutCard
                    key={workout.id}
                    workout={workout}
                    isSavedTab={activeTab === "saved"}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* =================================
   EMPTY STATE
================================= */

function EmptyState({
  activeTab,
}: {
  activeTab: Tab;
}) {
  return (
    <div className="flex min-h-[260px] sm:min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-[rgba(255,255,255,0.1)] bg-[rgba(17,19,23,0.5)] px-4 py-16 sm:py-24 text-center">
      <h2
        className={`${oswald.className} pb-2 text-[20px] font-bold uppercase leading-5 tracking-[0.7px] text-white`}
      >
        NOTHING HERE YET
      </h2>

      <p className="pb-6 text-[12px] leading-4 text-[#a1a1aa]">
        {activeTab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save workouts from the library to find them here later."}
      </p>

      <Link
        href="/#library"
        className="rounded-full bg-[#c2f10d] px-6 py-2.5 text-[12px] font-semibold leading-4 tracking-[-0.3px] text-black shadow-[0_10px_15px_-3px_rgba(194,241,13,0.1),0_4px_6px_-4px_rgba(194,241,13,0.1)] transition-opacity hover:opacity-90"
      >
        Go to workouts
      </Link>
    </div>
  );
}