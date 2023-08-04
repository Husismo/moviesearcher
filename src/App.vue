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
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
