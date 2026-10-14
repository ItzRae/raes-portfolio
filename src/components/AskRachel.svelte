<script lang="ts">
  import { searchPortfolio, type PortfolioFact } from '$lib/portfolio-search';
  export let facts: PortfolioFact[];
  export let suggestions: { question: string; answer: PortfolioFact }[];
  let question = '';
  let submittedQuestion = '';
  let results: PortfolioFact[] = [];
  let submitted = false;

  function ask(value: string, answer?: PortfolioFact) {
    if (!value.trim()) return;
    question = value.trim();
    submittedQuestion = question;
    const preset = answer || suggestions.find(item => item.question.toLowerCase().replace(/[?!.]/g, '') === question.toLowerCase().replace(/[?!.]/g, ''))?.answer;
    results = preset ? [preset] : searchPortfolio(question, facts);
    submitted = true;
  }
</script>

<section id="ask" class="ask-section" aria-labelledby="ask-title">
  <h2 id="ask-title">Ask Rachel</h2>
  <p class="ask-intro">Curious about my work or what I do outside of it? Choose a question or ask your own. Answers come from this portfolio.</p>
  <div class="question-chips" aria-label="Suggested questions">
    {#each suggestions as suggestion}
      <button type="button" class:selected={submittedQuestion === suggestion.question} on:click={() => ask(suggestion.question, suggestion.answer)}>{suggestion.question}</button>
    {/each}
  </div>
  <form on:submit|preventDefault={() => ask(question)}>
    <label for="portfolio-question">Or ask your own question</label>
    <div class="question-input-row">
      <input id="portfolio-question" bind:value={question} maxlength="300" required placeholder="e.g. What has Rachel built with Python?" />
      <button type="submit" disabled={!question.trim()}>Ask ↗</button>
    </div>
    <p class="search-note">Searches portfolio facts locally. No AI-generated answers or external services.</p>
  </form>
  <div aria-live="polite" aria-atomic="true">
    {#if submitted}
      <div class="answer-panel">
        <h3>{submittedQuestion}</h3>
        {#if results.length}
          {#each results as result}
            <article class="answer-source"><h4>{result.title}</h4><p>{result.text}</p><a href={result.href} on:click={() => {
              const target = document.querySelector(result.href);
              if (target instanceof HTMLDetailsElement) target.open = true;
            }}>Read more in the portfolio →</a></article>
          {/each}
        {:else}
          <p>I don’t have that information in my portfolio yet. Try asking about my projects, experience, education, skills, or hobbies.</p>
          <a href="mailto:rrae1825@gmail.com">Ask me by email ↗</a>
        {/if}
      </div>
    {/if}
  </div>
</section>

<style>
  .ask-section { padding: 36px; margin: 0 0 40px; border: 1px solid var(--border); background: #EFEBF5; border-radius: 18px; }
  h2 { color: #59316f; font-size: 2.6rem; }
  .ask-intro { color: var(--muted); font-size: 1.1rem; line-height: 1.75; margin: 16px 0 24px; }
  .question-chips { display: flex; flex-wrap: wrap; gap: 12px; }
  button, input { font: inherit; }
  button { cursor: pointer; }
  .question-chips button { text-align: left; border: 1px solid #CDBBDC; border-radius: 28px; background: #FDFCFE; color: var(--text); padding: 12px 18px; font-size: 1rem; line-height: 1.5; transition: background .2s, border-color .2s; }
  .question-chips button:hover, .question-chips button.selected { border-color: var(--accent); background: #E2D6EC; }
  button:focus-visible, input:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  form { margin-top: 28px; }
  label { display: block; font-size: .95rem; font-weight: 600; margin-bottom: 10px; }
  .question-input-row { display: flex; gap: 10px; }
  input { min-width: 0; flex: 1; padding: 14px; border-radius: 8px; border: 1px solid #CDBBDC; background: #FDFCFE; color: var(--text); font-size: 1rem; }
  .question-input-row button { padding: 12px 20px; background: var(--accent); color: white; border: 0; border-radius: 8px; }
  button:disabled { opacity: .5; cursor: default; }
  .search-note { color: var(--muted); font-size: .8rem; line-height: 1.6; margin-top: 10px; }
  .answer-panel { background: #F8F6FA; padding: 24px; border-radius: 10px; margin-top: 24px; }
  .answer-panel h3 { font-size: 1.15rem; margin-bottom: 18px; overflow-wrap: anywhere; }
  h4 { font-size: 1rem; margin-bottom: 8px; }
  .answer-panel p { font-size: 1rem; line-height: 1.8; color: var(--muted); margin-bottom: 12px; }
  .answer-panel a { font-size: .9rem; }
  .answer-source + .answer-source { margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border); }
  @media (max-width: 650px) { .ask-section { padding: 24px 20px; } h2 { font-size: 2.2rem; } .question-input-row { flex-direction: column; } .answer-panel { padding: 18px; } }
  @media print { .ask-section { display: none; } }
</style>
