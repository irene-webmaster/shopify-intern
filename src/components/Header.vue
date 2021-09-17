<template>
	<header role="header" class="header">
		<h1 class="title">NASA's Astronomy <span class="subtitle">Picture of the Day</span></h1>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		padding: calc(var(--container-padding) / 2) var(--container-padding);
	}

	.title {
		margin: 0;
		font-family: 'Yeseva One', sans-serif;
		text-transform: uppercase;
		font-weight: normal;
	}

	.subtitle {
		font-size: 1.3rem;
	}
</style>