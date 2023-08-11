<template>
  <div class="container">
    <div class="search-page__wrapper">
      <div class="search-page__input">
        <h2 class="search-page__title">All the movies of the world.</h2>
        <p class="search-page__subtitle">Find yours!</p>
        <div class="input__wrapper">
          <form id="search__form" @submit="findMovie">
            <input
              v-model.trim="searchValue"
              type="text"
              class="search__input"
            />
          </form>
          <icon
            v-show="searchValue.length > 0"
            class="input-icon"
            :iconName="`icon-search`"
            @click.native="findMovie"
          />
        </div>
      </div>
      <h2 class="search-page__title" v-show="isNothing">Nothing found</h2>
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
          v-for="item in foundMovies"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import icon from "@/components/icon.vue";
import movieItem from "@/components/movieItem.vue";
import itemLoader from "@/components/itemLoader.vue";
export default {
  components: {
    icon,
    movieItem,
    itemLoader,
  },
  data() {
    return {
      searchValue: "",
      foundMovies: [],
      isFetching: false,
      isNothing: false,
    };
  },
  methods: {
    findMovie(event) {
      event.preventDefault();
      this.isFetching = !this.isFetching;
      this.foundMovies = [];
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
      };

      fetch(
        `${process.env.VUE_APP_BASE_URL}search/movie?query=${this.searchValue}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then(
          (response) => (
            response.results.length > 0
              ? ((this.isNothing = false),
                (this.foundMovies = response.results))
              : (this.isNothing = true),
            (this.isFetching = !this.isFetching)
          )
        )
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.search-page {
  &__wrapper {
    margin-top: 50px;
  }
  &__input {
    .search__input {
    }
  }
  &__title,
  &__subtitle {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
  }
  &__title {
    margin-bottom: 15px;
  }
  &__subtitle {
    margin-bottom: 50px;
  }
  &__input {
    margin-bottom: 50px;
  }
}
.search__input {
  padding: 10px;
  border: none;
  width: 100%;
  background-color: $dark-gray;
  border-radius: 20px;
  color: #fff;
  outline: none;
  transition: 0.3s;
  font-size: 16px;
  &:hover {
    box-shadow: 0px 5px 20px 1px rgba(97, 0, 194, 0.6);
  }
  &:focus {
    box-shadow: 0px 5px 20px 1px rgba(97, 0, 194, 0.6);
  }
}
.input__wrapper {
  position: relative;
}
.input-icon {
  position: absolute;
  top: 5px;
  right: 0;
}
</style>
