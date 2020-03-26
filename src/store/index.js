import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const NEW_ITEM = 'NEW_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ADD_GRADE = 'ADD_GRADE'
const NEW_TIMESTAMP = 'NEW_TIMESTAMP'

export default new Vuex.Store({
  state: {
    students: [
      {id: 1, name: 'Jerzy Dudek'},
      {id: 2, name: 'Jamie Carragher'},
      {id: 3, name: 'Steve Finnan'},
      {id: 4, name: 'Sami Hyypia'},
      {id: 5, name: 'Djimi Traore'},
      {id: 6, name: 'Xabi Alonso'},
      {id: 7, name: 'Steven Gerrard'},
      {id: 8, name: 'Herry Kewell'},
      {id: 9, name: 'Luis Garcia'},
      {id: 10, name: 'John Arne Riise'},
      {id: 11, name: 'Milan Baros'},
    ],

    subjects: [
      {id: 1, name: 'Matematika'},
      {id: 2, name: 'Český jazyk'},
      {id: 3, name: 'Anglický jazyk'},
      {id: 4, name: 'Fyzika'},
      {id: 5, name: 'Zeměpis'},
      {id: 6, name: 'Chemie'},
    ],

    grades:
      //grades: {subject_id: grade}
      [
        {student_id: 1, grades: {1: [5, 2], 2: [4], 3: [2], 4: [1]}},
        {student_id: 2, grades: {1: [2], 2: [1], 3: [1], 4: [1]}},
        {student_id: 3, grades: {1: [1], 2: [3], 3: [1], 4: [1]}},
        {student_id: 4, grades: {1: [1], 2: [1], 3: [4], 4: [1]}},
        {student_id: 5, grades: {1: [1], 2: [1], 3: [2], 4: [3]}},
        {student_id: 6, grades: {1: [5], 2: [4], 3: [1], 4: [2]}},
        {student_id: 7, grades: {1: [2], 2: [1], 3: [1], 4: [1]}},
        {student_id: 8, grades: {1: [1], 2: [3], 3: [1], 4: [1]}},
        {student_id: 9, grades: {1: [1], 2: [1], 3: [4], 4: [1]}},
        {student_id: 10, grades: {1: [1], 2: [1], 3: [2], 4: [3]}},
        {student_id: 11, grades: {1: [5], 2: [4], 3: [1], 4: [2]}},
      ],

    timestamp: 1
  },

  mutations: {
    [NEW_TIMESTAMP] (state, {timestamp}) {
      state['timestamp'] = timestamp
    },

    [NEW_ITEM] (state, {type, item}) {
      state[type].push(item);
    },

    [REMOVE_ITEM] (state, {type, item}) {
      state[type] = state[type].filter(stateItem => {
        return stateItem['id'] !== item
      });

      if (type === 'students'){
        state['grades'] = state['grades'].filter(stateItem => {
          return stateItem['student_id'] !== item
        });
      }

      else if (type === 'subjects'){
        state['grades'].forEach(grade=>{
          delete grade['grades'][item]
          return grade
        })
      }

    },

    [ADD_GRADE] (state, {studentId, subjectId, newGrade}) {
      let student = state['grades'].find(id => {
        return id['student_id'] === studentId
      })
      if (student['grades'][subjectId]){
        student['grades'][subjectId].push(newGrade*1);
      }

      else {
        student['grades'][subjectId] = [newGrade*1];
      }
    },



  },

  actions: {
    newItem ({commit}, {type, item}) {
      return new Promise(resolve => {
        commit(NEW_ITEM, {type, item})
        resolve()
      })
    },

    removeItem ({commit}, {type, item}) {
      return new Promise(resolve => {
        commit(REMOVE_ITEM, {type, item})
        resolve()
      })
    },

    addGrade({commit}, {studentId, subjectId, newGrade}) {
      return new Promise(resolve => {
        commit(ADD_GRADE, {studentId, subjectId, newGrade})
        resolve()
      })
    },

    newTimeStamp({commit}, type) {
      let timestamp = +new Date()
      return new Promise(resolve => {
        commit(NEW_TIMESTAMP, {timestamp})
        resolve();
      })
    }
  },

  getters: {
    students: state => {
      return state['students']
    },

    subjects: state => {
      return state['subjects']
    },

    grades: state => {
      return state['grades']
    },

    timestamp: state => {
      return state['timestamp']
    }
  }
})
