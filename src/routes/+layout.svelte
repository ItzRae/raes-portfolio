<script lang="ts">
	import '../app.css';
	import '../utils.css'; 
	import Header from '../components/Header.svelte';
	import Main from '../components/Main.svelte';
	// let { children } = $props();
</script>

<!-- {@render children()} -->
<div>
	<Header />
	<Main />
	<!-- <slot /> -->
</div>