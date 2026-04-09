"use client";

import Editor from "@monaco-editor/react";

type Props = {
  code: string;
  setCode: (code: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
  onReview: (code: string, language: string) => void;
  onFix: (code: string, language: string) => void;
  reviewLoading: boolean;
  fixLoading: boolean;
};

export default function CodeEditor({ code, setCode, language, setLanguage, onReview, onFix, reviewLoading, fixLoading }: Props) {
  return (
    <div className="h-full flex flex-col gap-3">

      {/* Top bar */}
      <div className="flex gap-2 items-center">
      <select
  className="bg-panel border border-border p-2 rounded"
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <button
          onClick={() => onReview(code, language)}
          disabled={reviewLoading}
          className="bg-accent text-black px-4 py-2 rounded font-semibold disabled:opacity-50"
        >
          {reviewLoading ? "Reviewing..." : "Review Code"}
        </button>

        <button
    onClick={() => onFix(code, language)}
    disabled={fixLoading}
    className="bg-green-500 text-black px-4 py-2 rounded font-semibold disabled:opacity-50"
  >
    {fixLoading ? "Fixing..." : "Fix Code"}
  </button>

        <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="text-sm text-gray-400 px-4 py-2 rounded font-semibold disabled:opacity-50"
        >
          Copy
        </button>

        <button
          onClick={() => setCode("")}
          className="text-sm text-gray-400 px-4 py-2 rounded font-semibold disabled:opacity-50"
        >
  Clear
</button>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 border border-border rounded overflow-hidden">
        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>

    </div>
  );
}