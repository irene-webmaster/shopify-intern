<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal"
				role="dialog"
				aria-labelledby="modalTitle"
				aria-describedby="modalDescription"
			>
				<header
					class="modal-header"
					id="modalTitle"
				>
					<slot name="header"></slot>
					<button
						type="button"
						class="button-close"
						@click="close"
						aria-label="Close modal"
					>
						x
					</button>
				</header>

				<section class="modal-body" id="modalDescription">
					<slot name="body"></slot>
				</section>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		methods: {
			close() {
				this.$emit('close');
			},
		},
	};
</script>

	<style>
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
		overflow-x: auto;
		width: 85%;
		height: 85%;
		padding: 30px;
	}

	.modal-header {
		position: relative;
	}

	.modal-body {
		position: relative;
		padding: 30px 0;
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