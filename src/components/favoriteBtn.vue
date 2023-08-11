<template>
  <button class="favorite__btn">
    <icon :iconName="iconName" />
  </button>
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
  },
};
</script>

<style lang="scss" scoped>
.favorite__btn {
  padding: 15px;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  color: $purple;
  background: $ligth-gray;
  &:hover {
    background-color: $gray;
  }
  &:active {
    background-color: $dark-gray;
  }
}
</style>
