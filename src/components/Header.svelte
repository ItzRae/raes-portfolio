<script lang="ts">
  import './styles/header.css';

  const tabs = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' }
  ];
</script>

<header class="site-header">
  <a class="site-nav-brand" href="#hero">RL<span>.</span></a>

  <nav class="site-nav">
    <ul class="site-nav-links">
      {#each tabs as tab}
        <li><a href={tab.link}>{tab.name}</a></li>
      {/each}
      <li>
        <a class="site-nav-cta" href="/files/resume.pdf" target="_blank" rel="noreferrer">
          Resume ↗
        </a>
      </li>
    </ul>
  </nav>
</header>