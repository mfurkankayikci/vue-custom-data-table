<script>
import VPagination from './VPagination.vue';

export default {
  name: 'VDataTable',
  components: {
    VPagination,
  },
  data() {
    return {
      textCenterInThead: ['status', 'actions'],
      currentPage: 1,
    };
  },
  computed: {
    dataPerPage() {
      const maxElementCountInPage = 10;
      return [
        ...this.items.slice((this.currentPage - 1) * maxElementCountInPage,
          this.currentPage * maxElementCountInPage),
      ];
    },
    itemsPerPage() {
      return parseInt(this.items.length / 10, 10);
    },
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setCurrentPage(value) {
      this.currentPage = value;
    },
    editItem(item) {
      this.$emit('edit', item);
    },
    deleteItem(item) {
      this.$emit('delete', item);
    },
  },
};
</script>

<template>
  <div class="v-data-table">
    <div class="v-data-table__container">
      <table class="v-data-table__content">
        <thead>
          <tr class="v-data-table__thead-row">
            <th
              v-for="{ id, value, text } in headers"
              :key="id"
              class="py-3 px-6"
              :class="textCenterInThead.includes(value) ? 'text-center' : 'text-left'"
            >
              {{ text }}
            </th>
          </tr>
        </thead>

        <tbody class="v-data-table__tbody">
          <tr
            v-for="item in dataPerPage"
            :key="item.id"
            class="v-data-table__tbody__row"
          >
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item text-right">
                {{ item.id }}
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item">
                <span class="v-data-table__tbody-column-item__data">
                  {{ item.title }}
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item">
                <span class="v-data-table__tbody-column-item__data">
                  {{ item.name }}
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item justify-center">
                <span
                  class="
                    v-data-table__tbody-column-item__data
                    status--button
                  "
                  :class="item.completed.value ? 'done' : 'in-progress'"
                >
                  {{ item.completed.text }}
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item flex item-center justify-center">
                <div
                  class="v-data-table__tbody__column__item__data action--button edit--button"
                  @click="editItem(item)"
                >
                  <img src="../assets/svg/edit_icon.svg" alt="Edit">
                </div>
                <div
                  class="v-data-table__tbody__column__item__data action--button delete--button"
                  @click="deleteItem(item)"
                >
                  <img src="../assets/svg/delete_icon.svg" alt="Delete">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <v-pagination
        :item-count="itemsPerPage"
        :active-page="currentPage"
        @prevPage="currentPage--"
        @currentPage="setCurrentPage"
        @nextPage="currentPage++"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-data-table {
  $self: &;

  @apply w-full;

  &__container {
    @apply bg-white shadow-md rounded;

    #{ $self }__content {
      @apply min-w-max w-full table-auto;

      #{ $self }__thead-row {
        @apply bg-gray-200 text-gray-600 uppercase text-sm leading-normal;
      }

      #{ $self }__tbody {
        @apply text-gray-600 text-sm;

        &__row {
          @apply border-b border-gray-200 hover:bg-gray-100;
        }

        &__column {
          @apply py-3 px-6 text-left whitespace-nowrap;

          &__item {
            @apply flex items-center;

            &__data {
              @apply font-medium;
            }

            .action--button {
              @apply w-4 mx-1 cursor-pointer;
            }

            .edit--button {
              @apply hover:text-yellow-500 hover:scale-110;
            }

            .delete--button {
              @apply hover:text-red-500 hover:scale-110;
            }

            .status--button {
              @apply py-1 px-3 rounded-full text-xs;
            }

            .done {
              @apply bg-green-100 text-green-500;
            }

            .in-progress{
              @apply bg-blue-100 text-blue-500;
            }
          }
        }
      }
    }
  }
}
</style>
