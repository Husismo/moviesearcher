<template>
  <router-link :to="path">
    <div class="link__wrapper">
      <icon :iconName="iconName" />
      <p class="text">{{ text }}</p>
    </div>
  </router-link>
</template>

<script>
import icon from "./icon.vue";
export default {
  components: {
    icon,
  },
  props: {
    iconName: {
      type: String,
    },
    text: {
      type: String,
    },
    path: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  .link__wrapper {
    opacity: 1;
    font-weight: 700;
  }
}
.link__wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;
  p {
    margin-left: 12px;
  }
  &:hover {
    opacity: 0.9;
  }
}
</style>
