<script>
export default {
  name: 'VButton',
  props: {
    actionType: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button
      class="v-button"
      :class="actionType === 'error' ? 'v-button--error' : 'v-button--success'"
  >
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
.v-button {
  @apply text-sm font-medium bg-green-100 text-green-500 py-1 px-2 rounded align-middle;

  &--error {
    @apply bg-red-100 text-red-500;
  }

  &--success {
    @apply bg-green-100 text-green-500;
  }
}
</style>
