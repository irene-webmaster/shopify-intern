<template>
	<HomePage/>
</template>

<script>
	import HomePage from './pages/HomePage.vue'

	export default {
		name: 'App',
		components: {
			HomePage,
		},
	};
</script>

<style lang="scss">
	// Variables
	:root {
		--container-padding: 4vw;
		--columns: 1;

		@media (min-width: 768px) {
			--columns: 2;
		}

		@media (min-width: 992px) {
			--columns: 3;
		}
	}

	// General styling
	* {
		box-sizing: border-box;
	}

	html {
		font-family: 'Open Sans', sans-serif;
		font-size: 1rem;
		font-weight: normal;
		line-height: 1.4;
		color: #3d3d3d;
	}

	body {
		margin: 0;
	}

	p {
		margin: 0 0 10px;
	}

	.flex {
		display: flex;
	}

	.space-between {
		justify-content: space-between;
	}

	.status__container {
		width: 100vw;
		height: calc(100vh - 100px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--container-padding);
		text-align: center;
	}
</style>