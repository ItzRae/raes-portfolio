<script lang="ts">
// @ts-nocheck

    import './styles/main.css';
    import ProjectCard from './ProjectCard.svelte';
    import { base } from '$app/paths';

    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }


    /* SKILLS */
    let skill_icons = [
        {title: 'Python', icon: 'fa-brands fa-python'},
        {title: 'Javascript', icon: 'fa-brands fa-js-square'},
        {title: 'Git', icon: 'fa-brands fa-git-alt'},
        {title: 'React', icon: 'fa-brands fa-react'},
        {title: 'HTML', icon: 'fa-brands fa-html5'},
        {title: 'CSS', icon: 'fa-brands fa-css3-alt'},
        {title: 'R', icon: 'fa-brands fa-r-project'},
        {title: 'Java', icon: 'fa-brands fa-java'},
        ]

    /* ABOUT */      
    let benefits = [
        {
            name: "a driven student",
            desc: `I have taken a range of CS courses from <a>Artificial Intelligence, Machine Learning</a>, and <a>Computer Systems</a> to <a>Data Science</a> and <a>Data Mining</a>. These classes have taught me how to break down complex problems and approach them with logical, creative solutions.`
        },
        {
            name: "a curious, knowledge-driven learner",
            desc: "I’m passionate about exploring new technologies and pushing myself to learn tools that expand my skills. I have experience with <a>Python, Java, JavaScript, HTML/CSS, Svelte, and SQL</a>. I’m excited to keep growing and discovering new ways to apply what I’ve learned."
        },
        {
            name: "an excellent communicator",
            desc: "I believe <a>communication is key</a>, especially in the workplace. Whether it’s explaining technical ideas in a way that’s easy to understand, presenting my work to a group, or collaborating on projects, I strive to create an <a>open and productive environment</a>. I’m still growing in this area, but I’ve found that being a good communicator makes a big difference in team success."
        }
    ]

    /* PROJECTS */
    let projects = [
        {
            name: "Formula 1 Data Science Blog",
            desc: "Developed an interactive blog analyzing Formula 1 datasets with spatial visualizations (Leaflet map), network graphs, and text analysis (web scraping) via word clouds.",
            img: "../src/files/project1.png",
            github_link: "https://github.com/stat231-f24/blog01-f1-fanatics",
            demo_link: "https://stat231-f24.github.io/blog01-f1-fanatics/"
        },
        {
            name: "MammothEDU",
            desc: "MAMU’s mission is to create an education-catered web-app that offers increased curriculum flexibility, enhancing accessibility for students and educators. Used React, OpenAI API, and Tailwind for UI.",
            img: "../src/files/mammothedu.png",
            github_link: "https://github.com/MammothEdu/MammothEdu.github.io",
            demo_link: "https://mammothedu.github.io/"
        },
        {
            name: "AlgoVisualizer",
            desc: "A react app that visualizes sorting algorithms with real-time animations and an educational menu for users to learn about the basics, runtime, and pseudocode of each algorithm.",
            img: "src/files/algovisualizer.png",
            github_link: "https://github.com/ItzRae/algo-visualizer",
            demo_link: "https://itzrae.github.io/algo-visualizer/"
        }
        ]

</script>

<main>
    <section id="hero" class="hero container">
        <div class="hero-img-container">
            <img class="hero-img" src="src/files/heropicture.jpg" alt=""/>
        </div>
        <div class='hero-content'>
            <h1 class="hero-title">HI, I'M RACHEL 👋🏼</h1>
            <p class="hero-desc">
                A current undergraduate pursuing a B.S in Computer Science 
                at <strong>Amherst College</strong>. I'm experienced in <strong>full-stack 
                web development</strong>, web scraping, and artificial intelligence.
            </p>
            <div class="hero-btns">
                <a href="https://github.com/ItzRae" class="hero-icon">    
                    <svg
                    role="img" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </a>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="https://www.linkedin.com/in/rachel-a-lin/" class="hero-icon">    
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50">
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                </a>
                <a href="mailto: raalin25@amherst.edu" class="hero-icon">    
                    <svg role="img" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Gmail</title>
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>

                </a>
            </div>
            <a class="hero-btn btn" href="#projects" on:click|preventDefault={scrollIntoView}>↓ See Projects ↓</a>
        </div>
    </section>

    <section id="about" class="about container">
        <div class="about-skills">
            <h1>Skills</h1>
            <div class="about-skills-icons">
                {#each skill_icons as skill}
                    <i class={skill.icon} title={skill.title}>
                    </i>
                {/each}
            </div>
        </div>
        <div class="about-content">
            <h1>About Me</h1>
            <p class="about-subtitle">I am...</p>
            <div class="about-desc">
                {#each benefits as benefit, index}
                <div class="about-desc-item">
                    <h1 class="about-index">0{index+1}</h1>
                    <div class="about-desc-content">
                        <h3 class="about-desc-title">{benefit.name}</h3>
                        <p class="about-desc-text">{@html benefit.desc}</p>
                    </div>
                </div>
            {/each}
            </div>
        </div>
    </section>
    <section id="projects" class="projects container">
        <h1>Projects</h1>
        <div class="projects-box">
            <ProjectCard card={projects[0]}></ProjectCard>
            <ProjectCard card={projects[1]}></ProjectCard>
            <ProjectCard card={projects[2]}></ProjectCard>
        </div>
    </section>
    <footer class="footer container section">
        <h3 class="footer-title">~ Rachel Lin ~</h3>
    </footer>
</main>