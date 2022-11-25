import { createApp } from 'vue'

// Import components
import popup from "../../templates/components/popup";
import navigation from "../../templates/components/navigation";
import incidentMap from "../../templates/components/incident-map";
import switchknob from "../../templates/components/switchknob";
import dropdownmenu from "../../templates/components/dropdownmenu";

// const clickOutside = {
//     beforeMount: (el, binding) => {
//         el.clickOutsideEvent = event => {
//             if (!(el == event.target || el.contains(event.target))){
//                 binding.value()
//             }
//         },
//         document.addEventListener("click", el.clickOutsideEvent)
//     },

//     unmounted: el =>
//     {
//         document.removeEventListener("click", el.clickOutsideEvent)
//     }
    
// }

createApp({
    // directives: {
    //     "click-outside": clickOutsideEvent
    // },
    data () {
        return {
            darkMode: false
        }
    },
    delimiters: ["[[", "]]"],
    components: {
        "popup": popup,
        "navigation": navigation,
        "incidentmap": incidentMap,
        "switchknob": switchknob,
        "dropdownmenu": dropdownmenu,
    },
    methods: {
        darkModeToggle (event) {
            this.darkMode = event
        }
    },
    mounted () {
        this.darkMode = localStorage.getItem('darkMode');
    },
    watch: {
        'darkMode' (newValue) {
            localStorage.setItem('darkMode', newValue);
            (newValue === 'true' || newValue === true) ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
        }
    }
}).mount('#app') 
