<script>
import VButton from './VButton.vue';

export default {
  name: 'VDialog',
  components: {
    VButton,
  },
  methods: {
    save() {
      console.log('Saved');

      this.$emit('close');
    },
  },
};
</script>

<template>
  <div class="v-dialog">
    <div class="v-dialog__overlay"/>

    <div class="v-dialog__container">
      <div class="v-dialog__content">
        <h2 class="v-dialog__content__title">Are you sure?</h2>
        <p class="v-dialog__content__text">
          Do you really want to delete your account?
          This process cannot be undone
        </p>
      </div>

      <div class="v-dialog__footer">
        <v-button :action-type="'error'" @click.native="$emit('close')">Cancel</v-button>
        <v-button :action-type="'success'" @click.native="save">Save</v-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-dialog {
  $self: &;

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
