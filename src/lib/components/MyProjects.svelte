<script>
	import { page } from '$app/state';
	import projects from '../../data/projects';
	import moment from 'moment';

	let filter = $derived(page.url.searchParams.get('tech-stack'));
</script>

<div class="page-break"></div>
<h3>My projects</h3>
<section>
	{#each projects as item}
		<div class:hidden-on-screen={filter && item.tags && !item.tags.includes(filter)}>
			<h4>{item.role} · {item.name}</h4>
			<div>
				{#if item.at}
					<span>@{item.at}</span>
					{'  '}·{'  '}
				{/if}
				<span
					>{item.from} – {item.to} · {moment(item.from, 'MMMM YYYY').from(
						moment(item.to === 'now' ? new Date() : item.to, 'MMMM YYYY'),
						true
					)}</span
				>
			</div>
			<div class="horz gap-md mt-md">{@html item.techStack}</div>
		</div>
	{/each}
</section>
