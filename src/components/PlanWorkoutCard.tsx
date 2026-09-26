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
  const { removeFromPlan, removeSaved, showToast } = useFitLog();

  function handleRemove() {
    if (isSavedTab) {
      removeSaved(workout.id);

      showToast("Workout removed from saved.");

      return;
    }

    removeFromPlan(workout.id);

    showToast("Workout removed from today's plan.");
  }

  function handleDone() {
    removeFromPlan(workout.id);

    showToast("Workout marked as done.");
  }

  return (
    <article
      className="
        w-full
        overflow-hidden
        rounded-xl
        border
        border-[#232732]
        bg-[#13161d]
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          p-4
          md:flex-row
          md:items-center
          md:justify-between
          md:gap-6
        "
      >
        {/* WORKOUT INFORMATION */}

        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
          "
        >
          {/* IMAGE */}

          <div
            className="
              relative
              h-44
              w-full
              shrink-0
              overflow-hidden
              rounded-lg
              sm:h-20
              sm:w-36
            "
          >
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 144px"
            />
          </div>

          {/* DETAILS */}

          <div className="min-w-0 flex-1">
            <Link href={`/workouts/${workout.id}`}>
              <h2
                className="
                  text-[18px]
                  font-bold
                  uppercase
                  leading-6
                  tracking-[0.2px]
                  text-white
                  transition-colors
                  hover:text-[#ccff00]
                "
              >
                {workout.name}
              </h2>
            </Link>

            <p className="mt-1 text-[12px] leading-4 text-[#8a92a0]">
              {workout.equipment}
            </p>

            <div
              className="
                mt-2
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2
                text-[12px]
                leading-4
                text-[#8a92a0]
              "
            >
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

        {/* ACTIONS */}

        <div
          className="
            flex
            w-full
            shrink-0
            flex-col
            gap-2.5
            sm:flex-row
            sm:items-center
            md:w-auto
          "
        >
          {/* VIEW DETAILS */}

          <Link
            href={`/workouts/${workout.id}`}
            className="
              flex
              h-[38px]
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-[#374151]
              px-[18px]
              text-[12px]
              font-medium
              leading-4
              text-[#e5e7eb]
              transition-colors
              hover:bg-[#1b2029]
              sm:w-auto
            "
          >
            View Details
          </Link>

          {/* MARK AS DONE */}

          {!isSavedTab && (
            <button
              type="button"
              onClick={handleDone}
              className="
                flex
                h-[38px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#c2f10d]
                px-[18px]
                text-[12px]
                font-semibold
                leading-4
                text-black
                transition-opacity
                hover:opacity-90
                sm:w-auto
              "
            >
              <span>✓</span>

              <span>Mark as Done</span>
            </button>
          )}

          {/* REMOVE */}

          <button
            type="button"
            onClick={handleRemove}
            className="
              flex
              h-[38px]
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-[#232732]
              text-[12px]
              font-medium
              text-[#8a92a0]
              transition-colors
              hover:bg-[#1f242d]
              hover:text-white
              sm:h-8
              sm:w-8
              sm:border-0
              sm:text-[20px]
              sm:font-light
            "
            aria-label={`Remove ${workout.name}`}
          >
            <span className="mr-1 sm:hidden">Remove</span>
            <span>×</span>
          </button>
        </div>
      </div>
    </article>
  );
}
