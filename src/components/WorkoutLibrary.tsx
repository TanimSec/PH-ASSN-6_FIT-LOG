"use client";

import { useEffect, useState } from "react";

import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to load workouts");
        }

        const data: Workout[] = await response.json();

        setWorkouts(data);
      } catch (error) {
        console.error("Workout API error:", error);

        setError(
          "Unable to load workouts right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return (
    <section
      id="library"
      className="mx-auto w-full max-w-[1232px] px-4 sm:px-6 pb-16 sm:pb-20"
    >
      {/* LIBRARY HEADER */}

      <div className="mb-5 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase leading-tight sm:leading-9 text-white">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-xs text-[#9ca3af]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* LOADING STATE */}

      {loading && (
        <>
          <p className="mb-4 text-center text-sm text-[#9ca3af]">
            Loading workouts…
          </p>

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
            aria-label="Loading workouts"
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#222630]
                  bg-[#15171d]
                "
              >
                {/* IMAGE SKELETON */}

                <div className="h-48 animate-pulse bg-[#20232b]" />

                {/* CONTENT SKELETON */}

                <div className="space-y-4 p-6">
                  <div className="flex gap-2">
                    <div className="h-5 w-14 animate-pulse rounded-full bg-[#2a2e37]" />

                    <div className="h-5 w-14 animate-pulse rounded-full bg-[#2a2e37]" />
                  </div>

                  <div className="h-5 w-3/4 animate-pulse rounded bg-[#2a2e37]" />

                  <div className="h-4 w-1/2 animate-pulse rounded bg-[#222630]" />

                  <div className="border-t border-[#20242e] pt-4">
                    <div className="h-4 w-full animate-pulse rounded bg-[#222630]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ERROR STATE */}

      {!loading && error && (
        <div
          className="
            flex
            min-h-[300px]
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-[#232732]
            bg-[#13161d]
            px-6
            text-center
          "
        >
          <h3 className="text-lg font-bold uppercase text-white">
            WORKOUTS UNAVAILABLE
          </h3>

          <p className="mt-2 text-sm text-[#9ca3af]">
            {error}
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="
              mt-5
              rounded-full
              bg-[#c2f800]
              px-5
              py-2.5
              text-xs
              font-semibold
              text-black
              transition-opacity
              hover:opacity-90
            "
          >
            TRY AGAIN
          </button>
        </div>
      )}

      {/* WORKOUT GRID */}

      {!loading && !error && (
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      )}
    </section>
  );
}