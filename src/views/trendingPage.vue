<template>
  <div class="container">
    <div class="trending-page__wrapper">
      <div class="trending-page__title title">Popular</div>
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
          v-for="item in popularList"
          :key="item.id"
        />
      </div>
    </div>
    <div class="trending-page__title title">Now playing</div>
    <div class="movie__items">
      <movieItem
        :movieList="item"
        v-for="item in nowPlayingList"
        :key="item.id"
      />
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

  data() {
    return {
      nowPlayingList: [],
      popularList: [],
      isFetching: true,
    };
  },

  methods: {
    getPopularMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}movie/popular?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then(
          (response) => (this.popularList = response.results),
          (this.isFetching = !this.isFetching)
        )
        .catch((err) => console.error(err));
    },
    getNowPlayingMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}movie/now_playing?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => (this.nowPlayingList = response.results))
        .catch((err) => console.error(err));
    },
  },

  mounted() {
    this.getPopularMovies();
    this.getNowPlayingMovies();
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
</style>
