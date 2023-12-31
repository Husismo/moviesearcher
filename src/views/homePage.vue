<template>
  <div class="root">
    <header
      class="header"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${popularMovie.backdrop_path})`,
      }"
    >
      <div class="container">
        <div class="header__wrapper">
          <div class="header__title">{{ popularMovie.title }}</div>
          <div class="header__subtitle">{{ popularMovie.overview }}</div>
          <div class="header__buttons">
            <router-link
              :to="{
                name: 'movie',
                params: {
                  id: popularMovie.id,
                },
              }"
            >
              <primaryBtn :text="`About`" class="header__watch-btn" />
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <div class="home__content">
      <div class="container">
        <div class="title">Top Rated</div>
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
            :movieList="movieList"
            v-for="movieList in topRated"
            :key="movieList.id"
          />
        </div>
        <div class="title">Upcoming</div>
        <div class="movie__items">
          <movieItem
            :movieList="movieList"
            v-for="movieList in upcoming"
            :key="movieList.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import primaryBtn from "@/components/primaryBtn.vue";
import favoriteBtn from "@/components/favoriteBtn.vue";
import movieItem from "@/components/movieItem.vue";
import itemLoader from "@/components/itemLoader.vue";
export default {
  components: {
    primaryBtn,
    favoriteBtn,
    movieItem,
    itemLoader,
  },

  data() {
    return {
      topRated: [],
      upcoming: [],
      popularMovie: {},
      isFetching: true,
    };
  },

  methods: {
    getTopRatedMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}movie/top_rated?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then(
          (response) => (
            (this.topRated = response.results),
            (this.isFetching = !this.isFetching)
          )
        )
        .catch((err) => console.error(err));
    },

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
        .then((response) => (this.upcoming = response.results))
        .catch((err) => console.error(err));
    },

    getPopularMovie() {
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
        .then((response) => (this.popularMovie = response.results[0]))
        .catch((err) => console.error(err));
    },
  },

  computed: {
    getNormalPopularMovieDate() {
      let date = this.popularMovie.release_date;
      return date.split("-").reverse().join(".");
    },
  },

  mounted() {
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    this.getPopularMovie();
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 100vw;
}
.header {
  height: 455px;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-end;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  &__wrapper {
    padding: 50px 50px 0px 50px;
    display: flex;
    flex-direction: column;
    background-color: #19181757;
    backdrop-filter: blur(3px);
    border-radius: 20px 20px 0px 0px;
  }
  &__title {
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
    margin-bottom: 20px;
  }
  &__subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 36px;
  }
  &__buttons {
    display: flex;
    align-items: center;
    margin-bottom: 53px;
  }
  &__watch-btn {
    margin-right: 16px;
  }
}
</style>
