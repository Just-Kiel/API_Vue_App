<template>
  <i-layout>
    <i-layout vertical>
      <HeaderHome v-model:search="searchLocation" v-model:selected-limit="searchLimit" v-model:checked-time="searchTime"/>
      <SideBar v-bind:event="searchLocation" 
      v-model:search="searchLocation"/>
    </i-layout>
  
    <GalleryWebcams v-bind:location="searchLocation" v-bind:limit="searchLimit" v-bind:timeSpecific="searchTime"/>
    <FooterHome/>
  </i-layout>
</template>

<script>
import GalleryWebcams from './components/Gallery.vue'
import HeaderHome from './components/Header.vue'
import FooterHome from './components/Footer.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    GalleryWebcams,
    HeaderHome,
    FooterHome,
    SideBar
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
