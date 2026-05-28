<script>
	import { page } from '$app/state';
	let data = $derived(page.data);
    console.log(data)
</script>

{#each data.resumeIds as file}
    <a href="/{file}">{file}</a><br/>
{/each}