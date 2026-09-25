"use client";

import Image from "next/image";
import Link from "next/link";

import type { Workout } from "@/types/workout";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="
        block
        overflow-hidden
        rounded-2xl
        border
        border-[#222630]
        bg-[#15171d]
        transition-transform
        duration-200
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* CONTENT */}

      <div className="flex min-h-[174px] flex-col p-6">
        {/* TAGS */}

        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="
                rounded-full
                bg-[#c2f800]
                px-2.5
                py-0.5
                text-[11px]
                font-bold
                uppercase
                leading-4
                tracking-[0.55px]
                text-black
              "
            >
              {group}
            </span>
          ))}
        </div>

        {/* NAME */}

        <h3 className="mt-2 text-[18px] font-bold uppercase leading-7 tracking-[0.45px] text-white">
          {workout.name}
        </h3>

        {/* EQUIPMENT */}

        <p className="text-[12px] leading-4 text-[#9ca3af]">
          {workout.equipment}
        </p>

        {/* STATS */}

        <div className="mt-auto flex items-center gap-4 border-t border-[#20242e] pt-3 text-[12px] leading-4 text-[#9ca3af]">
          <span>
            ◷ {workout.duration} min
          </span>

          <span>
            ♨ {workout.caloriesBurned} kcal
          </span>

          <span>
            ★ {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}