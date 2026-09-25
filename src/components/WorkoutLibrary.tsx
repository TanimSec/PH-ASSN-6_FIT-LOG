"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import type { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data: Workout[] = await response.json();

        setWorkouts(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load workouts.");
      } finally {
        setLoading(false);
      }
    }

    fetchWorkouts();
  }, []);

  if (loading) {
    return (
      <section id="library" className="mx-auto max-w-[1232px] px-6 py-16">
        <p className="text-sm text-[#9ca3af]">Loading workouts...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="library" className="mx-auto max-w-[1232px] px-6 py-16">
        <p className="text-sm text-red-400">{error}</p>
      </section>
    );
  }

  return (
    <section id="library" className="mx-auto max-w-[1232px] px-6 py-16">
      <div className="mb-8">
        <h2 className="text-4xl font-black uppercase text-white">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-[#9ca3af]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            id={workout.id}
            name={workout.name}
            image={workout.image}
            muscleGroups={workout.muscleGroups}
            equipment={workout.equipment}
            duration={workout.duration}
            caloriesBurned={workout.caloriesBurned}
            rating={workout.rating}
          />
        ))}
      </div>
    </section>
  );
}
