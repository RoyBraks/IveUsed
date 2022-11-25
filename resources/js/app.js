import { createApp } from 'vue'

// Import components
import navigation from "../../templates/components/navigation";
import incidentMap from "../../templates/components/incident-map";
import switchknob from "../../templates/components/switchknob";
import popup from "../../templates/components/popup";

createApp({
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
        "switchknob": switchknob
    },
    methods: {
        addSubstance (event) {
            this.darkMode = !this.darkMode
        }
    },
    mounted () {
        if (this.darkMode == true) document.body.classList.add("dark-mode");
    },
    watch: {
        'darkMode' (newValue) {
            newValue ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
        }
    }
}).mount('#app')