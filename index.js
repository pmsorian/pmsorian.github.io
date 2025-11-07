function onDOMContentLoaded() {
    var map = L.map('map_1').setView([33.424511, -111.931007], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([33.424511, -111.931007]).addTo(map);
    // var circle = L.circle([33.424511, -111.931007], {
    //     color: 'red',
    //     fillColor: '#f03',
    //     fillOpacity: 0.1,
    //     radius: 70
    // }).addTo(map);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);