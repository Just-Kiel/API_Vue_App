<template>
    <i-header id="cover-header" size="sm" class="_text-align:center">
        <h1>Webcams worldwide</h1>
        <p>All webcams of the world available.</p>
        <i-input v-model="search" placeholder="Type GPS decimal coordinates..">
            <template #append>
                <i-button v-on:click="click" color="primary">
                    <i-icon name="ink-search" />
                </i-button>
            </template>
        </i-input>
    </i-header>
</template>

<script>
export default {
    name: 'HeaderHome',
    emits: ['new-search'],
    methods:{
        click() {
            console.log("Search launched")
            this.$emit('new-search', this.search)
        },
    },
    data() {
        return {
            search: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cover-header {
    background-image: url('https://www.covestro.com/-/media/covestro/corporate/company/covestro-worldwide/overview/images/covestro_worldwide_2640x960.jpg?rev=a51763fe196c4794b624d621f4ac6e45&hash=885AE687EFD355EA28FB229FBE872B611D3CF518');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>