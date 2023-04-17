<template>
    <i-header id="cover-header" size="sm" class="_text-align:center">
        <h1>Webcams worldwide</h1>
        <p>All webcams of the world available.</p>
        <div id="inline">
            <i-select
                v-model="searchOption"
                :options="searchOptions"
                size="sm"
            >
                <template #prepend>
                    <span>Search by</span>
                </template>
            </i-select>
            <i-input v-model="search" 

            v-if="searchOption.label == 'GPS coordinates'"
            placeholder="Type GPS decimal coordinates.."
            >
                <template #append>
                    <i-button v-on:click="this.$emit('update:search', [this.search, this.searchOption.label])" color="primary">
                        <i-icon name="ink-search" />
                    </i-button>
                </template>
            </i-input>

            <i-input v-model="search" 

            v-else-if="searchOption.label == 'City name'"
            placeholder="Type city name.."
            >
                <template #append>
                    <i-button v-on:click="this.$emit('update:search', [this.search, this.searchOption.label])" color="primary">
                        <i-icon name="ink-search" />
                    </i-button>
                </template>
            </i-input>
        </div>

        <div id="inline">
            <i-select id="selectNbCameras"
                v-on:click="$emit('update:selectedLimit', this.selectedLimit.value)"
                v-model="selectedLimit"
                :options="optionsNbCameras"
                label="label"
                placeholder="Choose number of max cameras.."
            />

            <i-checkbox-group id="inline" v-model="checkedTime" 
            v-on:change="$emit('update:checkedTime', this.checkedTime)">
                <i-checkbox 
                    v-for="checkbox in optionsTimeCamera"
                    v-bind:key="checkbox.value"
                    v-bind:value = "checkbox.label"
                >
                    {{checkbox.label}}
                </i-checkbox>
            </i-checkbox-group>
        </div>
    </i-header>
</template>

<script>
export default {
    name: 'HeaderHome',
    emits: ['update:search','update:selectedLimit', 'update:checkedTime'],
    data() {
        return {
            searchOptions: [
                {
                    value: 'GPS coordinates',
                    label: 'GPS coordinates'
                },
                {
                    value: 'City name',
                    label: 'City name'
                }
            ],
            searchOption: 
            {
                value: 'GPS coordinates',
                label: 'GPS coordinates'
            },
            search: '',
            selectedLimit: null,
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
            optionsTimeCamera : [
                { value : "day", label : "Live"},
                { value : 1, label : "Day" },
                { value : 2, label : "Month" },
                { value : 3, label : "Year" }
            ],
            checkedTime: []
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
#inline {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>