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
</style>