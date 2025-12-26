import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="max-w-4xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold">范博丞（Pocheng Fan）</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-3">國立台灣大學國際企業學系（主修國際貿易）學生 · 前端個人網站展示</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/resume.pdf" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">下載履歷</a>

            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">聯絡我</a>
          </div>

          <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <div>TOEIC: <strong>910</strong></div>
            <div>實習：安永會計師事務所（Ernst & Young） — 短期實習</div>
            <div>經歷：台大國際商業營團隊顧問、台大管理學院個案競賽參與者</div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src="/profile.jpg" alt="范博丞" className="profile-img" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/200'}} />
        </div>
      </div>
    </section>
  );
}
