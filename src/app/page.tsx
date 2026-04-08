import CodeEditor from "@/components/editor/CodeEditor";
import ReviewPanel from "@/components/review/ReviewPanel";

export default function Home() {
  return (
    <main className="h-screen bg-background text-white flex">
      
      {/* LEFT - Editor */}
      <div className="w-1/2 border-r border-border p-4">
        <CodeEditor />
      </div>

      {/* RIGHT - Review */}
      <div className="w-1/2 p-4 overflow-y-auto">
        <ReviewPanel />
      </div>

    </main>
  );
}