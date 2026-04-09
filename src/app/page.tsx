"use client";

import { useState } from "react";
import CodeEditor from "@/components/editor/CodeEditor";
import ReviewPanel from "@/components/review/ReviewPanel";
import FixedCodePanel from "@/components/review/FixedCodePanel";
import { useStreamingReview } from "@/lib/useStreamingReview";
import CodeDiffViewer from "@/components/review/CodeDiffViewer";

export default function Home() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  
  const {
    reviewCode,
    fixCode,
    reviewLoading,
    fixLoading,
    result,
    fixedCode,
  } = useStreamingReview();

  return (
    <main className="h-screen bg-background text-white flex">
      
      {/* LEFT */}
      <div className="w-1/2 border-r border-border p-4">
        <CodeEditor
          code={code}
          setCode={setCode}
          language={language}
          setLanguage={setLanguage}
          onReview={reviewCode}
          onFix={fixCode}
          reviewLoading={reviewLoading}
          fixLoading={fixLoading}
        />
      </div>

      {/* RIGHT */}
      <div className="w-1/2 p-4 overflow-y-auto">
  <ReviewPanel result={result} />

  {fixedCode && (
    <>
      <FixedCodePanel code={fixedCode} language={language} />

      <CodeDiffViewer
        original={code}
        modified={fixedCode}
        language={language}
      />
    </>
  )}
</div>

    </main>
  );
}