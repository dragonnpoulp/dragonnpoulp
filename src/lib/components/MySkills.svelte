<script>
	import { page } from '$app/state';
	import skills from '../../data/skills';
	import { icons } from '../../icons';

	let filter = $derived(page.url.searchParams.get('tech-stack'));
</script>

<div class="page-break"></div>
<h3>My skills</h3>
<section>
	{#each skills as item}
		<div class:hidden-on-screen={filter && item.tags && !item.tags.includes(filter)}>
			<h4 class="horz">
				{#if item.icon}
					<img src={icons[item.icon]} alt={item.icon} />
				{/if}
				{@html item.name}
			</h4>
			{@html item.intro}
		</div>
	{/each}
</section>
