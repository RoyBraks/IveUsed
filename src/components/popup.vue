<template>
    <div class="popup__wrapper" :class="{ 'popup__wrapper--active': active }">
        <div class="popup__overlay"></div>
        <div class="popup">
            <div class="popup--inner">
                <a href="#" class="popup__cross" @click.prevent="$emit('close')">
                    <svg width="20" height="20" viewBox="0 0 20 20"> <path id="Icon_metro-cross" data-name="Icon metro-cross" d="M22.388,18h0l-6.067-6.067,6.067-6.067h0a.626.626,0,0,0,0-.884L19.522,2.111a.627.627,0,0,0-.884,0h0L12.571,8.178,6.5,2.111h0a.627.627,0,0,0-.884,0L2.753,4.977a.626.626,0,0,0,0,.884h0l6.067,6.067L2.753,18h0a.626.626,0,0,0,0,.884L5.62,21.745a.626.626,0,0,0,.884,0h0l6.067-6.067,6.067,6.067h0a.626.626,0,0,0,.884,0l2.866-2.866a.626.626,0,0,0,0-.884Z" transform="translate(-2.571 -1.928)" fill="#a5a5a5"/></svg>
                </a>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['active']
    }
</script>

<style lang="sass" scoped>
.popup
    top: 50%
    left: 50%
    z-index: 1000
    overflow: auto
    padding: 2.5rem
    position: absolute
    width: calc(100% - 6rem)
    border-radius: $border-radius
    max-height: calc(100% - 14rem)
    background-color: $color-white
    transform: translate(-50%, -50%)

    &::-webkit-scrollbar
        display: none

    &--inner
        position: relative

    &__cross
        top: 0
        right: 0
        position: absolute

    &__overlay
        top: 0
        left: 0
        right: 0
        bottom: 0
        height: 100%
        z-index: 999
        opacity: .75
        display: block
        position: absolute
        background-color: $color-black

    &__wrapper
        display: none

        &--active
            display: block
</style>