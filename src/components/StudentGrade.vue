<template>
  <b-card>
    <template v-slot:header>
      <span>{{ subject['name'] }}</span>
    </template>
    <div v-if="currentGrades.length">
      <span v-for="(g, index) in currentGrades" :key="'grade_'+index" class="grade">{{ g }}</span>
    </div>
    <div v-else>
      No marks
    </div>
    <template v-slot:footer>
      <b-input v-model="newGrade" type="number" min="1" max="5" step="1" class="text-center mb-1"></b-input>
      <p v-if="!validGrade" class="text-danger">False grade</p>
      <b-button :variant="canSubmit ? 'success':'warning'" :disabled="!canSubmit" @click="addGrade">Add</b-button>
    </template>
  </b-card>
</template>

<script>
  export default {
    name: 'StudentGrade',
    props: {
      subject: {
        type: Object,
        default: () => {
        }
      },
      grades: {
        type: Array,
        default: () => []
      }
    },

    data () {
      return {
        newGrade: undefined,
        currentGrades: this.grades
      }
    },

    computed: {
      validGrade () {
        return (this.newGrade > 0 && this.newGrade < 6) || !this.newGrade
      },

      canSubmit() {
        return (this.validGrade && this.newGrade)
      }
    },

    methods: {
      addGrade () {
        this.updateTimeStamp();
        this.$emit('addGrade', this.subject['id'], this.newGrade);
        this.newGrade = ''
      },

      updateTimeStamp() {
        this.$store.dispatch('newTimeStamp')
          .then(() => {

          })
      }
    },
  }
</script>

<style scoped>
  .grade:not(:last-child):after {
    content: '; '
  }
</style>
