<script>
	import LoadingIndicator from './Loading.svelte';
	/**
	 * @type string
	 */
	 export let genderType;
	/**
	/**
	 * @type string
	 */
	export let cinemaType;
	/**
	 * @type Array<string>
	 */
	export let selectedCategories;
		/**
	 * @type string
	 */
	 export let nameString;
	/**
	 * @type string
	 */
	export let specificDescriptors;
	/**
	 * @type Boolean
	 */
	export let loading;

	const categoryTypes = [
		'Gratitude',
		'Kindness',
		'Respect',
		'Honesty',
		'Empathy',
		'Self Love'
	];

	let cinemaTypes = [
		{ value: 'meerkat', title: 'meerkat' },
		{ value: 'cat', title: 'cat' },
		{ value: 'dog', title: 'dog' },
		{ value: 'eagle', title: 'eagle'},
		{ value: 'piglet', title: 'piglet'},
		{ value: 'bear', title: 'bear'},
		{ value: 'whale', title: 'whale'},
		{ value: 'shark', title: 'shark'},
	];

	let genderTypes = [
		{ value: 'male', title: 'male' },
		{ value: 'female', title: 'female' }
	];
</script>

<div class="pt-6 md:pt-10 text-slate-200">
	<div>
		<div class="mb-8">
			<div class="mb-4 font-semibold text-lg">What is your spirit animal?</div>
			<div class="flex items-center flex-wrap">
				{#each cinemaTypes as type (type.value)}
					<button
						on:click={() => {
							cinemaType = type.value;
						}}
						class={`${
							cinemaType === type.value ? 'bg-pink-600/40' : ''
						} text-slate-200 font-bold mr-2 text-sm mt-2 py-2 px-4 rounded-full border border-pink-600`}
					>
						{type.title}
					</button>
				{/each}
			</div>
		</div>

		<div class="mb-8">
			<div class="mb-4 font-semibold text-lg">What is your gender?</div>
			<div class="flex items-center">
				{#each genderTypes as type (type.value)}
					<button
						on:click={() => {
							genderType = type.value;
						}}
						class={`${
							genderType === type.value ? 'bg-pink-600/40' : ''
						} text-slate-200 font-bold mr-2 text-sm mt-2 py-2 px-4 rounded-full border border-pink-600`}
					>
						{type.title}
					</button>
				{/each}
			</div>
		</div>
	
		<!-- <div>
			<div class="mb-4 font-semibold text-lg">
				Select the topics you want to riff on.
			</div>
			<div class="flex items-center flex-wrap">
				{#each categoryTypes as category}
					<label
						class={`${
							selectedCategories.includes(category) ? 'bg-pink-600/40' : ''
						} text-slate-200 font-bold mr-2 mt-2 text-sm py-2 px-4 rounded-full border border-pink-600`}
					>
						<input
							class="hidden"
							type="checkbox"
							bind:group={selectedCategories}
							name="categories"
							value={category}
						/>
						{category}
					</label>
				{/each}
			</div>
		</div> -->

		<div class="mt-8">
			<div class="mb-4 font-semibold text-lg">
				How can we call you?
			</div>
			<textarea
				bind:value={nameString}
				class="bg-white/40 border border-white/0 p-2 rounded-md placeholder:text-slate-800 text-slate-900 w-full h-20 font-medium"
				placeholder="Ex. Dennis."
			/>
		</div>

		<div class="mt-8">
			<div class="mb-4 font-semibold text-lg">
				Write any other context here. Be as descriptive as you like. 
			</div>
			<textarea
				bind:value={specificDescriptors}
				class="bg-white/40 border border-white/0 p-2 rounded-md placeholder:text-slate-800 text-slate-900 w-full h-20 font-medium"
				placeholder="Ex. Must have at least 2 seasons and be on Netflix or Hulu."
			/>
			<button
				on:click
				class={`${
					loading
						? 'bg-pink-400/50'
						: 'bg-pink-600 hover:bg-gradient-to-r from-pink-700 via-pink-600 to-pink-700 '
				} mt-4 w-full h-10 text-white font-bold p-3 rounded-full flex items-center justify-center`}
			>
				{#if loading}
					<LoadingIndicator />
				{:else}
					<p>Create my goodvibes</p>
				{/if}
			</button>
		</div>
	</div>
</div>
