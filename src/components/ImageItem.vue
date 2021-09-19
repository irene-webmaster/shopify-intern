<template>
	<div class="image__item">
		<img
			:src="image.hdurl"
			class="image__image"
			:alt="image.title"
			@click="showModal"
		/>
		<div class="flex space-between mt-7">
			<div class="image__info">
				<h3 class="image__title">{{ image.title }}</h3>
				<p class="image__date">{{ image.date }}</p>
			</div>
			<button
				:class="[
					'button-like',
					{ 'liked': isLiked },
				]"
				type="button"
				@click="onImageLike"
			>
				<i class="fas fa-heart icon-like"></i>
			</button>
		</div>
	</div>

	<Modal
		v-show="isModalVisible"
		class="modal-image"
		:image="image"
		@close="closeModal"
	>
		<template v-slot:header>
			<h1 class="modal-image__title">{{ image.title }}</h1>
		</template>

		<template v-slot:body>
			<img
				class="modal-image__image"
				:src="image.hdurl"
				:alt="image.title"
			/>
		</template>
	</Modal>
</template>

<script>
	import Modal from './ui/Modal';
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
				isLiked: localStorage.getItem(this.image.hdurl) == 'true',
				isModalVisible: false,
			}
		},
		methods: {
			onImageLike() {
				const imageId = this.image.hdurl;
				this.isLiked = !this.isLiked;
				localStorage.setItem( imageId, this.isLiked );
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
			margin-bottom: 50px;
		}

		&__image {
			width: 100%;
			cursor: pointer;
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
	}

	.button-like {
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

		.icon-like {
			color: #9e9e9e;
			font-size: 20px;
		}

		&.liked {
			border-color: red;

			.icon-like {
				color: red;
			}
		}
	}

	.mt-7 {
		margin-top: 7px;
	}

	// Modal
	.modal-image .modal-image__image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
