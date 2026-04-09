"use client";

import { DiffEditor } from "@monaco-editor/react";

type Props = {
  original: string;
  modified: string;
  language: string;
};

export default function CodeDiffViewer({
  original,
  modified,
  language,
}: Props) {
  if (!original || !modified) return null;

  return (
    <div className="mt-6">
      <h2 className="mb-2 text-purple-400 font-semibold">
        🔍 Code Diff
      </h2>

      <div className="h-[500px] border border-border rounded overflow-hidden">
        <DiffEditor
          height="100%"
          theme="vs-dark"
          language={language}
          original={original}
          modified={modified}
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 14,
            renderSideBySide: true,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </div>
  );
}