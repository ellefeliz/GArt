

    // Initialize the map
    var map = L.map('map', {
    touchZoom: true,
    zoomControl: false, // Hides the zoom buttons
    tap: false // Fixes issues with tapping on markers on some mobile devices
    }).setView([42.96589, -85.66845], 15);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);


    if (isMobile()) {
    L.control.zoom({
        position: 'topright'
    }).addTo(map);
    }



    function createPopupContent(markerName, description) {
    return `
        <div>
            <strong>${markerName}</strong><br>
            ${description}
            <br><button onclick="closePopup()">Close</button>
        </div>
    `;}

    function closePopup() {
        map.closePopup();
    }

    if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updateLocation, onLocationError, {
        enableHighAccuracy: true,
        maximumAge: 5000
    });
    } else {
        alert("Geolocation is not supported by this browser.");
    }

  // Define a function to open the link
function openLink(url) {
    window.open(url, '_blank');
}

    // Markers for locations
    var markers = [
        L.marker([42.96053, -85.6673505]).bindPopup("<strong><a href='https://www.artprize.org//venues#508613cd-7d1a-4b2a-9f6e-25318e295f67' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>106 Gallery</a></strong><br>Address:106 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.967663, -85.6708815]).bindPopup("<strong><a href='https://www.artprize.org//venues#5eb98e5f-6fb5-41a5-9a04-a493ebc861ee' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>111 Lyon</a></strong><br>Address:111 Lyon NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96424175, -85.67234099944356]).bindPopup("<strong><a href='https://www.artprize.org//venues#a43d48bf-0049-4fa7-ac34-cfcbd64967ec' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>AC Hotel Grand Rapids Downtown</a></strong><br>Address:50 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9668113, -85.67254881976629]).bindPopup("<strong><a href='https://www.artprize.org//venues#84d42b2e-de50-4372-bde1-969e211da74c' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Amway Grand Plaza Hotel</a></strong><br>Address:187 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9576956, -85.6350287]).bindPopup("<strong><a href='https://www.artprize.org//venues#cc20c053-3bd9-473a-a853-7f4a28fe484a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Argos Comics and Used Books</a></strong><br>Address:1405 Robinson Rd SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9704769, -85.6806639]).bindPopup("<strong><a href='https://www.artprize.org//venues#0cb82e85-e9d5-4c16-bc6c-17ac9369d283' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Arktos Meadery</a></strong><br>Address:442 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963251, -85.664824]).bindPopup("<strong><a href='https://www.artprize.org//venues#0e60b805-eb2f-4449-9616-2a76ce856fbb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Art For Honor at Veterans Memorial Park</a></strong><br>Address:101 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9619438, -85.6693316]).bindPopup("<strong><a href='https://www.artprize.org//venues#9e1d1b70-808a-4f83-b88a-d1798bd300a1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>ArtPrize ClubHouse</a></strong><br>Address:61 Commerce Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.961977, -85.6675836]).bindPopup("<strong><a href='https://www.artprize.org//venues#a485e2c0-ac94-4e34-a056-e4db1140be92' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>ArtRat Gallery</a></strong><br>Address:46 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96056072972973, -85.64462394594594]).bindPopup("<strong><a href='https://www.artprize.org//venues#4a39a1c1-5324-4a5d-b00b-1ecfa1ff76bb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Arts in Motion in the Blackport Building </a></strong><br>Address:147 Diamond Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9604981, -85.6706324]).bindPopup("<strong><a href='https://www.artprize.org//venues#63a9d38e-896c-49c4-9139-119e75171f50' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Arts Marketplace</a></strong><br>Address:121 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9575362, -85.6344343]).bindPopup("<strong><a href='https://www.artprize.org//venues#7f0da885-ef43-4476-a7e8-147dd5fbaf32' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Atelier Woodways</a></strong><br>Address:1422 Robinson Rd SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.970463, -85.672454]).bindPopup("<strong><a href='https://www.artprize.org//venues#e9d5af75-0e8c-4ea1-a6aa-bd8e575a23fe' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Atwater Brewing</a></strong><br>Address:201 Michigan St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96516115, -85.6669202638829]).bindPopup("<strong><a href='https://www.artprize.org//venues#3583f172-b08c-4c68-88f8-51dddf2d8da7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Avenue for the Arts Artposts</a></strong><br>Address:24 Fountain St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554842, -85.6489016]).bindPopup("<strong><a href='https://www.artprize.org//venues#b53711d5-34e9-494d-b7ca-0b88ad8cd65e' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Basic Bee Boutique</a></strong><br>Address:804 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.966145, -85.6703331]).bindPopup("<strong><a href='https://www.artprize.org//venues#27b08d74-0d38-4fc8-b45d-e2d465894239' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>BIANKA Bridal</a></strong><br>Address:125 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9611916, -85.6700022]).bindPopup("<strong><a href='https://www.artprize.org//venues#f6f3f746-7cfe-473a-9403-2c9da2e60609' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Big Mini Putt Club</a></strong><br>Address:70 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9660273, -85.6715132]).bindPopup("<strong><a href='https://www.artprize.org//venues#1698963f-3ce2-455c-acff-9b424a6769ce' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>BIGGBY® COFFEE</a></strong><br>Address:146 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9651024, -85.6695507]).bindPopup("<strong><a href='https://www.artprize.org//venues#5c420f41-5de6-434b-aab5-c740eb1e3852' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Blue Cross Blue Shield of Michigan</a></strong><br>Address:86 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.95988505, -85.64595319535776]).bindPopup("<strong><a href='https://www.artprize.org//venues#0a99bfa9-8c0d-418b-b675-f89f87773ee7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Brewery Vivant</a></strong><br>Address:925 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9706401, -85.688279]).bindPopup("<strong><a href='https://www.artprize.org//venues#a928416c-e318-4451-9597-8fd7a256b1e6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bridge St Electric</a></strong><br>Address:812 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9712317, -85.6831005]).bindPopup("<strong><a href='https://www.artprize.org//venues#e9f5e415-f4b3-44ad-b048-dc18eb1de16b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bridge Street Market </a></strong><br>Address:405 Seward Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9637103, -85.6705345]).bindPopup("<strong><a href='https://www.artprize.org//venues#417d3c7a-36f9-4a60-9ef5-00f3fd826223' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Brush Studio</a></strong><br>Address:11 Ionia Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9804227, -85.6722397]).bindPopup("<strong><a href='https://www.artprize.org//venues#88562ab8-5722-4b0d-8b39-c2bf86452cbd' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Canal Park Presented by SILVA </a></strong><br>Address:941 Monroe Ave NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96051467346938, -85.67030089795918]).bindPopup("<strong><a href='https://www.artprize.org//venues#4bc70062-d115-455f-8b6a-de7132d832ea' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Canopy by Hilton Grand Rapids Downtown</a></strong><br>Address:131 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9628985, -85.6640539]).bindPopup("<strong><a href='https://www.artprize.org//venues#50ce9cbd-a917-4df5-8f5e-582348052557' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>CHAR</a></strong><br>Address:6 Jefferson Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.955471, -85.6490885]).bindPopup("<strong><a href='https://www.artprize.org//venues#3cf26bba-e8c7-4054-9c7f-e87c3406a975' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Chartreuse Sisters</a></strong><br>Address:800 Wealthy Street Southeast • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.959595954545456, -85.65100552272727]).bindPopup("<strong><a href='https://www.artprize.org//venues#9261e67f-2702-4591-8da3-2721627661cf' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cherry Park</a></strong><br>Address:725 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9654187, -85.6705306]).bindPopup("<strong><a href='https://www.artprize.org//venues#ffe9c078-5aab-4403-ae64-d8df02104edb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cinco De Mayo</a></strong><br>Address:114 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96457825, -85.66985854282025]).bindPopup("<strong><a href='https://www.artprize.org//venues#6a24f917-557d-4d65-bb0a-97aaa989a545' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>CityFlats Hotel </a></strong><br>Address:83 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.95702, -85.6678624]).bindPopup("<strong><a href='https://www.artprize.org//venues#ce2754de-acf2-4dea-ab80-5e29fbe23222' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cocoon Art Space</a></strong><br>Address:327 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.970842899999994, -85.68110975217184]).bindPopup("<strong><a href='https://www.artprize.org//venues#9b1b6271-4842-4b31-aa8e-2964543ddf13' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Condado Tacos</a></strong><br>Address:449 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.961545, -85.66127947055526]).bindPopup("<strong><a href='https://www.artprize.org//venues#4e9d99c0-4644-46ce-b2dc-03cf5ad8c2ab' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cornerstone Church - Heritage Hill Campus</a></strong><br>Address:48 Lafayette Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9641977, -85.6683131]).bindPopup("<strong><a href='https://www.artprize.org//venues#01fba3ad-88c6-444a-9eeb-7d19c586e995' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Courage & Soar</a></strong><br>Address:40 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96409545, -85.67350351077638]).bindPopup("<strong><a href='https://www.artprize.org//venues#0d353786-cbfc-4a0f-8d27-8297b09cb357' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Courtyard Downtown Grand Rapids</a></strong><br>Address:11 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9666776, -85.6703378]).bindPopup("<strong><a href='https://www.artprize.org//venues#7a4c5fc4-42ac-43be-ad1c-ec7f620517dc' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Crain Communications - Crain's Grand Rapids Business</a></strong><br>Address: 161 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.968962, -85.666361]).bindPopup("<strong><a href='https://www.artprize.org//venues#0dc83d40-3d0d-449c-860f-791f3437ae5b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Crescent Park</a></strong><br>Address:301 Bostwick NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.98894215, -85.66480044986068]).bindPopup("<strong><a href='https://www.artprize.org//venues#52fb05ee-bc92-4e5c-b7a9-931bd03fc61b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Culver CPA Group</a></strong><br>Address:1419 Coit Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9614655, -85.66793799999999]).bindPopup("<strong><a href='https://www.artprize.org//venues#3135a0cd-e827-4ad6-a88d-1aeedb916114' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Decaydence Vintage</a></strong><br>Address:71 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963783, -85.668038]).bindPopup("<strong><a href='https://www.artprize.org//venues#649d7708-9498-4a93-a736-038b8bc0eb79' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Department of Corrections</a></strong><br>Address:1 Division Ave N • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.968773150000004, -85.67310083502079]).bindPopup("<strong><a href='https://www.artprize.org//venues#c703666c-aefb-4bbc-a624-53ce2ab2f7de' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>DeVos Place Convention Center</a></strong><br>Address:303 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9618432, -85.6725494]).bindPopup("<strong><a href='https://www.artprize.org//venues#b8655103-b448-472e-ada0-7e358e4052c6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Ding Tea</a></strong><br>Address:45 Ottawa Ave SW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9598739, -85.6674772]).bindPopup("<strong><a href='https://www.artprize.org//venues#6e25fcc7-e644-4c78-963e-e6a73931a36e' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>DreamPirate Gallery </a></strong><br>Address:136 Division Ave S • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9608422, -85.6698496]).bindPopup("<strong><a href='https://www.artprize.org//venues#88919be9-6a58-4fe8-8c4c-90c77d07050b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Dublin Hall</a></strong><br>Address:100 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9707975, -85.6939879]).bindPopup("<strong><a href='https://www.artprize.org//venues#7013edbe-1e4a-4cca-b27a-d169de96dd98' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Eden Cafe</a></strong><br>Address:1034 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9888025, -85.6649421]).bindPopup("<strong><a href='https://www.artprize.org//venues#dbb83d52-64b2-4537-805d-a56b7a8ce7d2' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>En Vivo Church</a></strong><br>Address:1415 Plainfield Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.967663, -85.6708815]).bindPopup("<strong><a href='https://www.artprize.org//venues#f31411e9-4896-4fc0-820e-999e07b119eb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fifth Third Bank</a></strong><br>Address:111 Lyon St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9665184, -85.6716307]).bindPopup("<strong><a href='https://www.artprize.org//venues#a0a7769d-1b86-4307-b23b-401fd38d5034' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Flanagan’s Irish Pub </a></strong><br>Address:139 Pearl St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9699913, -85.6706253]).bindPopup("<strong><a href='https://www.artprize.org//venues#7a192822-57ea-4f75-b539-b786e85f3ab7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Ford Federal Building</a></strong><br>Address:110 Michigan St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96516115, -85.6669202638829]).bindPopup("<strong><a href='https://www.artprize.org//venues#423777c9-2edc-4363-ba5a-10b43b51076f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fountain Street Church</a></strong><br>Address:24 Fountain St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9707241, -85.6806504]).bindPopup("<strong><a href='https://www.artprize.org//venues#bfb12b09-b12a-4b27-936e-0995b29e1752' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fratelli's Kitchen and Bar</a></strong><br>Address:443 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9648102, -85.6700695]).bindPopup("<strong><a href='https://www.artprize.org//venues#9fdf579b-5207-4875-8cfa-9b3e88f70f9f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fusionary</a></strong><br>Address:89 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.97733475, -85.6706235]).bindPopup("<strong><a href='https://www.artprize.org//venues#4d900f1f-639e-4ebc-a259-512c63532de3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Garage Bar and Grill</a></strong><br>Address:819 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9644122, -85.6685591]).bindPopup("<strong><a href='https://www.artprize.org//venues#8e8ece47-19bf-491e-bca2-ded3051cec61' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gazelle Sports</a></strong><br>Address:52 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9596734, -85.6449838]).bindPopup("<strong><a href='https://www.artprize.org//venues#8000faa9-c785-40dc-a721-75d0d44563dc' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gemini Handmade</a></strong><br>Address:963 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9684589, -85.67741147279662]).bindPopup("<strong><a href='https://www.artprize.org//venues#8ac0d6d9-d815-44e9-ad4a-cc106e34a070' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gerald R. Ford Presidential Museum</a></strong><br>Address:303 Pearl St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9630117, -85.6640565]).bindPopup("<strong><a href='https://www.artprize.org//venues#6c35feac-6e88-40c3-ac67-7152aade2fab' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gita Pita</a></strong><br>Address:2 Jefferson Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9600184, -85.6674448]).bindPopup("<strong><a href='https://www.artprize.org//venues#c992679d-64bb-46bf-98b5-c3f2d0719dc0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grammotones</a></strong><br>Address:120 Division Ave S., #125 • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9647264, -85.6700054]).bindPopup("<strong><a href='https://www.artprize.org//venues#c56b871f-a388-4a1f-9d75-95f358ac498d' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids African American Museum and Archives</a></strong><br>Address:87 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.965032699999995, -85.67090323776408]).bindPopup("<strong><a href='https://www.artprize.org//venues#a58e8be0-ea68-44b2-99c8-157b5d4d4336' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Art Museum </a></strong><br>Address:101 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96387815, -85.66721533585742]).bindPopup("<strong><a href='https://www.artprize.org//venues#428b5aa1-1a53-4154-8a13-4ba774b61347' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Children's Museum</a></strong><br>Address:11 Sheldon Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96882185, -85.67129863207964]).bindPopup("<strong><a href='https://www.artprize.org//venues#7a8b7702-146f-470a-84b8-ecbbe8258675' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids City Hall </a></strong><br>Address:300 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.95497315, -85.67063857205275]).bindPopup("<strong><a href='https://www.artprize.org//venues#3dd8b128-e14b-4a76-bd8d-76ed4d5f22bf' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Downtown Market</a></strong><br>Address:435 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.955363, -85.6414468]).bindPopup("<strong><a href='https://www.artprize.org//venues#1745cb32-2cbe-4842-acbc-14c4e02fdfe3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Media Initiative and Film Incubator (Wealthy Theatre Annex)</a></strong><br>Address:1110 Wealthy St. SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.964087500000005, -85.6769857618421]).bindPopup("<strong><a href='https://www.artprize.org//venues#76061ecf-01de-4b94-b167-98fda4024997' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Valley State University - Eberhard Center</a></strong><br>Address:301 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9611015, -85.6737309]).bindPopup("<strong><a href='https://www.artprize.org//venues#abdbf6a4-fea5-48ee-8ade-38a149c75011' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Woods Lounge</a></strong><br>Address:77 Cesar E. Chavez Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9665672, -85.66500098002209]).bindPopup("<strong><a href='https://www.artprize.org//venues#f40c5eff-e8f0-4df6-a57b-d4cfe58d6156' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>GRCC Collins Art Gallery</a></strong><br>Address:143 Bostwick Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9545605, -85.6678032]).bindPopup("<strong><a href='https://www.artprize.org//venues#13942b12-be0d-40c1-97ee-3840b6bf722b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Happy Cat Café</a></strong><br>Address:447 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.95516345, -85.63067349439068]).bindPopup("<strong><a href='https://www.artprize.org//venues#9989edab-db60-4fff-978b-988788342f78' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Harmony Brewing Company </a></strong><br>Address:1551 Lake Dr SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96351609643488, -85.6670650223025]).bindPopup("<strong><a href='https://www.artprize.org//venues#37f2e343-3dc9-4314-a68d-aac6d16bea30' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Has Heart at Veterans Memorial Park</a></strong><br>Address:22 Sheldon Avenue NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96706305, -85.66951960591658]).bindPopup("<strong><a href='https://www.artprize.org//venues#585a945b-f2dd-4922-8c00-bdc162be9895' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Healthy Habits Downtown </a></strong><br>Address:150 Ottawa NW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96588025, -85.67770879027405]).bindPopup("<strong><a href='https://www.artprize.org//venues#997ea07c-bc4f-4e09-854f-8d41d78f7030' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Holiday Inn Grand Rapids Downtown</a></strong><br>Address:310 Pearl Street NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96239185, -85.67058813932269]).bindPopup("<strong><a href='https://www.artprize.org//venues#ab08ffbf-4991-475f-a153-f414491c82fa' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>HopCat</a></strong><br>Address:25 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9663719, -85.6743566]).bindPopup("<strong><a href='https://www.artprize.org//venues#ca3322f0-661e-4a2d-b265-e3c1fee4e871' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Horizon Bank </a></strong><br>Address:250 Pearl St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640139, -85.668759]).bindPopup("<strong><a href='https://www.artprize.org//venues#d1dd9b32-16ec-426b-8fc5-694fde0d1f20' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>House of Wine</a></strong><br>Address:53 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9557571, -85.6698911]).bindPopup("<strong><a href='https://www.artprize.org//venues#864e234d-2762-40a5-9c1c-c56d1dca9e3b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>House Rules Lounge</a></strong><br>Address:404 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.966633900000005, -85.66982904253138]).bindPopup("<strong><a href='https://www.artprize.org//venues#858fb54c-fa40-4159-a570-6fd8872110d1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Hyatt Place Grand Rapids/Downtown</a></strong><br>Address:140 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9578919, -85.6827612731864]).bindPopup("<strong><a href='https://www.artprize.org//venues#43afc689-72c6-4688-803f-34569f32d7d9' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Ice Castle</a></strong><br>Address:289 Front Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9680732, -85.6816083]).bindPopup("<strong><a href='https://www.artprize.org//venues#bdd7d76f-dc81-4c79-a033-4658f4b7f6fe' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Innovation Design Center Starbucks</a></strong><br>Address:227 Winter Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9781233, -85.6719062]).bindPopup("<strong><a href='https://www.artprize.org//venues#f95a3899-bcde-4cd1-b485-25899b04cbc7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Intersect Studio</a></strong><br>Address:820 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.965942150000004, -85.67381344538771]).bindPopup("<strong><a href='https://www.artprize.org//venues#b2b39872-d3ff-4169-bb99-2128559d66b0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>JW Marriott Grand Rapids</a></strong><br>Address:235 Louis St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9703979, -85.6531335]).bindPopup("<strong><a href='https://www.artprize.org//venues#131921df-b282-4f3e-a566-6b07c19280a6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Kaffeine - Restaurant & Bar</a></strong><br>Address:637 Michigan St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594267, -85.6452082]).bindPopup("<strong><a href='https://www.artprize.org//venues#54d5aa96-ad70-49fd-bbc7-2e31c9678e90' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Kava Kasa</a></strong><br>Address:962 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9659028, -85.66846762085015]).bindPopup("<strong><a href='https://www.artprize.org//venues#7b180abb-0025-44c4-acda-e777fefb53c3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Kendall College of Art and Design of Ferris State University</a></strong><br>Address:17 Fountain NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9705876, -85.6845919]).bindPopup("<strong><a href='https://www.artprize.org//venues#04a59909-90f7-45e8-9062-9edb15cdb118' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Küsterer Brauhaus</a></strong><br>Address:642 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9624798, -85.668069]).bindPopup("<strong><a href='https://www.artprize.org//venues#cb6e35b7-36b5-47b3-b276-b651622fbe99' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Lilith’s lair</a></strong><br>Address:25 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9801807, -85.6720697]).bindPopup("<strong><a href='https://www.artprize.org//venues#c10392f0-26df-4f32-8273-9c19c678f846' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Linear Restaurant</a></strong><br>Address:1001 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.976848, -85.667387]).bindPopup("<strong><a href='https://www.artprize.org//venues#9bfc8dfa-9670-40e8-b237-b19942b5bb09' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Lookout Park presented by Neighbors of Belknap Lookout</a></strong><br>Address:801 Fairview Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9646685, -85.67292822459356]).bindPopup("<strong><a href='https://www.artprize.org//venues#6a410bfd-b6ca-48a7-9238-b0bd54e0028c' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Louis Campau Skywalk</a></strong><br>Address:43 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554652, -85.6511492]).bindPopup("<strong><a href='https://www.artprize.org//venues#f657de9a-1aa9-4b70-9e7c-11d95dd1852b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Mammoth Distilling </a></strong><br>Address:710 Wealthy Street SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9660273, -85.6715132]).bindPopup("<strong><a href='https://www.artprize.org//venues#bd577d84-f61d-465f-a36c-996ef1786e39' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>McKay Tower</a></strong><br>Address:146 Monroe Center NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9666365, -85.6719505]).bindPopup("<strong><a href='https://www.artprize.org//venues#1e55bf3b-8bd9-46ff-b887-60b480f0021a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Mojo's</a></strong><br>Address:180 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9808826, -85.6711602]).bindPopup("<strong><a href='https://www.artprize.org//venues#8e36005b-e7e8-4960-84bb-55a363dee1ff' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Monroe Community Church</a></strong><br>Address:1020 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.985367, -85.6866504]).bindPopup("<strong><a href='https://www.artprize.org//venues#1d490b0a-7a74-46c2-bd97-f79cf99d6e24' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Muse Gr</a></strong><br>Address:727 Leonard St NW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9576942, -85.6688037]).bindPopup("<strong><a href='https://www.artprize.org//venues#145ee56e-4048-4554-80ed-d9171ad7bfa3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>NIA Centre</a></strong><br>Address:300 Commerce Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.970842899999994, -85.68110975217184]).bindPopup("<strong><a href='https://www.artprize.org//venues#5c7d5fff-c88a-4b6d-9b19-8bd971d9e8a2' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Nonla Burger</a></strong><br>Address:449 Bridge St NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9856649, -85.6665813]).bindPopup("<strong><a href='https://www.artprize.org//venues#239db538-9d2c-4110-817a-8d8c10e6f4a7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Noxx</a></strong><br>Address:1234 Plainfield Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9641977, -85.6683131]).bindPopup("<strong><a href='https://www.artprize.org//venues#67fe0541-4455-47ca-9ed5-47cd6d1b40f6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Oh, Hello Paper & Gifts</a></strong><br>Address:40 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9653848, -85.6703289]).bindPopup("<strong><a href='https://www.artprize.org//venues#b2fcb165-bf62-45ce-9912-7a665887a0c8' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Old World Olive Co</a></strong><br>Address:108 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9704841, -85.68312550978521]).bindPopup("<strong><a href='https://www.artprize.org//venues#e4cc6f74-b8a1-4c74-abef-37f287802de6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>One Bourbon</a></strong><br>Address:608 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9597391, -85.667555]).bindPopup("<strong><a href='https://www.artprize.org//venues#2deb94cd-1be6-4ca8-a907-d39a553f876a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Open Door Bakery</a></strong><br>Address:144 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9624798, -85.668069]).bindPopup("<strong><a href='https://www.artprize.org//venues#c6def8fe-1278-4a12-85df-801b72146627' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>OTONO</a></strong><br>Address:25 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9553975, -85.6425087]).bindPopup("<strong><a href='https://www.artprize.org//venues#36d263b8-0401-48f1-8a05-0f43c38d27d5' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Paddle North</a></strong><br>Address: 1048 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.964083450000004, -85.6654714309502]).bindPopup("<strong><a href='https://www.artprize.org//venues#2537f97a-1d64-41bd-9b12-301abf074d27' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Park Church</a></strong><br>Address:10 East Park Pl NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.959617, -85.667936]).bindPopup("<strong><a href='https://www.artprize.org//venues#b41ca032-d380-4fd2-bbae-c2795d19d3d4' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Pekich Park</a></strong><br>Address:2 Cherry St SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.966145, -85.6703331]).bindPopup("<strong><a href='https://www.artprize.org//venues#952184c0-02e9-4928-b512-5c3eaf804d97' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Periwinkle Fog</a></strong><br>Address:125 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9704725, -85.6802139]).bindPopup("<strong><a href='https://www.artprize.org//venues#c93556a7-ddbe-4cc6-b5ce-c00d8a84f723' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Pide and Stick</a></strong><br>Address:428 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9638157, -85.6736001734102]).bindPopup("<strong><a href='https://www.artprize.org//venues#72896611-3dac-470f-a02a-ffa2d38fe7cd' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Plaza Towers </a></strong><br>Address:201 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96531231632653, -85.67091735714286]).bindPopup("<strong><a href='https://www.artprize.org//venues#fccd1aa9-e504-4c60-a35c-cbb4e9b202ce' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>PO (Art)Box</a></strong><br>Address:120 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554528, -85.6498622]).bindPopup("<strong><a href='https://www.artprize.org//venues#6c0bb735-7803-41d1-8f6c-976044ccd758' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Popnotch Goods</a></strong><br>Address:746 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9556203, -85.6309514]).bindPopup("<strong><a href='https://www.artprize.org//venues#3fc5f791-a833-486d-9559-100a8eafac74' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rebel</a></strong><br>Address:1555 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9626485, -85.6680258]).bindPopup("<strong><a href='https://www.artprize.org//venues#a5d34fcb-01ae-4c30-accd-e9f664b94730' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rewind</a></strong><br>Address:17 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.970453599050245, -85.67279677309098]).bindPopup("<strong><a href='https://www.artprize.org//venues#255cbfe2-c12a-46bd-a988-cadf2217e6e6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>River Edge Trail Mural</a></strong><br>Address:225 Michigan St NW, Grand Rapids, MI 49501 • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9618412, -85.6681582]).bindPopup("<strong><a href='https://www.artprize.org//venues#b06e38da-d377-4c14-afcd-2c11bc4a0b7a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rockwell Republic</a></strong><br>Address:45 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9923724, -85.6710076]).bindPopup("<strong><a href='https://www.artprize.org//venues#ee9d5d21-4a59-4a96-a935-dd17d513721b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Roeda Studio</a></strong><br>Address:1615 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9555222, -85.6528618]).bindPopup("<strong><a href='https://www.artprize.org//venues#c999e65c-caba-4bd4-b0d2-80f8825a3b2a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rowster coffee</a></strong><br>Address:632 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9630936, -85.6693532]).bindPopup("<strong><a href='https://www.artprize.org//venues#99e7b8ab-bf28-44c9-b16d-54a3fd3faad7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>San Chez Bistro</a></strong><br>Address:38 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9557149, -85.6436695]).bindPopup("<strong><a href='https://www.artprize.org//venues#73917f32-0fcc-484a-8ee8-ecce41d158a0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Scorpion Hearts Club</a></strong><br>Address:1035 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9627048, -85.6700424]).bindPopup("<strong><a href='https://www.artprize.org//venues#e2114a0f-e493-41ee-a1cc-4258b1bff886' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sears Architects</a></strong><br>Address:16 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.962718699999996, -85.66812949999999]).bindPopup("<strong><a href='https://www.artprize.org//venues#5b901b63-bb10-474f-b24a-158a76ddbe2d' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Second Vibess</a></strong><br>Address:13 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9850381, -85.6851802]).bindPopup("<strong><a href='https://www.artprize.org//venues#2f3f5572-4b3f-44de-8de4-142ddd6424e0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Shakedown Street </a></strong><br>Address:670 Leonard St NW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9641977, -85.6683131]).bindPopup("<strong><a href='https://www.artprize.org//venues#01a257ab-3e80-4bba-8315-2ecb00b3430b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Shinola Grand Rapids Downtown</a></strong><br>Address:40 Monroe Center St NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640854, -85.6681384]).bindPopup("<strong><a href='https://www.artprize.org//venues#dd799a9f-fbaf-47a5-af37-7c41fda708b8' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>SHOW Salon</a></strong><br>Address:40 Monroe Center • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.97432464473214, -85.67252832607556]).bindPopup("<strong><a href='https://www.artprize.org//venues#cf5135c2-05d3-490f-af07-4191366b3b05' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sixth Street Park - Monroe North Business Assoc</a></strong><br>Address:647 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9550949, -85.6456676]).bindPopup("<strong><a href='https://www.artprize.org//venues#eeef00e7-dcbe-499a-8fab-d781e6eb6251' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Speciation Cellars</a></strong><br>Address:928 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9629465, -85.6447379]).bindPopup("<strong><a href='https://www.artprize.org//venues#0b2b4031-d02a-46af-8a3d-ebf281ddc584' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Spike & Mike's Party Store</a></strong><br>Address:967 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9665813, -85.6704308]).bindPopup("<strong><a href='https://www.artprize.org//venues#67fbc646-117a-40c3-b036-ac81893f6311' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sundance Grill & Bar</a></strong><br>Address:151 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9658874, -85.6712218]).bindPopup("<strong><a href='https://www.artprize.org//venues#bec32df6-3224-47f4-b730-1ce0c14c79d9' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sweet Yo's</a></strong><br>Address:134 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9736735, -85.6716199]).bindPopup("<strong><a href='https://www.artprize.org//venues#59b7babc-f9a3-49f6-b25b-4f4676f9cdf3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sweetwaters Coffee & Tea Monroe North</a></strong><br>Address:601 Bond Ave • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9703689, -85.67912955883503]).bindPopup("<strong><a href='https://www.artprize.org//venues#12ced55a-64eb-4918-8bb6-3e090f996199' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Swift Printing </a></strong><br>Address:404 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9628568, -85.6640429]).bindPopup("<strong><a href='https://www.artprize.org//venues#b7745130-e661-4f64-8711-af30f9e54852' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The 12th House GR</a></strong><br>Address:8 Jefferson Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9647347, -85.6693688]).bindPopup("<strong><a href='https://www.artprize.org//venues#8eca3c17-6c0c-46ed-8a73-f481fcef917b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Aroma Labs</a></strong><br>Address:÷76 Monroe Center St NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9657059, -85.6706976]).bindPopup("<strong><a href='https://www.artprize.org//venues#451c3704-5e38-4726-94ae-b3cf4f256f97' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Atrium at Uccello's Downtown</a></strong><br>Address:122 Monroe Center NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.957039, -85.6678697]).bindPopup("<strong><a href='https://www.artprize.org//venues#a1acfcbf-b178-4bb4-be11-a392dc60c2e5' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The August Connection </a></strong><br>Address:325 Division Avenue South • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96381615, -85.67252098963971]).bindPopup("<strong><a href='https://www.artprize.org//venues#dc4a0cc4-4b8d-4e65-9c66-bf29f358a1ba' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The B.O.B.</a></strong><br>Address:20 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9633316, -85.6870949]).bindPopup("<strong><a href='https://www.artprize.org//venues#fb284e89-b668-45fc-bb1a-97050b090ffd' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The bitter end coffeehouse</a></strong><br>Address:752 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9618432, -85.6725494]).bindPopup("<strong><a href='https://www.artprize.org//venues#ecb6bc8d-cefc-4e97-a106-e5e25ce0d4dc' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Center for Physical Rehabilitation</a></strong><br>Address:45 Ottawa Ave SW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9553027, -85.6336435]).bindPopup("<strong><a href='https://www.artprize.org//venues#9cab3c25-7fce-4c1b-a9f1-3ff794e4c4f2' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The McKendrick Building</a></strong><br>Address:1443 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9649288, -85.6691526337979]).bindPopup("<strong><a href='https://www.artprize.org//venues#ba54a2b4-fee3-43f4-ae98-d19cb52dc630' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Morton</a></strong><br>Address: 55 Ionia Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9645023, -85.6696399]).bindPopup("<strong><a href='https://www.artprize.org//venues#5ca8cd89-d4b2-4e2c-a98d-aa12c7950956' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Parlour at CityFlatsHotel</a></strong><br>Address:77 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.962642458333335, -85.63815612500001]).bindPopup("<strong><a href='https://www.artprize.org//venues#e53a3c0d-7f60-47d9-bd33-1c9f2d05c740' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Salvation Army in Kent County</a></strong><br>Address:1235 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.955465849999996, -85.65227673916588]).bindPopup("<strong><a href='https://www.artprize.org//venues#c99bb79d-0dcf-4e58-9c03-4e8a4ae6b00f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Winchester</a></strong><br>Address:648 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([43.0033631, -85.6535562]).bindPopup("<strong><a href='https://www.artprize.org//venues#50f1e8fb-32e6-4c6f-a5cf-53cb149ca5a2' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Transfigure</a></strong><br>Address:2221 Plainfield Ave NE  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9619338, -85.6701134]).bindPopup("<strong><a href='https://www.artprize.org//venues#a9360218-8ed6-4cc3-9012-c618b03dded6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>United Bank of Michigan </a></strong><br>Address:44 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.96224225, -85.67159206403866]).bindPopup("<strong><a href='https://www.artprize.org//venues#5b4dc5db-341a-439f-a14e-58d6dd2c1879' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Van Andel Arena</a></strong><br>Address:130 West Fulton • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963056, -85.6727056]).bindPopup("<strong><a href='https://www.artprize.org//venues#a2541188-8979-4212-b0f9-062392d4c373' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Vicinity</a></strong><br>Address:156 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9556092, -85.6326282]).bindPopup("<strong><a href='https://www.artprize.org//venues#93c3b31f-aa62-4521-b162-af90f6686db0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Vinyl Alchemy</a></strong><br>Address:1505 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9666776, -85.6703378]).bindPopup("<strong><a href='https://www.artprize.org//venues#57e67cf7-bfe8-481d-b06b-33a3395dd8cf' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Waters Center/Homewood Suites by Hilton Grand Rapids Downtown</a></strong><br>Address:161 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9572597, -85.6343878]).bindPopup("<strong><a href='https://www.artprize.org//venues#1748da99-4f01-4a50-95de-d094c00174e1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Wax Poetic Candle Bar</a></strong><br>Address:1423 Lake Dr SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.955452, -85.641103]).bindPopup("<strong><a href='https://www.artprize.org//venues#0a1e1296-dd3f-402d-b5eb-308a15379074' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Wealthy Theatre</a></strong><br>Address:1130 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9666776, -85.6703378]).bindPopup("<strong><a href='https://www.artprize.org//venues#f11137a8-8a92-4b39-9da2-6e61934b02bc' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Webster's Market</a></strong><br>Address:161 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594307, -85.66983099038357]).bindPopup("<strong><a href='https://www.artprize.org//venues#0158f468-67a3-4df3-8767-0a3390e5f52b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Western Michigan University</a></strong><br>Address:200 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9589933, -85.667554]).bindPopup("<strong><a href='https://www.artprize.org//venues#eb6e4029-6688-4f0b-aee8-3e04bc1c9069' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Zabház </a></strong><br>Address:139 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),

    ];

