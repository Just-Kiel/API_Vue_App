<template>
    <i-container>
      <i-row center>
            <CardVideo
              v-for="webcam in webcams"
              v-bind:key="webcam.id"
              v-bind:id="webcam.id"
              v-bind:title="webcam.title"
              v-bind:webcamUrl="webcam.url"
              v-bind:latestData="webcam.updated"
            />
      </i-row>
    </i-container>
</template>

<script>
import CardVideo from "./Card.vue"
import {getWebcamData} from '@/services/webcamAPI.js'

export default {
  name: 'GalleryWebcams',
  components : {
    CardVideo
  },
  props: {
    location: {type:String}
  },
  beforeUpdate(){
    console.log("Gallery is about to be updated")
    // Need to split and concatenate
    let location_as_gps = this.location.split(/(?:,| )+/)
    this.getWebcamsData(location_as_gps)
  },
  data() {
    return {
      webcams: []
    }
  },
  created() {
    this.getWebcamsData()
  },
  methods: {
    async getWebcamsData(point) {
      // If no information mentioned just make it undefined
      if (point == undefined) point = [undefined, undefined]
      
      this.webcams = await getWebcamData(point[0], point[1])
      this.webcams = this.webcams.result.webcams
      this.chooseRecentWebcam()
    },
    chooseRecentWebcam() {
      this.webcams.forEach(webcam => {
        if (webcam.player.live.available) {
          webcam.updated = "Live"
          webcam.url = webcam.player.live.embed
        } else if (webcam.player.day.embed) {
          webcam.updated = "Day"
          webcam.url = webcam.player.day.embed
        } else if (webcam.player.week.embed) {
          webcam.updated = "Week"
          webcam.url = webcam.player.week.embed
        } else if (webcam.player.month.embed) {
          webcam.updated = "Month"
          webcam.url = webcam.player.month.embed
        } else if (webcam.player.year.embed) {
          webcam.updated = "Year"
          webcam.url = webcam.player.year.embed
        } else {
          webcam.updated = "No data available"
          webcam.url = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        }
      });
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>