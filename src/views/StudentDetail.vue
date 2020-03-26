<template>
  <div v-if="student">
    <h2>Student detail: {{ studentName }}</h2>
    <div class="jh-flex">
      <b-form-group label="Search:" label-for="search" label-cols-sm="4" label-cols-lg="3">
        <b-input v-model="search" id="search" :name="type"></b-input>
      </b-form-group>
    </div>
    <div class="jh-flex">
      <div v-for="(subject, sbj_index) in filteredSubjects">
        <student-grade :subject="subject" @addGrade="addGrade" :grades="studentGrades[subject['id']]"
                       :key="timestamp + '_'+ subject['id']"></student-grade>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>
      Student doesn't exist
    </h2>
    <div class="jh-flex">
      <add-new :id="id" :type="'students'"></add-new>
    </div>
  </div>
</template>

<script>
  import StudentGrade from '../components/StudentGrade'
  import AddNew from '../components/addNew'

  export default {
    name: 'StudentDetail',
    components: {AddNew, StudentGrade},
    props: {
      id: {
        type: [String, Number],
        default: undefined
      }
    },

    data () {
      return {
        search: ''
      }
    },

    computed: {
      student () {
        return this.$store.getters['students'].find(student => {
          return student['id'] * 1 === this.id * 1
        })
      },

      studentName () {
        return this.student['name']
      },

      studentId () {
        return this.student['id']
      },

      studentGradesObject () {
        return this.$store.getters['grades'].find(a => {
          return a['student_id'] * 1 === this.studentId * 1
        })
      },

      studentGrades () {
        return this.studentGradesObject ? this.studentGradesObject['grades'] : {}
      },

      subjects () {
        return this.$store.getters['subjects']
      },

      timestamp () {
        return this.$store.getters['timestamp']
      },

      filteredSubjects () {
        return this.subjects.filter(item=>{
          return item['name'].toLowerCase().includes(this.search.toLowerCase())
        })
      },

    },

    methods: {
      addGrade (subjectId, grade) {
        this.$store.dispatch('addGrade', {studentId: this.studentId, subjectId: subjectId, newGrade: grade})
          .then(() => {

          })
      }
    },

    mounted () {

    },
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
