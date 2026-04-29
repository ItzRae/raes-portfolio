<script>
// @ts-nocheck
    import './styles/projectcard.css';
    export let card;
    export let featured = false;
</script>

<a
    href={card.demo_link}
    target="_blank"
    rel="noopener noreferrer"
    class="project-card {featured ? 'featured' : ''}"
>
    <!-- Image / visual area -->
    <div class="project-img-wrap">
        {#if card.img}
            <img class="project-img" src={card.img} alt="Thumbnail of {card.name}" />
        {:else}
            <!-- Fallback illustrated placeholder -->
            <div class="project-img-placeholder" style="background:{card.placeholderBg || '#111'}">
                <span class="project-img-placeholder-icon">{card.placeholderIcon || '⬡'}</span>
                <span class="project-img-placeholder-label">{card.placeholderLabel || card.name}</span>
            </div>
        {/if}
    </div>

    <!-- Body -->
    <div class="project-body">
        {#if featured}
            <span class="featured-badge">★ Featured</span>
        {/if}

        <!-- Tags -->
        {#if card.tags && card.tags.length}
            <div class="project-tag-row">
                {#each card.tags as tag}
                    <span class="project-tag">{tag}</span>
                {/each}
            </div>
        {/if}

        <h3 class="project-name">{card.name}</h3>
        <p class="project-desc">{card.desc}</p>

        <div class="project-links">
            <!-- GitHub -->
            {#if card.github_link}
                <a
                    class="project-link"
                    href={card.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    on:click|stopPropagation
                    aria-label="GitHub"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    GitHub
                </a>
            {/if}

            <!-- Live demo -->
            {#if card.demo_link}
                <span class="project-link project-link-live">
                    Live →
                </span>
            {/if}
        </div>
    </div>
</a>

<style>
    .project-img-placeholder {
        width: 100%;
        min-height: 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .project-img-placeholder-icon {
        font-size: 2.5rem;
        line-height: 1;
    }

    .project-img-placeholder-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.65rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--clr-muted);
    }
</style>