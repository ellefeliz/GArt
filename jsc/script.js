

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
        L.marker([42.94313, -85.684821]).bindPopup("<strong><a href='https://www.artprize.org//venues#8cef12fd-94c7-45b4-914e-30cdb9e8b0e8' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>1 1 1 1 Lady of The (b o i l e r) House</a></strong><br>Address:1111 Godfrey Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.943278, -85.684758]).bindPopup("<strong><a href='https://www.artprize.org//venues#a30fe596-fa1a-4108-81ce-90fc9f711850' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>1101 Godfrey</a></strong><br>Address:1101 Godfrey Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9716025, -85.6804035]).bindPopup("<strong><a href='https://www.artprize.org//venues#58a303cf-47eb-45d7-90e5-1cf926b42a2f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>1st Micro Greenery</a></strong><br>Address:433 Broadway Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9642418, -85.672341]).bindPopup("<strong><a href='https://www.artprize.org//venues#a43d48bf-0049-4fa7-ac34-cfcbd64967ec' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>AC Hotel Grand Rapids Downtown</a></strong><br>Address:50 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594905, -85.6772923]).bindPopup("<strong><a href='https://www.artprize.org//venues#1fae6b92-e234-46f8-a5a1-7cda7452e049' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Acrisure Amphitheater</a></strong><br>Address:201 Market Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9630079, -85.666441]).bindPopup("<strong><a href='https://www.artprize.org//venues#5ce3e49c-1516-4f20-8a4f-da93c1293add' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Acton Institute</a></strong><br>Address:98 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9668107, -85.6725146]).bindPopup("<strong><a href='https://www.artprize.org//venues#84d42b2e-de50-4372-bde1-969e211da74c' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Amway Grand Plaza Hotel</a></strong><br>Address:187 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9688137, -85.6713006]).bindPopup("<strong><a href='https://www.artprize.org//venues#0e60b805-eb2f-4449-9616-2a76ce856fbb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Art For Honor (City Hall Outdoor Space, behind Calder Plaza)</a></strong><br>Address:300 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963251, -85.664824]).bindPopup("<strong><a href='https://www.artprize.org//venues#81f2532e-02d1-410a-8b81-32a997c01604' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Art of Resilience-Veterans Memorial Park</a></strong><br>Address:101 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9555247, -85.6538163]).bindPopup("<strong><a href='https://www.artprize.org//venues#e82da355-400e-4bc0-b4b0-f8198ad60296' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Art of the Table</a></strong><br>Address:606 Wealthy St SE • grand rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9704725, -85.6802139]).bindPopup("<strong><a href='https://www.artprize.org//venues#9e1d1b70-808a-4f83-b88a-d1798bd300a1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>ArtPrize ClubHouse</a></strong><br>Address:428 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.961977, -85.6675836]).bindPopup("<strong><a href='https://www.artprize.org//venues#a485e2c0-ac94-4e34-a056-e4db1140be92' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>ArtRat Gallery</a></strong><br>Address:46 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9604981, -85.6706324]).bindPopup("<strong><a href='https://www.artprize.org//venues#63a9d38e-896c-49c4-9139-119e75171f50' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Arts Marketplace</a></strong><br>Address:121 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9556549, -85.631894]).bindPopup("<strong><a href='https://www.artprize.org//venues#cc22b8c5-c33a-495c-b2e8-48008e47da17' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Ash & Elm Quiltery</a></strong><br>Address:1501 Lake Dr SE • Grand Rapids, Michigan", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.955355, -85.6428645]).bindPopup("<strong><a href='https://www.artprize.org//venues#c33f092a-838f-48af-a4c2-2ea501bcf2b0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Atomic Object</a></strong><br>Address:1034 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.985814, -85.657016]).bindPopup("<strong><a href='https://www.artprize.org//venues#e3d267c8-5f3d-4604-afc1-39c27f5c8b6e' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Au thentic Skateshop</a></strong><br>Address:1244 College Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9770638, -85.6705703]).bindPopup("<strong><a href='https://www.artprize.org//venues#a8109b90-79a7-473b-9c62-bd7a0f217dd5' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Auto Fixit Body Shop</a></strong><br>Address:805 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9651612, -85.6669203]).bindPopup("<strong><a href='https://www.artprize.org//venues#3583f172-b08c-4c68-88f8-51dddf2d8da7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Avenue for the Arts Artposts</a></strong><br>Address:24 Fountain St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9629482, -85.6682936]).bindPopup("<strong><a href='https://www.artprize.org//venues#e72b1119-4f84-4cdb-85cc-171f0cb19417' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bamboo</a></strong><br>Address:2 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9611758, -85.6699153]).bindPopup("<strong><a href='https://www.artprize.org//venues#0638a7eb-4e38-42ce-ae20-dbe254e51c63' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Big Mini Putt Club</a></strong><br>Address:70 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9634901, -85.6856186]).bindPopup("<strong><a href='https://www.artprize.org//venues#d24747a2-a7ad-45a8-9a98-f92c55587c07' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Blend Salon and Suites</a></strong><br>Address:237 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9651024, -85.6695507]).bindPopup("<strong><a href='https://www.artprize.org//venues#09d04898-0a92-4a22-95fa-5c25b4c03853' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Blue Cross Blue Shield of Michigan - Steketee's Building</a></strong><br>Address:86 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.959885, -85.6459532]).bindPopup("<strong><a href='https://www.artprize.org//venues#0a99bfa9-8c0d-418b-b675-f89f87773ee7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Brewery Vivant</a></strong><br>Address:925 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9706401, -85.688279]).bindPopup("<strong><a href='https://www.artprize.org//venues#a928416c-e318-4451-9597-8fd7a256b1e6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bridge St Electric</a></strong><br>Address:812 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9704694, -85.6829034]).bindPopup("<strong><a href='https://www.artprize.org//venues#c103096e-6e0a-45cf-a3b1-0d98aa098661' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bridge Street Bar</a></strong><br>Address:600 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9709601, -85.6833716]).bindPopup("<strong><a href='https://www.artprize.org//venues#e9f5e415-f4b3-44ad-b048-dc18eb1de16b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bridge Street Market</a></strong><br>Address:405 Seward Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9712668, -85.6757083]).bindPopup("<strong><a href='https://www.artprize.org//venues#dec32d3f-b858-4d1a-a3ad-6d1ae9ba99fa' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bridgewater Place River Mural</a></strong><br>Address:42.971267, -85.675715", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9637103, -85.6705345]).bindPopup("<strong><a href='https://www.artprize.org//venues#417d3c7a-36f9-4a60-9ef5-00f3fd826223' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Brush Studio</a></strong><br>Address:11 Ionia Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9688137, -85.6713006]).bindPopup("<strong><a href='https://www.artprize.org//venues#6f8bb83f-f28f-4726-b19c-ebfac5999825' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Calder Plaza</a></strong><br>Address:300 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9272563, -85.669768]).bindPopup("<strong><a href='https://www.artprize.org//venues#4bc70062-d115-455f-8b6a-de7132d832ea' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Canopy by Hilton Grand Rapids Downtown</a></strong><br>Address:131 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9707274, -85.6792683]).bindPopup("<strong><a href='https://www.artprize.org//venues#16ff22fd-671c-4781-8e2e-6acd54d0f120' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cellar Bird Books</a></strong><br>Address:415 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9628985, -85.6640539]).bindPopup("<strong><a href='https://www.artprize.org//venues#50ce9cbd-a917-4df5-8f5e-582348052557' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Char</a></strong><br>Address:6 Jefferson Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.952421, -85.6674682]).bindPopup("<strong><a href='https://www.artprize.org//venues#4eca3051-6055-4eb3-a895-0de73c463378' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>City Life Church</a></strong><br>Address:574 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9645783, -85.6698585]).bindPopup("<strong><a href='https://www.artprize.org//venues#eb99d1d0-a733-4b54-b938-8a85517e6bb7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>CityFlatsHotel</a></strong><br>Address:83 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9635235, -85.6839657]).bindPopup("<strong><a href='https://www.artprize.org//venues#4f7cb37c-a147-46bf-b368-a628957085c1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cloud Cannabis</a></strong><br>Address:621 Fulton St W • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9743571, -85.6723052]).bindPopup("<strong><a href='https://www.artprize.org//venues#05fff66d-2819-4a43-993b-603d6cb363eb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Corewell Health Corporate Headquarters Lobby</a></strong><br>Address:648 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.961545, -85.6612795]).bindPopup("<strong><a href='https://www.artprize.org//venues#4e9d99c0-4644-46ce-b2dc-03cf5ad8c2ab' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cornerstone Church - Heritage Hill Campus</a></strong><br>Address:48 Lafayette Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640854, -85.6681384]).bindPopup("<strong><a href='https://www.artprize.org//venues#01fba3ad-88c6-444a-9eeb-7d19c586e995' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Courage & Soar</a></strong><br>Address:40 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640955, -85.6735035]).bindPopup("<strong><a href='https://www.artprize.org//venues#0d353786-cbfc-4a0f-8d27-8297b09cb357' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Courtyard Downtown</a></strong><br>Address:11 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9592897, -85.6674156]).bindPopup("<strong><a href='https://www.artprize.org//venues#a32f029b-e7e0-4746-a625-a63b26796f55' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Crow's Hold</a></strong><br>Address:200 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9889422, -85.6648004]).bindPopup("<strong><a href='https://www.artprize.org//venues#52fb05ee-bc92-4e5c-b7a9-931bd03fc61b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Culver CPA Group</a></strong><br>Address:1419 Coit Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9797968, -85.6707395]).bindPopup("<strong><a href='https://www.artprize.org//venues#3f53ccc9-aac4-4e97-9133-97db3e4992d5' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cūra Gallery</a></strong><br>Address:975 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9614655, -85.667938]).bindPopup("<strong><a href='https://www.artprize.org//venues#3135a0cd-e827-4ad6-a88d-1aeedb916114' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Decaydence Vintage</a></strong><br>Address:71 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9687722, -85.6731285]).bindPopup("<strong><a href='https://www.artprize.org//venues#c703666c-aefb-4bbc-a624-53ce2ab2f7de' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>DeVos Place Convention Center</a></strong><br>Address:303 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9618432, -85.6725494]).bindPopup("<strong><a href='https://www.artprize.org//venues#b8655103-b448-472e-ada0-7e358e4052c6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Ding Tea</a></strong><br>Address:45 Ottawa Ave SW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.970774, -85.6916502]).bindPopup("<strong><a href='https://www.artprize.org//venues#4a54eeed-d1f2-4ed5-936c-e0fe4d701a49' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>El Granjero Mexican Grill</a></strong><br>Address:950 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.961935, -85.664068]).bindPopup("<strong><a href='https://www.artprize.org//venues#255cbfe2-c12a-46bd-a988-cadf2217e6e6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Etta Smith Wilson Way</a></strong><br>Address:40 Jefferson Ave SE", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9668319, -85.6685349]).bindPopup("<strong><a href='https://www.artprize.org//venues#7b180abb-0025-44c4-acda-e777fefb53c3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Ferris State University's Kendall College of Art and Design</a></strong><br>Address:17 Pearl St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9726121, -85.6851969]).bindPopup("<strong><a href='https://www.artprize.org//venues#25473522-3a48-40b4-a57f-440db5c73af1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Firebird Bar GR</a></strong><br>Address:526 Stocking Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9651612, -85.6669203]).bindPopup("<strong><a href='https://www.artprize.org//venues#8e7d4d24-e976-4488-90c4-3b089bcbb865' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fountain Street Church</a></strong><br>Address:24 Fountain St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9707241, -85.6806504]).bindPopup("<strong><a href='https://www.artprize.org//venues#bfb12b09-b12a-4b27-936e-0995b29e1752' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fratelli's Italian Kitchen</a></strong><br>Address:443 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963602, -85.687624]).bindPopup("<strong><a href='https://www.artprize.org//venues#acc9d65f-9c45-4563-b1e7-fd4ed55e25fd' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fulton Street Pub</a></strong><br>Address:801 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9773348, -85.6706235]).bindPopup("<strong><a href='https://www.artprize.org//venues#4d900f1f-639e-4ebc-a259-512c63532de3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Garage Bar & Grill</a></strong><br>Address:819 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9644122, -85.6685591]).bindPopup("<strong><a href='https://www.artprize.org//venues#9fc30077-95a6-4e26-a9f6-615732a6cada' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gazelle Sports</a></strong><br>Address:52 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9684589, -85.6774115]).bindPopup("<strong><a href='https://www.artprize.org//venues#8ac0d6d9-d815-44e9-ad4a-cc106e34a070' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gerald R. Ford Presidential Museum</a></strong><br>Address:303 Pearl St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9630117, -85.6640565]).bindPopup("<strong><a href='https://www.artprize.org//venues#6c35feac-6e88-40c3-ac67-7152aade2fab' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gita Pita</a></strong><br>Address:2 Jefferson Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9617829, -85.6667814]).bindPopup("<strong><a href='https://www.artprize.org//venues#c56b871f-a388-4a1f-9d75-95f358ac498d' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids African American Museum and Archives</a></strong><br>Address:41 Sheldon Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9650327, -85.6709032]).bindPopup("<strong><a href='https://www.artprize.org//venues#a58e8be0-ea68-44b2-99c8-157b5d4d4336' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Art Museum</a></strong><br>Address:101 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9636387, -85.6672137]).bindPopup("<strong><a href='https://www.artprize.org//venues#428b5aa1-1a53-4154-8a13-4ba774b61347' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Children's Museum</a></strong><br>Address:11 Sheldon Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9688137, -85.6713006]).bindPopup("<strong><a href='https://www.artprize.org//venues#7a8b7702-146f-470a-84b8-ecbbe8258675' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids City Hall</a></strong><br>Address:300 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9548575, -85.6706102]).bindPopup("<strong><a href='https://www.artprize.org//venues#3dd8b128-e14b-4a76-bd8d-76ed4d5f22bf' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Downtown Market</a></strong><br>Address:435 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554463, -85.6515221]).bindPopup("<strong><a href='https://www.artprize.org//venues#c26ce512-4b5e-4d65-8b4f-7bcac7082a76' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grey Rabbit Gallery & Lounge</a></strong><br>Address:700 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640854, -85.6681384]).bindPopup("<strong><a href='https://www.artprize.org//venues#1400b763-aefb-4ba2-8406-5cd3bf8e1f21' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Greyson Clothiers</a></strong><br>Address:40 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9545605, -85.6678032]).bindPopup("<strong><a href='https://www.artprize.org//venues#13942b12-be0d-40c1-97ee-3840b6bf722b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Happy Cat Café</a></strong><br>Address:447 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9687722, -85.6731285]).bindPopup("<strong><a href='https://www.artprize.org//venues#23337cf7-e168-4d97-b396-2a1d9cc8e05f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Healing in Arts - Between Two Worlds </a></strong><br>Address:303 Monroe Ave NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9632623, -85.6567237]).bindPopup("<strong><a href='https://www.artprize.org//venues#f15f5d9a-bee9-4fd9-8928-f8c67df1f72f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Heritage Hill Offices/Neighborhood</a></strong><br>Address:10 College Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9606512, -85.6679094]).bindPopup("<strong><a href='https://www.artprize.org//venues#d356f836-43d4-4781-b9d5-e3379930a2e1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Herrema & Sons Piano Co.</a></strong><br>Address:111 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9658803, -85.6777088]).bindPopup("<strong><a href='https://www.artprize.org//venues#997ea07c-bc4f-4e09-854f-8d41d78f7030' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Holiday Inn Grand Rapids Downtown</a></strong><br>Address:310 Pearl St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9623919, -85.6705881]).bindPopup("<strong><a href='https://www.artprize.org//venues#ab08ffbf-4991-475f-a153-f414491c82fa' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>HopCat</a></strong><br>Address:25 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9663719, -85.6743566]).bindPopup("<strong><a href='https://www.artprize.org//venues#44c3ad65-0560-465d-80dd-6a05d93264c5' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Horizon Bank</a></strong><br>Address:250 Pearl St NW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9666339, -85.669829]).bindPopup("<strong><a href='https://www.artprize.org//venues#858fb54c-fa40-4159-a570-6fd8872110d1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Hyatt Place Grand Rapids/Downtown</a></strong><br>Address:140 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.962867, -85.646077]).bindPopup("<strong><a href='https://www.artprize.org//venues#34d67d37-5ea9-4a9c-a5e0-cc56c62f7af7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Inner Body Works, PLC</a></strong><br>Address:929 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9659009, -85.6722657]).bindPopup("<strong><a href='https://www.artprize.org//venues#e49cbcc6-6785-41d7-b40d-05f4af5fe098' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Innovare</a></strong><br>Address:169 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9658098, -85.6743054]).bindPopup("<strong><a href='https://www.artprize.org//venues#b2b39872-d3ff-4169-bb99-2128559d66b0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>JW Marriott Grand Rapids</a></strong><br>Address:235 Louis St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594486, -85.6452308]).bindPopup("<strong><a href='https://www.artprize.org//venues#54d5aa96-ad70-49fd-bbc7-2e31c9678e90' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Kava Kasa</a></strong><br>Address:962 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9705876, -85.6845919]).bindPopup("<strong><a href='https://www.artprize.org//venues#04a59909-90f7-45e8-9062-9edb15cdb118' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Küsterer Brauhaus</a></strong><br>Address:642 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.964802, -85.6770887]).bindPopup("<strong><a href='https://www.artprize.org//venues#26e20299-56ce-46fa-9c6e-80916736ea13' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Lacks Park</a></strong><br>Address:60 Front Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9624798, -85.668069]).bindPopup("<strong><a href='https://www.artprize.org//venues#cb6e35b7-36b5-47b3-b276-b651622fbe99' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Lilith’s Lair</a></strong><br>Address:25 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9646685, -85.6729282]).bindPopup("<strong><a href='https://www.artprize.org//venues#f7b9ee2b-9380-43b8-9882-1fd9eff82b65' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Louis Campau Ramp Skywalk</a></strong><br>Address:43 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9670621, -85.6740132]).bindPopup("<strong><a href='https://www.artprize.org//venues#cd26359b-dfe5-4f9c-8142-ba11cc48d4df' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Lyon Square</a></strong><br>Address:296 Lyon St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554652, -85.6511492]).bindPopup("<strong><a href='https://www.artprize.org//venues#f657de9a-1aa9-4b70-9e7c-11d95dd1852b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Mammoth Distilling</a></strong><br>Address:710 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9662432, -85.6714722]).bindPopup("<strong><a href='https://www.artprize.org//venues#bd577d84-f61d-465f-a36c-996ef1786e39' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>McKay Tower</a></strong><br>Address:146 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9647264, -85.6700054]).bindPopup("<strong><a href='https://www.artprize.org//venues#50f4cc77-5e8c-48c6-b04c-8994f6ed6732' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Mobile GR - 87 Monroe</a></strong><br>Address:87 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9665012, -85.6719307]).bindPopup("<strong><a href='https://www.artprize.org//venues#1e55bf3b-8bd9-46ff-b887-60b480f0021a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Mojo's</a></strong><br>Address:180 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9808826, -85.6711602]).bindPopup("<strong><a href='https://www.artprize.org//venues#8e36005b-e7e8-4960-84bb-55a363dee1ff' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Monroe Community Church</a></strong><br>Address:1020 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9670631, -85.6695196]).bindPopup("<strong><a href='https://www.artprize.org//venues#7d5826b9-9ad2-420c-8115-ec9fd3638c2a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Morning Ritual Coffee Bar</a></strong><br>Address:150 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.985367, -85.6866504]).bindPopup("<strong><a href='https://www.artprize.org//venues#1d490b0a-7a74-46c2-bd97-f79cf99d6e24' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Muse GR</a></strong><br>Address:727 Leonard St NW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9635904, -85.6932104]).bindPopup("<strong><a href='https://www.artprize.org//venues#a5b9cc68-9a34-4a8a-8cc2-50b6719bdeac' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Nawara Brothers Home Store</a></strong><br>Address:1030 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9576942, -85.6688037]).bindPopup("<strong><a href='https://www.artprize.org//venues#1acfc0b4-c859-4554-b4f2-ce222d720b38' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Nia Centre</a></strong><br>Address:300 Commerce Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9555402, -85.6513897]).bindPopup("<strong><a href='https://www.artprize.org//venues#223de8ab-16f2-4726-a7a0-16ce653112fb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Niksi</a></strong><br>Address:708 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9708429, -85.6811098]).bindPopup("<strong><a href='https://www.artprize.org//venues#5c7d5fff-c88a-4b6d-9b19-8bd971d9e8a2' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Nonla Burger</a></strong><br>Address:449 Bridge St NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640854, -85.6681384]).bindPopup("<strong><a href='https://www.artprize.org//venues#67fe0541-4455-47ca-9ed5-47cd6d1b40f6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Oh, Hello Paper & Gifts</a></strong><br>Address:40 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9653848, -85.6703289]).bindPopup("<strong><a href='https://www.artprize.org//venues#b2fcb165-bf62-45ce-9912-7a665887a0c8' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Old World Olive Co</a></strong><br>Address:108 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9624798, -85.668069]).bindPopup("<strong><a href='https://www.artprize.org//venues#c6def8fe-1278-4a12-85df-801b72146627' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>OTONO & Cafe OTONO</a></strong><br>Address:25 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640835, -85.6654714]).bindPopup("<strong><a href='https://www.artprize.org//venues#2537f97a-1d64-41bd-9b12-301abf074d27' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Park Church</a></strong><br>Address:10 East Park Pl NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.959617, -85.667936]).bindPopup("<strong><a href='https://www.artprize.org//venues#0d05206c-3e96-4848-a9fb-497ea1734cf7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Pekich Park</a></strong><br>Address:2 Cherry St SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9659834, -85.6703223]).bindPopup("<strong><a href='https://www.artprize.org//venues#952184c0-02e9-4928-b512-5c3eaf804d97' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Periwinkle Fog</a></strong><br>Address:125 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9850521, -85.6850035]).bindPopup("<strong><a href='https://www.artprize.org//venues#140c772e-34dc-4881-b5ae-d55d675ac138' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Pickle and Pin</a></strong><br>Address:662 Leonard St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9653123, -85.6709174]).bindPopup("<strong><a href='https://www.artprize.org//venues#fccd1aa9-e504-4c60-a35c-cbb4e9b202ce' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>PO (Art)Box</a></strong><br>Address:120 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554921, -85.6470559]).bindPopup("<strong><a href='https://www.artprize.org//venues#7f1346ba-4584-46b7-8ffe-0f286b8b8e46' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Reagan Marketing + Design</a></strong><br>Address:912 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9556203, -85.6309514]).bindPopup("<strong><a href='https://www.artprize.org//venues#3fc5f791-a833-486d-9559-100a8eafac74' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rebel</a></strong><br>Address:1555 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9650826, -85.6699091]).bindPopup("<strong><a href='https://www.artprize.org//venues#351f83ca-6abd-458e-82ee-b1416eb69e58' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rebel Nell</a></strong><br>Address:96 Monroe Center St Nw • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9626485, -85.6680258]).bindPopup("<strong><a href='https://www.artprize.org//venues#a5d34fcb-01ae-4c30-accd-e9f664b94730' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rewind</a></strong><br>Address:17 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9636558, -85.698177]).bindPopup("<strong><a href='https://www.artprize.org//venues#ac978e77-f5f9-4bef-8cb6-3a5f27bb5694' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rise Authentic Baking Company</a></strong><br>Address:1220 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9555926, -85.6314921]).bindPopup("<strong><a href='https://www.artprize.org//venues#567c88dd-2fd4-4001-8093-4aed33869fb8' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Riverside Guitar School / Riverside Market</a></strong><br>Address:1533 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9681753, -85.6717296]).bindPopup("<strong><a href='https://www.artprize.org//venues#47551218-002d-4ff6-a352-e6925ebac4ff' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Roam By San Chez</a></strong><br>Address:250 Monroe Ave NW • grand rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9923724, -85.6710076]).bindPopup("<strong><a href='https://www.artprize.org//venues#ee9d5d21-4a59-4a96-a935-dd17d513721b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Roeda Studio</a></strong><br>Address:1615 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9777231, -85.6831303]).bindPopup("<strong><a href='https://www.artprize.org//venues#3a488665-2a68-4898-8379-f34f22d777f0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Roots Brew Shop</a></strong><br>Address:600 7th St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9555222, -85.6528618]).bindPopup("<strong><a href='https://www.artprize.org//venues#c999e65c-caba-4bd4-b0d2-80f8825a3b2a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rowster Coffee</a></strong><br>Address:632 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9629896, -85.6695214]).bindPopup("<strong><a href='https://www.artprize.org//venues#52e57040-251d-4e31-9900-26c4f72c1b79' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>San Chez Bistro</a></strong><br>Address:38 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9627048, -85.6700424]).bindPopup("<strong><a href='https://www.artprize.org//venues#e2114a0f-e493-41ee-a1cc-4258b1bff886' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sears Architects</a></strong><br>Address:16 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9743246, -85.6725283]).bindPopup("<strong><a href='https://www.artprize.org//venues#cf5135c2-05d3-490f-af07-4191366b3b05' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sixth Street Park - River North Business Assoc</a></strong><br>Address:647 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9550949, -85.6456676]).bindPopup("<strong><a href='https://www.artprize.org//venues#eeef00e7-dcbe-499a-8fab-d781e6eb6251' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Speciation Cellars</a></strong><br>Address:928 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9653185, -85.6645557]).bindPopup("<strong><a href='https://www.artprize.org//venues#836bae48-ac81-487d-9fa0-860423be1554' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Spectrum Theater</a></strong><br>Address:160 Fountain St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9658512, -85.6711703]).bindPopup("<strong><a href='https://www.artprize.org//venues#27274783-a1e4-4ce8-8a3d-1abb4ec3a863' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sugar Bar</a></strong><br>Address:132 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9665813, -85.6704308]).bindPopup("<strong><a href='https://www.artprize.org//venues#67fbc646-117a-40c3-b036-ac81893f6311' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sundance Grill & Bar</a></strong><br>Address:151 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9737092, -85.6714392]).bindPopup("<strong><a href='https://www.artprize.org//venues#59b7babc-f9a3-49f6-b25b-4f4676f9cdf3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sweetwaters Coffee & Tea Monroe North</a></strong><br>Address:601 Bond Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9703689, -85.6791296]).bindPopup("<strong><a href='https://www.artprize.org//venues#12ced55a-64eb-4918-8bb6-3e090f996199' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Swift Printing</a></strong><br>Address:404 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9642383, -85.6687235]).bindPopup("<strong><a href='https://www.artprize.org//venues#3b6a8340-79d6-4b2c-827d-4f74914cbb03' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Symplicity Communications Building</a></strong><br>Address:60 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.960595, -85.6679079]).bindPopup("<strong><a href='https://www.artprize.org//venues#0557ece6-47a0-4d1a-9c01-13e4e8f3effc' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Teller's Lounge</a></strong><br>Address:117 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640139, -85.668759]).bindPopup("<strong><a href='https://www.artprize.org//venues#a9a78806-47ec-4d17-ab04-7872ce036ff4' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The 1850 Room</a></strong><br>Address:53 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9647347, -85.6693688]).bindPopup("<strong><a href='https://www.artprize.org//venues#8eca3c17-6c0c-46ed-8a73-f481fcef917b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Aroma Labs</a></strong><br>Address:76 Monroe Center St NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9657059, -85.6706976]).bindPopup("<strong><a href='https://www.artprize.org//venues#451c3704-5e38-4726-94ae-b3cf4f256f97' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Atrium at Uccello's Downtown</a></strong><br>Address:122 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9638162, -85.672521]).bindPopup("<strong><a href='https://www.artprize.org//venues#dc4a0cc4-4b8d-4e65-9c66-bf29f358a1ba' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The B.O.B.</a></strong><br>Address:20 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9634211, -85.6866718]).bindPopup("<strong><a href='https://www.artprize.org//venues#b2e67cd2-868f-4051-9403-c7f4119875d4' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Clayground</a></strong><br>Address:750 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9459791, -85.6836506]).bindPopup("<strong><a href='https://www.artprize.org//venues#f9872f10-41e1-47e0-ad70-7d6d3675671e' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Elevated Market and The Glasshouse</a></strong><br>Address:955 Godfrey Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554986, -85.6533062]).bindPopup("<strong><a href='https://www.artprize.org//venues#3e6c1cd7-c11d-446c-903c-ea8c3437af1a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The James Boutique</a></strong><br>Address:620 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9565172, -85.6677854]).bindPopup("<strong><a href='https://www.artprize.org//venues#beb98f8f-9f21-478b-be5e-847c100c2967' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The NOW Gallery</a></strong><br>Address:359 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9644661, -85.6696635]).bindPopup("<strong><a href='https://www.artprize.org//venues#7eaaed0b-ed7e-403e-8ff9-1022f0f378c6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Parlour at CityFlatsHotel</a></strong><br>Address:77 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9716556, -85.6807934]).bindPopup("<strong><a href='https://www.artprize.org//venues#27f28b40-9920-433e-8168-09ea9e0ac3a3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Roll Inn</a></strong><br>Address:444 1st St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9628132, -85.6392277]).bindPopup("<strong><a href='https://www.artprize.org//venues#e53a3c0d-7f60-47d9-bd33-1c9f2d05c740' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Salvation Army in Kent County</a></strong><br>Address:1235 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554658, -85.6522767]).bindPopup("<strong><a href='https://www.artprize.org//venues#c99bb79d-0dcf-4e58-9c03-4e8a4ae6b00f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Winchester</a></strong><br>Address:648 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9468613, -85.6670912]).bindPopup("<strong><a href='https://www.artprize.org//venues#06953953-8b5d-40bd-ae82-9c9462a87c5d' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Treetops Collective</a></strong><br>Address:906 Division Ave S • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9619304, -85.6699805]).bindPopup("<strong><a href='https://www.artprize.org//venues#a9360218-8ed6-4cc3-9012-c618b03dded6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>United Bank of Michigan</a></strong><br>Address:44 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9560838, -85.644293]).bindPopup("<strong><a href='https://www.artprize.org//venues#ad479c13-4e19-4250-bd30-95eedf6ba592' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Uptown GR, Inc</a></strong><br>Address:368 Diamond Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9622423, -85.6715921]).bindPopup("<strong><a href='https://www.artprize.org//venues#341e2788-68f0-4368-a322-2fe4dd5599aa' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Van Andel Arena</a></strong><br>Address:130 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9667043, -85.6704989]).bindPopup("<strong><a href='https://www.artprize.org//venues#57e67cf7-bfe8-481d-b06b-33a3395dd8cf' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Waters Center & Homewood Suites by Hilton Grand Rapids Downtown</a></strong><br>Address:161 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9551799, -85.640671]).bindPopup("<strong><a href='https://www.artprize.org//venues#0a1e1296-dd3f-402d-b5eb-308a15379074' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Wealthy Theatre</a></strong><br>Address:1130 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9851358, -85.6873595]).bindPopup("<strong><a href='https://www.artprize.org//venues#9625be19-2b55-4c6b-8729-712360226e7c' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>West Grand Neighborhood Organization</a></strong><br>Address:754 Leonard St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594307, -85.669831]).bindPopup("<strong><a href='https://www.artprize.org//venues#0158f468-67a3-4df3-8767-0a3390e5f52b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Western Michigan University</a></strong><br>Address:200 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9723859, -85.6852651]).bindPopup("<strong><a href='https://www.artprize.org//venues#f23217ee-ba65-4839-a787-dab1d8b5379b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Wrench Club</a></strong><br>Address:522 Stocking Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9556092, -85.6326282]).bindPopup("<strong><a href='https://www.artprize.org//venues#fbfb66e1-aaef-4b45-9739-62d9b198fe95' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Yesterdog</a></strong><br>Address:1505 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9598394, -85.6679544]).bindPopup("<strong><a href='https://www.artprize.org//venues#eb6e4029-6688-4f0b-aee8-3e04bc1c9069' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Zabház</a></strong><br>Address:139 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.988724, -85.665306]).bindPopup("<strong><a href='https://www.artprize.org//venues#9348cb80-4fdf-40f2-afe0-1380aa9cc7d3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Zeal Aerial Fitness</a></strong><br>Address:131 Caledonia St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map)
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
