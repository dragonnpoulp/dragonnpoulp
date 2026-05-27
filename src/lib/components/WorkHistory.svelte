<script>
	import { page } from '$app/state';
	import history from '../../data/history';

	let filter = $derived(page.url.searchParams.get('tech-stack'));
	const filteredHistory = $derived(
		history.filter((item) => !filter || (item.tags && item.tags.includes(filter)))
	);
</script>

<div class="page-break"></div>
<h3>My work history</h3>
<div>
	{#each history as item}
		<section
			class="timeline"
			class:hidden-on-screen={filter && item.tags && !item.tags.includes(filter)}
		>
			<h4 class="timeline-title">{item.from}</h4>
			<div class="timeline-content">
				<article class="timeline-article">
					<aside class="timeline-aside">
						<div class="dot"></div>
						<div class="line"></div>
					</aside>
					<main class="timeline-main">
						<a href={item.link}>{item.company}</a>
						<h4>{item.role}</h4>
					</main>
				</article>
			</div>
		</section>
		{#if filteredHistory[filteredHistory.length - 1] === item}
			<section
				class="timeline"
				class:hidden-on-screen={filter && item.tags && !item.tags.includes(filter)}
			>
				<h4 class="timeline-title">{item.to}</h4>
				<div class="timeline-content">
					<article class="timeline-article">
						<aside class="timeline-aside">
							<div class="dot"></div>
							<div class="line"></div>
						</aside>
						<main class="timeline-main"></main>
					</article>
				</div>
			</section>
		{/if}
	{/each}
</div>
