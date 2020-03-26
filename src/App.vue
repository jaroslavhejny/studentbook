<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {Navigation},
  data() {
    return {}
  },

  computed: {
  }
}
</script>

<style>
  h2 {
    text-align: center;
    background-color: #67d0e1;
    color: #fff;
    padding: 1rem 0;
  }
</style>
