import React from "react";

const items = [
  { year: "2024", title: "安永會計師事務所短期實習", desc: "參與審計/商務相關協助與團隊會議" },
  { year: "2023", title: "台大管理學院個案競賽", desc: "與同學合作進行市場研究與簡報" },
  { year: "2022", title: "台大國際商業營 團隊顧問", desc: "擔任顧問，協助隊伍完善簡報與策略" }
];

export default function Timeline() {
  return (
    <section id="timeline" className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold mb-4">經歷時間軸</h2>
      <div className="space-y-4">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="text-sm font-medium w-20 text-gray-600 dark:text-gray-300">{it.year}</div>
            <div className="card flex-1">
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
