<template>
    <i-sidebar v-model="open" size="sm">
        <h5>Last searches made by you</h5>
        <i-nav vertical>
            <i-nav-item 
            v-for="search in lastSearchesFiltered"
            v-bind:key="search.id"

            v-on:click="this.$emit('update:search', search)"
            >
                {{search.split("-")[0]}} - {{search.split("-")[1]}}
            </i-nav-item>
        </i-nav>
    </i-sidebar>
</template>

<script>
import { getCookie } from '@/services/cookiesTreatment'
export default {
    name: 'SideBar',
    data() {
        return {
            open: true,
            lastSearches: getCookie("location").split(",") || []
        }
    },
    props: {
        event: {
            default: []
        }
    },
    watch: {
        event: function() {
            console.log("New search made")
        
            this.lastSearches = getCookie("location").split(",")
        }
    },
    computed: {
        lastSearchesFiltered: function() {
            let copy = this.lastSearches
            copy.shift()
            
            return copy.filter((item, index) => {
                return copy.indexOf(item) === index;
            })
        }
    }
}
</script>

<style scoped>
.nav-item {
    cursor: pointer;
}
</style>