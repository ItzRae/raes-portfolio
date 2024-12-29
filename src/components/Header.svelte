<script>
    // export let y;
    import './styles/header.css';

    let tabs = [
        {name: 'About Me', link: '#about'},
        {name: 'Projects', link: '#projects'}
        // {name: 'Resume', id: '#resume'}
    ]
</script>

<header class="header container">
    <!-- <h1>
        <b>Rachel Lin</b>
    </h1> -->
    <h3><strong>Rachel's</strong> Portfolio</h3>
    <nav>
        <ul class="header-menu">
            {#each tabs as tab, index}
                <li>
                    <a href={tab.link} class="header-link">
                        {tab.name}
                    </a>
                </li>
            {/each}
            <li class="header-line"></li>
            <li>
                <a class="header-resume btn" href="#">Resume</a>
            </li>
            <!-- svelte-ignore a11y_consider_explicit_label -->
        </ul>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button class="header-bars">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            >
                <path fill-rule="evenodd" 
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                clip-rule="evenodd" />
            </svg>                  
        </button>
    </nav>
</header>