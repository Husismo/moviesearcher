<template>
  <div class="root">
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__title">Insider</div>
          <div class="header__subtitle">2022 | Comedy horror | 1 Season</div>
          <div class="header__buttons">
            <watchNowBtn :text="`Watch now`" class="header__watch-btn" />
            <favoriteBtn class="header__like-btn">like</favoriteBtn>
          </div>
        </div>
      </div>
    </header>
    <div class="home__content">
      <div class="container">
        <div class="title">Top Rated</div>
        <div class="home__items">
          <movieItem />
          <movieItem />
          <movieItem />
          <movieItem />
        </div>
        <div class="title">Upcoming</div>
        <div class="home__items">
          <movieItem />
          <movieItem />
          <movieItem />
          <movieItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import watchNowBtn from "@/components/watchNowBtn.vue";
import favoriteBtn from "@/components/favoriteBtn.vue";
import movieItem from "@/components/movieItem.vue";
export default {
  components: {
    watchNowBtn,
    favoriteBtn,
    movieItem,
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 100vw;
}
.header {
  background-image: url("@/assets/image/flash.jpg");
  height: 455px;
  background-position: center;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-end;
  &__wrapper {
    display: flex;
    flex-direction: column;
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
.home__items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
</style>
