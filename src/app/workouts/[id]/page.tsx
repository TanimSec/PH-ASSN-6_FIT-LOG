import Image from "next/image";
import Link from "next/link";

import { oswald } from "@/app/fonts";
import WorkoutActions from "@/components/WorkoutActions";
import type { Workout } from "@/types/workout";

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getWorkout(id: string): Promise<Workout> {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  const data = await response.json();

  return data;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  let workout: Workout;

  try {
    workout = await getWorkout(id);
  } catch {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-[1280px] items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold tracking-[2px] text-[#c2f800]">
            FITLOG
          </p>

          <h1
            className={`${oswald.className} text-3xl font-bold uppercase text-white`}
          >
            WORKOUT NOT FOUND
          </h1>

          <p className="mt-3 text-sm text-[#9ca3af]">
            We couldn&apos;t find the workout you&apos;re looking for.
          </p>

          <Link
            href="/"
            className="
              mt-6
              inline-flex
              rounded-full
              bg-[#c2f800]
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              transition-opacity
              hover:opacity-90
            "
          >
            Back to workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1">
      <div
        className="
          flex
          flex-col
          gap-8
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-8
          md:py-12
          lg:flex-row
          lg:px-12
        "
      >
        {/* ================================= */}
        {/* LEFT — WORKOUT IMAGE              */}
        {/* ================================= */}

        <section
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#232834]
            bg-[#171a21]
            shadow-xl
            lg:h-[797px]
            lg:w-[48%]
          "
        >
          <div
            className="
              relative
              aspect-[4/3]
              w-full
              sm:aspect-[4/5]
              lg:h-full
              lg:aspect-auto
            "
          >
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 588px"
            />
          </div>
        </section>

        {/* ================================= */}
        {/* RIGHT — WORKOUT DETAILS            */}
        {/* ================================= */}

        <section
          className="
            flex
            w-full
            flex-col
            lg:w-[52%]
          "
        >
          {/* TITLE */}

          <h1
            className={`
              ${oswald.className}
              text-[26px]
              font-bold
              uppercase
              leading-tight
              tracking-[-0.9px]
              text-white
              sm:text-[32px]
              sm:leading-10
              md:text-[36px]
            `}
          >
            {workout.name}
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-3
              max-w-[576px]
              text-[15px]
              leading-6
              text-[#9ca3af]
              sm:mt-4
              sm:text-[16px]
            "
          >
            {workout.description}
          </p>

          {/* CATEGORY TAGS */}

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
            {workout.muscleGroups.map((muscleGroup) => (
              <span
                key={muscleGroup}
                className="
                  rounded-full
                  bg-[#ccff00]
                  px-3
                  py-1
                  text-[11px]
                  font-semibold
                  leading-4
                  text-[#0f1115]
                  sm:px-3.5
                  sm:text-[12px]
                "
              >
                {muscleGroup}
              </span>
            ))}
          </div>

          {/* ================================= */}
          {/* SPECS                              */}
          {/* ================================= */}

          <div
            className="
              mt-6
              overflow-hidden
              rounded-2xl
              border
              border-[#232834]
              bg-[#151922]
              sm:mt-7
            "
          >
            <SpecRow label="Equipment" value={workout.equipment} />

            <SpecRow label="Difficulty" value={workout.difficulty} />

            <SpecRow label="Sets" value={String(workout.sets)} />

            <SpecRow label="Reps" value={workout.reps} />

            <SpecRow label="Duration" value={`${workout.duration} min`} />

            <SpecRow
              label="Calories"
              value={`${workout.caloriesBurned} kcal`}
            />

            <SpecRow label="Rating" value={String(workout.rating)} last />
          </div>

          {/* ================================= */}
          {/* INSTRUCTIONS                       */}
          {/* ================================= */}

          <section className="mt-6 sm:mt-7">
            <h2
              className="
                text-[15px]
                font-extrabold
                uppercase
                leading-6
                tracking-[0.8px]
                text-white
                sm:text-[16px]
              "
            >
              Instructions
            </h2>

            <ol className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={`${index}-${instruction}`}
                  className="
                      flex
                      gap-3
                      text-[13px]
                      leading-[22px]
                      text-[#d1d5db]
                      sm:text-[14px]
                      sm:leading-[22.75px]
                    "
                >
                  <span className="shrink-0 text-[#9ca3af]">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* ================================= */}
          {/* ACTION BUTTONS                     */}
          {/* ================================= */}

          <div className="mt-6 sm:mt-7">
            <WorkoutActions workout={workout} />
          </div>
        </section>
      </div>
    </main>
  );
}

/* ================================= */
/* SPECIFICATION ROW                 */
/* ================================= */

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
      className={`
        flex
        min-h-[48px]
        items-center
        justify-between
        gap-4
        px-4
        py-2.5
        sm:min-h-[52px]
        sm:gap-6
        sm:px-5
        sm:py-3
        ${!last ? "border-b border-[#1e2330]" : ""}
      `}
    >
      <span
        className="
          text-[11px]
          font-bold
          uppercase
          leading-4
          tracking-[0.6px]
          text-[#9ca3af]
          sm:text-[12px]
        "
      >
        {label}
      </span>

      <span
        className="
          text-right
          text-[13px]
          font-medium
          leading-5
          text-[#e5e7eb]
          sm:text-[14px]
        "
      >
        {value}
      </span>
    </div>
  );
}
