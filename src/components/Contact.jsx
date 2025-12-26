import React from "react";

export default function Contact() {
  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+886 905-416-496");
      alert("電話已複製到剪貼簿：+886 905-416-496");
    } catch (e) {
      alert("請手動複製：+886 905-416-496");
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold mb-4">聯絡方式</h2>
      <div className="card">
        <p className="mb-2">電子郵件： <a href="mailto:fanpocheng2006@gmail.com" className="text-blue-600 hover:underline">fanpocheng2006@gmail.com</a></p>
        <p className="mb-2">聯絡電話： <button onClick={copyPhone} className="text-blue-600 hover:underline">+886 905-416-496（點此複製）</button></p>

        <p className="mt-4 text-sm text-gray-500">若你希望我加入作品範例的詳細頁或多語系（中/英）版本，我可以幫你擴充專案頁面與路由。</p>
      </div>
    </section>
  );
}
