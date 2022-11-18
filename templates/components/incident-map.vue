<template>
    <div ref="map"></div>
</template>

<script>
    // Import the leaflet library with accessory CSS
    import leaflet from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    export default {
        mounted () {
            // Get the map element
            var mapElement = this.$refs.map;

            // Let the map take up all available height
            mapElement.style.height = document.getElementsByClassName("map__wrapper")[0].offsetHeight + "px";

            // Initialze the Leaflet map with the latitude and longitude from Eindhoven
            var leafletMap = leaflet.map(mapElement).setView([51.44083, 5.47778], 11);

            // Add tile-layer to leaflet map (load location images)
            leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(leafletMap);
        }
    }
</script>