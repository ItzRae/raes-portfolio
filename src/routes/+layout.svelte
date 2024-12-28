<script lang="ts">
	import '../app.css';
	import '../utils.css'; 
	import Header from '../components/Header.svelte';
	// let { children } = $props();
</script>

<!-- {@render children()} -->
<div class="custom-bg">
	<Header />
	<slot />
</div>