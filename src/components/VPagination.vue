<script>
export default {
  name: 'VPagination',
  props: {
    itemCount: {
      type: Number,
      required: true,
    },
    activePage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    currentPage(item) {
      this.$emit('currentPage', item);
    },
  },
};
</script>

<template>
<div class="v-pagination">
  <button
    class="v-pagination__prev-next-button"
    :disabled="activePage === 1"
    @click="$emit('prevPage')"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-4 h-4">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>

  <div class="v-pagination__items-container">
    <button
      v-for="item in itemCount"
      :key="item"
      class="v-pagination__item"
      :class="activePage === item ? 'v-pagination__item--active' : ''"
      @click="currentPage(item)"
    >
      {{ item }}
    </button>
  </div>

  <button
    class="v-pagination__prev-next-button"
    :disabled="activePage === itemCount"
    @click="$emit('nextPage')"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
</div>
</template>

<style lang="scss" scoped>
.v-pagination {
  $self: &;

  @apply flex justify-center py-6;

  &__prev-next-button {
    @apply h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer;
  }

  &__items-container {
    @apply flex h-8 font-medium rounded-full;

    #{ $self }__item {
      @apply w-8 md:flex justify-center items-center hidden
      cursor-pointer leading-5 transition duration-150 ease-in rounded-full;

      &--active {
        @apply bg-purple-100 text-purple-500;
      }
    }
  }
}
</style>
