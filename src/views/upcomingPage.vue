<template>
  <div class="container">
    <div class="upcoming-page__wrapper">
      <div class="upcoming-page__title title">Coming soon</div>
      <div class="upcoming-page__items">
        <movieItem />
        <movieItem />
        <movieItem />
        <movieItem />
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
<style lang="scss" scoped>
.upcoming-page__wrapper {
  margin-top: 50px;
}
.upcoming-page__title {
  margin-bottom: 20px;
}
.upcoming-page__items {
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
</style>
