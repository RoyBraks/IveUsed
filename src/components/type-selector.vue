<template>
    <div class="type-selector__wrapper">
        <label>Type</label>
        <div class="type-selector">
            <a href="#" class="type-selector__type" v-for="(type, index) in values" :key="index" :class="{ 'type-selector__type--active': currentIndex == index }" @click.prevent="currentIndex = index;">{{ type }}</a>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currentIndex: 0
        }
    },
    mounted () {
        this.$emit('valueChange', this.values[this.currentIndex])
    },
    props: ["values"],
    watch: {
        currentIndex () {
            this.$emit('valueChange', this.values[this.currentIndex])
        }
    }
}
</script>

<style lang="sass">
.type-selector
    display: flex
    flex-wrap: wrap

    &__type
        margin-right: 1rem  
        color: $color-white
        margin-bottom: 1rem
        padding: 1rem 1.5rem
        background-color: $color-grey
        border-radius: calc($border-radius / 2)

        &--active
            background-color: $color-primary          
</style>