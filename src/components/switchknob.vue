<template>
    <a @click.prevent="()=>{active = !active}" class="switch" :class={active:active}>
        <p>Nee</p>
            <div class="switch__button">
                <div class="switch__button__hole"></div>

                <div class="switch__button__ball"></div>
            </div>
        <p>Ja</p>
    </a>
</template>

<script>
    export default{
        props: ["active"],
        watch: {
            'active' (newValue) {
                this.$emit('changeValue', this.active)
            }
        }
    }
    
</script>

<style scoped lang="sass">
.switch
    display: flex
    gap: 0.8rem
    color: $color-gray

    &__button

        display: flex
        align-items: center

        &__hole

            width: 4rem
            height: 1.8rem
            background-color: $color-gray
            border-radius: $border-radius
            transition: 0.2s

        &__ball

            width: 1.4rem
            height: 1.4rem
            background-color: $color-white
            border-radius: 50%
            position: absolute
            margin-left: 0.2rem
            transition: 0.2s

    &.active

        .switch__button__hole
            background-color: $color-primary
            transition: 0.2s

        .switch__button__ball
            margin-left: 2.3rem
            transition: 0.2s
</style>
