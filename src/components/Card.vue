<template>
  <i-card class="card">
    <template #image>
        <embed controls v-bind:src="webcamUrl"/>
    </template>
    <h4 class="card-title">
        {{title}}
    </h4>
    <p class="card-subtitle">
        {{latestData}}
    </p>
  </i-card>
</template>

<script>
export default {
  name: 'CardVideo',
  props: {
    id: {type :Int16Array},
    title: {type :String},
    webcamUrl: {type :String, default: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"},
    latestData: {type :String, default: "No data available"}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 33%;
  min-width: 200px;
}
</style>
