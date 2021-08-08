<script>
import { mapActions, mapGetters } from 'vuex';
import VDataTable from './components/VDataTable.vue';

export default {
  name: 'App',
  components: {
    VDataTable,
  },
  data() {
    return {
      tableHeaders: [
        {
          id: 0,
          value: 'id',
          text: '#',
        },
        {
          id: 1,
          value: 'title',
          text: 'Title',
        },
        {
          id: 2,
          value: 'assignee',
          text: 'Assignee',
        },
        {
          id: 3,
          value: 'status',
          text: 'Status',
        },
        {
          id: 4,
          value: 'actions',
          text: 'Actions',
        },
      ],
      tableItems: [],
    };
  },
  computed: {
    ...mapGetters(['getTableItems']),
  },
  mounted() {
    this.fetchTodos()
      .then(() => {
        this.fetchUsers()
          .then(() => {
            this.tableItems = this.getTableItems;
          });
      });
  },
  methods: {
    ...mapActions(['fetchTodos', 'fetchUsers']),
  },
};
</script>

<template>
  <div class="content">
    <div class="container mx-auto">
      <v-data-table
        :headers="tableHeaders"
        :items="tableItems"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  @apply w-screen h-screen bg-gray-100 flex items-center justify-center overflow-hidden
}
</style>
