<template>
  <div class="movie">
    <div class="movie__img">
      <favoriteBtn
        class="movie__favorite-btn"
        v-show="!checkAdded"
        :iconName="`icon-heart`"
        @click.native="addToFavorite"
      />
      <favoriteBtn
        class="movie__favorite-btn"
        v-show="checkAdded"
        :iconName="`icon-added-heart`"
        @click.native="removeFromFavorite"
      />
      <img
        :src="'https://image.tmdb.org/t/p/original' + movieList.poster_path"
        alt="movie picture"
        @click="openMoviePage"
      />
    </div>
    <div class="movie__info">
      <div class="movie__name">{{ movieList.title }}</div>
      <div class="movie__wrapper">
        <div class="movie__release-date">{{ getNormalDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import favoriteBtn from "./favoriteBtn.vue";
export default {
  components: {
    favoriteBtn,
  },
  data() {
    return {};
  },

  props: {
    movieList: {},
  },

  methods: {
    openMoviePage() {
      this.$router.push({ name: "movie", params: { id: this.movieList.id } });
    },

    addToFavorite() {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: this.movieList.id,
          favorite: true,
        }),
      };

      fetch(`${process.env.VUE_APP_BASE_URL}account/20237202/favorite`, options)
        .then((response) => response.json())
        .then((response) => this.$store.commit("addToFavorite", this.movieList))
        .catch((err) => console.error(err));
    },

    removeFromFavorite() {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: this.movieList.id,
          favorite: false,
        }),
      };
      fetch(`${process.env.VUE_APP_BASE_URL}account/20237202/favorite`, options)
        .then((response) => response.json())
        .then((response) =>
          this.$store.commit("removeFromFavorite", this.movieList)
        )
        .catch((err) => console.error(err));
    },
  },

  computed: {
    getNormalDate() {
      let date = this.movieList.release_date;
      return date.split("-").reverse().join(".");
    },
    checkAdded() {
      if (this.$store.getters.isFavoriteAdded(this.movieList)) {
        return true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.movie {
  width: 255px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &:hover {
    box-shadow: 2px 0px 90px 0px $purple-hover;
  }
  &__img {
    display: flex;
    justify-content: center;
    img {
      width: 255px;
      height: 100%;
    }
  }
  &__info {
    height: 70px;
    padding: 10px 15px 0px 15px;
    background-color: $ligth-gray;
    color: #000;
  }
  &__name {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 6px;
  }
  &__release-data {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }
  .movie__favorite-btn {
    position: absolute;
    right: 5px;
    bottom: 80px;
  }
}
</style>
