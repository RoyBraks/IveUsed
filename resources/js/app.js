import { createApp } from 'vue'

// Import components
import navigation from "./components/navigation";



createApp({
    delimiters: ["[[", "]]"],
    components: {
        "Navigation": navigation
    }
}).mount('#app')