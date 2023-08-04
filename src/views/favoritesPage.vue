<template>
  <div class="container">
    <div class="favorites-page__wrapper">
      <div class="title">Favorites</div>
        <div class="favorites-page__items">
          <movieItem />
          <movieItem />
          <movieItem />
          <movieItem />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import movieItem from "@/components/movieItem.vue";
export default {
  components: {
    movieItem,
  },
};
</script>
<style scoped lang="scss">
.favorites-page__wrapper {
  margin-top: 50px;
}
.favorites-page__items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
</style>
