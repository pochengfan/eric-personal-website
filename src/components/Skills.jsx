import React from "react";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript / React", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "簡報 / 商業分析", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold mb-4">技能</h2>
      <div className="grid gap-4">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1">
              <div className="text-sm">{s.name}</div>
              <div className="text-sm text-gray-500">{s.level}%</div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div className="skill-bar rounded-full" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
