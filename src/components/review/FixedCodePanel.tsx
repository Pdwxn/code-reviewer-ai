"use client";

import Editor from "@monaco-editor/react";

type Props = {
  code: string;
  language: string;
};

export default function FixedCodePanel({ code, language }: Props) {
  if (!code) return null;

  return (
    <div className="mt-6">
      <h2 className="mb-2 text-green-400 font-semibold">
        ✅ Fixed Code
      </h2>

      <div className="h-[400px] border border-border rounded overflow-hidden">
        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          value={code}
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
    </div>
  );
}