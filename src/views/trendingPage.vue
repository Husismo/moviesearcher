<template>
  <div class="container">
    <div class="trending-page__wrapper">
      <div class="trending-page__title title">Popular</div>
      <div class="trending-page__items">
        <movieItem />
        <movieItem />
        <movieItem />
        <movieItem />
      </div>
    </div>
    <div class="trending-page__title title">Now playing</div>
    <div class="trending-page__items">
      <movieItem />
      <movieItem />
      <movieItem />
      <movieItem />
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
<style lang="scss" scoped>
.trending-page__wrapper {
  margin-top: 50px;
}
.trending-page__title {
  margin-bottom: 20px;
}
.trending-page__items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
</style>
