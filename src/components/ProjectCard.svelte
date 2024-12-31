<script>
// @ts-nocheck

    import './styles/projectcard.css';
    export let card;
</script>

<div href={card.href} target="_blank">
    <div class="project-card">
        <img src={card.img} alt='thumbnail of {card.name}'/>
        <h3>{card.name}</h3>
        <p>{card.desc}</p>
        <div class="project-links">
            <a href="{card.github_link}">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="{card.demo_link}">
                <i class="fa-solid fa-globe"></i>
            </a>
        </div>
    </div>
</div>