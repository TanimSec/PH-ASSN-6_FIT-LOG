"use client";

import Image from "next/image";
import Link from "next/link";

import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

type PlanWorkoutCardProps = {
  workout: Workout;
  isSavedTab?: boolean;
};

export default function PlanWorkoutCard({
  workout,
  isSavedTab = false,
}: PlanWorkoutCardProps) {
  const {
    removeFromPlan,
    removeSaved,
  } = useFitLog();

  function handleRemove() {
    if (isSavedTab) {
      removeSaved(workout.id);
      return;
    }

    removeFromPlan(workout.id);
  }

  return (
    <article className="min-h-[114px] w-full rounded-xl border border-[#232732] bg-[#13161d]">
      <div className="flex min-h-[114px] items-center justify-between gap-6 p-4">
        {/* =================================
            THUMBNAIL + INFORMATION
        ================================= */}

        <div className="flex min-w-0 items-center gap-4">
          {/* Thumbnail */}

          <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>

          {/* Information */}

          <div className="min-w-0">
            <Link href={`/workouts/${workout.id}`}>
              <h2
                className="truncate text-[18px] font-bold uppercase leading-6 tracking-[0.2px] text-white hover:text-[#ccff00]"
              >
                {workout.name}
              </h2>
            </Link>

            <p className="mt-0.5 text-[12px] leading-4 text-[#8a92a0]">
              {workout.equipment}
            </p>

            {/* Stats */}

            <div className="mt-1.5 flex flex-wrap items-center gap-4 text-[12px] leading-4 text-[#8a92a0]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#ccff00]">◷</span>
                {workout.duration} min
              </span>

              <span className="flex items-center gap-1.5">
                <span className="text-[#ccff00]">♨</span>
                {workout.caloriesBurned} kcal
              </span>

              <span className="flex items-center gap-1.5">
                <span className="text-[#ccff00]">★</span>
                {workout.rating}
              </span>
            </div>
          </div>
        </div>

        {/* =================================
            ACTIONS
        ================================= */}

        <div className="flex shrink-0 items-center gap-3">
          {/* View Details */}

          <Link
            href={`/workouts/${workout.id}`}
            className="flex h-[34px] items-center justify-center rounded-full border border-[#374151] px-[18px] text-[12px] font-medium leading-4 text-[#e5e7eb] transition-colors hover:bg-[#1b2029]"
          >
            View Details
          </Link>

          {/* Mark as Done */}

          {!isSavedTab && (
            <button
              type="button"
              onClick={handleRemove}
              className="flex h-[34px] items-center justify-center gap-2 rounded-full bg-[#c2f10d] px-[18px] text-[12px] font-semibold leading-4 text-black transition-opacity hover:opacity-90"
            >
              <span>✓</span>
              <span>Mark as Done</span>
            </button>
          )}

          {/* Remove */}

          <button
            type="button"
            onClick={handleRemove}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[20px] font-light leading-none text-[#8a92a0] transition-colors hover:bg-[#1f242d] hover:text-white"
            aria-label={`Remove ${workout.name}`}
          >
            ×
          </button>
        </div>
      </div>
    </article>
  );
}