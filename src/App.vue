<script>
    import Navigation from "@/components/navigation.vue"

    export default {
        data () {
            return {
                darkMode: false
            }
        },
        components: {
            Navigation
        },
        mounted () {
            this.darkMode = localStorage.getItem('darkMode');
        },
        methods: {
            darkModeToggle (event) {
                this.darkMode = event;
            }
        },
        watch: {
            'darkMode' (newValue) {
                localStorage.setItem('darkMode', newValue);
                (newValue === 'true' || newValue === true) ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
            }
        }
    }
</script>

<template>
    <router-view @darkMode="darkModeToggle"></router-view>
    <Navigation />
</template>

<style lang="sass">
*, *::before, *::after
    margin: 0
    padding: 0
    color: inherit
    box-sizing: border-box

html
    font-size: 62.5%

body
    display: flex
    height: 100vh
    overflow: hidden
    font-size: 1.6rem
    align-items: center
    justify-content: center
    background-color: $color-black
    font-family: "Montserrat", sans-serif

#app
    width: 37.5rem
    position: relative
    max-height: 81.2rem
    height: calc(100vh - 10rem)
    
    &::before
        top: 0
        left: 0
        right: 0
        bottom: 0
        content: ""
        z-index: -2
        position: absolute
        background-color: $color-white

main
    padding: 3rem
    padding-bottom: 3.5rem
    min-height: calc(100% - 7.8rem)

// Dark mode styling
.dark-mode
    #app::before
        background-color: $color-black
</style>