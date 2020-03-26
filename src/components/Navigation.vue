<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="navbar-brand" :to="{name: 'StudentsList'}">Students</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="navbar-brand" :to="{name: 'SubjectsList'}">Subjects</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style scoped>

</style>
