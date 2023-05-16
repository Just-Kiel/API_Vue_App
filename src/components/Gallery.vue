<template>
    <i-container>
      <i-row center>
            <p v-if="organizedWebcams.length == 0">No webcam found for this location, maybe you set the wrong settings or maybe no data available here.</p>
            <CardVideo
              v-for="webcam in organizedWebcams"
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
import {webcamsTreatment, orderWebcams} from '@/services/webcamsTreatment.js'
import {getGeolocationData} from '@/services/geolocationAPI.js'
import {setCookie, getCookie} from '@/services/cookiesTreatment.js'

export default {
  name: 'GalleryWebcams',
  components : {
    CardVideo
  },
  props: {
    location: {type:String},
    limit : {type:Number},
    timeSpecific : {type:Array}
  },
  computed: {
    organizedWebcams: function() {
      console.log("Organizing webcams")
      let time = this.timeSpecific.map((element) => element.toLowerCase())
      // If no information mentioned just make it empty
      if (this.timeSpecific.length == 0) time = undefined

      let data = []

      // If specific time is defined, we need to get those types of webcams
      if (time != undefined) {
        data = this.allWebcams.filter(webcam => 
        {
          // Parse the specific time to get the right webcam
          for(const element in time)
          {
            if (webcam.player[time[element]].available)
            {
              webcam.updated = this.timeSpecific[element]
              webcam.url = webcam.player[time[element]].embed
              return webcam
            }
          }
        })
      } else {
        data = webcamsTreatment(this.allWebcams);
      }
      data = orderWebcams(data)

      return data
    }
  },
  watch :{
    location: function(newLocation, oldLocation){
      console.log("Location changed from " + oldLocation + " to " + newLocation)

      // Get last locations saved
      let lastLocations = getCookie("location")

      // Handle if location is a city or a gps point
      let method = newLocation.split("-")[1]
      if (method == 'GPS coordinates'){
        console.log("GPS coordinates")
        
        // Need to split and concatenate
        let location_as_gps = newLocation.split("-")[0].split(/(?:,| )+/)
  
        if (!isNaN(location_as_gps[0]) && !isNaN(location_as_gps[1])){
          console.log("GPS coordinates are valid")
          this.getWebcamsData(location_as_gps, this.limit)

          // Save as cookie
          setCookie("location", [lastLocations, newLocation], 7)
        } else {
          this.allWebcams = []
        }
      } else {
        // Save as cookie
        setCookie("location", [lastLocations, newLocation], 7)

        this.getGeolocationFromCity(newLocation.split("-")[0])
      }
    },
    limit: function(newLimit, oldLimit){
      console.log("Limit changed from " + oldLimit + " to " + newLimit)
      this.getWebcamsData(this.location_as_gps, this.limit)
    }
  },
  data() {
    return {
      webcamsDisplayed: [],
      allWebcams: [],
      location_as_gps: []
    }
  },
  created() {
    this.getWebcamsData()
  },
  methods: {
    async getWebcamsData(point, limit) {
      // If no information mentioned just make it undefined
      if (point == undefined) point = [undefined, undefined]
            
      this.allWebcams = await getWebcamData(point[0], point[1], limit)
      this.allWebcams = this.allWebcams.result.webcams
    },

    async getGeolocationFromCity(location) {
      try {
        let data = await getGeolocationData(location)
        data = data[0].latitude + "," + data[0].longitude
        this.location_as_gps = data.split(/(?:,| )+/)
        this.getWebcamsData(this.location_as_gps, this.limit)
      } catch (error) {
        console.log(error)
        this.allWebcams = []
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #fff;
}
</style>