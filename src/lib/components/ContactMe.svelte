<script>
	import { page } from '$app/state';

	let hideContacts = $derived(page.url.searchParams.get('contacts') === 'hidden');
</script>

<section>
<h3>Contact me</h3>
	{#if !hideContacts}
		<p>Ho Chi Minh City, Vietnam</p>
		<p>Email: <a href="mailto:dragonnpoulp@gmail.com">dragonnpoulp@gmail.com</a></p>
		<p>LinkedIn: <a href="https://linkedin.com/in/longnd5">longnd5</a></p>
		<p>
			Stack Overflow: <a href="https://stackoverflow.com/users/11938709/long-nguyen">Long Nguyen</a>
		</p>
		<p>
			Github: <a href="https://github.com/dragonnpoulp">dragonnpoulp</a>
		</p>
	{:else}
		<p>Not available due to UpWork policy.</p>
	{/if}
</section>
