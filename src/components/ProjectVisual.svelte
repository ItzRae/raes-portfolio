<script lang="ts">
  export let visual: string;
</script>

<div class={`project-visual visual-${visual}`} aria-hidden="true">
  {#if visual === 'fundflow'}
    <div class="visual-center">
      <div class="bars">{#each [35, 52, 68, 81, 100] as height, i}<span style={`height:${height}%;--bar-delay:${i * 70}ms`}></span>{/each}</div>
      <strong>FUNDFLOW</strong><small>Source reports → validated holdings</small><small>5 iShares ETFs · 19,131 holdings</small>
    </div>
  {:else if visual === 'landfall'}
    <div class="radar-rings"></div>
    <div class="visual-center"><span class="visual-icon storm-icon">🌀</span><strong>U.S. LANDFALL DETECTOR</strong><small>18 coastal states · HURDAT2</small></div>
  {:else if visual === 'allytext'}
    <div class="visual-center"><div class="chat-preview"><span>What’s next?</span><span>Let’s make a plan.</span><span class="typing-dots">● ● ●</span></div><strong>ALLYTEXT</strong><small>Personal AI assistant · In progress</small></div>
  {:else if visual === 'anti-brainrot'}
    <div class="scanline"></div>
    <div class="visual-center"><span class="visual-icon">📷</span><strong>PHONE DETECTED</strong><small>⚠ put it down</small></div>
  {:else if visual === 'photobooth'}
    <div class="visual-center"><div class="photobooth-strip"><span></span><span></span><span></span></div><strong>PHOTOBOOTH+</strong><small>capture · print · download</small></div>
  {:else if visual === 'algo'}
    <div class="visual-center"><div class="bars">{#each [30, 60, 90, 45, 75, 20, 55, 85] as height, i}<span style={`height:${height}%;--bar-delay:${i * 70}ms`}></span>{/each}</div><strong>ALGOVISUALIZER</strong><small>Algorithms in motion</small></div>
  {:else if visual === 'f1'}
    <div class="visual-center"><span class="visual-icon">🏎</span><strong>F1 DATA ANALYSIS</strong><small>Data science · Racing insights</small></div>
  {:else if visual === 'mammoth'}
    <div class="visual-center"><span class="visual-wordmark">MAMU</span><strong>Education Platform</strong></div>
  {:else}
    <div class="visual-center"><span class="visual-wordmark">Rachel / UGC</span><small>Content creator · Built by me</small></div>
  {/if}
</div>
