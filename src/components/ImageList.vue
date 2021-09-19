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
					:key="image.hdurl"
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
		mounted() {
			this.$nextTick(() => {
				window.addEventListener('resize', this.onResize);
			});
			this.onResize();
		},
		beforeUnmount() {
			window.removeEventListener('resize', this.onResize);
		},
		methods: {
			onResize() {
				const containerWidth = window.innerWidth;

				if (containerWidth > 768) {
					this.columns = 3;
				}
				if (containerWidth <= 768) {
					this.columns = 2;
				}
				if (containerWidth <= 576) {
					this.columns = 1;
				}
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
			grid-template-columns: repeat(var(--columns), 1fr);
			grid-gap: 2vw;
		}
	}
</style>
