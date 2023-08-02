<template>
  <div>
    <div class="main">
      <header>
        <h1>TODO APP</h1>
        <p>Let's have a short ToDos List to gain control over your daily life!</p>
      </header>
      <section>
        <NewItem @trigger-action="addItem" />
      </section>
      <section>
        <div v-if="loading">
          <TheLoadingBalls class="v-spinner"/>
        </div>
        <div v-else>
          <div class="items-list">
            <div v-for="item in itemsList" :key="`item-${item.id}`" >
              <BaseCard :item="item" @update="deleteOrUpdateItem(item)" @delete="setItemToDelete(item)" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <template v-if="isModalOpen">
      <TheModal :isModalOpen="isModalOpen" @cancel="isModalOpen = false">
        <div class="box">
          <p>You are about to delete this item. Are you sure?</p>
          <div class="box__actions">
            <BaseButton @trigger-action="isModalOpen = false">No</BaseButton>
            <BaseButton kind="secondary" @trigger-action="deleteOrUpdateItem(itemToDelete, false)">Yes</BaseButton>
          </div>
        </div>
      </TheModal>
    </template>
  </div>
</template>

<script>
import { toRaw } from 'vue';
import { mapGetters } from 'vuex'

import TheLoadingBalls from '@/components/shared/TheLoadingBalls.vue'
import TheModal from '@/components/shared/TheModal.vue'
import NewItem from '../components/NewItem.vue'
import { addItem } from '../api'


export default {
  components: {
    TheLoadingBalls,
    TheModal,
    NewItem
},
  data () {
    return {
      isModalOpen: false,
      isTodoFound: false,
      itemToDelete: null,
      list: true,
      loading: false,
      newItem: {
        description: '',
        is_done: false,
        title: ''
      },
    }
  },
  computed: {
    ...mapGetters({
      itemsList: 'todos/getItemsList'
    }),

  },
  async created () {
    await this.$store.dispatch('todos/getItemsList')  
    this.loading = false
  },
  methods: {
    async addItem (item) {
      try {
        this.loading = true
        await this.$store.dispatch('todos/addItem', toRaw(item))
        await this.$store.dispatch('todos/getItemsList')  
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async deleteOrUpdateItem (item, update=true) {
      try {
        this.loading = true
        if (update) {
          await this.$store.dispatch('todos/updateItem', this.transformTitle(item.title))
        } else {
          await this.$store.dispatch('todos/deleteItem', this.transformTitle(item.title))
        }
        await this.$store.dispatch('todos/getItemsList')  
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
        this.itemToDelete = null
      }
    },
    setItemToDelete (item) {
      this.itemToDelete = item
      this.isModalOpen = true
    },
    transformTitle (title) {
      return title.replace(/\s+/g, '-').toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 960px;
  margin: 0 auto;
}

h1, p {
  text-align: center;
}

h1 {
  color: $dark-blue;
  font-size: 48px;
  margin-bottom: 48px;
}

section {
  margin-bottom: 40px;
}

.box {
  background-color: #fff;
    padding: 10px 40px;
    border-radius: 10px;

  p {
    text-align: center;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

.items-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.v-spinner {
  text-align: center;
}



@media (max-width: 1024px) {
  .main {
    width: 420px;
  }
}

@media (max-width: 440px) {
  .main {
    width: 330px;
    margin: 0 auto;
  }
}

</style>
  