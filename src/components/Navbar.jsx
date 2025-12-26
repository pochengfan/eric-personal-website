import React from "react";

export default function Navbar({ onToggleTheme, isDark }) {
  const links = [
    { href: "#about", label: "關於我" },
    { href: "#projects", label: "作品" },
    { href: "#skills", label: "技能" },
    { href: "#timeline", label: "經歷" },
    { href: "#contact", label: "聯絡" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-lg font-semibold">范博丞</div>
          <div className="hidden sm:block text-xs text-gray-500 dark:text-gray-400">Front-end · UX-focused</div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">{l.label}</a>
            ))}
          </div>

          <button
            onClick={onToggleTheme}
            aria-label="切換主題"
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 outline-focus"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M18.36 18.36l-.7-.7M6.34 6.34l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z"/></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
