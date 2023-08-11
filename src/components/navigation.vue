<template>
  <div class="nav__wrapper">
    <div class="logo__wrapper">
      <router-link to="/home">
        <img src="@/assets/image/logo.png" alt="logo" class="logo" />
      </router-link>
    </div>
    <nav class="menu">
      <ul class="nav__list">
        <li class="nav__link">
          <navigationLink
            :iconName="`icon-film`"
            :text="`Home`"
            :path="`/home`"
          />
        </li>
        <li class="nav__link">
          <navigationLink
            :iconName="`icon-heart`"
            :text="`Favorites`"
            :path="`/favorites`"
          />
        </li>
        <li class="nav__link">
          <navigationLink
            :iconName="`icon-trending`"
            :text="`Trending`"
            :path="`/trending`"
          />
        </li>
        <li class="nav__link">
          <navigationLink
            :iconName="`icon-calendar`"
            :text="`Coming soon`"
            :path="`/comingsoon`"
          />
        </li>
        <li class="nav__link">
          <navigationLink
            :iconName="`icon-search`"
            :text="`Search Movie`"
            :path="`/search`"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import navigationLink from "./navigationLink.vue";
export default {
  components: {
    navigationLink,
  },
};
</script>

<style scoped lang="scss">
.nav {
  &__wrapper {
    padding: 0px 40px;
    width: 195px;
    height: 100vh;
    box-shadow: 2px 0px 90px 0px rgba(97, 0, 194, 0.4);
    background-color: $bg-dark;
  }
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__link {
    margin-bottom: 35px;
    display: flex;
  }
}
.logo__wrapper {
  margin-bottom: 60px;
  padding-top: 40px;
}
</style>
