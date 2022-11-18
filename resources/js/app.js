import { createApp } from 'vue'

// Import components
import navigation from "../../templates/components/navigation";
import incidentMap from "../../templates/components/incident-map";

createApp({
    delimiters: ["[[", "]]"],
    components: {
        "navigation": navigation,
        "incidentmap": incidentMap
    },
    methods: {
        addSubstance (event) {
        
        }
    }
}).mount('#app')