<script>
import VDataTable from './components/VDataTable.vue';

export default {
  name: 'App',
  components: {
    VDataTable,
  },
};
</script>

<template>
  <div class="content">
    <v-data-table/>
  </div>
</template>

<style scoped>
.content {
  @apply w-screen h-screen bg-gray-100 flex items-center justify-center overflow-hidden
}
</style>
