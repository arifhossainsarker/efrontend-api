<template>
   <Heroslider></Heroslider>
   <Productsection></Productsection> 
</template>
<script>
import Heroslider from './parsials/HeroSlider.vue'
import Productsection from './parsials/ProductSection.vue'
export default {
    name: 'Home',
    components: {
        Heroslider,
        Productsection
  }
}
</script>
<style scoped>

</style>
