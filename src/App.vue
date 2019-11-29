<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark">
      <b-navbar-brand><img src="@/assets/logoMajestic.svg" class="logo" alt="Majesti Education" /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-nav-item>
                <router-link class="btn home" to="/"><font-awesome-icon icon="home" /> Home</router-link>
              </b-nav-item>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="app">
      <div id="divPizarron"><router-view/></div>
    </div>
    <draw></draw>
  </div>
</template>

<script>
import Draw from './components/Draw'
export default {
  name: 'App',
  components: { Draw }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
