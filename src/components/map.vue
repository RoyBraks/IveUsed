<template>
    <div class="map" ref="map"></div>
</template>

<script>
    // Import the leaflet library with accessory CSS
    import axios from 'axios';
    import leaflet from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    export default {
        methods: {
            loadPopups (data, mapElement, leafletMap) {
                const markerIcon = L.icon({
                    iconSize: [30, 48],
                    iconAnchor: [16, 55],
                    popupAnchor: [0, -65],
                    iconUrl: 'img/map-marker-icon.svg'
                });

                // Loop troug accidents and add markers to map
                data.forEach(accident => {
                    
                    // Save markerlocation for later use
                    const markerLocation = [accident.latitude, accident.longitude];

                    // Add custom marker to map
                    leaflet.marker(markerLocation, {icon: markerIcon}).addTo(leafletMap).on('click', (e) => {
                        this.$parent.popup = true;
                        leafletMap.setView(e.target.getLatLng(), 11);

                        // Change popup information to custom popup
                        this.$parent.activePopup = accident;

                        // Find the pixel location on the map where the popup anchor is
                        var px = leafletMap.project(markerLocation);

                        // Find the height of the map, divide by 2 to centre, subtract from the Y axis of marker location
                        px.y -= mapElement.clientHeight / 3;

                        // Pan to marker center
                        leafletMap.panTo(leafletMap.unproject(px), {animate: true});
                    });
                });
            }
        },
        mounted () {
            // Get the map element
            var mapElement = this.$refs.map;
            const eindhovenLatLng = [51.44083, 5.47778];

            // Let the map take up all available height
            mapElement.style.height = document.getElementsByTagName("main")[0].offsetHeight + "px";

            // Initialze the Leaflet map with the latitude and longitude from Eindhoven
            var leafletMap = leaflet.map(mapElement).setView(eindhovenLatLng, 11);

            // Add tile-layer to leaflet map (load location images)
            leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(leafletMap);

            axios.get("http://127.0.0.1:3000/accidents/").then((res) => this.loadPopups(res.data, mapElement, leafletMap))
        }
    }
</script>

<style lang="sass">
// Make the colers of the tiles in the map better match our designed UI
.leaflet-tile 
    filter: grayscale(0.25) !important

// Hide original cancel-button for marker popup
.leaflet-popup-close-button
    display: none

// Hide the attribution to Leaflet that is positioned over the map
.leaflet-control-attribution
    display: none

// Hide control container over Leaflet Map
.leaflet-control-container
    display: none
</style>