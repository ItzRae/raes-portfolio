<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import './styles/header.css';

  const tabs = [
    { name: 'Overview', id: 'hero' },
    { name: 'Ask Rachel', id: 'ask' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Awards', id: 'awards' },
    { name: 'Skills', id: 'skills' },
    { name: 'Activities', id: 'activities' },
    { name: 'Interests', id: 'interests' }
  ];
  let active = 'hero';
  let darkMode = false;

  function toggleTheme() {
    darkMode = !darkMode;
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light'); } catch { /* Theme still works when storage is unavailable. */ }
  }


  onMount(() => {
    try { darkMode = localStorage.getItem('portfolio-theme') === 'dark'; } catch { darkMode = false; }
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    const sections = tabs.map(tab => document.getElementById(tab.id));
    let frame = 0;
    const update = () => {
      const offset = window.innerWidth <= 900 ? 160 : 100;
      let current = 'hero';
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= offset) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = 'interests';
      active = current;
    };
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  });
</script>

<header class="site-header">
  <a class="site-nav-brand" href="#hero" aria-label="Rachel Lin — overview">RL<span>.</span></a>
  <p class="nav-label">On this page</p>
  <nav class="site-nav" aria-label="Portfolio sections">
    <ul class="site-nav-links">
      {#each tabs as tab}
        <li><a href={`#${tab.id}`} class:active={active === tab.id} aria-current={active === tab.id ? 'location' : undefined}>{tab.name}</a></li>
      {/each}
    </ul>
  </nav>
  <div class="sidebar-actions">
    <button class="theme-toggle" class:is-dark={darkMode} type="button" role="switch" aria-label="Dark mode" aria-checked={darkMode} on:click={toggleTheme}>
      <span class="theme-track" aria-hidden="true">
        <span class="theme-sun">☀</span><span class="theme-moon">☾</span>
        <span class="theme-thumb"></span>
      </span>
      <span class="theme-label">{darkMode ? 'Dark mode' : 'Light mode'}</span>
    </button>
  <a class="site-nav-cta" href={`${base}/files/resume.pdf`} target="_blank" rel="noreferrer">Resume ↗</a>
  </div>
</header>
