<template>
  <div>
    <h2 class="text-capitalize">
      {{ type }} list
    </h2>
    <div class="jh-flex">
      <b-form-group label="Search:" label-for="search" label-cols-sm="4" label-cols-lg="3">
        <b-input v-model="search" id="search"></b-input>
      </b-form-group>
    </div>

    <div class="jh-flex">

      <b-card v-for="(item, item_index) in filteredItems" :key="item_index">{{ item['name'] }}
        <template v-slot:header>
          <span>Name</span>
        </template>
        <template v-slot:footer>
          <b-button v-if="hasDetail" variant="info" @click="detail(item['id'])">Detail</b-button>
          <b-button variant="danger" @click="remove(item['id'])">Remove</b-button>
        </template>
      </b-card>

      <add-new :id="highestIndex+1" :type="type"></add-new>

    </div>

  </div>
</template>

<script>
  import AddNew from '../components/addNew'
  export default {
    name: 'ItemList',
    components: {AddNew},
    props: {},
    data () {
      return {
        newName: '',
        search: ''
      }
    },

    computed: {
      type () {
        return this.$route.meta['type']
      },

      hasDetail () {
        return this.$route.meta['hasDetail']
      },

      items () {
        return this.$store.getters[this.type]
      },

      filteredItems () {
        return this.items.filter(item=>{
          return item['name'].toLowerCase().includes(this.search.toLowerCase())
        })
      },

      itemsId () {
        return [...new Set(this.items.map(item => item['id']))]
      },

      highestIndex () {
        return Math.max(...this.itemsId)
      },


    },

    methods: {
      detail(id) {
        this.$router.push({path: `${this.type}/${id}`})
      },

      remove(index) {
        this.$store.dispatch('removeItem', {type: this.type, item: index})
          .then(() => {

          })
      }
    }
  }
</script>

<style scoped>
  .jh-flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1em;;
  }

  .jh-flex > div {
    margin: 1em;
    text-align: center;
  }
</style>
