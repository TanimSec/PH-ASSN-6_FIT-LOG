import Image from "next/image";
import { oswald } from "@/app/fonts";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workout: Workout = await response.json();

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,588px)_minmax(0,576px)]">
        {/* =========================
            LEFT: WORKOUT IMAGE
        ========================== */}
        <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="relative h-full w-full">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 588px"
            />
          </div>
        </div>

        {/* =========================
            RIGHT: WORKOUT INFORMATION
        ========================== */}
        <div className="flex flex-col">
          {/* Title */}
          <div className="pb-3">
            <h1 className="font-[Oswald] text-[36px] font-bold uppercase leading-[40px] tracking-[-0.9px] text-white">
              {workout.name}
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-[576px] pb-5">
            <p className="text-[16px] leading-6 text-[#9ca3af]">
              {workout.description}
            </p>
          </div>

          {/* Category Tags */}
          <div className="pb-7">
            <div className="flex items-center gap-[10px]">
              {workout.muscleGroups.map((muscleGroup) => (
                <span
                  key={muscleGroup}
                  className="rounded-full bg-[#ccff00] px-[14px] py-1 text-[12px] font-semibold leading-4 text-[#0f1115]"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>
          </div>

          {/* =========================
              SPECIFICATIONS
          ========================== */}
          <div className="pb-8">
            <div className="overflow-hidden rounded-2xl border border-[#232834] bg-[#151922] p-px">
              <div>
                <SpecRow
                  label="EQUIPMENT"
                  value={workout.equipment}
                />

                <SpecRow
                  label="DIFFICULTY"
                  value={workout.difficulty}
                />

                <SpecRow
                  label="SETS"
                  value={String(workout.sets)}
                />

                <SpecRow
                  label="REPS"
                  value={workout.reps}
                />

                <SpecRow
                  label="DURATION"
                  value={`${workout.duration} min`}
                />

                <SpecRow
                  label="CALORIES"
                  value={`${workout.caloriesBurned} kcal`}
                />

                <SpecRow
                  label="RATING"
                  value={String(workout.rating)}
                  last
                />
              </div>
            </div>
          </div>

          {/* =========================
              INSTRUCTIONS
          ========================== */}
          <div className="pb-9">
            <div className="flex flex-col gap-4">
              <h2 className="text-[16px] font-extrabold uppercase leading-6 tracking-[0.8px] text-white">
                INSTRUCTIONS
              </h2>

              <ol className="flex flex-col gap-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={`${workout.id}-${index}`}
                    className="flex items-start text-[14px] leading-[22.75px]"
                  >
                    <span className="pr-2 text-[#9ca3af]">
                      {index + 1}.
                    </span>

                    <span className="text-[#d1d5db]">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* =========================
              ACTION BUTTONS
          ========================== */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Add to Plan */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-6 py-3 text-[14px] font-semibold leading-5 text-[#0f1115] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
              <span className="text-base">＋</span>

              <span>Add to today's plan</span>
            </button>

            {/* Save */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#374151] px-[25px] py-[13px] text-[14px] font-medium leading-5 text-[#e5e7eb]"
            >
              <span className="text-base">♡</span>

              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =================================
   SPECIFICATION ROW
================================= */

function SpecRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center px-6 ${
        last
          ? "pb-[14px] pt-[15px]"
          : "border-b border-[#1e2330] py-[15px]"
      }`}
    >
      <div className="flex-1">
        <p className="text-[12px] font-bold uppercase leading-4 tracking-[0.6px] text-[#9ca3af]">
          {label}
        </p>
      </div>

      <div className="flex-1 text-right">
        <p className="text-[14px] font-medium leading-5 text-[#e5e7eb]">
          {value}
        </p>
      </div>
    </div>
  );
}