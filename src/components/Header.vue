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

        <i-select id="selectNbCameras"
            v-on:click="newLimit"
            v-model="selected"
            :options="optionsNbCameras"
            label="label"
            placeholder="Choose number of max cameras.."
        />
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
        newLimit() {
            console.log("New limit launched")
            this.$emit('new-limit', this.selected.value)
        }
    },
    data() {
        return {
            search: '',
            selected: null,
            optionsNbCameras: [
                { value: '10', label: '10 cameras' },
                { value: '20', label: '20 cameras' },
                { value: '30', label: '30 cameras' },
                { value: '40', label: '40 cameras' },
                { value: '50', label: '50 cameras' },
                { value: '60', label: '60 cameras' },
                { value: '70', label: '70 cameras' },
                { value: '80', label: '80 cameras' },
                { value: '90', label: '90 cameras' },
                { value: '100', label: '100 cameras' },
            ],
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
#selectNbCameras {
    margin-top: 10px;
    max-width: 22vw;
}
</style>