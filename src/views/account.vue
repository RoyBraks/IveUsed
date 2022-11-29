<template>
    <main>
        <a class="uitlog_btn">
            <svg width="300" height="48" viewBox="0 0 300 48">ar <g id="Group_542" data-name="Group 542" transform="translate(-38 -35)"> <rect id="Rectangle_329" data-name="Rectangle 329" width="300" height="48" rx="10" transform="translate(38 35)" fill="#ff8080" /> <text id="Uitloggen" transform="translate(152 64)" fill="#fff" font-size="14" font-family="Montserrat-SemiBold, Montserrat" font-weight="400"> <tspan x="0" y="0">Uitloggen</tspan> </text> </g> </svg>
        </a>

        <div class="account_gegevens">
            <div class="account_content">
            <h1 id="title">Account gegevens updaten</h1>
            <div class="input_box">
                <h2 id="email">E-mailadres</h2>
                <input type="email" placeholder="Uw E-mailadres">
            </div>
            <div class="input_box">
                <h2 id="wachtwoord">Wachtwoord</h2>
                <input type="password" placeholder="Wachtwoord">
            </div>

            <a class="update_btn">
                <svg width="250" height="48" viewBox="0 0 250 48"> <g id="Group_531" data-name="Group 531" transform="translate(-63 -294)"> <rect id="Rectangle_219" data-name="Rectangle 219" width="250" height="48" rx="10" transform="translate(63 294)" fill="#5cc3fa" /> <text id="Gegevens_updaten" data-name="Gegevens updaten" transform="translate(120 323)" fill="#fff" font-size="14" font-family="Montserrat-SemiBold, Montserrat" font-weight="400"> <tspan x="0" y="0">Gegevens updaten</tspan> </text> </g> </svg>
            </a>

            <a class="verwijder_btn"> Verwijder mijn account </a>
            </div>

        </div>

        <div class="app_instellingen">
            <svg id="tandwiel" width="28" height="28" viewBox="0 0 28 28"> <path id="Icon_ionic-ios-settings" data-name="Icon ionic-ios-settings" d="M30.189,18.5A3.6,3.6,0,0,1,32.5,15.136a14.276,14.276,0,0,0-1.728-4.162,3.652,3.652,0,0,1-1.466.313,3.594,3.594,0,0,1-3.289-5.059A14.241,14.241,0,0,0,21.861,4.5a3.6,3.6,0,0,1-6.723,0,14.284,14.284,0,0,0-4.164,1.728,3.594,3.594,0,0,1-3.289,5.059,3.533,3.533,0,0,1-1.466-.313A14.592,14.592,0,0,0,4.5,15.143a3.6,3.6,0,0,1,.007,6.721,14.276,14.276,0,0,0,1.728,4.162,3.6,3.6,0,0,1,4.747,4.746A14.367,14.367,0,0,0,15.146,32.5a3.594,3.594,0,0,1,6.708,0,14.284,14.284,0,0,0,4.164-1.728,3.6,3.6,0,0,1,4.747-4.746,14.359,14.359,0,0,0,1.728-4.162A3.619,3.619,0,0,1,30.189,18.5ZM18.566,24.321A5.832,5.832,0,1,1,24.4,18.489,5.831,5.831,0,0,1,18.566,24.321Z" transform="translate(-4.5 -4.5)" fill="#49bcf9" /> </svg>
            <div class="text">
            <p>App-instellingen aanpassen?</p>
            <a class="instellingen_btn">
                <p id="instellingen_text">Ga naar de instellingen</p>
            </a>
            </div>
        </div>
    </main>
  </template>
  
  <script>
      export default {
      
      }
  </script>
  
<style lang="sass" scoped>
.account_gegevens
    display: flex
    position: relative
    border-radius: $border-radius
    background-color: $color-light-grey
    flex-direction: column
    width: 30rem
    height: 31.2rem
    margin-top: 1.5rem

.account_content
    display: flex
    position: relative
    flex-direction: column
    left: 2.7rem
    top: 2.5rem

    h1
        font-size: 1.3rem
        color: $color-black
        font-weight: 600
        margin-bottom: 1.5rem

    h2
        font-size: 1.2rem
        color: $color-black
        font-weight: normal
        margin-bottom: 0.6rem

.input_box
    margin-bottom: 1.5rem

    input
        width: 25rem
        height: 3.5rem
        border: none
        border-radius: calc($border-radius / 2)
        padding-left: 1.5rem
        font-family: "Montserrat", sans-serif
        background-color: $color-moderate-grey

.update_btn
    margin-top: 0.8rem

.verwijder_btn
    font-size: 1.3rem
    font-weight: 400
    color: $color-warning
    margin-left: 4.8rem
    margin-top: 1.4rem

.app_instellingen
    display: flex
    margin-top: 1.5rem
    background-color: $color-light-grey
    height: 7rem
    border-radius: $border-radius
    width: 30rem

    .text
        padding-left: 1.5rem
        font-weight: 400
        font-size: 1.3rem
        padding-top: 1.5rem
        line-height: 2rem

    #tandwiel
        margin-left: 3rem
        margin-top: 2rem

#instellingen_text
    color: $color-primary

.dark-mode
    .account_gegevens
        background-color: $color-dark-grey

    h1
        color: $color-white
    
    h2
        color: $color-text-grey

    input
        background-color: $color-moderate-dark-grey
        color: $color-white

.app_instellingen
    background-color: $color-dark-grey

    .text
        color: $color-white
</style>