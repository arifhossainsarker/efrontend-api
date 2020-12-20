<template>
  <Navbar></Navbar>
    <router-view></router-view>
  <Footer></Footer>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/parsials/Navbar.vue'
import Footer from './components/parsials/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
