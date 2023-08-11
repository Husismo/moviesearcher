<template>
  <button class="primary__button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.primary__button {
  padding: 17px 24px;
  font-weight: 500;
  font-family: "poppins";
  line-height: 20px;
  color: $white;
  background-color: $purple;
  cursor: pointer;
  border: none;
  border-radius: 14px;
  transition: 0.3s;
  &:hover {
    background-color: $purple-hover;
  }
  &:active {
    background-color: $purple-active;
  }
}
</style>
