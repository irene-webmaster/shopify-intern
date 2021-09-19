<template>
	<div>
		<Header/>
		<main role="main">
			<section v-if="error">
				<ErrorMessage/>
			</section>

			<section v-else>
				<Loader v-if="loading"/>

				<ImageList :images="images"/>
			</section>
		</main>
	</div>
</template>

<script>
	import api from '../api/images';
	import Header from '../components/Header';
	import ErrorMessage from '../components/ui/ErrorMessage'
	import Loader from '../components/ui/Loader'
	import ImageList from '../components/ImageList';

	export default {
		components: {
			Header,
			ErrorMessage,
			Loader,
			ImageList,
		},
		data() {
			return {
				images: null,
				loading: true,
				error: false,
			};
		},
		mounted() {
			api.get()
				.then(response => {
					const imagesOnly = response.data.filter(image => image.media_type === 'image').reverse();
					this.images = imagesOnly;
				})
				.catch(() => {
					this.error = true;
				})
				.finally(() => this.loading = false)
		},
	}
</script>
