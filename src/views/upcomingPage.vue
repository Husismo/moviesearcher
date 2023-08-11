<template>
  <div class="container">
    <div class="upcoming-page__wrapper">
      <div class="upcoming-page__title title">Coming soon</div>
      <div class="loader movie__items" v-show="isFetching">
        <itemLoader />
        <itemLoader />
        <itemLoader />
        <itemLoader />
        <itemLoader />
        <itemLoader />
        <itemLoader />
        <itemLoader />
      </div>
      <div class="movie__items">
        <movieItem
          :movieList="item"
          v-for="item in upcomingList"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import movieItem from "@/components/movieItem.vue";
import itemLoader from "@/components/itemLoader.vue";
export default {
  components: {
    movieItem,
    itemLoader,
  },
  methods: {
    getUpcomingMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}movie/upcoming?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then(
          (response) => (this.upcomingList = response.results),
          (this.isFetching = !this.isFetching)
        )
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    this.getUpcomingMovies();
  },
  data() {
    return {
      upcomingList: [],
      isFetching: true,
    };
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
</style>
