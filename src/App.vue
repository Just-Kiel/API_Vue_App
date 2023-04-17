<template>
  <HeaderHome v-model:search="searchLocation" v-model:selected-limit="searchLimit" v-model:checked-time="searchTime"/>
  <GalleryWebcams v-bind:location="searchLocation" v-bind:limit="searchLimit" v-bind:timeSpecific="searchTime"/>
</template>

<script>
import GalleryWebcams from './components/Gallery.vue'
import HeaderHome from './components/Header.vue'

export default {
  name: 'App',
  components: {
    GalleryWebcams,
    HeaderHome
  },
  data(){
    return{
      searchLocation:'',
      searchLimit: 10,
      searchTime: []
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
