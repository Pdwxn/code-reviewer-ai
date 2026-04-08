"use client";

import { useState } from "react";

export function useStreamingReview() {
  const [reviewLoading, setReviewLoading] = useState(false);
const [fixLoading, setFixLoading] = useState(false);

const [result, setResult] = useState("");

const reviewCode = async (code: string, language: string) => {
  setReviewLoading(true);
  setResult("");

  const res = await fetch("/api/review", {
    method: "POST",
    body: JSON.stringify({ code, language }),
  });

  if (!res.body) return;

  const reader = res.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    setResult(prev => prev + chunk);
  }

  setReviewLoading(false);
};

const [fixedCode, setFixedCode] = useState("");

const fixCode = async (code: string, language: string) => {
  setFixLoading(true);
  setFixedCode("");

  const res = await fetch("/api/fix", {
    method: "POST",
    body: JSON.stringify({ code, language }),
  });

  if (!res.body) return;

  const reader = res.body.getReader();
  const decoder = new TextDecoder();

  const cleanCode = (text: string) => {
    return text
      // eliminar <think>...</think>
      .replace(/<think>[\s\S]*?<\/think>/g, "")
  
      // eliminar markdown
      .replace(/```[\s\S]*?```/g, (match) =>
        match.replace(/```[\w]*\n?/, "").replace(/```$/, "")
      )
      .replace(/```/g, "")
  
      // limpiar espacios extra
      .trim();
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    setFixedCode(prev => cleanCode(prev + chunk));
  }
  console.log("STATUS:", res.status);

  console.log("FIXED RAW CODE:", fixedCode);
  console.log("FIXED CLEAN CODE:", cleanCode(fixedCode));
  setFixLoading(false);
};
  
  return { reviewCode, reviewLoading, fixCode, fixLoading, result, fixedCode };
}