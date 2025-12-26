import React from "react";

export default function About() {
  return (
    <section id="about" className="mb-10 max-w-4xl mx-auto px-6">
      <h2 className="text-xl font-semibold mb-4">關於我</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="mb-3">我叫范博丞（Pocheng Fan），目前就讀於國立台灣大學國際企業學系，主修國際貿易。</p>

        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>主修：國際貿易（國立台灣大學國際企業學系）</li>
          <li>學術與活動：曾任台大國際商業營團隊顧問，並參與台大管理學院個案競賽</li>
          <li>英語能力：TOEIC 910 分</li>
          <li>實習經驗：曾於安永會計師事務所（Ernst & Young）短暫實習</li>
          <li>網站類型：前端單頁個人作品 / 自傳展示</li>
        </ul>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">我擅長以前端為媒介呈現資訊與故事，注重介面清晰與使用者體驗。除了課業外，我喜歡參與商業個案與團隊顧問工作，擁有跨領域協作與簡報經驗。</p>
      </div>
    </section>
  );
}
