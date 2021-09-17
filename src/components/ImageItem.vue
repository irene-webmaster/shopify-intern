<template>
	<div class="image__item">
		<img
			:src="image.hdurl"
			@click="showModal"
		/>
		<div class="flex space-between mt-15">
			<div class="image__info">
				<h3 class="image__title">{{ image.title }}</h3>
				<p class="image__date">{{ image.date }}</p>
			</div>
			<button
				:class="[
					'like-button',
					{ 'liked': isLiked },
				]"
				type="button"
				@click="onImageLike"
			>
				<i class="fas fa-heart like-icon"></i>
			</button>
		</div>
	</div>

	<Modal
		v-show="isModalVisible"
		:image="image"
		@close="closeModal"
	>
		<template v-slot:header>
			<h3 class="image__title">{{ image.title }}</h3>
		</template>

		<template v-slot:body>
			<img :src="image.hdurl"/>
			<p class="image__explanation">{{ image.explanation }}</p>
		</template>
	</Modal>
</template>

<script>
	import Modal from './Modal';
	export default {
		components: {
			Modal,
		},
		props: {
			image: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				isLiked: false,
				isModalVisible: false,
			}
		},
		methods: {
			onImageLike() {
				this.isLiked = !this.isLiked;
			},
			showModal() {
				this.isModalVisible = true;
				document.body.style.overflow = 'hidden';
			},
			closeModal() {
				this.isModalVisible = false;
				document.body.style.overflow = '';
			}
		},
	};
</script>

<style lang="scss" scoped>
	.image {
		&__item {
			background-color: #efefef;
			margin-bottom: 20px;
			padding: 16px;
			border: solid 1px #ccc;
			border-radius: 5px;
		}

		&__info {
			width: 85%;
		}

		&__title {
			margin: 0 0 7px;
			font-size: 1.2rem;
			font-weight: 400;
		}

		&__date {
			margin: 0;
			font-size: 0.85rem;
		}

		&__explanation {
			margin: 0;
			padding: 30px 15px 0;
		}
	}

	img {
		width: 100%;
		cursor: pointer;
	}

	.like-button {
		width: 40px;
		height: 40px;
		background-color: transparent;
		border: solid 1px #9e9e9e;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.5s ease;

		&:hover {
			opacity: 0.7;
		}

		.like-icon {
			color: #9e9e9e;
			font-size: 20px;
		}

		&.liked {
			border-color: red;

			.like-icon {
				color: red;
			}
		}
	}

	.mt-15 {
		margin-top: 15px;
	}
</style>
