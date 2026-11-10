// Center the map on Santa Fe, Libona, Bukidnon
const santaFe = [8.34457, 124.78059];

const map = L.map("map").setView(santaFe, 15);

// Add OpenStreetMap tiles
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }
).addTo(map);

// Marker 1 - Santa Fe
L.marker([8.34457, 124.78059])
    .addTo(map)
    .bindPopup("<b>Santa Fe</b><p>Welcome to Santa Fe, Libona, Bukidnon!</p>");

// Marker 2 - Camp 14
L.marker([8.35000, 124.77500])
    .addTo(map)
    .bindPopup("<b>Camp 14</b><p>Nearby community of Santa Fe.</p>");

// Marker 3 - Crossing
L.marker([8.34000, 124.79500])
    .addTo(map)
    .bindPopup("<b>Crossing</b><p>Nearby community landmark.</p>");

// Draw a 500-meter circle
L.circle(santaFe, {
    color: "blue",
    fillColor: "#30a3ec",
    fillOpacity: 0.3,
    radius: 500
}).addTo(map);

// Display coordinates when map is clicked
map.on("click", function(event) {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    L.popup()
        .setLatLng(event.latlng)
        .setContent(
            "<b>Selected Location</b><br>" +
            "Latitude: " + lat.toFixed(5) +
            "<br>Longitude: " + lng.toFixed(5)
        )
        .openOn(map);

    document.getElementById("coordinates").innerHTML =
        "Latitude: " + lat.toFixed(5) +
        "<br>Longitude: " + lng.toFixed(5);
});