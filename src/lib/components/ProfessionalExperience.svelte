<script>
	import { page } from '$app/state';
	import styles from './ProfessionalExperience.module.scss';
	let data = $derived(page.data);
</script>

<section>
	<h3>Professional Experience</h3>
	{#each data['professionalExperience'] as e}
		<h4 class={styles.experienceHeader}>
			<strong class={styles.experienceHeaderCompany}>{e.company}</strong><br />
			<span class={styles.experienceHeaderDesc}>{e.role} · {e.startYear} - {e.endYear}</span>
		</h4>
		<div class={styles.roleContainer}>
			<ul class={styles.highlights}>
				{#each e.responsibilities as h}
					<li>{h}</li>
				{/each}
			</ul>
			<p>Technologies: {e.technologies.join(", ")}</p>
		</div>
	{/each}
</section>
