<template>
  <div id="app">
    <navigation class="navigation" />
    <router-view />
  </div>
</template>

<script>
import icon from "@/components/icon.vue";
import navigation from "@/components/navigation.vue";
export default {
  components: {
    icon,
    navigation,
  },
  methods: {
    getFavorites() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
        },
      };

      fetch(
        `${process.env.VUE_APP_BASE_URL}account/20237202/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          for (let item of response.results) {
            this.$store.commit("addToFavorite", item);
          }
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    this.getFavorites();
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
