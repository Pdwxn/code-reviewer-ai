"use client";

import { useState } from "react";

export function useStreamingReview() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const reviewCode = async (code: string, language: string) => {
    setLoading(true);
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

      // 🔥 append streaming text
      setResult(prev => prev + chunk);
    }

    setLoading(false);
  };

const [fixedCode, setFixedCode] = useState("");

const fixCode = async (code: string, language: string) => {
  setLoading(true);
  setFixedCode("");

  const res = await fetch("/api/fix", {
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
    setFixedCode(prev => prev + chunk);
  }

  setLoading(false);
};
  
  return { reviewCode, loading, result, fixCode, fixedCode };
}