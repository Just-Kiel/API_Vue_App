<template>
  <HeaderHome v-on:new-search="updateLocation" v-on:new-limit="updateLimit"/>
  <GalleryWebcams v-bind:location="searchLocation" v-bind:limit="searchLimit"/>
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
  methods:{
    updateLocation(search){
      this.searchLocation = search
    },
    updateLimit(limit){
      this.searchLimit = limit
    }
  },
  data(){
    return{
      searchLocation:'',
      searchLimit: 10
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
