<template>
	<div>
		<Header/>
		<main role="main">
			<section v-if="error">
				<p>
					We are sorry, we are not able to retrieve this information at the moment. 
					Please try again later.
				</p>
			</section>

			<section v-else>
				<div v-if="loading">Loading...</div>

				<ImageList :images="images"/>
			</section>
		</main>
	</div>
</template>

<script>
	import api from '../api/images';
	import Header from '../components/Header';
	import ImageList from '../components/ImageList';

	export default {
		components: {
			Header,
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
					console.log(this.images);
				})
				.catch(function (error) {
					console.log(error);
					this.error = true;
				})
				.finally(() => this.loading = false)
		},
	}
</script>
