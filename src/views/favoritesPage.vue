<template>
  <div class="container">
    <div class="favorites-page__wrapper">
      <div class="title">Favorites</div>
        <div class="movie__items">
          <movieItem 
          :movieList="item"
          v-for="item in favoriteList"
          :key="item.id"
          />
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
  mounted(){
    this.getFavoriteMovies()
  },
  data(){
    return{
      favoriteList: []
    }
  },
  methods:{
    getFavoriteMovies(){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`
        }
      };

      fetch(`${process.env.VUE_APP_BASE_URL}account/20237202/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, options)
        .then(response => response.json())
        .then(response => this.favoriteList = response.results)
        .catch(err => console.error(err));
    }
  }
};
</script>
<style scoped lang="scss">
.favorites-page__wrapper {
  margin-top: 50px;
}

</style>
