<script>
import { mapActions, mapGetters } from 'vuex';
import VDataTable from './components/VDataTable.vue';
import VDialog from './components/VDialog.vue';

export default {
  name: 'App',
  components: {
    VDataTable,
    VDialog,
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
      isDialogVisible: false,
      selectedItem: {},
      actionType: '',
    };
  },
  computed: {
    ...mapGetters(['getTableItems']),

    actionObject() {
      return { ...this.selectedItem, actionType: this.actionType };
    },
  },
  mounted() {
    this.fetchTodos();
    this.fetchUsers();
  },
  methods: {
    ...mapActions(['fetchTodos', 'fetchUsers']),
    editItem(item) {
      this.isDialogVisible = true;
      this.selectedItem = item;
      this.actionType = 'edit';
    },
    deleteItem(item) {
      this.isDialogVisible = true;
      this.selectedItem = item;
      this.actionType = 'delete';
    },
  },
};
</script>

<template>
  <div class="content">
    <div class="container mx-auto">
      <v-data-table
        :headers="tableHeaders"
        :items="getTableItems"
        @edit="editItem"
        @delete="deleteItem"
      />
    </div>

    <v-dialog
      v-if="isDialogVisible"
      :selected="actionObject"
      @close="isDialogVisible = false"
    />
  </div>
</template>

<style scoped>
.content {
  @apply w-screen h-screen bg-gray-100 flex items-center justify-center overflow-hidden
}
</style>
