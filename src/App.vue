<template>
  <HeaderHome v-on:new-search="updateGallery"/>
  <GalleryWebcams v-bind:location="searchLocation"/>
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
    updateGallery(search){
      console.log(search)
      this.searchLocation = search
    }
  },
  data(){
    return{
      searchLocation:''
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
