<script>
export default {
  name: 'VButton',
  props: {
    classNames: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button
      class="v-button"
      :class="classNames"
  >
    <slot>Button</slot>
  </button>
</template>

<style scoped>
.v-button {
  @apply text-sm font-medium bg-green-100 text-green-500 py-1 px-2 rounded align-middle
}
</style>
