<template>
    <div class="slider">
        <label for="">Amount: {{ current + " " + values.measure }}</label>
        <input type="range" :min="values.min" :max="values.max" v-model="current">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                current: this.values.min,
            }
        },
        props: ["values"],
        mounted () {
            this.$emit('valueChange', this.current)
        },
        watch: {
            current (val) {
                this.$emit('valueChange', val)
            }
        }
    }
</script>

<style lang="sass">
.slider
    display: flex
    flex-direction: column
</style>