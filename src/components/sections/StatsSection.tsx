import React from "react";
import { useAnimatedCounter } from "@/hooks/use-scroll-animation";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Active Clients" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { ref, count } = useAnimatedCounter(value);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base opacity-90">
        {label}
      </div>
    </div>
  );
};

export const StatsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 px-4 py-16 md:px-16 md:py-24 w-full bg-primary text-white">
      <div className="flex flex-col max-w-screen-xl items-center gap-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

