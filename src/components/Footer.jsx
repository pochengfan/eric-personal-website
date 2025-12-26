import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-sm text-gray-500">© {new Date().getFullYear()} 范博丞 — Pocheng Fan · 電子郵件：fanpocheng2006@gmail.com</div>
    </footer>
  );
}
