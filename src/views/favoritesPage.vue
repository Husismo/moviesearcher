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
  data(){
    return{
      favoriteList: []
    }
  }
};
</script>
<style scoped lang="scss">
.favorites-page__wrapper {
  margin-top: 50px;
}

</style>