// Add mouse and touch event listeners to each marker
    markers.forEach(marker => {
    marker.on('mouseover', function () {
        this.openTooltip();  // Open tooltip when hovered
    });
     marker.on('mouseout', function () {
        setTimeout(() => {
            this.closeTooltip(); // Close tooltip after a delay
        }, 500);
    });

    // Mobile: Handle touchstart for hover-like behavior
    marker.on('touchstart', function () {
        this.openTooltip(); // Open tooltip on tap

        // Close tooltip only when user taps elsewhere on the map
        map.once('click', () => {
            this.closeTooltip();
        });
    });
});






    // Store a reference to markers and their names
    var markerMap = new Map();
    markers.forEach(marker => {
        markerMap.set(marker.getPopup().getContent(), marker);
    });

    // Add the button behavior
    var recenterBtn = document.getElementById('recenterBtn');

<!--    // Leaflet Draw for drawing polygons-->
<!--    var drawnItems = new L.FeatureGroup();-->
<!--    map.addLayer(drawnItems);-->

<!--    var drawControl = new L.Control.Draw({-->
<!--        edit: {-->
<!--            featureGroup: drawnItems-->
<!--        },-->
<!--        draw: {-->
<!--            polygon: true,-->
<!--            marker: false,-->
<!--            polyline: false,-->
<!--            rectangle: false,-->
<!--            circle: false,-->
<!--            circlemarker: false-->
<!--        }-->
<!--    });-->
<!--    map.addControl(drawControl);-->

    // Handle current location and updates
    var currentLocationMarker = null;

    var userMovedMap = false;  // To track if the user manually moves the map
    var currentLat, currentLng;  // To store the user's current location

    map.on('movestart', function () {
    userMovedMap = true;  // Set flag to true when the user moves the map
    });

    function updateLocation(position) {
        var latLng = L.latLng(position.coords.latitude, position.coords.longitude);

        // Create a custom blinking blue marker
        var blinkingIcon = L.divIcon({
            className: 'blinking-marker',
            iconSize: [20, 20], // Size of the marker
            popupAnchor: [0, -10] // Position of the popup
        });

        // Remove old location marker if it exists
        if (currentLocationMarker) {
            map.removeLayer(currentLocationMarker);
        }

        // Add new location marker
        currentLocationMarker = L.marker(latLng, { icon: blinkingIcon }).bindTooltip("You are here").addTo(map);
        if (!userMovedMap) {
            //map.setView(latLng, 16);
            map.setView([42.9659028, -85.66846762085015],15); //Set View Center to Kendal College
        }
        //map.setView(latLng, 15); // Center the map on the current location
    }

    function onLocationError(error) {
        console.error("Error getting location: ", error);
        alert("Unable to retrieve your location. Make sure location services are enabled.");
    }

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updateLocation, onLocationError, {
            enableHighAccuracy: true,
            maximumAge: 5000,
            timeout: 20000
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    // Function to highlight a marker
    function highlightMarker(name) {
        // Reset all markers to default style
        markers.forEach(marker => marker.setIcon(L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
            iconSize: [38,55], // Size of the icon
            iconAnchor: [22,54], // Anchor of the icon
            popupAnchor: [-3,76] // Position of the popup
        })));

        // Highlight the selected marker
        var marker = markerMap.get(name);
        if (marker) {
            marker.setIcon(L.divIcon({
                className: 'highlighted-marker',
                iconSize: [20, 20],
                popupAnchor: [1, -34] // Position of the popup
            }));
            map.setView(marker.getLatLng(), 15);
        }
    }

    // Function to make a popup draggable
    function makePopupDraggable(popup) {
        var container = popup._container;
        var offset = { x: 0, y: 0 };

        function onMouseDown(e) {
            offset.x = e.clientX - container.getBoundingClientRect().left;
            offset.y = e.clientY - container.getBoundingClientRect().top;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }

        function onMouseMove(e) {
            container.style.left = (e.clientX - offset.x) + 'px';
            container.style.top = (e.clientY - offset.y) + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        container.addEventListener('mousedown', onMouseDown);
    }


    // Store the popup for the last created polygon
    var lastPolygonPopup = null;

    // Event handler when a polygon is drawn
<!--    map.on(L.Draw.Event.CREATED, function (event) {-->
<!--        var layer = event.layer;-->

<!--        // Clear previous polygons-->
<!--        drawnItems.clearLayers();-->

<!--        // Add new polygon-->
<!--        drawnItems.addLayer(layer);-->

<!--        // Check if marker is inside the drawn polygon-->
<!--        var insideMarkers = markers.filter(function (marker) {-->
<!--            return layer.getBounds().contains(marker.getLatLng());-->
<!--        });-->

<!--        // List the names of the markers inside the polygon-->
<!--        if (insideMarkers.length > 0) {-->
<!--            var markerList = insideMarkers.map(function (marker) {-->
<!--                return '<a href="#" onclick="highlightMarker(\'' + marker.getTooltip().getContent() + '\'); return false;">' + marker.getTooltip().getContent() + '</a>';-->
<!--            }).join('<br>');-->

<!--            // Create or update the popup near the polygon-->
<!--            var bounds = layer.getBounds();-->
<!--            var center = bounds.getCenter();-->
<!--            var northEast = bounds.getNorthEast();-->

<!--            // Approximate the offset for 5 cm in degrees (approximate conversion)-->
<!--            var offsetLng = (northEast.lng - bounds.getSouthWest().lng) * 0.01;-->
<!--            var offsetLatLng = L.latLng(center.lat, center.lng + offsetLng);-->

<!--            if (lastPolygonPopup) {-->
<!--                lastPolygonPopup.setLatLng(offsetLatLng)-->
<!--                               .setContent("<strong>List of Venues:</strong><br>" + markerList)-->
<!--                               .openOn(map);-->
<!--            } else {-->
<!--                lastPolygonPopup = L.popup({ closeButton: false, className: 'draggable-popup' })-->
<!--                    .setLatLng(offsetLatLng)-->
<!--                    .setContent("<strong>List of Venues:</strong><br>" + markerList)-->
<!--                    .openOn(map);-->

<!--                // Make the popup draggable-->
<!--                makePopupDraggable(lastPolygonPopup);-->
<!--            }-->
<!--        } else {-->
<!--            console.log("No Venues inside the polygon.");-->
<!--        }-->
<!--    });-->

    // Ensure popup remains open and closer to the polygon
    map.on('click', function (e) {
        if (lastPolygonPopup) {
            var latLng = e.latlng;
            if (drawnItems.getLayers().some(layer => layer.getBounds().contains(latLng))) {
                var bounds = drawnItems.getLayers().find(layer => layer.getBounds().contains(latLng)).getBounds();
                var center = bounds.getCenter();
                var northEast = bounds.getNorthEast();
                var offsetLng = (northEast.lng - bounds.getSouthWest().lng) * 0.01;
                var offsetLatLng = L.latLng(center.lat, center.lng + offsetLng);
                lastPolygonPopup.setLatLng(offsetLatLng).openOn(map);
            }
        }
    });




    var currentLocationIcon = L.divIcon({
    className: 'blinking-marker',
    iconSize: [20, 20],
    popupAnchor: [0, -10]
    });


    function isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    // Disable dragging on popups for mobile
    //if (!isMobile()) {
    //    makePopupDraggable(lastPolygonPopup);
    //}
    var markersCluster = L.markerClusterGroup();
    markers.forEach(marker => markersCluster.addLayer(marker));
    map.addLayer(markersCluster);



map.locate({ setView: false, maxZoom: 16 });
map.on('locationfound', function (e) {
    currentLat = e.latitude;
    currentLng = e.longitude;

});


    // Create a custom control for recentering the map
const recenterButton = L.control({ position: 'topright' });

recenterButton.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'recenter-button');
    div.innerHTML = '<button style="background-color: #4CAF50; font-size: 12px; width: 130px; color:white; padding: 12px 20px; outline: none !important; box-shadow: none !important; border:none !important;cursor: pointer;box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);transition: background-color 0.3s ease, transform 0.3s ease;border-radius: 5px;">Current Location</button>';

    // Add click event to recenter the map when button is clicked
    L.DomEvent.on(div, 'click', function (e) {
        map.setView([currentLat, currentLng], 15); // Recenter the map
    });

    return div;
};

