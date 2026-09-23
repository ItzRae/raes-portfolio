<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import './styles/main.css';
  import Header from './Header.svelte';

  const githubIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;

  const linkedinIcon = `
    <svg viewBox="0 0 50 50" aria-hidden="true"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>`;

  const emailIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`;

  const socials = [
    { label: 'GitHub', href: 'https://github.com/ItzRae', icon: githubIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rachel-a-lin/', icon: linkedinIcon },
    { label: 'Email', href: 'mailto:rrae1825@gmail.com', icon: emailIcon }
  ];

  const skills = [
    'Python',
    'JavaScript',
    'React',
    'Svelte',
    'Java',
    'HTML / CSS',
    'SQL',
    'R / Data Sci',
    'Git / GitHub',
    'OpenAI API',
    'Computer Vision',
    'Machine Learning',
    'Tailwind'
  ];

  const aboutBlocks = [
    {
      title: 'Full-stack engineer',
      desc: 'Background in <strong>AI, Machine Learning, Computer Systems,</strong> and <strong>Data Science</strong>.'
    },
    {
      title: 'Curious builder',
      desc: 'I’m always more interested in what works than what feels familiar. Lately that’s meant exploring computer vision, LLM APIs, and building projects that solve real problems in a way that feels simple + intuitive.'
    },
    {
      title: 'Clear communicator',
      desc: 'I care about readable code, clear documentation, and making collaboration smoother for everyone involved.'
    }
  ];

  const projects = [
    {
      name: 'anti-brainrot',
      desc: 'A macOS desktop app that uses your webcam and a local CV model to detect when you pick up your phone — then calls you out Gen-Z-style in real time. 100% local processing.',
      tags: ['Computer Vision', 'macOS', 'Python'],
      demo_link: 'https://anti-brainrot-gamma.vercel.app/',
      github_link: 'https://github.com/ItzRae',
      featured: true,
      visual: 'anti-brainrot'
    },
    {
      name: 'Florida Landfall Detector',
      desc: 'Analyzes official NOAA HURDAT2 hurricane tracks using geometric coastline intersections with U.S. Census boundaries to independently detect Florida landfalls. Interpolates landfall times and wind speeds, with interactive maps and filters in Streamlit.',
      tags: ['Python', 'Geospatial Analysis', 'Streamlit'],
      demo_link: 'https://fl-landfall-detector.streamlit.app/',
      github_link: 'https://github.com/ItzRae/fl-landfall-detector',
      featured: true,
      visual: 'landfall'
    },
    {
      name: 'Photobooth+',
      desc: 'Digital photobooth web app where users can capture live photos, choose strip layouts, preview results instantly, and download polished photostrips.',
      tags: ['React', 'CSS Modules', 'Webcam API'],
      demo_link: 'https://photobooth-plus.vercel.app/',
      github_link: 'https://github.com/ItzRae/photobooth-plus',
      visual: 'photobooth'
    },
    {
      name: 'AlgoVisualizer',
      desc: 'Real-time sorting algorithm visualizer with animations, runtime complexity breakdowns, and pseudocode — built to make CS fundamentals tangible.',
      tags: ['React', 'Algorithms', 'Animation'],
      demo_link: 'https://itzrae.github.io/algo-visualizer/',
      github_link: 'https://github.com/ItzRae/algo-visualizer',
      visual: 'algo'
    },
    {
      name: 'F1 Data Science Blog',
      desc: 'Interactive data blog analyzing Formula 1 datasets with spatial visualizations via Leaflet, network graphs, and NLP-driven word clouds from web-scraped race commentary.',
      tags: ['R', 'Data Science', 'Web Scraping'],
      demo_link: 'https://stat231-f24.github.io/blog01-f1-fanatics/',
      github_link: 'https://github.com/stat231-f24/blog01-f1-fanatics',
      visual: 'f1'
    },
    {
      name: 'MammothEDU',
      desc: 'AI-powered education web app offering increased curriculum flexibility for students and educators. Built with React, OpenAI API, and Tailwind CSS.',
      tags: ['React', 'OpenAI API', 'Tailwind'],
      demo_link: 'https://mammothedu.github.io/',
      github_link: 'https://github.com/MammothEdu/MammothEdu.github.io',
      visual: 'mammoth'
    },
    {
      name: 'UGC Portfolio',
      desc: 'My personal UGC portfolio, designed and built by me using TypeScript. My content creation work gives me client-facing experience, from understanding brand needs to communicating ideas and delivering content.',
      tags: ['TypeScript', 'Web Design', 'UGC'],
      demo_link: 'https://rachel-ugc.vercel.app/',
      visual: 'ugc'
    },
  ];

  let canvas: HTMLCanvasElement;

  function scrollIntoView(event: MouseEvent) {
    const target = event.currentTarget as HTMLAnchorElement;
    const el = document.querySelector(target.getAttribute('href') || '');
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach(el => observer.observe(el));

    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return () => observer.disconnect();

    let width = 0;
    let height = 0;
    let frame = 0;
    const count = 80;
    const maxDistance = 120;
    const particles = Array.from({ length: count }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1
    }));

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.forEach(p => {
        if (p.x === 0 && p.y === 0) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
        }
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,236,227,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(240,236,227,${(1 - dist / maxDistance) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frame);
    };
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=IBM+Plex+Mono:wght@400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />

<main>
  <canvas bind:this={canvas} class="particles" aria-hidden="true"></canvas>

  <section id="hero" class="container">
    <div class="hero-left">
      <p class="hero-eyebrow">// software engineer · open to opportunities</p>
      <h1 class="hero-title">Rachel<br /><span class="outline">Lin</span></h1>
      <p class="hero-desc">
      25' CS grad from <strong>Amherst College.</strong> I build things at the intersection of <strong>AI, full-stack engineering,</strong> and  everyday problems that feel worth solving - usually somewhere between debugging and a matcha run.   </p>
      <div class="hero-actions">
        <a class="btn-primary" href="#projects" on:click={scrollIntoView}>View Projects</a>
        <a class="btn-ghost" href="#about" on:click={scrollIntoView}>About Me</a>
      </div>
      <div class="hero-socials">
        {#each socials as social}
          <a class="social-link" href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={social.label}>
            <!-- Icons are static SVG strings defined in this component. -->
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html social.icon}
          </a>
        {/each}
      </div>
    </div>

    <div class="hero-right">
      <div class="hero-img-wrap">
        <img src={`${base}/files/heropicture.jpg`} alt="Rachel Lin" />
        <div class="hero-img-accent"></div>
        <div class="hero-img-accent2"></div>
      </div>
      <div class="hero-stat-row">
        <div class="hero-stat">
          <div class="hero-stat-num">4+</div>
          <div class="hero-stat-label">Projects shipped</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">8+</div>
          <div class="hero-stat-label">Languages & tools</div>
        </div>
      </div>
    </div>
  </section>

  <div class="ticker-wrap">
    <div class="ticker-track">
      {#each [...skills, ...skills] as skill}
        <span class="ticker-item"><span class="ticker-dot"></span>{skill}</span>
      {/each}
    </div>
  </div>

  <section id="about">
    <div class="container">
      <p class="section-label">01 — About</p>
      <h2 class="section-title">About me</h2>

      <div class="about-grid">
        <div class="about-left reveal">
          <p class="mini-label">// tech stack</p>
          <div class="skills-grid">
            {#each skills.slice(0, 10) as skill}
              <div class="skill-item"><span class="skill-dot"></span>{skill}</div>
            {/each}
          </div>
        </div>

        <div class="about-right">
          {#each aboutBlocks as block, index}
            <div class="about-block reveal" style={`transition-delay:${(index + 1) * 0.1}s`}>
              <div class="about-block-num">{String(index + 1).padStart(2, '0')}</div>
              <h3>{block.title}</h3>
              <!-- Descriptions are static markup defined in this component. -->
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              <p>{@html block.desc}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="container">
      <div class="projects-header">
        <div>
          <p class="section-label">02 — Work</p>
          <h2 class="section-title">Selected projects</h2>
        </div>
        <a class="arrow-link" href="https://github.com/ItzRae" target="_blank" rel="noreferrer">All on GitHub →</a>
      </div>

      <div class="projects-grid">
        {#each projects as project, index}
          <article class:featured={project.featured} class="project-card reveal" style={`transition-delay:${index * 0.1}s`}>
            <a class="project-img-wrap" href={project.demo_link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live demo`}>
              {#if project.visual === 'anti-brainrot'}
                <div class="visual visual-anti">
                  <div class="scanline"></div>
                  <div class="visual-center">
                    <div class="visual-emoji">📷</div>
                    <div class="visual-title">PHONE DETECTED</div>
                    <div class="visual-subtitle">⚠ put it down</div>
                  </div>
                </div>
              {:else if project.visual === 'landfall'}
                <div class="visual visual-landfall">
                  <div class="visual-center">
                    <div class="visual-emoji" aria-hidden="true">🌀</div>
                    <div class="visual-title">Florida Landfall Detector</div>
                    <div class="visual-subtitle">Storm landfalls · Florida</div>
                  </div>
                </div>
              {:else if project.visual === 'ugc'}
                <div class="visual visual-ugc">
                  <div class="visual-center">
                    <div class="visual-wordmark">Rachel / UGC</div>
                    <div class="visual-subtitle">Content creator · Built by me</div>
                  </div>
                </div>
              {:else if project.visual === 'mammoth'}
                <div class="visual visual-mammoth">
                  <div class="visual-center">
                    <div class="visual-wordmark">MAMU</div>
                    <div class="visual-subtitle purple">Education Platform</div>
                  </div>
                </div>
              {:else if project.visual === 'algo'}
                <div class="visual visual-algo">
                  <div class="bars">
                    {#each [30, 60, 90, 45, 75, 20, 55, 85] as height}
                      <span style={`height:${height}%`}></span>
                    {/each}
                  </div>
                </div>
              {:else if project.visual === 'photobooth'}
              <div class="visual visual-photobooth">
                <div class="photobooth-strip">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="visual-center photobooth-label">
                  <div class="visual-title">PHOTOBOOTH+</div>
                  <div class="visual-subtitle">capture · print · download</div>
                </div>
              </div>
              {:else}
                <div class="visual visual-f1">
                  <div class="visual-center">
                    <div class="visual-emoji">🏎</div>
                    <div class="visual-title red">F1 Data Analysis</div>
                  </div>
                </div>
              {/if}
            </a>

            <div class="project-body">
              {#if project.featured}<div class="featured-badge">★ Featured</div>{/if}
              <div class="project-tag-row">
                {#each project.tags as tag}
                  <span class="project-tag">{tag}</span>
                {/each}
              </div>
              <h3 class="project-name">{project.name}</h3>
              <p class="project-desc">{project.desc}</p>
              <div class="project-links">
                {#if project.github_link}
                <a class="project-link" href={project.github_link} target="_blank" rel="noreferrer">
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  {@html githubIcon}
                  GitHub
                </a>
                {/if}
                <a class="project-link accent" href={project.demo_link} target="_blank" rel="noreferrer">Live →</a>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <footer class="container">
    <div>
      <p class="footer-name">Rachel <span>Lin.</span></p>
      <p class="footer-copy footer-margin">SWE · Amherst College '25</p>
    </div>
    <p class="footer-copy">Built with Svelte and matcha</p>
    <div class="footer-socials">
      {#each socials.slice(0, 2) as social}
        <!-- Icons are static SVG strings defined in this component. -->
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        <a class="social-link" href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>{@html social.icon}</a>
      {/each}
    </div>
  </footer>
</main>
