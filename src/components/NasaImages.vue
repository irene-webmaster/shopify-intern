<template>
  <div
    v-if="images"
    class="images__container"
  >
    <ul class="image__list">
      <li
        v-for="image in images"
        :key="image.identifier"
      >
        <h3>{{ image.title }}</h3>
        <p>{{ image.date }}</p>
        <p>{{ image.explanation }}</p>
        <img :src="image.hdurl" />
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api/images';

export default {
  data() {
    return {
      images: null,
    };
  },

  mounted() {
    api.get()
      .then(response => {
        this.images = response.data;
        console.log(this.images)
      })
      .catch(function (error) {
        console.log(error);
      })
  },
}
</script>

<style lang="scss" scoped>
  .images__container {
    padding: 5%;
  }

  .image__list {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;

    img {
      width: 100%;
    }
  }
</style>
