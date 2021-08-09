<script>
import { mapActions } from 'vuex';
import VButton from './VButton.vue';

export default {
  name: 'VDialog',
  components: {
    VButton,
  },
  data() {
    return {
      isCompleted: null,
      title: '',
    };
  },
  props: {
    selected: {
      type: Object,
    },
  },
  mounted() {
    this.isCompleted = this.selected.completed.value;
    this.title = this.selected.title;
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),

    save() {
      if (this.selected.actionType === 'delete') {
        this.deleteTodo(this.selected.id);
      } else {
        this.updateTodo({ ...this.selected, completed: this.isCompleted, title: this.title });
      }
      this.$emit('close');
    },
  },
};
</script>

<template>
  <div class="v-dialog">
    <div class="v-dialog__wrapper">
      <div class="v-dialog__overlay"/>

      <div class="v-dialog__container">
        <div class="v-dialog__content">
          <template v-if="selected.actionType === 'delete'">
            <h2 class="v-dialog__content__title">Are you sure?</h2>
            <p class="v-dialog__content__text">
              Do you really want to delete your account?
              This process cannot be undone
            </p>
          </template>

          <template v-else>
            <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="username">
              Title
            </label>
            <input
              v-model="title"
              class="v-dialog__input"
              id="username"
              type="text"
              :placeholder="title"
            >

            <label class="block text-gray-500 mt-3 text-left">
              <input
                v-model="isCompleted"
                class="mr-2 leading-tight"
                type="checkbox"
              >
              <span class="text-sm">
                Completed
              </span>
            </label>
          </template>
        </div>

        <div class="v-dialog__footer">
          <v-button :action-type="'error'" @click.native="$emit('close')">Cancel</v-button>
          <v-button :action-type="'success'" @click.native="save">Save</v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-dialog {
  $self: &;

  @apply absolute;

  &__input {
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
    leading-tight focus:outline-none;
  }

  &__wrapper {
    @apply relative w-screen h-screen flex justify-center content-center;
  }

  &__overlay {
    @apply absolute bg-black opacity-80 inset-0 z-0;
  }

  &__container {
    @apply w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white;

    #{ $self }__content {
      @apply text-center p-5 flex-auto justify-center;

      &__title {
        @apply text-xl font-bold py-4;
      }

      &__text {
        @apply text-sm text-gray-500 px-8;
      }
    }

    #{ $self }__footer {
      @apply p-3 mt-2 text-center space-x-4 md:block border-t;
    }
  }
}
</style>
