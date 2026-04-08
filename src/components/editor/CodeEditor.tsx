"use client";

import { useState } from "react";

type Props = {
  onReview: (code: string, language: string) => void;
  loading: boolean;
};

export default function CodeEditor({ onReview, loading }: Props) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");

  return (
    <div className="h-full flex flex-col gap-3">
      
      {/* Language selector */}
      <select
        className="bg-panel border border-border p-2 rounded"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option>JavaScript</option>
        <option>TypeScript</option>
        <option>Python</option>
        <option>Java</option>
      </select>

      {/* Editor */}
      <textarea
        className="flex-1 bg-panel text-white p-4 outline-none rounded"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={() => onReview(code, language)}
        disabled={loading}
        className="bg-accent text-black py-2 rounded font-semibold disabled:opacity-50"
      >
        {loading ? "Reviewing..." : "Review Code"}
      </button>
    </div>
  );
}