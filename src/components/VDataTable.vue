<script>
import VDialog from './VDialog.vue';

export default {
  name: 'VDataTable',
  components: {
    VDialog,
  },
  data() {
    return {
      isDialogVisible: false,
    };
  },
};
</script>

<template>
  <div class="v-data-table">
    <div class="v-data-table__container">
      <table class="v-data-table__content">
        <thead>
          <tr class="v-data-table__thead-row">
            <th class="py-3 px-6 text-left">#</th>
            <th class="py-3 px-6 text-left">Title</th>
            <th class="py-3 px-6 text-left">Assignee</th>
            <th class="py-3 px-6 text-center">Status</th>
            <th class="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>

        <tbody class="v-data-table__tbody">
          <tr class="v-data-table__tbody__row">
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item text-right">
                <span class="v-data-table__tbody-column-item__data">1</span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item">
                <span class="v-data-table__tbody-column-item__data">
                  laboriosam mollitia et enim quasi adipisci quia provident illum
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item">
                <span class="v-data-table__tbody-column-item__data">
                  Leanne Graham
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item justify-center">
                <span
                  class="
                    v-data-table__tbody-column-item__data
                    status--button done
                  "
                >
                  Done
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item flex item-center justify-center">
                <div class="v-data-table__tbody__column__item__data action--button edit--button">
                  <img src="../assets/svg/edit_icon.svg" alt="Edit">
                </div>
                <div class="v-data-table__tbody__column__item__data action--button delete--button">
                  <img src="../assets/svg/delete_icon.svg" alt="Delete">
                </div>
              </div>
            </td>
          </tr>

          <tr class="v-data-table__tbody__row">
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item text-right">
                <span class="v-data-table__tbody-column-item__data">14</span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item">
                <span class="v-data-table__tbody-column-item__data">
                  laboriosam mollitia et enim quasi adipisci quia provident illum
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item">
                <span class="v-data-table__tbody-column-item__data">
                  Leanne Graham
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item justify-center">
                <span
                  class="
                    v-data-table__tbody-column-item__data
                    status--button in-progress
                  "
                >
                  In Progress
                </span>
              </div>
            </td>
            <td class="v-data-table__tbody__column">
              <div class="v-data-table__tbody__column__item flex item-center justify-center">
                <div class="v-data-table__tbody__column__item__data action--button edit--button">
                  <img src="../assets/svg/edit_icon.svg" alt="Edit">
                </div>
                <div class="v-data-table__tbody__column__item__data action--button delete--button">
                  <img src="../assets/svg/delete_icon.svg" alt="Delete">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <v-dialog
      v-if="isDialogVisible"
      @close="isDialogVisible = false"
    />
  </div>
</template>

<style lang="scss" scoped>
.v-data-table {
  $self: &;

  @apply w-full lg:w-5/6;

  &__container {
    @apply bg-white shadow-md rounded overflow-hidden;

    #{ $self }__content {
      @apply min-w-max w-full table-auto;

      #{ $self }__thead-row {
        @apply bg-gray-200 text-gray-600 uppercase text-sm leading-normal;
      }

      #{ $self }__tbody {
        @apply text-gray-600 text-sm font-light;

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
