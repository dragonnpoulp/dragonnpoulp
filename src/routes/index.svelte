<script>
	import skills from '../data/skills';
	import history from '../data/history';
	import projects from '../data/projects';
	import weakness from '../data/weakness';
	import { page } from '$app/stores';
	import moment from 'moment';

	let filter;
	page.subscribe(({ url }) => {
		filter = url.searchParams.get('tech-stack');
	});
</script>

<header>
	<img src="https://avatars.githubusercontent.com/u/13781829?s=468&v=4" alt="Long Nguyen Duc" />
	<div>
		<h1>Long Nguyen Duc</h1>
		<span>Technical Leader / Software Engineer</span>
	</div>
</header>

<p class="no-print">
	<button
		on:click={() => {
			window.print();
		}}>Save as PDF</button
	>
</p>

<p class="no-print">
	Which information do you want to see?
	<a href="/" class="button" class:active={!filter}>Anything</a>,
	<a href="/?tech-stack=js" class="button" class:active={filter === 'js'}>NodeJS / ReactJS</a>,
	<a href="/?tech-stack=.net" class="button" class:active={filter === '.net'}>C#.Net / Oracle</a>
</p>

<h3>A note</h3>
<section>
	<p class="note">
		This resume might be long with you, so I let you filter information if you're using the web
		version here <a href="https://longnguyen.idopo.com">https://longnguyen.idopo.com</a>.
	</p>
	<p>I'm sorry if it takes you too much time to read the printed version.</p>
</section>
<h3>About me</h3>
<section>
	<p>A professional, proactive, and responsible software engineer.</p>
	<p>
		I had 10 years working as a software engineer to build Finance softwares. Since 2017, I left my
		first company to work with more business domains, including: eCommerce, Tourism and F&B; and the
		technology that I choose.
	</p>
</section>

<h3>Contact me</h3>
<section>
	<p>Long Nguyen Duc</p>
	<p>Email: <a href="mailto:dragonnpoulp@gmail.com">dragonnpoulp@gmail.com</a></p>
	<p>LinkedIn: <a href="https://linkedin.com/in/longnd5">longnd5</a></p>
	<p>Skype: <a href="skype:dragonnpoulp?chat">dragonnpoulp</a></p>
	<p>
		StackOverflow: <a href="https://stackoverflow.com/users/11938709/long-nguyen">Long Nguyen</a>
	</p>
	<p>
		Github: <a href="https://github.com/dragonnpoulp">dragonnpoulp</a>
	</p>
</section>

<div class="page-break" />
<h3>My work history</h3>
<section>
	{#each history as item}
		<div class:no-screen={filter && item.tags && !item.tags.includes(filter)}>
			<h4>{item.role}</h4>
			<div>
				<a href={item.link}>{item.company}</a>
			</div>
			<div>
				<span
					>{item.from} – {item.to} · {moment(item.from).from(
						item.to === 'now' ? new Date() : item.to,
						true
					)}</span
				>
			</div>
		</div>
	{/each}
</section>

<div class="page-break" />
<h3>My skills</h3>
<section>
	<p class="note">I'd like to work with the technologies that I love.</p>
	<p class="note">
		Currently, they are NodeJS, ReactJS especially with GraphQL. Even though, I worked with
		C#.Net/Oracle for years.
	</p>
	<p class="note">
		I can teach, help developers, technical guys, but I'm not good to manage them. So, I'm sorry if
		you want a manager.
	</p>
	{#each skills as item}
		<div class:no-screen={filter && item.tags && !item.tags.includes(filter)}>
			<h4 class="horz">{@html item.name}</h4>
			{@html item.intro}
		</div>
	{/each}
</section>

<div class="page-break" />
<h3>My projects</h3>
<section>
	{#each projects as item}
		<div class:no-screen={filter && item.tags && !item.tags.includes(filter)}>
			<h4>{item.role} · {item.name}</h4>
			<div>
				{#if item.at}
					<span>@{item.at}</span>
					{'  '}·{'  '}
				{/if}
				<span
					>{item.from} – {item.to} · {moment(item.from).from(
						item.to === 'now' ? new Date() : item.to,
						true
					)}</span
				>
			</div>
			<div class="horz gap-md mt-md">{@html item.techStack}</div>
		</div>
	{/each}
</section>

<div class="page-break" />
<h3>My weakness</h3>
<section>
	<p class="note">
		Nobody want others know their weakness, me too. But I think you'd want to know it, because you
		have many other choices that maybe fit much than me. Takes your time.
	</p>
	{#each weakness as item}
		<div>
			<h4>{item.name}</h4>
			{@html item.intro}
		</div>
	{/each}
</section>
