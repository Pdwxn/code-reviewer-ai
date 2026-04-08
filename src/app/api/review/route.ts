import { groq } from "@/lib/groq";
import { buildReviewPrompt } from "@/lib/prompts";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { code, language } = await req.json();

    const prompt = buildReviewPrompt(code, language);

    const completion = await groq.chat.completions.create({
      model: "qwen/qwen3-32b",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      stream: true,
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(content));
        }
        controller.close();
      },
    });

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response("Error generating review", { status: 500 });
  }
}