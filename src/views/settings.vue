<template>
    <main class="settings">
        <div class="settings__accountlink">
            <div class="settings__accountlinkicon">
                <svg class="account-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <path class="a" d="M17,3A14,14,0,1,0,31,17,14.005,14.005,0,0,0,17,3Zm0,4.2a4.2,4.2,0,1,1-4.2,4.2A4.194,4.194,0,0,1,17,7.2Zm0,19.88a10.081,10.081,0,0,1-8.4-4.508c.042-2.786,5.6-4.312,8.4-4.312s8.358,1.526,8.4,4.312A10.081,10.081,0,0,1,17,27.08Z" transform="translate(-3 -3)" /></svg>
            </div>

            <div class="settings__accountlinktext">
                <p>Account gegevens aanpassen?</p>
                <a class="settings__accountlinktext__linktext" href="account">Ga naar het account-tabblad</a>
            </div>

        </div>

        <div class="settings__settingsall">
            <h4>Instellingen</h4>

            <div class="settings__settingsall__smalltext">
                <div>
                    <p>Animaties weergeven</p>
                    <switchknob />

                    <p>Dark modus activeren</p>
                    <switchknob ref="darkModeSwitch" :active="$parent.$parent.darkMode" @changeValue="(value) => $emit('dark-mode', value)" />

                    <p>Push meldingen ontvangen</p>
                    <switchknob />

                    <p>Taal</p>
                    <dropdownmenu />

                    <p>Toevoeg optie</p>
                    <dropdownmenu />
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
import switchknob from "@/components/switchknob.vue"
import dropdownmenu from "@/components/dropdownmenu.vue"

export default {
    components: {
        switchknob,
        dropdownmenu
    }
}
</script>
  
<style lang="sass">
.settings
    &__accountlink
        background-color: $color-white-secondary
        padding: 1.5rem 0em
        font-size: 1.3rem
        margin: 1% 3% 0% 3%
        border-radius: $border-radius
        display: flex
        gap: 2rem
        justify-content: center
        align-items: center

    &__accountlinktext
        color: $color-black

        &__linktext
            line-height: 2rem
            color: $color-primary

    &__settingsall
        background-color: $color-white-secondary
        margin: 1em 3% 0% 3%
        padding: 1.5rem 1.5rem 1.5rem 1.5rem
        border-radius: $border-radius

        line-height: 3.5rem

.account-icon
    fill: $color-primary
  </style>