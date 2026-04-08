"use client";

export default function CodeEditor() {
  return (
    <div className="h-full">
      <textarea
        className="w-full h-full bg-panel text-white p-4 outline-none"
        placeholder="Paste your code here..."
      />
    </div>
  );
}