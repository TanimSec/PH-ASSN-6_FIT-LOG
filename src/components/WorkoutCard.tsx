import Image from "next/image";

type WorkoutCardProps = {
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

export default function WorkoutCard({
  name,
  image,
  muscleGroups,
  equipment,
  duration,
  caloriesBurned,
  rating,
}: WorkoutCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d]">
      {/* Workout Image */}
      <div className="relative h-[192px] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Card Content */}
      <div className="flex min-h-[174px] flex-col justify-between p-6">
        {/* Workout Information */}
        <div>
          {/* Muscle Groups */}
          <div className="flex flex-wrap items-center gap-2">
            {muscleGroups.map((muscleGroup) => (
              <span
                key={muscleGroup}
                className="rounded-full bg-[#c2f800] px-[10px] py-[2px] text-[11px] font-bold uppercase leading-[16.5px] tracking-[0.55px] text-black"
              >
                {muscleGroup}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="pt-2 text-[18px] font-bold uppercase leading-7 tracking-[0.45px] text-white">
            {name}
          </h3>

          {/* Equipment */}
          <p className="text-[12px] leading-4 text-[#9ca3af]">
            {equipment}
          </p>
        </div>

        {/* Workout Stats */}
        <div className="flex items-center gap-4 border-t border-[#20242e] pt-[13px] text-[12px] leading-4 text-[#9ca3af]">
          <span>◷ {duration} min</span>

          <span>♨ {caloriesBurned} kcal</span>

          <span>★ {rating}</span>
        </div>
      </div>
    </article>
  );
}