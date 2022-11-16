import { createApp } from 'vue'

// Import components
import navigation from "../../templates/components/navigation";



createApp({
    delimiters: ["[[", "]]"],
    components: {
        "Navigation": navigation
    }
}).mount('#app')