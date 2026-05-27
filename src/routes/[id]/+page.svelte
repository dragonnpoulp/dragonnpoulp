<script>
	import ContactMe from '$lib/components/ContactMe.svelte';
	import ProfessionalSummary from '$lib/components/ProfessionalSummary.svelte';
	import CareerHighlights from '$lib/components/CareerHighlights.svelte';
	import CoreSkills from '$lib/components/CoreSkills.svelte';
	import ProfessionalExperience from '$lib/components/ProfessionalExperience.svelte';
	import Education from '$lib/components/Education.svelte';
	import AdditionalInformation from '$lib/components/AdditionalInformation.svelte';
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

<ContactMe />
<ProfessionalSummary />
<CareerHighlights />
<CoreSkills />
<ProfessionalExperience />
<Education />
<AdditionalInformation />