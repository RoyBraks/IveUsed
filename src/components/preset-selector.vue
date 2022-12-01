<template>
    <div class="preset-selector__wrapper">
        <label>Alcohol percentage: {{ values[currentIndex] }} %</label>
        <div class="preset-selector">
            <div class="preset-selector__indicator">
                <div class="preset-selector__line"></div>
                <span class="preset-selector__value">{{ values[0] }} %</span>
            </div>
            <input type="range" min="0" :max="this.values.length - 1" v-model="currentIndex">
            <div class="preset-selector__indicator preset-selector__indicator--end">
                <div class="preset-selector__line"></div>
                <span class="preset-selector__value">{{ values[values.length - 1] }} %</span>
            </div>
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
        currentIndex (val) {
            this.$emit('valueChange', this.values[this.currentIndex])
        }
    }
}
</script>

<style lang="sass" scoped>
.preset-selector
    position: relative

    input
        width: 100%
        margin-bottom: 4.25rem

    &__indicator
        left: 0
        top: 2.5rem
        display: flex
        position: absolute
        align-items: center
        flex-direction: column

        &--end
            right: 0
            left: initial
    
    &__line
        width: .1rem
        height: 1.25rem
        margin-bottom: .7rem
        background-color: $color-grey

    &__value
        color: $color-grey
</style>