// Add the recenter button to the map
recenterButton.addTo(map);


// Add button to recenter on Art
const cityCenterButton = L.control({ position: 'topright' });

cityCenterButton.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'recenter-button');
    div.innerHTML = '<button style="background-color: #4CAF50; font-size: 12px; width: 130px; color:white; padding: 12px 20px; outline: none !important; box-shadow: none !important; border:none !important;box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);transition: background-color 0.3s ease, transform 0.3s ease;border-radius: 5px;cursor: pointer;">City Center</button>';
    //div.style.backgroundColor = 'white';
    //div.style.padding = '5px';

    // Add click event to recenter the map when button is clicked
    L.DomEvent.on(div, 'click', function (e) {
        map.setView([42.9659028, -85.66846762085015], 15); // Recenter the map
    });

    return div;
};

// Add the recenter button to the map
cityCenterButton.addTo(map);



var isRotationEnabled = false;  // Toggle for map rotation
    var currentMarker = null;  // To track the user marker

    // Watch user's location and move the map
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            // Move the map to user's location
            //map.setView([lat, lng]);

            // Add or update a marker for current location
            //if (!currentMarker) {
            //    currentMarker = L.marker([lat, lng]).addTo(map);
            //} else {
            //    currentMarker.setLatLng([lat, lng]);
            //}
        }, function(error) {
            console.error('Error getting location:', error);
        });
    }

    // Handle device orientation to rotate the map
    window.addEventListener('deviceorientation', function(event) {
        if (isRotationEnabled) {
            var alpha = event.alpha; // Compass heading in degrees (0 is north)

            if (alpha !== null) {
                // Rotate the map container using the heading
                var mapContainer = document.getElementById('map');
                mapContainer.classList.add('rotate-map');
                mapContainer.style.transform = `rotate(${-alpha}deg)`;
            }
        }
    });


    // Handle device orientation to rotate the map
    window.addEventListener('deviceorientation', function(event) {
        if (!isRotationEnabled) return; // Don't rotate if the user has disabled it

        var alpha = event.alpha; // Compass heading in degrees (0 is north)

        if (alpha !== null) {
            // Rotate the map container using the heading
            var mapContainer = document.getElementById('map');
            mapContainer.style.transform = `rotate(${-alpha}deg)`;
        }
    });

    // Add custom control button for rotation
    var rotateControl = L.Control.extend({
        options: {
            position: 'topright'  // Position of the button on the map
        },

        onAdd: function(map) {
            // Create a container for the button
            var container = L.DomUtil.create('div', 'leaflet-control-rotate');
            container.innerHTML = 'Enable Rotation';

            // Set up the button click handler
            container.onclick = function() {
                isRotationEnabled = !isRotationEnabled;
                container.innerHTML = isRotationEnabled ? 'Disable Rotation' : 'Enable Rotation';

                if (!isRotationEnabled) {
                    // Reset the map rotation when turning off
                    document.getElementById('map').style.transform = 'rotate(0deg)';
                }
            };

            return container;
        }
    });

    // Add the custom control to the map
    map.addControl(new rotateControl());
