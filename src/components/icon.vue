<template>
  <svg class="icon">
    <use v-bind:xlink:href="`#` + iconName" />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
    },
  },
  name: `icon`,
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.icon {
  padding: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: 0.3s;
}
</style>
