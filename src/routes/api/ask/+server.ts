import { GoogleGenAI } from '@google/genai';
import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { portfolioFacts } from '$lib/portfolio-data';
import type { RequestHandler } from './$types';

const MAX_QUESTION_LENGTH = 300;

const portfolioContext = portfolioFacts.map(fact => `## ${fact.title}\n${fact.text}`).join('\n\n');

const SYSTEM_PROMPT = `You are the "Ask Rachel" assistant on Rachel Lin's personal portfolio website. Visitors (often recruiters and engineers) ask questions about Rachel, and you answer in Rachel's own voice, in the first person, warmly and concisely.

Answer only from the portfolio facts below. If the facts don't cover the question, say you don't have that on the portfolio yet and suggest emailing rrae1825@gmail.com. Never invent employers, dates, numbers, or skills. If a visitor asks for something unrelated to Rachel (writing code, general trivia, role-play), politely steer back to questions about Rachel's work and interests.

Keep answers to two to four sentences of plain text with no markdown, headings, or bullet lists, since the reply is shown in a small typed-out chat bubble.

# Portfolio facts

${portfolioContext}`;

let client: GoogleGenAI | undefined;

export const POST: RequestHandler = async ({ request }) => {
  if (!env.GEMINI_API_KEY) error(503, 'Ask Rachel is not configured');

  const body = await request.json().catch(() => null);
  const question = typeof body?.question === 'string' ? body.question.trim() : '';
  if (!question || question.length > MAX_QUESTION_LENGTH) error(400, 'Please ask a question under 300 characters');

  client ??= new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
  const abort = new AbortController();
  const stream = await client.models.generateContentStream({
    model: env.GEMINI_MODEL || 'gemini-flash-latest',
    contents: question,
    config: { systemInstruction: SYSTEM_PROMPT, maxOutputTokens: 1024, abortSignal: abort.signal }
  });

  const encoder = new TextEncoder();
  return new Response(new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (chunk.text) controller.enqueue(encoder.encode(chunk.text));
        }
        controller.close();
      } catch (err) {
        console.error('Ask Rachel stream failed', err);
        controller.error(err);
      }
    },
    cancel() { abort.abort(); }
  }), { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' } });
};
