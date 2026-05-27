<script>
	import { page } from '$app/state';
	let data = $derived(page.data);
</script>

<section>
	<h3>Career Highlights</h3>
	<ul>
		{#each data.careerHighlights as highlight}
			<li>{highlight}</li>
		{/each}
	</ul>
</section>
