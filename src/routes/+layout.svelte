<script lang="ts">
	import '../components/styles/app.css';

	import '../components/styles/utils.css'; 
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