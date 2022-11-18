<template>
    <div ref="map">
        
    </div>
</template>

<script>
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    export default {
        mounted () {
            var mapElement = this.$refs.map;
            mapElement.style.height = document.getElementsByClassName("map__wrapper")[0].offsetHeight + "px";
            var leafletMap = L.map(mapElement).setView([51.505, -0.09], 13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(leafletMap);
        }
    }
</script>