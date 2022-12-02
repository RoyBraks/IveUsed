<template>
   <div class="indicator" v-if="hoursBeforeSober != 0 || minutesBeforeSober != 0">
        <div class="indicator__inner">
            <span class="indicator__label" @click="sendNotification">Je kunt weer rijden in</span>
            <div class="indicator__time">
                <span class="indicator__hours">{{ hoursBeforeSober }} uur &amp;</span>
                <span class="indicator__minutes">{{ minutesBeforeSober }} minuten</span>
            </div>
        </div>
    </div>

    <div class="indicator__warning box" v-show="hoursBeforeSober >= 6">
        If you were to get caught you are likely to lose your driver's license!
    </div>
</template>

<script>
import axios from "axios"

export default {
    data () {
        return {
            hoursBeforeSober: 0,
            minutesBeforeSober: 0
        }
    },
    methods: {
        sendNotification () {
            Notification.requestPermission().then(perm => {
                if (perm === "granted") {
                    new Notification("Notifications are granted", {
                        body: "This is what an notification looks like!"
                    });
                }
            })
        },
        calculateSubstanceEndingTimes (substances) {
            let usedSubstances = [];

            // For every taken substance
            substances.forEach((substance, index) => {
                let minutesBeforeSober = 0;
                const type = substance.type;

                if (type === "beer" || type === "wine" || type === "shot") {
                    // Bereken hoeveel minuten voordat alcohol is afgebroken
                    // 1 ml alc duurt 7.2 minuten om afbebroken te worden door het menselijk lichaam
                    const mlOfAlcoholIntake = (substance.amount / 100) * substance.alc;
                    minutesBeforeSober = mlOfAlcoholIntake * 7.2;
                } else if (type === "weed") {
                    minutesBeforeSober = 8 * 60;
                } else if (type === "shrooms") {
                    minutesBeforeSober = 6 * 60;
                } else if (type === "xtc") {
                    minutesBeforeSober = substance.amount * 14.0350877193;
                } else if (type === "cocaine") {
                    minutesBeforeSober = 4 * 60;    
                }

                // Push calculated data to array
                usedSubstances.push({
                    date: substance.date,
                    time: substance.time,
                    minutesBeforeSober: Math.round(minutesBeforeSober)
                });
            });

            this.calculateSoberTime(usedSubstances);
        },
        calculateSoberTime (substances) {
            let extraTimeBeforeSober = 0;

            for (let i = 1; i < substances.length; i++) {
                // Get the hours and minutes of current intake
                const currIntakeHours = parseInt(substances[i].time.split(":")[0]);
                const currIntakeMinutes = parseInt(substances[i].time.split(":")[1]);
                
                // Get the hours and minutes of previous taken substance
                const prevIntakeHours = parseInt(substances[i - 1].time.split(":")[0]);
                const prevIntakeMinutes = parseInt(substances[i - 1].time.split(":")[1]);

                // Calculate the hours and minutes when fully sober of previous taken substance
                let prevCleanHours = prevIntakeHours;
                let prevCleanMinutes = Math.round(prevIntakeMinutes + substances[i - 1].minutesBeforeSober);
                let numberOfHours = Math.floor(prevCleanMinutes / 60);
                for (let i = 0; i < numberOfHours; i++) {
                    prevCleanMinutes -= 60;
                    prevCleanHours++;
                }

                // 22:60 is not a valid time so we equal it to 23:00
                if (prevCleanMinutes === 60) { cleanMinutes -= 60; prevCleanHours++; }

                // Calculate the actual time before we are sober again
                if (substances[i].date === substances[i - 1].date) {
                    // If the previous taken substance hasn't worked out the remaining time will be calculated and added in the end
                    if (prevCleanHours == currIntakeHours) {
                        if (currIntakeMinutes < prevCleanMinutes) extraTimeBeforeSober += (prevCleanMinutes - currIntakeMinutes);
                    } else if (prevCleanHours > currIntakeHours) {
                        for (let i = 0; i < prevCleanHours - currIntakeHours; i++) extraTimeBeforeSober += 60;

                        if (prevCleanMinutes < currIntakeMinutes) extraTimeBeforeSober += currIntakeMinutes - prevCleanMinutes;
                        else extraTimeBeforeSober += prevCleanMinutes;
                    }
                }
            }

            // Get the hours and minutes of latest taken substance
            const intakeHours = parseInt(substances[substances.length - 1].time.split(":")[0]);
            const intakeMinutes = parseInt(substances[substances.length - 1].time.split(":")[1]);

            // Calculate the hours and minutes when fully sober of the last taken substance
            let cleanHours = intakeHours;
            let cleanMinutes = Math.round(intakeMinutes + substances[substances.length - 1].minutesBeforeSober + extraTimeBeforeSober);
            let numberOfHours = Math.floor(cleanMinutes / 60);
            for (let i = 0; i < numberOfHours - 1; i++) {
                cleanMinutes = cleanMinutes - 60;
                cleanHours++;
            }

            // 22:60 is equal to 23:00
            if (cleanMinutes == 60) { cleanMinutes -= 60; cleanHours++; }

            // Get the current date
            var currentdate = new Date();
            const currentHours = currentdate.getHours();
            const currentMinutes = currentdate.getMinutes();
            const currentDateString = String(currentdate.getDate()).padStart(2, '0') + "-" + String((currentdate.getMonth() + 1)).padStart(2, '0') + "-" + currentdate.getFullYear();

            let hoursBoforeSober = 0;
            let minutesBeforeSober = 0;
            
            // Calculate the actual time before we are sober again
            if (currentDateString === substances[substances.length - 1].date) {
                // Calculate the amount of hours and minute before fully sober
                if (cleanHours == currentHours) {
                    if (currentMinutes < cleanMinutes) minutesBeforeSober = cleanMinutes - currentMinutes;
                } else if (cleanHours > currentHours) {
                    for (let i = 0; i < cleanHours - currentHours; i++) minutesBeforeSober += 60;

                    if (currentMinutes < cleanMinutes) minutesBeforeSober += cleanMinutes - currentMinutes;
                    else minutesBeforeSober += cleanMinutes;
                }

                numberOfHours = Math.floor(minutesBeforeSober / 60);
                for (let i = 0; i < numberOfHours; i++) {
                    minutesBeforeSober = minutesBeforeSober - 60;
                    hoursBoforeSober++;
                }
            }

            // Set the calculated time as Vue variables in the templates
            this.hoursBeforeSober = hoursBoforeSober;
            this.minutesBeforeSober = minutesBeforeSober;
            
            if (minutesBeforeSober > 0) setTimeout(function () {
                new Notification("You may legally drive again", {
                    body: "You are able to drive again safely"
                });
            }, (hoursBoforeSober * 60 + minutesBeforeSober) * 60 * 1000);
        }
    },
    created () {
        // Get used substances from database
        axios.post("http://127.0.0.1:3000/substances/", {
            username: "ruben"
        }).then((res) => this.calculateSubstanceEndingTimes(res.data)).catch((error) => {
            document.body.innerHTML = "Please start the webserver";
            document.body.style.color = "#fff";
        });
    }
}
</script>

<style lang="sass" scoped>
.indicator
    width: 23.4rem
    height: 23.4rem
    display: flex
    border-radius: 50%
    align-items: center
    justify-content: center
    background-color: $color-white
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25)

    &__inner
        display: flex
        width: 21.5rem
        height: 21.5rem
        border-radius: 50%
        align-items: center
        color: $color-primary
        flex-direction: column
        justify-content: center
        border: solid .3rem #E5E5E5

    &__label
        margin-top: 1rem
        margin-bottom: .4rem

    &__time
        display: flex
        align-items: center
        flex-direction: column

    &__hours
        font-weight: 900
        font-size: 3.2rem

    &__minutes
        font-weight: 600
        font-size: 2rem 

    &__warning
        line-height: 1.7
        font-weight: 500
        margin-top: 2rem
        color: $color-warning
        background-color: rgba($color-warning, .25)
</style>