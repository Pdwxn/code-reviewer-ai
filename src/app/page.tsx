"use client";

import { useState } from "react";
import CodeEditor from "@/components/editor/CodeEditor";
import ReviewPanel from "@/components/review/ReviewPanel";
import FixedCodePanel from "@/components/review/FixedCodePanel";
import { useStreamingReview } from "@/lib/useStreamingReview";

export default function Home() {
  const [language, setLanguage] = useState("javascript");

  const {
    reviewCode,
    fixCode,
    loading,
    result,
    fixedCode,
  } = useStreamingReview();

  return (
    <main className="h-screen bg-background text-white flex">
      
      {/* LEFT */}
      <div className="w-1/2 border-r border-border p-4">
        <CodeEditor
          language={language}
          setLanguage={setLanguage}
          onReview={reviewCode}
          onFix={fixCode}
          loading={loading}
        />
      </div>

      {/* RIGHT */}
      <div className="w-1/2 p-4 overflow-y-auto">
        <ReviewPanel result={result} />
        <FixedCodePanel code={fixedCode} language={language} />
      </div>

    </main>
  );
}