<template>
  <div class="container">
    <div class="go-back__btn">
      <primaryBtn :text="`< Return back`" @click.native="goBack" />
    </div>
    <div class="movie-page__wrapper">
      <img
        :src="
          'https://image.tmdb.org/t/p/original' + this.thisMovie.poster_path
        "
        alt=""
        class="movie-page__img"
      />
      <div class="movie-page__info">
        <div class="movie-page__inner">
          <div class="movie-page__title">
            {{ this.thisMovie.title }}
          </div>
          <div
            class="movie-page__grade"
            v-show="this.thisMovie.vote_average > 0"
          >
            <icon :iconName="`icon-star`"></icon>
            {{ this.thisMovie.vote_average }}/10
          </div>
        </div>
        <div class="movie-page__desc">
          {{ this.thisMovie.overview }}
          <div class="movie-page__genres">
            <p
              class="genre"
              :item="genre"
              v-for="genre in this.thisMovie.genres"
              :key="genre.id"
            >
              {{ genre.name }}
            </p>
          </div>
          <p class="date">{{ this.normalDate }}</p>
          <p class="runtime">{{ this.runTimeH }}h {{ this.runTimeM }}m</p>
        </div>
        <div class="movie-page__favorite-button">
          <favoriteBtn />
        </div>
      </div>
    </div>
    <div class="title">Similar Movies</div>
    <div class="movie__items">
      <movieItem
        :movieList="item"
        v-for="item in similarMovies"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import icon from "@/components/icon.vue";
import favoriteBtn from "@/components/favoriteBtn.vue";
import primaryBtn from "@/components/primaryBtn.vue";
import movieItem from "@/components/movieItem.vue";
export default {
  components: {
    icon,
    favoriteBtn,
    primaryBtn,
    movieItem,
  },
  computed: {
    getId() {
      return this.$route.params.id;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getThisMovie() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
      };
      fetch(
        `${process.env.VUE_APP_BASE_URL}movie/${this.getId}?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => console.log((this.thisMovie = response)))
        .then(() => {
          this.getNormalRuntime();
          this.getNormalDate();
        })
        .catch((err) => console.error(err));
    },
    getSimilarMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTJhNGM3NzVlZWM2MTM5NGRmYjQ4ZTcxNDY1ZTU3MiIsInN1YiI6IjY0YzkxYWE5MWZhMWM4MDEwZjRkZTNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aGYlq5BV6DYUPJW9r9vWFlns0K1tfrv5IcdhGeV-xm8",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${this.getId}/similar?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) =>
          console.log((this.similarMovies = response.results))
        )
        .catch((err) => console.error(err));
    },
    getNormalRuntime() {
      let fullTime = this.thisMovie.runtime;
      let hour = fullTime / 60;
      let index = hour.toString().indexOf(".", 0);
      this.runTimeH = hour.toString().slice(0, index);
      this.runTimeM = Math.round((hour - this.runTimeH) * 60);
    },
    getNormalDate() {
      let date = this.thisMovie.release_date;
      this.normalDate = date.split("-").reverse().join(".");
    },
  },
  data() {
    return {
      thisMovie: {},
      similarMovies: [],
      runTimeH: "",
      runTimeM: "",
      normalDate: "",
    };
  },
  mounted() {
    this.getThisMovie();
    this.getSimilarMovies();
  },
};
</script>

<style scoped lang="scss">
.go-back__btn {
  margin-top: 50px;
}
.movie-page {
  &__wrapper {
    margin-top: 50px;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 50px;
  }
  &__img {
    width: 255px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    background: linear-gradient(
      90deg,
      $purple-active 0%,
      $purple 35%,
      $ligth-purple 100%
    );
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  &__title {
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
  }
  &__grade {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
  &__desc {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
  &__genres {
    display: flex;
    font-size: 12px;
    .genre {
      margin-top: 8px;
      margin-right: 8px;
      color: $gray;
    }
  }
}
.date,
.runtime {
  margin-top: 8px;
  font-size: 14px;
  color: $gray;
}
</style>
