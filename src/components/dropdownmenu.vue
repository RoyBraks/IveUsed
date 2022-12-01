<template>
    <div @click.prevent="()=>{active = !active}" class="dropdownBackground" :class={active:active}></div>
    <a @click.prevent="()=>{active = !active}" class="dropdown-container" :class={active:active} >
        <a class="optionbutton">
            <p class="optionbutton__text">{{value}}</p>
            <svg class="optionbutton__arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M5.1,3.451l.595-.61a.629.629,0,0,1,.908,0L11.811,8.18a.669.669,0,0,1,0,.932L6.6,14.454a.629.629,0,0,1-.908,0l-.595-.61a.672.672,0,0,1,.011-.943L8.34,9.746H.643A.65.65,0,0,1,0,9.087V8.208a.65.65,0,0,1,.643-.659h7.7L5.113,4.394A.667.667,0,0,1,5.1,3.451Z" transform="translate(14.647) rotate(90)" fill="#49bcf9"/>
            </svg>
        </a>
        <ul class="menulist">
            <li v-for="i in 3" @click.prevent="()=>{value='test' + i}">
                <a>test {{i}}</a>
            </li>
        </ul>
    </a>
    </template>
    
    <script>
        export default {
            data(){
                return {active: false, value:"Nederlands"}
            },
        }
    </script>

<style scoped lang="sass">
.dropdown-container
    position: relative

    font-size: inherit
    
    .optionbutton

        margin: 0
        height: 4rem
        background-color: $color-white-third
        padding: 0em 1.3rem
            
        border-radius: $border-radius

        display: flex

        align-items: center
        justify-content: space-between

        &__text
            color: $color-black

        &__arrow
            top: 1.3rem
            transition: 0.2s
    .menulist
        display: none

    &.active
        .optionbutton

            border-radius: $border-radius $border-radius 0px 0px 

            &__arrow
                rotate: 180deg
                transition: 0.2s
        ul
            display: block
            position: absolute
            list-style: none
            width: 100%
            background-color: $color-white-third
            z-index: 99
            border-radius: 0px 0px $border-radius $border-radius

            li
                top: 100%
                padding: 0 1.3rem
                position: relative
                border-style: solid none none none
                border-color: $color-white-secondary

.dropdownBackground
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: transparent
    display: none
    
    &.active

        display: block

</style>