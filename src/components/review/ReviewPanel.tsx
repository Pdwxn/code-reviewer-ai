"use client";

import { parseReview } from "@/lib/parseReview";
import ReviewSection from "./ReviewSection";

type Props = {
  result: string;
};

export default function ReviewPanel({ result }: Props) {
  const sections = parseReview(result);

  if (!result.includes("##")) {
    return <p className="text-gray-400">{result}</p>;
  }

  if (!result) {
    return (
      <p className="text-gray-400">
        Your analysis will appear here...
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {sections.map((section, index) => (
        <ReviewSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}