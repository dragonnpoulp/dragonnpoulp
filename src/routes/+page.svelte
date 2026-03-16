<script>
	import skills from '../data/skills';
	import { icons } from '../icons';
	import history from '../data/history';
	import projects from '../data/projects';
	import { page } from '$app/state';
	import moment from 'moment';

	let filter = $derived(page.url.searchParams.get('tech-stack'));
	const filteredHistory = $derived(history.filter(
		(item) => !filter || (item.tags && item.tags.includes(filter))
	));
</script>

<header>
	<img src="https://avatars.githubusercontent.com/u/13781829?s=468&v=4" alt="Long Nguyen Duc" />
	<div>
		<h1>Long Nguyen Duc</h1>
		<span>Technical Leader / Software Engineer</span>
	</div>
</header>

<p class="hidden-on-printing">
	<button
		onclick={() => {
			window.print();
		}}>Save as PDF</button
	>
</p>

<p class="hidden-on-printing">
	What would you like to see?
	<a href="/" class="button" class:active={!filter}>Anything</a>,
	<a href="/?tech-stack=js" class="button" class:active={filter === 'js'}>Node.js / Reactjs</a>,
	<a href="/?tech-stack=.net" class="button" class:active={filter === '.net'}>C#.Net / Oracle</a>
</p>

<h3>Note</h3>
<section>
	<p class="note">
		This resume contains detailed information. A filterable online version is available at:
		<a href="https://longnguyen.idopo.com">https://longnguyen.idopo.com</a>.
	</p>
</section>
<h3>About me</h3>
<section>
	<p>
		Engineering leader with 15+ years of experience designing and building scalable software systems
		across finance, e-commerce, tourism, and F&B. Currently working as an Engineering Manager,
		leading engineering teams while contributing to architecture and technical direction.
	</p>
</section>

<h3>Contact me</h3>
<section>
	<p>Long Nguyen Duc</p>
	<p>Email: <a href="mailto:dragonnpoulp@gmail.com">dragonnpoulp@gmail.com</a></p>
	<p>LinkedIn: <a href="https://linkedin.com/in/longnd5">longnd5</a></p>
	<p>
		Stack Overflow: <a href="https://stackoverflow.com/users/11938709/long-nguyen">Long Nguyen</a>
	</p>
	<p>
		Github: <a href="https://github.com/dragonnpoulp">dragonnpoulp</a>
	</p>
</section>

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


