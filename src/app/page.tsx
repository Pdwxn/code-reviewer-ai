"use client";

import CodeEditor from "@/components/editor/CodeEditor";
import ReviewPanel from "@/components/review/ReviewPanel";
import { useStreamingReview } from "@/lib/useStreamingReview";

export default function Home() {
  const { reviewCode, loading, result } = useStreamingReview();

  return (
    <main className="h-screen bg-background text-white flex">
      
      {/* LEFT */}
      <div className="w-1/2 border-r border-border p-4">
        <CodeEditor onReview={reviewCode} loading={loading} />
      </div>

      {/* RIGHT */}
      <div className="w-1/2 p-4 overflow-y-auto">
        <ReviewPanel result={result} />
      </div>

    </main>
  );
}