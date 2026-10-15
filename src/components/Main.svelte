<script lang="ts">
  import { base } from '$app/paths';
  import './styles/main.css';
  import Header from './Header.svelte';
  import AskRachel from './AskRachel.svelte';
  import ProjectVisual from './ProjectVisual.svelte';
  import { reveal } from '$lib/reveal';
  import { experience, projects, otherProjects, skillGroups, hobbies, suggestions, portfolioFacts } from '$lib/portfolio-data';

  const socials = [
    { label: 'GitHub', href: 'https://github.com/ItzRae' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rachel-a-lin/' },
    { label: 'Email', href: 'mailto:rrae1825@gmail.com' }
  ];

</script>

<svelte:head>
  <title>Rachel Lin — Software Engineer</title>
  <meta name="description" content="Rachel Lin's experience in full-stack development, AI, and data analysis, plus selected software projects." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<Header />
<main>
  <div class="container">
    <section id="hero" aria-labelledby="intro-title">
      <div>
        <p class="eyebrow">Software engineer · AI & full-stack development</p>
        <h1 id="intro-title">Rachel Lin<span>.</span></h1>
        <p class="intro">Amherst College CS graduate building practical software across web applications, AI workflows, and data analysis.</p>
        <div class="contact-links">
          {#each socials as social}
            <a href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{social.label} ↗</a>
          {/each}
        </div>
      </div>
      <img class="portrait" src={`${base}/files/heropicture.jpg`} alt="Rachel Lin" />
    </section>

    <AskRachel facts={portfolioFacts} {suggestions} />

    <section id="experience" class="resume-section" aria-labelledby="experience-title">
      <div class="section-heading" use:reveal>
        <h2 id="experience-title">Experience</h2>
        <p>Work, volunteering & internships</p>
      </div>
      <div class="entries">
        {#each experience as item}
          <article class="resume-entry" use:reveal>
            <div class="entry-meta"><p>{item.dates}</p><span class="entry-type">{item.type}</span></div>
            <div class="entry-content">
              <h3>{item.role}</h3>
              <p class="organization">{item.organization}<span> · {item.location}</span></p>
              <ul>{#each item.bullets as bullet}<li>{bullet}</li>{/each}</ul>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section id="projects" class="resume-section" aria-labelledby="projects-title">
      <div class="section-heading" use:reveal><h2 id="projects-title">Selected projects</h2><a href="https://github.com/ItzRae" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      {#each projects as project}
        <article class="project-card project-entry" use:reveal>
          {#if project.demo_link}
            <a class="project-preview" href={project.demo_link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live`}><ProjectVisual visual={project.visual} /></a>
          {:else}
            <div class="project-preview"><ProjectVisual visual={project.visual} /></div>
          {/if}
          <div class="entry-content project-body">
            <p class="project-date">{project.dates}</p>
            <h3>{project.name}</h3>
            <div class="tags">{#each project.tags as tag}<span>{tag}</span>{/each}</div>
            <p class="project-description">{project.desc}</p>
            <ul class="metrics" aria-label="Project highlights">{#each project.metrics as metric}<li>{metric}</li>{/each}</ul>
            <div class="project-links">
              {#if project.demo_link}<a href={project.demo_link} target="_blank" rel="noreferrer">Live project ↗</a>{/if}
              {#if project.github_link}<a href={project.github_link} target="_blank" rel="noreferrer">GitHub ↗</a>{/if}
            </div>
          </div>
        </article>
      {/each}
      <details id="more-projects" use:reveal class="other-projects">
        <summary>More projects <span>Photobooth+, AlgoVisualizer, F1, MammothEDU & UGC</span></summary>
        <div class="other-grid">
          {#each otherProjects as project}
            <article class="project-card compact-card">
              <a class="project-preview" href={project.demo_link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live`}><ProjectVisual visual={project.visual} /></a>
              <div class="project-body">
                <h3>{project.name}</h3>
                <div class="tags">{#each project.tags as tag}<span>{tag}</span>{/each}</div>
                <p>{project.desc}</p>
                <div class="project-links">
                  <a href={project.demo_link} target="_blank" rel="noreferrer">Live project ↗</a>
                  {#if project.github_link}<a href={project.github_link} target="_blank" rel="noreferrer">GitHub ↗</a>{/if}
                </div>
              </div>
            </article>
          {/each}
        </div>
      </details>
    </section>

    <section id="education" class="resume-section" aria-labelledby="education-title">
      <div class="section-heading" use:reveal><h2 id="education-title">Education & training</h2></div>
      <article class="resume-entry" use:reveal><div class="entry-meta">Sep 2026</div><div class="entry-content"><h3>CodePath</h3><p>Applications of AI Engineering · Completed with Honors · AI Open Source Capstone</p></div></article>
      <article class="resume-entry" use:reveal><div class="entry-meta">May 2025</div><div class="entry-content"><h3>Amherst College</h3><p>B.A. in Computer Science · GPA 3.74 / 4.0</p><p class="education-detail">Coursework in AI, machine learning, data mining, algorithms, data science, and computer systems.</p></div></article>
    </section>

    <section id="awards" class="resume-section" aria-labelledby="awards-title">
      <div class="section-heading" use:reveal><h2 id="awards-title">Awards</h2></div>
      <article class="resume-entry" use:reveal><div class="entry-meta">Jan 2023</div><div class="entry-content"><h3>MLH CivicHacks</h3><p>Third Place, Best Accessibility Hack</p></div></article>
    </section>

    <section id="skills" class="resume-section" aria-labelledby="skills-title">
      <div class="section-heading" use:reveal><h2 id="skills-title">Technical skills</h2></div>
      <dl class="skill-list" use:reveal>{#each skillGroups as group}<div><dt>{group.label}</dt><dd>{group.value}</dd></div>{/each}</dl>
    </section>
    <footer use:reveal><p>Rachel Lin · Amherst College ’25</p><p>Built with Svelte & TypeScript & matcha.</p></footer>
  </div>
</main>
