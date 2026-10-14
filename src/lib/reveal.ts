let observer: IntersectionObserver | undefined;

/** Svelte action: fade an element in the first time it scrolls into view. */
export function reveal(node: HTMLElement) {
  if (typeof IntersectionObserver === 'undefined') return;
  observer ??= new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('revealed');
      observer?.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  node.classList.add('reveal');
  observer.observe(node);
  return { destroy: () => observer?.unobserve(node) };
}
