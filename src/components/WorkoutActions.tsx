"use client";

import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

type WorkoutActionsProps = {
  workout: Workout;
};

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const { addToPlan, saveWorkout, plan, saved } = useFitLog();

  const isInPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  function handleAddToPlan() {
    addToPlan(workout);
  }

  function handleSave() {
    saveWorkout(workout);
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Add to today's plan */}

      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={isInPlan || plan.length >= 5}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-6 py-3 text-[14px] font-semibold leading-5 text-[#0f1115] shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="text-base">＋</span>

        <span>
          {isInPlan ? "Added to plan" : "Add to today's plan"}
        </span>
      </button>

      {/* Save for later */}

      <button
        type="button"
        onClick={handleSave}
        disabled={isSaved}
        className="flex items-center justify-center gap-2 rounded-xl border border-[#374151] px-[25px] py-[13px] text-[14px] font-medium leading-5 text-[#e5e7eb] transition-colors hover:bg-[#151922] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="text-base">♡</span>

        <span>
          {isSaved ? "Saved" : "Save for later"}
        </span>
      </button>
    </div>
  );
}