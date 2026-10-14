export type PortfolioFact = { title: string; text: string; href: string; keywords?: string };
const stopWords = new Set('a an and are as at be can could did do does for from had has have how i in is it like me my of on or rachel she that the their this to was were what when where which who why with would you your about tell please know'.split(' '));
const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(' ').filter(word => word.length > 1 && !stopWords.has(word));

/** Return source excerpts, never generated biographical claims. */
export function searchPortfolio(question: string, facts: PortfolioFact[]): PortfolioFact[] {
  const terms = [...new Set(normalize(question))];
  if (!terms.length) return [];
  const results = facts.map(fact => {
    const title = new Set(normalize(fact.title));
    const words = new Set(normalize(`${fact.title} ${fact.text} ${fact.keywords || ''}`));
    const matches = terms.filter(term => words.has(term) || (term.length > 3 && words.has(term.replace(/s$/, ''))));
    return { fact, score: matches.reduce((score, term) => score + (title.has(term) ? 3 : 1), 0), coverage: matches.length / terms.length };
  });
  return results.filter(item => item.score > 0 && item.coverage >= .4)
    .sort((a, b) => b.score - a.score).slice(0, 3).map(item => item.fact);
}
