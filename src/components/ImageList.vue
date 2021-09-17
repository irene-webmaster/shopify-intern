<template>
	<div
		v-if="images"
		class="image__container"
	>
		<div class="image__list">
			<div
				v-for="col in this.columns"
				:key="col"
				:class="`col-${col}`"
			>
				<template
					v-for="(image, index) in images"
					:key="image.identifier"
				>
					<ImageItem 
						v-if="index % columns === col - 1"
						:image="image"
					/>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	import ImageItem from './ImageItem';

	export default {
		components: {
			ImageItem,
		},
		data() {
			return {
				columns: 3,
			};
		},
		props: {
			images: {
				type: Array,
				requred: true,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.image {
		&__container {
			padding: var(--container-padding);
		}

		&__list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 2vw;
		}
	}
</style>
