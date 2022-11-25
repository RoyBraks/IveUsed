import { createApp } from 'vue'

// Import components
import navigation from "../../templates/components/navigation";
import incidentMap from "../../templates/components/incident-map";
import switchknob from "../../templates/components/switchknob";
import dropdownmenu from "../../templates/components/dropdownmenu";
import { vue } from 'laravel-mix';

const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = event => {
            if (!(el == event.target || el.contains(event.target))){
                binding.value()
            }
        },
        document.addEventListener("click", el.clickOutsideEvent)
    },

    unmounted: el =>
    {
        document.removeEventListener("click", el.clickOutsideEvent)
    }
    
}

createApp({
    directives: {
        "click-outside": clickOutsideEvent
    },
    delimiters: ["[[", "]]"],
    components: {
        "navigation": navigation,
        "incidentmap": incidentMap,
        "switchknob": switchknob,
        "dropdownmenu": dropdownmenu,
    },
    methods: {
        addSubstance (event) {
        }
    }
}).mount('#app') 
