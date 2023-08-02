<template>
  <div class="card-row">
    <div class="card">
      <img src="@/assets/img/TODO_full_logo.png" alt="logo used as default picture" class="card__image">
      <div class="card__footer">
        <h3 class="card__title">{{ item.title }}</h3>
        <p><strong>Status:</strong> {{ item.is_done? 'Done' : 'Pending' }}</p>
        <p :title="item.description">{{ getItemDescription(item.description) }}</p>
        <div class="card__delete">
          <img
            src="@/assets/img/modify.svg"
            alt="modify status"
            @click="$emit('update')">
          <img
            src="@/assets/img/delete.svg"
            alt="delete"
            @click="$emit('delete')">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: { type: Object, default: () => {} }
  },
  methods: {
    getItemDescription (description) {
      return description.length > 50
        ? description.splice(0, 50)
        : description
    }
  }
}
</script>

<style lang="scss" scoped>

.card-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 16px;

  @media (max-width: 1024px) {
    margin: 10px auto;
  }
}

.card {
  position: relative;
  height: 350px;
  width: 240px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.4s all ease-in-out;
  z-index: 1;
  box-shadow: 5px 4px 15px rgba(196, 196, 196, 0.4);
  cursor: pointer;

  &__delete {
    text-align: right;
    margin-right: 2px;
  
    img {
      width: 30px;
  
      &:hover {
        cursor: pointer;
      }
    }
  }

  &__image {
    position: absolute;
    top: 0;
    height: 240px;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    transition: 0.4s all ease-in-out;
  }

  &__footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    box-sizing: border-box;
    padding: 0 16px 8px;
  }

  &__title {
    font-size: 18px;
    line-height: 21px;
    margin-top: 5px;
    margin-bottom: 1px;
  }

  &:hover {
    height: 350px;
    width: 240px;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
    cursor: default;

    img:not(.card__delete img) {
      transition: all 0.6s;
      transform: scale(1.4)
    }
  }
}


</style>