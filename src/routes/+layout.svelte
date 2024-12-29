<script lang="ts">
	import '../app.css';
	import '../utils.css'; 
	import Header from '../components/Header.svelte';
	import Hero from '../components/Hero.svelte';
	// let { children } = $props();
</script>

<!-- {@render children()} -->
<div>
	<Header />
	<!-- <Hero /> -->
	<slot />
</div>