import { createApp } from 'vue'

// Import components
import navigation from "../../templates/components/navigation";
import incidentMap from "../../templates/components/incident-map";
import switchknob from "../../templates/components/switchknob";

createApp({
    delimiters: ["[[", "]]"],
    components: {
        "navigation": navigation,
        "incidentmap": incidentMap,
        "switchknob": switchknob
    },
    methods: {
        addSubstance (event) {
        
        }
    }
}).mount('#app')