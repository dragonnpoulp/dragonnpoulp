<script>
	import { page } from '$app/state';
	import styles from "./ProfessionalSummary.module.scss"
	let data = $derived(page.data);
</script>

<section>
	<h3>Professional Summary</h3>
	<p>
		{data.professionalSummary.intro}
	</p>
	<ul class={styles.strengths}>
		{#each data.professionalSummary.keyStrengths as strength}
			<li>{strength}</li>
		{/each}
	</ul>
</section>
