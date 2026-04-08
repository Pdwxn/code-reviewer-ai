"use client";

type Props = {
  result: string;
};

export default function ReviewPanel({ result }: Props) {
  return (
    <div className="whitespace-pre-wrap text-sm leading-relaxed">
      {result || "Your analysis will appear here..."}
    </div>
  );
}