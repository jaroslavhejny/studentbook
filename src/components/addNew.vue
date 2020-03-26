<template>
  <b-card>
    <template v-slot:header>
      <span>Add new?</span>
    </template>
    <b-card-body>
      <b-input v-model="newName"></b-input>
    </b-card-body>
    <template v-slot:footer>
      <b-button :variant="newName ? 'success' : 'warning'" :disabled="!newName" @click="addNew">Add</b-button>
    </template>
  </b-card>
</template>

<script>
  export default {
    name: 'addNew',
    props: {
      id: {
        type: [String, Number],
        default: undefined
      },

      type: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        newName: ''
      }
    },

    computed: {
      newItem () {
        return {name: this.newName, id: this.id}
      },

      newStudent () {
        return {student_id: this.newItem['id'], grades: {}}
      }
    },

    methods: {
      addNew () {
        if (this.type === 'students'){
          this.addNewStudent()
        }
        this.$store.dispatch('newItem', {type: this.type, item: this.newItem})
          .then(() => {
            this.newName = ''
          })
      },

      addNewStudent() {
        this.$store.dispatch('newItem', {type: 'grades', item: this.newStudent})
          .then(() => {

          })
      },
    }
  }
</script>

<style scoped>

</style>
