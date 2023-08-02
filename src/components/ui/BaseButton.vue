<template>
  <button 
    v-if="!link"
    @click.prevent="triggerAction"
    :class="kind"
    :disabled="isDisabled">
    <slot></slot>
  </button>
  <router-link v-else :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    kind: {
      type: String,
      required: false,
      default: 'primary'
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  },
  methods: {
    triggerAction () {
      this.$emit('trigger-action')
    }
  }
}
</script>

<style scoped lang="scss">

button, a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 180px;
  padding: 0.75rem 1.5rem;
  background-color: $medium-blue;
  font-weight: 800;
  font-size: 16px;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  margin: 20px 8px 20px 0;

  &:hover, &:active, &:focus {
    background-color: $light-blue;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #fff;
    border: 1px solid $light-grey;
    color: $light-grey;

    &:hover, &:active, &:focus {
      border: 1px solid $light-grey;
      color: $light-grey;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }
}

.primary {
  background-color: $medium-blue;
  border: $medium-blue;

  &:hover, &:active, &:focus {
    background-color: #fff;
    color: $light-blue;
    border: 1px solid $light-blue;
  }
}

.secondary {
  background-color: #fff;
  color: $medium-blue;
  border: 1px solid $medium-blue;

  &:hover, &:active, &:focus {
    background-color: $light-blue;
    color: #fff;
    border: $light-blue;
  }
}

</style>