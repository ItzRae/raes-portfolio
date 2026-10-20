import { ApiError, GoogleGenAI } from '@google/genai';
import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { portfolioFacts } from '$lib/portfolio-data';
import type { RequestHandler } from './$types';

const MAX_QUESTION_LENGTH = 300;

const portfolioContext = portfolioFacts.map(fact => `## ${fact.title}\n${fact.text}`).join('\n\n');

const SYSTEM_PROMPT = `You are the "Ask Rachel" assistant on Rachel Lin's personal portfolio website. Visitors (often recruiters and engineers) ask questions about Rachel, and you answer in Rachel's own voice, in the first person, warmly and concisely.

Answer only from the portfolio facts below. If the facts don't cover the question, say you don't have that on the portfolio yet and suggest emailing rrae1825@gmail.com. Never invent employers, dates, numbers, skills, or personal details such as likes, opinions, or pets; anything not stated in the facts is unknown. If a visitor asks for something unrelated to Rachel (writing poems or code, general trivia, role-play), politely decline without commenting on the topic itself, and steer back to questions about Rachel's work and interests.

Keep answers to two to five sentences of plain text with no markdown, headings, or bullet lists, since the reply is shown in a small typed-out chat bubble.

# Portfolio facts

${portfolioContext}`;

let client: GoogleGenAI | undefined;

/** Free-tier Gemini models are often briefly overloaded, so fall through to a lighter model on 429/503. */
async function startStream(ai: GoogleGenAI, question: string, abortSignal: AbortSignal) {
  const models = [env.GEMINI_MODEL || 'gemini-flash-latest', 'gemini-flash-lite-latest'];
  for (const [index, model] of models.entries()) {
    try {
      return await ai.models.generateContentStream({
        model,
        contents: question,
        config: { systemInstruction: SYSTEM_PROMPT, maxOutputTokens: 1024, abortSignal }
      });
    } catch (err) {
      const busy = err instanceof ApiError && (err.status === 429 || err.status === 503);
      if (!busy || index === models.length - 1) throw err;
    }
  }
  throw new Error('No Gemini model available');
}

export const POST: RequestHandler = async ({ request }) => {
  if (!env.GEMINI_API_KEY) error(503, 'Ask Rachel is not configured');

  const body = await request.json().catch(() => null);
  const question = typeof body?.question === 'string' ? body.question.trim() : '';
  if (!question || question.length > MAX_QUESTION_LENGTH) error(400, 'Please ask a question under 300 characters');

  client ??= new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
  const abort = new AbortController();
  const stream = await startStream(client, question, abort.signal);

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
