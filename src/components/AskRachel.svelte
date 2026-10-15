<script lang="ts">
  import { onDestroy, tick } from 'svelte';
  import { base } from '$app/paths';
  import { searchPortfolio, type PortfolioFact } from '$lib/portfolio-search';
  export let facts: PortfolioFact[];
  export let suggestions: { question: string; answer: PortfolioFact }[];

  type Exchange = { id: number; question: string; shown: string; typing: boolean; source?: PortfolioFact };
  const FALLBACK_MISS = 'I don’t have that on my portfolio yet. Try asking about my projects, experience, education, skills, or hobbies, or email me at rrae1825@gmail.com.';

  let question = '';
  let thread: Exchange[] = [];
  let busy = false;
  let nextId = 0;
  let threadEl: HTMLDivElement;
  let controller: AbortController | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const normalize = (value: string) => value.toLowerCase().replace(/[?!.]/g, '').trim();
  const reducedMotion = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function update(id: number, patch: Partial<Exchange>) {
    thread = thread.map(item => item.id === id ? { ...item, ...patch } : item);
  }

  async function scrollThread() {
    await tick();
    threadEl?.scrollTo({ top: threadEl.scrollHeight, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }

  /** Type queued text at a steady, human pace (with pauses after punctuation), however fast it streams in. */
  function typewriter(id: number) {
    let target = '';
    let shown = '';
    let done = false;
    let resolveFinished: () => void;
    const finished = new Promise<void>(resolve => (resolveFinished = resolve));
    const step = () => {
      if (shown.length < target.length) {
        const behind = target.length - shown.length;
        shown = target.slice(0, shown.length + (behind > 400 ? 4 : behind > 160 ? 2 : 1));
        update(id, { shown });
        scrollThread();
        const last = shown.at(-1) ?? '';
        timer = setTimeout(step, /[.!?]/.test(last) ? 170 : /[,;:]/.test(last) ? 70 : 11 + Math.random() * 14);
      } else if (done) {
        timer = undefined;
        resolveFinished();
      } else {
        timer = setTimeout(step, 40);
      }
    };
    clearTimeout(timer);
    timer = setTimeout(step, 0);
    return {
      push: (text: string) => { target += text; },
      end: () => { done = true; return finished; },
      get received() { return target; }
    };
  }

  const tokens = (text: string) => text.split(/(\s+)/).filter(Boolean);

  function localAnswer(value: string, preset?: PortfolioFact): { text: string; source?: PortfolioFact } {
    const match = preset || suggestions.find(item => normalize(item.question) === normalize(value))?.answer;
    const source = match || searchPortfolio(value, facts)[0];
    return source ? { text: source.text, source } : { text: FALLBACK_MISS };
  }

  async function ask(value: string, preset?: PortfolioFact) {
    const asked = value.trim();
    if (!asked || busy) return;
    busy = true;
    question = '';
    const id = nextId++;
    thread = [...thread.slice(-4), { id, question: asked, shown: '', typing: true }];
    scrollThread();
    const writer = typewriter(id);
    controller = new AbortController();
    try {
      const response = await fetch(`${base}/api/ask`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question: asked }),
        signal: controller.signal
      });
      if (!response.ok || !response.body) throw new Error(`Ask failed: ${response.status}`);
      const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
      for (;;) {
        const { value: chunk, done } = await reader.read();
        if (done) break;
        writer.push(chunk);
      }
      if (!writer.received.trim()) throw new Error('Empty answer');
    } catch {
      if (controller.signal.aborted) return;
      // No API key, network error, or refusal: answer from the portfolio text instead.
      if (!writer.received.trim()) {
        const fallback = localAnswer(asked, preset);
        writer.push(fallback.text);
        update(id, { source: fallback.source });
      }
    }
    await writer.end();
    update(id, { typing: false });
    busy = false;
  }

  onDestroy(() => { controller?.abort(); clearTimeout(timer); });
</script>

