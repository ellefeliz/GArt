

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
        L.marker([42.9716025, -85.6804035]).bindPopup("<strong><a href='https://www.artprize.org//venues#58a303cf-47eb-45d7-90e5-1cf926b42a2f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>1st Micro Greenery</a></strong><br>Address:433 Broadway Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9642417, -85.672341]).bindPopup("<strong><a href='https://www.artprize.org//venues#a43d48bf-0049-4fa7-ac34-cfcbd64967ec' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>AC Hotel Grand Rapids Downtown</a></strong><br>Address:50 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9668113, -85.6725488]).bindPopup("<strong><a href='https://www.artprize.org//venues#84d42b2e-de50-4372-bde1-969e211da74c' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Amway Grand Plaza Hotel</a></strong><br>Address:187 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9576956, -85.6350287]).bindPopup("<strong><a href='https://www.artprize.org//venues#cc20c053-3bd9-473a-a853-7f4a28fe484a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Argos Comics and Used Books</a></strong><br>Address:1405 Robinson Rd SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963251, -85.664824]).bindPopup("<strong><a href='https://www.artprize.org//venues#0e60b805-eb2f-4449-9616-2a76ce856fbb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Art For Honor at Veterans Memorial Park</a></strong><br>Address:101 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.966286, -85.6694329]).bindPopup("<strong><a href='https://www.artprize.org//venues#9e1d1b70-808a-4f83-b88a-d1798bd300a1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>ArtPrize ClubHouse</a></strong><br>Address:40 Pearl NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.961977, -85.6675836]).bindPopup("<strong><a href='https://www.artprize.org//venues#a485e2c0-ac94-4e34-a056-e4db1140be92' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>ArtRat Gallery</a></strong><br>Address:46 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9605607, -85.6446239]).bindPopup("<strong><a href='https://www.artprize.org//venues#4a39a1c1-5324-4a5d-b00b-1ecfa1ff76bb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Arts in Motion in the Blackport Building </a></strong><br>Address:147 Diamond Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9604981, -85.6706324]).bindPopup("<strong><a href='https://www.artprize.org//venues#63a9d38e-896c-49c4-9139-119e75171f50' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Arts Marketplace</a></strong><br>Address:121 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.955355, -85.6428645]).bindPopup("<strong><a href='https://www.artprize.org//venues#c33f092a-838f-48af-a4c2-2ea501bcf2b0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Atomic Object</a></strong><br>Address:1034 Wealthy St. SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9651612, -85.6669203]).bindPopup("<strong><a href='https://www.artprize.org//venues#3583f172-b08c-4c68-88f8-51dddf2d8da7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Avenue for the Arts Artposts</a></strong><br>Address:24 Fountain St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9660273, -85.6715132]).bindPopup("<strong><a href='https://www.artprize.org//venues#1698963f-3ce2-455c-acff-9b424a6769ce' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>BIGGBY® COFFEE</a></strong><br>Address:146 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.955637, -85.6334687]).bindPopup("<strong><a href='https://www.artprize.org//venues#f42900ba-8330-42f5-809f-12df6f57f5b3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Billys Lounge</a></strong><br>Address:1437 Wealthy St Se • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9797968, -85.6707395]).bindPopup("<strong><a href='https://www.artprize.org//venues#a2c459a2-7866-458d-856a-3abed77f85fb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>BioPhilia Gallery</a></strong><br>Address:975 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9632494, -85.6711826]).bindPopup("<strong><a href='https://www.artprize.org//venues#d24747a2-a7ad-45a8-9a98-f92c55587c07' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Blend Salon and Suites</a></strong><br>Address:237 Fulton Street West • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9649622, -85.6696576]).bindPopup("<strong><a href='https://www.artprize.org//venues#09d04898-0a92-4a22-95fa-5c25b4c03853' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Blue Cross Blue Shield of Michigan - Steketee's Building</a></strong><br>Address:86 Monroe Center Street Northwest • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.959885, -85.6459532]).bindPopup("<strong><a href='https://www.artprize.org//venues#0a99bfa9-8c0d-418b-b675-f89f87773ee7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Brewery Vivant</a></strong><br>Address:925 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9794391, -85.6718148]).bindPopup("<strong><a href='https://www.artprize.org//venues#0ffd4c17-d5df-4ce6-a9e5-c05158c1cf4c' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Brickyard Tavern</a></strong><br>Address:940 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9706401, -85.688279]).bindPopup("<strong><a href='https://www.artprize.org//venues#a928416c-e318-4451-9597-8fd7a256b1e6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bridge St Electric</a></strong><br>Address:812 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9712317, -85.6831005]).bindPopup("<strong><a href='https://www.artprize.org//venues#e9f5e415-f4b3-44ad-b048-dc18eb1de16b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Bridge Street Market </a></strong><br>Address:405 Seward Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9637103, -85.6705345]).bindPopup("<strong><a href='https://www.artprize.org//venues#417d3c7a-36f9-4a60-9ef5-00f3fd826223' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Brush Studio</a></strong><br>Address:11 Ionia Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9605147, -85.6703009]).bindPopup("<strong><a href='https://www.artprize.org//venues#4bc70062-d115-455f-8b6a-de7132d832ea' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Canopy by Hilton Grand Rapids Downtown</a></strong><br>Address:131 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9641189, -85.7130845]).bindPopup("<strong><a href='https://www.artprize.org//venues#0dc83d40-3d0d-449c-860f-791f3437ae5b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Carnevale</a></strong><br>Address:859 West Fulton St. • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9707274, -85.6792683]).bindPopup("<strong><a href='https://www.artprize.org//venues#16ff22fd-671c-4781-8e2e-6acd54d0f120' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cellar Bird Books</a></strong><br>Address:415 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9628985, -85.6640539]).bindPopup("<strong><a href='https://www.artprize.org//venues#50ce9cbd-a917-4df5-8f5e-582348052557' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>CHAR</a></strong><br>Address:6 Jefferson Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9780563, -85.6722375]).bindPopup("<strong><a href='https://www.artprize.org//venues#f25baa5f-67b3-4f1e-bd2f-02f63c264d14' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>City Built Brewing Company</a></strong><br>Address:820 Monroe NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9645783, -85.6698585]).bindPopup("<strong><a href='https://www.artprize.org//venues#6a24f917-557d-4d65-bb0a-97aaa989a545' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>CityFlats Hotel </a></strong><br>Address:83 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.95702, -85.6678624]).bindPopup("<strong><a href='https://www.artprize.org//venues#ce2754de-acf2-4dea-ab80-5e29fbe23222' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cocoon Art Space</a></strong><br>Address:327 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.961545, -85.6612795]).bindPopup("<strong><a href='https://www.artprize.org//venues#4e9d99c0-4644-46ce-b2dc-03cf5ad8c2ab' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Cornerstone Church - Heritage Hill Campus</a></strong><br>Address:48 Lafayette Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640854, -85.6681384]).bindPopup("<strong><a href='https://www.artprize.org//venues#01fba3ad-88c6-444a-9eeb-7d19c586e995' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Courage & Soar</a></strong><br>Address:40 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640955, -85.6735035]).bindPopup("<strong><a href='https://www.artprize.org//venues#0d353786-cbfc-4a0f-8d27-8297b09cb357' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Courtyard Downtown Grand Rapids</a></strong><br>Address:11 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9627048, -85.6700424]).bindPopup("<strong><a href='https://www.artprize.org//venues#4a0ad642-d0da-46f4-909a-07221af4384b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Craft-Revival Jewelers</a></strong><br>Address:16 Ionia Ave SW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9889421, -85.6648004]).bindPopup("<strong><a href='https://www.artprize.org//venues#52fb05ee-bc92-4e5c-b7a9-931bd03fc61b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Culver CPA Group</a></strong><br>Address:1419 Coit Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9609197, -85.6679166]).bindPopup("<strong><a href='https://www.artprize.org//venues#3135a0cd-e827-4ad6-a88d-1aeedb916114' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Decaydence Vintage</a></strong><br>Address:71 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963783, -85.668038]).bindPopup("<strong><a href='https://www.artprize.org//venues#649d7708-9498-4a93-a736-038b8bc0eb79' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Department of Corrections</a></strong><br>Address:1 Division Ave N • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9687722, -85.6731285]).bindPopup("<strong><a href='https://www.artprize.org//venues#c703666c-aefb-4bbc-a624-53ce2ab2f7de' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>DeVos Place Convention Center</a></strong><br>Address:303 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9598739, -85.6674772]).bindPopup("<strong><a href='https://www.artprize.org//venues#6e25fcc7-e644-4c78-963e-e6a73931a36e' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>DreamPirate Gallery </a></strong><br>Address:136 Division Ave S • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9608422, -85.6698496]).bindPopup("<strong><a href='https://www.artprize.org//venues#88919be9-6a58-4fe8-8c4c-90c77d07050b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Dublin Hall</a></strong><br>Address:100 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9600893, -85.6708972]).bindPopup("<strong><a href='https://www.artprize.org//venues#b536a2b9-ef0a-4b2c-9ab1-00b1158b5c41' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Elsa's </a></strong><br>Address:123 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9651612, -85.6669203]).bindPopup("<strong><a href='https://www.artprize.org//venues#8e7d4d24-e976-4488-90c4-3b089bcbb865' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fountain Street Church</a></strong><br>Address:24 Fountain St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.955437, -85.639377]).bindPopup("<strong><a href='https://www.artprize.org//venues#7dbaa889-f346-4c2a-a346-5f487d5b11e0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Foxtail Coffee Wealthy Street</a></strong><br>Address:1200 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963602, -85.687624]).bindPopup("<strong><a href='https://www.artprize.org//venues#acc9d65f-9c45-4563-b1e7-fd4ed55e25fd' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Fulton Street Pub </a></strong><br>Address:801 W. Fulton • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9773347, -85.6706235]).bindPopup("<strong><a href='https://www.artprize.org//venues#4d900f1f-639e-4ebc-a259-512c63532de3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Garage Bar and Grill</a></strong><br>Address:819 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9644122, -85.6685591]).bindPopup("<strong><a href='https://www.artprize.org//venues#9fc30077-95a6-4e26-a9f6-615732a6cada' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gazelle Sports</a></strong><br>Address:52 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9684589, -85.6774115]).bindPopup("<strong><a href='https://www.artprize.org//venues#8ac0d6d9-d815-44e9-ad4a-cc106e34a070' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gerald R. Ford Presidential Museum</a></strong><br>Address:303 Pearl St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9630117, -85.6640565]).bindPopup("<strong><a href='https://www.artprize.org//venues#6c35feac-6e88-40c3-ac67-7152aade2fab' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Gita Pita</a></strong><br>Address:2 Jefferson Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9600184, -85.6674448]).bindPopup("<strong><a href='https://www.artprize.org//venues#c992679d-64bb-46bf-98b5-c3f2d0719dc0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grammotones</a></strong><br>Address:120 Division Ave S., #125 • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9647264, -85.6700054]).bindPopup("<strong><a href='https://www.artprize.org//venues#c56b871f-a388-4a1f-9d75-95f358ac498d' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids African American Museum and Archives</a></strong><br>Address:87 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9650327, -85.6709032]).bindPopup("<strong><a href='https://www.artprize.org//venues#a58e8be0-ea68-44b2-99c8-157b5d4d4336' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Art Museum </a></strong><br>Address:101 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9638781, -85.6672153]).bindPopup("<strong><a href='https://www.artprize.org//venues#428b5aa1-1a53-4154-8a13-4ba774b61347' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Children's Museum</a></strong><br>Address:11 Sheldon Ave NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9688138, -85.6713006]).bindPopup("<strong><a href='https://www.artprize.org//venues#7a8b7702-146f-470a-84b8-ecbbe8258675' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids City Hall </a></strong><br>Address:300 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9548575, -85.6706102]).bindPopup("<strong><a href='https://www.artprize.org//venues#3dd8b128-e14b-4a76-bd8d-76ed4d5f22bf' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Rapids Downtown Market</a></strong><br>Address:435 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640875, -85.6769858]).bindPopup("<strong><a href='https://www.artprize.org//venues#76061ecf-01de-4b94-b167-98fda4024997' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Valley State University - Eberhard Center</a></strong><br>Address:301 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9611015, -85.6737309]).bindPopup("<strong><a href='https://www.artprize.org//venues#abdbf6a4-fea5-48ee-8ade-38a149c75011' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grand Woods Lounge</a></strong><br>Address:77 Cesar E. Chavez Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554463, -85.6515221]).bindPopup("<strong><a href='https://www.artprize.org//venues#c26ce512-4b5e-4d65-8b4f-7bcac7082a76' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Grey Rabbit Gallery and Lounge </a></strong><br>Address:700 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9642447, -85.6682256]).bindPopup("<strong><a href='https://www.artprize.org//venues#7b8204e0-c7df-4d36-bf6e-976570bb503e' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Greyson Clothiers</a></strong><br>Address:40 Monroe Center NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9635161, -85.667065]).bindPopup("<strong><a href='https://www.artprize.org//venues#37f2e343-3dc9-4314-a68d-aac6d16bea30' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>[HAS HEART] at Veterans Memorial Park</a></strong><br>Address:22 Sheldon Avenue NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9545605, -85.6678032]).bindPopup("<strong><a href='https://www.artprize.org//venues#13942b12-be0d-40c1-97ee-3840b6bf722b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Happy Cat Café</a></strong><br>Address:447 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9551635, -85.6306735]).bindPopup("<strong><a href='https://www.artprize.org//venues#9989edab-db60-4fff-978b-988788342f78' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Harmony Brewing Company </a></strong><br>Address:1551 Lake Dr SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9687722, -85.6731285]).bindPopup("<strong><a href='https://www.artprize.org//venues#23337cf7-e168-4d97-b396-2a1d9cc8e05f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Healing in Arts</a></strong><br>Address:303 Monroe Ave NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9610466, -85.644107]).bindPopup("<strong><a href='https://www.artprize.org//venues#ba54a2b4-fee3-43f4-ae98-d19cb52dc630' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Hermitage at Diamond</a></strong><br>Address:1009 Hermitage St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9658802, -85.6777088]).bindPopup("<strong><a href='https://www.artprize.org//venues#997ea07c-bc4f-4e09-854f-8d41d78f7030' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Holiday Inn Grand Rapids Downtown</a></strong><br>Address:310 Pearl Street NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9623919, -85.6705881]).bindPopup("<strong><a href='https://www.artprize.org//venues#ab08ffbf-4991-475f-a153-f414491c82fa' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>HopCat</a></strong><br>Address:25 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9663719, -85.6743566]).bindPopup("<strong><a href='https://www.artprize.org//venues#44c3ad65-0560-465d-80dd-6a05d93264c5' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Horizon Bank</a></strong><br>Address:250 Pearl St NW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9666339, -85.669829]).bindPopup("<strong><a href='https://www.artprize.org//venues#858fb54c-fa40-4159-a570-6fd8872110d1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Hyatt Place Grand Rapids/Downtown</a></strong><br>Address:140 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.962867, -85.646077]).bindPopup("<strong><a href='https://www.artprize.org//venues#34d67d37-5ea9-4a9c-a5e0-cc56c62f7af7' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Inner Body Works, PLC</a></strong><br>Address:929 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9680732, -85.6816083]).bindPopup("<strong><a href='https://www.artprize.org//venues#bdd7d76f-dc81-4c79-a033-4658f4b7f6fe' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Innovation Design Center Starbucks</a></strong><br>Address:227 Winter Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9658098, -85.6743054]).bindPopup("<strong><a href='https://www.artprize.org//venues#b2b39872-d3ff-4169-bb99-2128559d66b0' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>JW Marriott Grand Rapids</a></strong><br>Address:235 Louis St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9703979, -85.6531335]).bindPopup("<strong><a href='https://www.artprize.org//venues#131921df-b282-4f3e-a566-6b07c19280a6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Kaffeine - Restaurant & Bar</a></strong><br>Address:637 Michigan St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594267, -85.6452082]).bindPopup("<strong><a href='https://www.artprize.org//venues#54d5aa96-ad70-49fd-bbc7-2e31c9678e90' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Kava Kasa</a></strong><br>Address:962 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9664462, -85.6685221]).bindPopup("<strong><a href='https://www.artprize.org//venues#7b180abb-0025-44c4-acda-e777fefb53c3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Kendall College of Art and Design of Ferris State University</a></strong><br>Address:17 Pearl NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9705876, -85.6845919]).bindPopup("<strong><a href='https://www.artprize.org//venues#04a59909-90f7-45e8-9062-9edb15cdb118' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Küsterer Brauhaus</a></strong><br>Address:642 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9556172, -85.6412683]).bindPopup("<strong><a href='https://www.artprize.org//venues#f2310e25-73d3-4f26-971e-fd0fe61cd1eb' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Lady Love Barbershop</a></strong><br>Address:1117 Wealthy Street SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.961185, -85.6481915]).bindPopup("<strong><a href='https://www.artprize.org//venues#7e8a9474-c0ec-4936-a879-cf562a50628b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>LaFontsee Galleries and Framing</a></strong><br>Address:833 Lake Dr SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9624798, -85.668069]).bindPopup("<strong><a href='https://www.artprize.org//venues#cb6e35b7-36b5-47b3-b276-b651622fbe99' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Lilith’s lair</a></strong><br>Address:25 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9670621, -85.6740132]).bindPopup("<strong><a href='https://www.artprize.org//venues#cd26359b-dfe5-4f9c-8142-ba11cc48d4df' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Lyon Square</a></strong><br>Address:296 Lyon St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554652, -85.6511492]).bindPopup("<strong><a href='https://www.artprize.org//venues#f657de9a-1aa9-4b70-9e7c-11d95dd1852b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Mammoth Distilling</a></strong><br>Address:710 Wealthy Street SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9660273, -85.6715132]).bindPopup("<strong><a href='https://www.artprize.org//venues#bd577d84-f61d-465f-a36c-996ef1786e39' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>McKay Tower</a></strong><br>Address:146 Monroe Center NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9610644, -85.6683069]).bindPopup("<strong><a href='https://www.artprize.org//venues#a1a182b7-6e68-40a9-9c5a-22c51c865949' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Mertens Prime & Rooftop</a></strong><br>Address:35 Oakes St. SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594579, -85.6453406]).bindPopup("<strong><a href='https://www.artprize.org//venues#372bbb80-9634-44d7-9a35-3e1473d6f1d4' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Metal Art Studio</a></strong><br>Address:978 Cherry St. SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9666365, -85.6719505]).bindPopup("<strong><a href='https://www.artprize.org//venues#1e55bf3b-8bd9-46ff-b887-60b480f0021a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Mojo's</a></strong><br>Address:180 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594487, -85.6469258]).bindPopup("<strong><a href='https://www.artprize.org//venues#ae885a10-666e-4bc6-8232-9facad890ddf' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Monarch Investment</a></strong><br>Address:920 Cherry St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9808826, -85.6711602]).bindPopup("<strong><a href='https://www.artprize.org//venues#8e36005b-e7e8-4960-84bb-55a363dee1ff' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Monroe Community Church</a></strong><br>Address:1020 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9670631, -85.6695196]).bindPopup("<strong><a href='https://www.artprize.org//venues#7d5826b9-9ad2-420c-8115-ec9fd3638c2a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Morning Ritual Coffee Bar</a></strong><br>Address:150 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.985367, -85.6866504]).bindPopup("<strong><a href='https://www.artprize.org//venues#1d490b0a-7a74-46c2-bd97-f79cf99d6e24' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Muse GR</a></strong><br>Address:727 Leonard St NW • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9576942, -85.6688037]).bindPopup("<strong><a href='https://www.artprize.org//venues#1acfc0b4-c859-4554-b4f2-ce222d720b38' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Nia Centre</a></strong><br>Address:300 Commerce Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9572818, -85.6678795]).bindPopup("<strong><a href='https://www.artprize.org//venues#493e02fb-3757-4688-beae-43af96c938e5' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>NIDO- The Urban Nest</a></strong><br>Address:317 S Division Ave  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9708429, -85.6811098]).bindPopup("<strong><a href='https://www.artprize.org//venues#5c7d5fff-c88a-4b6d-9b19-8bd971d9e8a2' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Nonla Burger</a></strong><br>Address:449 Bridge St NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640854, -85.6681384]).bindPopup("<strong><a href='https://www.artprize.org//venues#67fe0541-4455-47ca-9ed5-47cd6d1b40f6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Oh, Hello Paper & Gifts</a></strong><br>Address:40 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9659009, -85.6722657]).bindPopup("<strong><a href='https://www.artprize.org//venues#96b8ead2-9184-46d3-8a3a-c41f86677e62' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Old National Bank</a></strong><br>Address:169 Monroe Avenue NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9653848, -85.6703289]).bindPopup("<strong><a href='https://www.artprize.org//venues#b2fcb165-bf62-45ce-9912-7a665887a0c8' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Old World Olive Co</a></strong><br>Address:108 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9705559, -85.6830626]).bindPopup("<strong><a href='https://www.artprize.org//venues#e4cc6f74-b8a1-4c74-abef-37f287802de6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>One Bourbon</a></strong><br>Address:608 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9597391, -85.667555]).bindPopup("<strong><a href='https://www.artprize.org//venues#2deb94cd-1be6-4ca8-a907-d39a553f876a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Open Door Bakery (Social Enterprise business of Dégagé Ministries)</a></strong><br>Address:144 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9624798, -85.668069]).bindPopup("<strong><a href='https://www.artprize.org//venues#c6def8fe-1278-4a12-85df-801b72146627' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>OTONO and Cafe OTONO</a></strong><br>Address:25 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640835, -85.6654714]).bindPopup("<strong><a href='https://www.artprize.org//venues#2537f97a-1d64-41bd-9b12-301abf074d27' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Park Church</a></strong><br>Address:10 East Park Pl NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.959617, -85.667936]).bindPopup("<strong><a href='https://www.artprize.org//venues#b41ca032-d380-4fd2-bbae-c2795d19d3d4' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Pekich Park</a></strong><br>Address:2 Cherry St SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9659834, -85.6703223]).bindPopup("<strong><a href='https://www.artprize.org//venues#952184c0-02e9-4928-b512-5c3eaf804d97' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Periwinkle Fog</a></strong><br>Address:125 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9641189, -85.7130845]).bindPopup("<strong><a href='https://www.artprize.org//venues#8fe97726-c317-4574-a1c4-6ec7d2362df3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Plaza Towers</a></strong><br>Address:201 W. Fulton St. • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9653123, -85.6709174]).bindPopup("<strong><a href='https://www.artprize.org//venues#fccd1aa9-e504-4c60-a35c-cbb4e9b202ce' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>PO (Art)Box</a></strong><br>Address:120 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554528, -85.6498622]).bindPopup("<strong><a href='https://www.artprize.org//venues#6c0bb735-7803-41d1-8f6c-976044ccd758' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Popnotch Goods</a></strong><br>Address:746 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9708959, -85.6844761]).bindPopup("<strong><a href='https://www.artprize.org//venues#18b9e7f5-968b-450d-b66e-9d2339dc1761' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rapid River Stillhouse</a></strong><br>Address:401 Stocking Ave. NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554921, -85.6470559]).bindPopup("<strong><a href='https://www.artprize.org//venues#7f1346ba-4584-46b7-8ffe-0f286b8b8e46' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Reagan Marketing + Design</a></strong><br>Address:912 Wealthy Street SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9556203, -85.6309514]).bindPopup("<strong><a href='https://www.artprize.org//venues#3fc5f791-a833-486d-9559-100a8eafac74' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rebel</a></strong><br>Address:1555 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9659834, -85.6703223]).bindPopup("<strong><a href='https://www.artprize.org//venues#afa11b17-44db-4475-ba29-b7528ebf300c' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rev Luxury Juice Bar</a></strong><br>Address:125 Ottawa Ave Nw  • Grand Rapids ", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9626485, -85.6680258]).bindPopup("<strong><a href='https://www.artprize.org//venues#a5d34fcb-01ae-4c30-accd-e9f664b94730' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rewind</a></strong><br>Address:17 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9681753, -85.6717296]).bindPopup("<strong><a href='https://www.artprize.org//venues#fde8b007-ad1b-4137-a9b4-604e1f1ea44d' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Roam By San Chez</a></strong><br>Address:250 Monroe Ave NW • grand rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9923724, -85.6710076]).bindPopup("<strong><a href='https://www.artprize.org//venues#ee9d5d21-4a59-4a96-a935-dd17d513721b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Roeda Studio</a></strong><br>Address:1615 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9555222, -85.6528618]).bindPopup("<strong><a href='https://www.artprize.org//venues#c999e65c-caba-4bd4-b0d2-80f8825a3b2a' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Rowster Coffee</a></strong><br>Address:632 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.943278, -85.684758]).bindPopup("<strong><a href='https://www.artprize.org//venues#8cef12fd-94c7-45b4-914e-30cdb9e8b0e8' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Run a Racehorse or She Will Tear Down The Barn</a></strong><br>Address:1101 Godfrey SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9629896, -85.6695214]).bindPopup("<strong><a href='https://www.artprize.org//venues#52e57040-251d-4e31-9900-26c4f72c1b79' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>San Chez Bistro</a></strong><br>Address:38 Fulton ST W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9627048, -85.6700424]).bindPopup("<strong><a href='https://www.artprize.org//venues#e2114a0f-e493-41ee-a1cc-4258b1bff886' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sears Architects</a></strong><br>Address:16 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9627187, -85.6681295]).bindPopup("<strong><a href='https://www.artprize.org//venues#5b901b63-bb10-474f-b24a-158a76ddbe2d' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Second Vibess</a></strong><br>Address:13 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9640854, -85.6681384]).bindPopup("<strong><a href='https://www.artprize.org//venues#01a257ab-3e80-4bba-8315-2ecb00b3430b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Shinola Grand Rapids Downtown</a></strong><br>Address:40 Monroe Center St NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.964085, -85.6681656]).bindPopup("<strong><a href='https://www.artprize.org//venues#dd799a9f-fbaf-47a5-af37-7c41fda708b8' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>SHOW Salon</a></strong><br>Address:40 Monroe Center • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9743246, -85.6725283]).bindPopup("<strong><a href='https://www.artprize.org//venues#cf5135c2-05d3-490f-af07-4191366b3b05' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sixth Street Park - Monroe North Business Assoc</a></strong><br>Address:647 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9550949, -85.6456676]).bindPopup("<strong><a href='https://www.artprize.org//venues#eeef00e7-dcbe-499a-8fab-d781e6eb6251' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Speciation Cellars</a></strong><br>Address:928 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9653185, -85.6645557]).bindPopup("<strong><a href='https://www.artprize.org//venues#836bae48-ac81-487d-9fa0-860423be1554' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Spectrum Theater Lobby</a></strong><br>Address:160 Fountain St NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9658512, -85.6711703]).bindPopup("<strong><a href='https://www.artprize.org//venues#27274783-a1e4-4ce8-8a3d-1abb4ec3a863' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sugar Bar</a></strong><br>Address:132 Monroe Center • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9665813, -85.6704308]).bindPopup("<strong><a href='https://www.artprize.org//venues#49c2f0bb-d193-4f11-b9e4-c1bf1bb4c108' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sundance Grill</a></strong><br>Address:151 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9736735, -85.6716199]).bindPopup("<strong><a href='https://www.artprize.org//venues#59b7babc-f9a3-49f6-b25b-4f4676f9cdf3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Sweetwaters Coffee & Tea Monroe North</a></strong><br>Address:601 Bond Ave • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9703689, -85.6791296]).bindPopup("<strong><a href='https://www.artprize.org//venues#12ced55a-64eb-4918-8bb6-3e090f996199' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Swift Printing </a></strong><br>Address:404 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9642383, -85.6687235]).bindPopup("<strong><a href='https://www.artprize.org//venues#3b6a8340-79d6-4b2c-827d-4f74914cbb03' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Symplicity Communications Building </a></strong><br>Address:60 Monroe Center St NW Grand Rapids, MI • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9647347, -85.6693688]).bindPopup("<strong><a href='https://www.artprize.org//venues#8eca3c17-6c0c-46ed-8a73-f481fcef917b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Aroma Labs</a></strong><br>Address:÷76 Monroe Center St NW  • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9592897, -85.6674156]).bindPopup("<strong><a href='https://www.artprize.org//venues#beb98f8f-9f21-478b-be5e-847c100c2967' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Art of Life Studio NOW Gallery</a></strong><br>Address:200 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9650327, -85.6709032]).bindPopup("<strong><a href='https://www.artprize.org//venues#451c3704-5e38-4726-94ae-b3cf4f256f97' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Atrium at Uccello's Downtown</a></strong><br>Address:122 Monroe Center NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.957039, -85.6678697]).bindPopup("<strong><a href='https://www.artprize.org//venues#a1acfcbf-b178-4bb4-be11-a392dc60c2e5' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The August Connection </a></strong><br>Address:325 Division Avenue South • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9638161, -85.672521]).bindPopup("<strong><a href='https://www.artprize.org//venues#dc4a0cc4-4b8d-4e65-9c66-bf29f358a1ba' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The B.O.B.</a></strong><br>Address:20 Monroe Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.964466, -85.6696635]).bindPopup("<strong><a href='https://www.artprize.org//venues#7eaaed0b-ed7e-403e-8ff9-1022f0f378c6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Parlour at CityFlatsHotel</a></strong><br>Address:77 Monroe Center St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9626425, -85.6381561]).bindPopup("<strong><a href='https://www.artprize.org//venues#e53a3c0d-7f60-47d9-bd33-1c9f2d05c740' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Salvation Army in Kent County</a></strong><br>Address:1235 Fulton St E • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9707233, -85.6980157]).bindPopup("<strong><a href='https://www.artprize.org//venues#298cb6d6-dfcf-4e7f-a0bd-3451163878f1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Søvengård</a></strong><br>Address:1232 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9554658, -85.6522767]).bindPopup("<strong><a href='https://www.artprize.org//venues#c99bb79d-0dcf-4e58-9c03-4e8a4ae6b00f' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>The Winchester</a></strong><br>Address:648 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9619338, -85.6701134]).bindPopup("<strong><a href='https://www.artprize.org//venues#a9360218-8ed6-4cc3-9012-c618b03dded6' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>United Bank of Michigan </a></strong><br>Address:44 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9622423, -85.6715921]).bindPopup("<strong><a href='https://www.artprize.org//venues#341e2788-68f0-4368-a322-2fe4dd5599aa' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Van Andel Arena</a></strong><br>Address:130 West Fulton • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9560838, -85.644293]).bindPopup("<strong><a href='https://www.artprize.org//venues#3dbe8c10-bdae-4a2e-a1f7-35e20164d488' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Vetr Health</a></strong><br>Address:368 Diamond Ave SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.963056, -85.6727056]).bindPopup("<strong><a href='https://www.artprize.org//venues#a2541188-8979-4212-b0f9-062392d4c373' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Vicinity</a></strong><br>Address:156 Fulton St W • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9667043, -85.6704989]).bindPopup("<strong><a href='https://www.artprize.org//venues#57e67cf7-bfe8-481d-b06b-33a3395dd8cf' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Waters Center & Homewood Suites by Hilton Grand Rapids Downtown</a></strong><br>Address:161 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9572597, -85.6343878]).bindPopup("<strong><a href='https://www.artprize.org//venues#1748da99-4f01-4a50-95de-d094c00174e1' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Wax Poetic Candle Bar</a></strong><br>Address:1423 Lake Dr SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9551799, -85.640671]).bindPopup("<strong><a href='https://www.artprize.org//venues#0a1e1296-dd3f-402d-b5eb-308a15379074' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Wealthy Theatre</a></strong><br>Address:1130 Wealthy St SE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9667043, -85.6704989]).bindPopup("<strong><a href='https://www.artprize.org//venues#f11137a8-8a92-4b39-9da2-6e61934b02bc' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Webster's Market</a></strong><br>Address:161 Ottawa Ave NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9851358, -85.6873595]).bindPopup("<strong><a href='https://www.artprize.org//venues#9625be19-2b55-4c6b-8729-712360226e7c' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>West Grand Neighborhood Organization</a></strong><br>Address:754 Leonard Street NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.970639, -85.6859567]).bindPopup("<strong><a href='https://www.artprize.org//venues#2a1b3cc8-f4b2-4f8a-b72f-c6c91fb1ccd4' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>West Side Smoke Shop</a></strong><br>Address:712 Bridge St NW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9594307, -85.669831]).bindPopup("<strong><a href='https://www.artprize.org//venues#0158f468-67a3-4df3-8767-0a3390e5f52b' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Western Michigan University</a></strong><br>Address:200 Ionia Ave SW • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.9589933, -85.667554]).bindPopup("<strong><a href='https://www.artprize.org//venues#eb6e4029-6688-4f0b-aee8-3e04bc1c9069' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Zabház </a></strong><br>Address:139 Division Ave S • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),
        L.marker([42.988724, -85.665306]).bindPopup("<strong><a href='https://www.artprize.org//venues#9348cb80-4fdf-40f2-afe0-1380aa9cc7d3' target='_blank' style='pointer-events: auto;' onclick='window.open(this.href); return false;'>Zeal Aerial Fitness</a></strong><br>Address:131 Caledonia Street NE • Grand Rapids", {permanent: false,direction: "top", className: "custom-tooltip", interactive: true, opacity:1.0 } ).on('click', function(e) {e.originalEvent.stopPropagation();}).addTo(map),

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
