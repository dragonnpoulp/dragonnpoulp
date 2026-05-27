<script>
	import { page } from '$app/state';

	let filter = $derived(page.url.searchParams.get('tech-stack'));
</script>

<p class="hidden-on-printing">
	What would you like to see?
	<a href="/" class="button" class:active={!filter}>Anything</a>,
	<a href="/?tech-stack=js" class="button" class:active={filter === 'js'}>Node.js / Reactjs</a>,
	<a href="/?tech-stack=.net" class="button" class:active={filter === '.net'}>C#.Net / Oracle</a>
</p>