<section id="ask" class="ask-section" aria-labelledby="ask-title">
  <div class="ask-header">
    <div>
      <p class="ask-eyebrow">Interactive · AI assistant</p>
      <h2 id="ask-title">Ask Rachel</h2>
    </div>
    <p class="ask-intro">Curious about my work or what I do outside of it? Pick a question or ask your own, and an AI assistant grounded in this portfolio will answer in my voice.</p>
  </div>

  <div class="question-chips" aria-label="Suggested questions">
    {#each suggestions as suggestion, index}
      <button type="button" style={`--i: ${index}`} class:asked={thread.some(item => item.question === suggestion.question)} disabled={busy} on:click={() => ask(suggestion.question, suggestion.answer)}>{suggestion.question}</button>
    {/each}
  </div>

  <div class="chat-window" class:active={busy}>
    <div class="chat-bar">
      <span class="avatar" class:pulsing={busy} aria-hidden="true">RL</span>
      <div>
        <p class="chat-name">Rachel’s assistant</p>
        <p class="chat-status" aria-hidden="true">
          {#if busy}<span class="status-dot typing"></span>typing<span class="ellipsis"><i>.</i><i>.</i><i>.</i></span>{:else}<span class="status-dot"></span>online · answers from this portfolio{/if}
        </p>
      </div>
    </div>
    <div class="thread" bind:this={threadEl}>
      {#if !thread.length}
        <div class="message bot intro-message">
          <span class="avatar" aria-hidden="true">RL</span>
          <p>Hi! I’m Rachel’s portfolio assistant. Ask me about her projects, experience, skills, or what she does for fun.</p>
        </div>
      {/if}
      {#each thread as item (item.id)}
        <div class="message user"><p>{item.question}</p></div>
        <div class="message bot">
          <span class="avatar" aria-hidden="true">RL</span>
          <div class="bubble">
            {#if !item.shown && item.typing}
              <span class="thinking" aria-label="Writing an answer"><i></i><i></i><i></i></span>
            {:else}
              <p>{#each tokens(item.shown) as token, index (index)}<span class="word">{token}</span>{/each}{#if item.typing}<span class="caret" aria-hidden="true"></span>{/if}</p>
            {/if}
            {#if item.source && !item.typing}
              <a href={item.source.href} on:click={() => {
                const target = item.source && document.querySelector(item.source.href);
                if (target instanceof HTMLDetailsElement) target.open = true;
              }}>Read more in the portfolio →</a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
    <p class="visually-hidden" aria-live="polite">{thread.at(-1) && !thread.at(-1)?.typing ? thread.at(-1)?.shown : ''}</p>
    <form on:submit|preventDefault={() => ask(question)}>
      <label class="visually-hidden" for="portfolio-question">Ask your own question</label>
      <input id="portfolio-question" bind:value={question} maxlength="300" autocomplete="off" placeholder="Ask anything, e.g. What has Rachel built with Python?" />
      <button type="submit" disabled={!question.trim() || busy}>Ask ↗</button>
    </form>
  </div>
  <p class="search-note">Answers are generated by Google Gemini from the facts on this page and may be imperfect. For anything else, <a href="mailto:rrae1825@gmail.com">email me</a>.</p>
</section>

<style>
  .ask-section { padding: 44px; margin: 0 0 56px; border: 1px solid var(--border); background: #EFEBF5; border-radius: 20px; }
  .ask-header { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: 36px; align-items: end; margin-bottom: 28px; }
  .ask-eyebrow { font-family: 'IBM Plex Mono', monospace; color: var(--accent); text-transform: uppercase; letter-spacing: .08em; font-size: .8rem; margin-bottom: 6px; }
  h2 { color: #59316f; font-size: 3rem; }
  .ask-intro { color: var(--muted); font-size: 1.15rem; line-height: 1.75; }
  .question-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
  button, input { font: inherit; }
  button { cursor: pointer; }
  .question-chips button { animation: chip-in .5s cubic-bezier(.2,.8,.2,1) both; animation-delay: calc(var(--i) * 60ms); text-align: left; border: 1px solid #CDBBDC; border-radius: 28px; background: #FDFCFE; color: var(--text); padding: 11px 18px; font-size: 1rem; line-height: 1.4; transition: background .2s, border-color .2s, transform .2s; }
  .question-chips button:hover:not(:disabled) { border-color: var(--accent); background: #E2D6EC; transform: translateY(-2px); box-shadow: 0 6px 14px #59316f14; }
  .question-chips button:active:not(:disabled) { transform: scale(.97); }
  .question-chips button.asked { border-color: #B79BCB; background: #EDE4F4; }
  button:focus-visible, input:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  button:disabled { opacity: .55; cursor: default; }
  .chat-window { background: #FDFCFE; border: 1px solid #DCD0E7; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px #59316f0d; transition: box-shadow .4s ease, border-color .4s ease; }
  .chat-window.active { border-color: #C6AEDA; box-shadow: 0 14px 40px #8552a026; }
  .chat-bar { display: flex; align-items: center; gap: 12px; padding: 14px 22px; border-bottom: 1px solid #EEE7F3; background: linear-gradient(90deg, #F7F2FB, #FDFCFE); }
  .chat-name { font-weight: 600; font-size: 1rem; }
  .chat-status { font-family: 'IBM Plex Mono', monospace; color: var(--muted); font-size: .78rem; display: flex; align-items: center; gap: 7px; min-height: 1.2em; }
  .status-dot { width: 8px; height: 8px; border-radius: 50%; background: #62B587; box-shadow: 0 0 0 3px #62b58726; }
  .status-dot.typing { background: var(--accent); box-shadow: 0 0 0 3px #8552a02e; animation: glow 1s ease-in-out infinite; }
  .ellipsis i { font-style: normal; animation: blink 1.2s infinite; }
  .ellipsis i:nth-child(2) { animation-delay: .2s; }
  .ellipsis i:nth-child(3) { animation-delay: .4s; }
  .avatar.pulsing { animation: ring 1.4s ease-out infinite; }
  .word { animation: ink .45s ease-out both; }
  .thread { display: flex; flex-direction: column; gap: 16px; padding: 26px; min-height: 260px; max-height: 460px; overflow-y: auto; }
  .message { display: flex; gap: 12px; align-items: flex-start; }
  .message.user { animation: pop-right .4s cubic-bezier(.2,.9,.3,1.2) both; }
  .message.bot { animation: pop-left .45s cubic-bezier(.2,.9,.3,1.2) .12s both; }
  .message p { font-size: 1.08rem; line-height: 1.75; overflow-wrap: anywhere; }
  .message.user { justify-content: flex-end; }
  .message.user p { background: var(--accent); color: white; padding: 11px 18px; border-radius: 18px 18px 4px 18px; max-width: 78%; }
  .avatar { flex: none; width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; background: #E2D6EC; color: #59316f; font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 1rem; }
  .bubble, .intro-message p { background: #F3EFF7; padding: 13px 18px; border-radius: 4px 18px 18px 18px; max-width: 85%; color: var(--text); }
  .intro-message p { color: var(--muted); }
  .bubble a { display: inline-block; font-size: .92rem; margin-top: 8px; }
  .caret { display: inline-block; width: 2px; height: 1.1em; margin-left: 2px; vertical-align: text-bottom; background: var(--accent); animation: blink 1s steps(1) infinite; }
  .thinking { display: inline-flex; gap: 5px; padding: 8px 2px; }
  .thinking i { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); opacity: .35; animation: bounce 1.2s ease-in-out infinite; }
  .thinking i:nth-child(2) { animation-delay: .15s; }
  .thinking i:nth-child(3) { animation-delay: .3s; }
  form { display: flex; gap: 10px; padding: 14px; border-top: 1px solid #E6DDEE; background: #F8F6FA; }
  input { min-width: 0; flex: 1; padding: 14px 16px; border-radius: 10px; border: 1px solid #CDBBDC; background: #FDFCFE; color: var(--text); font-size: 1.05rem; }
  form button { padding: 12px 22px; background: var(--accent); color: white; border: 0; border-radius: 10px; font-size: 1rem; }
  .search-note { color: var(--muted); font-size: .88rem; line-height: 1.6; margin-top: 14px; }
  .visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
  @keyframes blink { 50% { opacity: 0; } }
  @keyframes bounce { 0%, 80%, 100% { opacity: .35; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-4px); } }
  @keyframes pop-right { from { opacity: 0; transform: translate(18px, 10px) scale(.92); } }
  @keyframes pop-left { from { opacity: 0; transform: translate(-18px, 10px) scale(.92); } }
  @keyframes chip-in { from { opacity: 0; transform: translateY(10px); } }
  @keyframes ink { from { opacity: 0; filter: blur(3px); color: var(--accent); } }
  @keyframes glow { 50% { box-shadow: 0 0 0 6px #8552a014; } }
  @keyframes ring { 0% { box-shadow: 0 0 0 0 #8552a055; } 100% { box-shadow: 0 0 0 10px #8552a000; } }
  @media (max-width: 800px) { .ask-header { grid-template-columns: 1fr; gap: 12px; } }
  @media (max-width: 650px) { .ask-section { padding: 26px 18px; } h2 { font-size: 2.3rem; } .thread { padding: 18px 14px; } form { flex-direction: column; } .message.user p, .bubble { max-width: 90%; } }
  @media (prefers-reduced-motion: reduce) { .message, .question-chips button, .thinking i, .avatar.pulsing, .status-dot.typing { animation: none; } .word { animation: none; } .question-chips button, .chat-window { transition: none; } }
  @media print { .ask-section { display: none; } }
</style>
