"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { Workout } from "@/types/workout";

type FitLogContextType = {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => boolean;
  removeSaved: (id: number) => void;

  showToast: (message: string) => void;
};

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  // -----------------------------
  // PLAN
  // -----------------------------

  function addToPlan(workout: Workout): boolean {
    let added = false;

    setPlan((currentPlan) => {
      // Already exists
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      // Assignment requirement:
      // Maximum 5 workouts
      if (currentPlan.length >= 5) {
        return currentPlan;
      }

      added = true;

      return [...currentPlan, workout];
    });

    return added;
  }

  function removeFromPlan(id: number) {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );
  }

  // -----------------------------
  // SAVED
  // -----------------------------

  function saveWorkout(workout: Workout): boolean {
    let savedSuccessfully = false;

    setSaved((currentSaved) => {
      // Already saved
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }

      savedSuccessfully = true;

      return [...currentSaved, workout];
    });

    return savedSuccessfully;
  }

  function removeSaved(id: number) {
    setSaved((currentSaved) =>
      currentSaved.filter((workout) => workout.id !== id)
    );
  }

  // -----------------------------
  // TOAST
  // -----------------------------

  function showToast(message: string) {
    window.dispatchEvent(
      new CustomEvent("fitlog-toast", {
        detail: message,
      })
    );
  }

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        showToast,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}