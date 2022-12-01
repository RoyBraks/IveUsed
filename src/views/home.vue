<template>
  <main class="home" :class="{ 'home__after': checkIfUserIsnotSober === true }">
    <Indicator ref="indicator" />
    <Add-substance />
    <Used-Table />
  </main>
</template>

<script>
  import Indicator from "@/components/indicator.vue"
  import AddSubstance from "@/components/add-substance.vue"
  import UsedTable from "@/components/used-table.vue"
  
  export default {
    components: {
      Indicator,
      AddSubstance,
      UsedTable
    },
    methods: {
      checkIfUserIsnotSober () {
        return this.$refs.indicator.hoursBeforeSober != 0 || this.$refs.indicator.minutesBeforeSober != 0
      },
    }
  }
</script>

<style lang="sass" scoped>
.home
    display: flex
    position: relative
    align-items: center
    flex-direction: column

    &__after
      &::before, &::after
          left: 3rem
          content: ""
          z-index: -1
          top: 10.5rem
          height: 9rem
          position: absolute
          width: calc(50% - 3rem)
          background-image: linear-gradient(to left, $color-primary, transparent)

      &::after
          right: 3rem
          left: initial
          background-image: linear-gradient(to right, $color-primary, transparent)
</style>