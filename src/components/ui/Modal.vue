<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal"
				role="dialog"
				aria-labelledby="modalTitle"
			>
				<header class="modal-header" id="modalTitle">
					<slot name="header"></slot>
					<button
						type="button"
						class="button-close"
						@click="onClose"
						aria-label="Close modal"
					>
						<span class="fa fa-times" aria-hidden="true"></span>
					</button>
				</header>

				<section class="modal-body">
					<slot name="body"></slot>
				</section>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		methods: {
			onClose() {
				this.$emit('onClose');
			},
		},
	};
</script>

<style lang="scss" scoped>
	.modal-backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: #fff;
		display: flex;
		flex-direction: column;
		width: 85%;
		height: 85%;
		padding: 20px;
		overflow-x: auto;
	}

	.modal-header {
		position: relative;
	}

	.modal-body {
		height: 90%;
		padding: 10px 0 0;
	}

	.button-close {
		position: absolute;
		top: 0;
		right: 0;
		border: none;
		font-size: 20px;
		padding: 1px 10px;
		cursor: pointer;
		background: transparent;
	}

	.modal-fade-enter,
	.modal-fade-leave-to {
		opacity: 0;
	}

	.modal-fade-enter-active,
	.modal-fade-leave-active {
		transition: opacity .5s ease;
	}
</style>
