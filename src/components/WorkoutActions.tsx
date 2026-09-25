"use client";

import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

type WorkoutActionsProps = {
  workout: Workout;
};

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    addToPlan,
    saveWorkout,
    plan,
    saved,
    showToast,
  } = useFitLog();

  const isInPlan = plan.some(
    (item) => item.id === workout.id
  );

  const isSaved = saved.some(
    (item) => item.id === workout.id
  );

  function handleAddToPlan() {
    // Already in plan
    if (isInPlan) {
      showToast("Workout is already in today's plan.");
      return;
    }

    // Assignment requirement:
    // Maximum 5 workouts
    if (plan.length >= 5) {
      showToast(
        "Your plan is full. Maximum 5 workouts."
      );
      return;
    }

    addToPlan(workout);

    showToast(
      "Workout added to today's plan."
    );
  }

  function handleSave() {
    // Already saved
    if (isSaved) {
      showToast("Workout is already saved.");
      return;
    }

    saveWorkout(workout);

    showToast("Workout saved for later.");
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* ADD TO PLAN */}

      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={isInPlan}
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#c2f800]
          px-6
          py-3
          text-sm
          font-semibold
          text-black
          transition-opacity
          hover:opacity-90
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <span>＋</span>

        <span>
          {isInPlan
            ? "Added to today's plan"
            : "Add to today's plan"}
        </span>
      </button>

      {/* SAVE */}

      <button
        type="button"
        onClick={handleSave}
        disabled={isSaved}
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-[#374151]
          px-6
          py-3
          text-sm
          font-medium
          text-[#e5e7eb]
          transition-colors
          hover:bg-[#1b2029]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <span className="text-lg">
          {isSaved ? "♥" : "♡"}
        </span>

        <span>
          {isSaved
            ? "Saved"
            : "Save for later"}
        </span>
      </button>
    </div>
  );
}