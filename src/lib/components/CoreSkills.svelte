<script>
	import { page } from '$app/state';
	import { t } from '$lib/i18n';
	import styles from "./CoreSkills.module.scss";
	let data = $derived(page.data);
</script>

<section>
	<h3>Core Skills</h3>
	{#each Object.keys(data.coreSkills) as category}
		<h4 class={styles.categoryTitle}>{@html $t(category)}</h4>
		<ul class={styles.skills}>
			{#each data.coreSkills[category] as skill}
				<li>{skill}</li>
			{/each}
		</ul>
	{/each}
</section>
