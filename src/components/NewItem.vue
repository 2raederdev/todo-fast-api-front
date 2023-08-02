<template>
  <div>
    <form>
      <label for="newItemTitle">Title</label>
      <input
        maxlength="50"
        placeholder="Title of the task"
        type="text"
        v-model="newItem.title">
      <label for="newItemDescription">Description</label>
      <input
        placeholder="Description of the task"
        maxlength="200"
        type="text"
        v-model="newItem.description">
      <BaseButton @trigger-action="addItem" :isDisabled="isNewItemInfoUncompleted">Add</BaseButton>
    </form>
  </div>
</template>

<script>

export default {

  data () {
    return {
      newItem: {
        description: '',
        is_done: false,
        title: ''
      },
    }
  },
  computed: {
    isNewItemInfoUncompleted () {
      return !this.newItem.title.length || !this.newItem.description.length
    }
  },
  methods: {
    addItem () {
      this.$emit('trigger-action', this.newItem)
      this.newItem.description = ''
      this.newItem.title = ''
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  text-align: center;
}
input {
  width: 75%;
  height: 42px;
  padding: 0 10px;
  border: $dark-grey;
  border-radius: 10px;
  background-color: $cloud;
}

label {
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
}

::v-deep button {
  margin: 20px auto 0 auto !important;
}

@media (max-width: 1024px) {
  input {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

}
</style>