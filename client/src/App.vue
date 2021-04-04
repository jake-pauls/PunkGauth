<template>
<div>
<Home />
</div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@font-face {
  font-family: "Digestive";
  src: local("Digestive"),
   url(./fonts/Digestive.otf) format("truetype");
   
}
@font-face {
  font-family: "Poppins";
  src: local("Poppins"),
   url(./fonts/Poppins/Poppins-Regular.ttf) format("truetype");
   
}
</style>
