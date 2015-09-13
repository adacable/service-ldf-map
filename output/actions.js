var map
function buildPopupText(eventGeojson){
    /* builds a html popup window from an events properties*/
    eventProperties = eventGeojson.properties
    //not using a templating engine, too heavy and largley unessecary
    eventHTML = "<div class=\"popup\"> <h1>" + eventProperties.eventName +"</h1>"
    if (eventProperties.eventImage != ""){
        eventHTML = eventHTML + "<img class=popupImage src=\""+eventProperties.eventImage + "\" + />"
    }
    eventHTML = eventHTML + "<p>"+ eventProperties.eventDescription+ "</p>"
    eventHTML = eventHTML + "<h2> Address </h2>" + eventProperties.eventAddress 
    eventHTML = eventHTML + "<a class='addressLink' target='_blank' href=http://citymapper.com/directions?endcoord="+eventGeojson.geometry.coordinates[1] + "," + eventGeojson.geometry.coordinates[0] + "&endname="+ encodeURIComponent(eventProperties.eventName) +">citymapper</a></div>"
    eventHTML = eventHTML + "<a class='addressLink' target='_blank' href=\"https://www.google.com/maps/dir/Current+Location/"+eventGeojson.geometry.coordinates[1] + "," + eventGeojson.geometry.coordinates[0]+"\">google maps</a></div>"
    return eventHTML
}
function initMap(){
    L.mapbox.accessToken = 'pk.eyJ1IjoiZHJjYWJsZSIsImEiOiI1ZjM0ZWJlYTllYTlkN2FlZGViN2NiZTRhMWM4YTgzMiJ9.57fQHwC5_hXJdXWnvTNUXw';//set mapbox token
    map = L.mapbox.map('map', 'mapbox.high-contrast')
        .setView([51.5072, -0.1275], 14);//zoom to a rough view of the streets
    }
function initEvents(){
    /*add events to the map, bind popups to them*/
    eventsLayer = L.mapbox.featureLayer(events)
    eventsLayer = eventsLayer.eachLayer(function(layer) {
        layer.bindPopup(buildPopupText(layer.feature))
        layer.setIcon(L.icon({
            "iconUrl": "./icon.png",
            "iconSize": [17, 26],
            "iconAnchor": [8, 26],
            "popupAnchor": [0, -26],
            "className": "dot"
        }))
    })
    eventsLayer.on('layeradd', function(e){
        var marker = e.layer
        marker.setIcon
    })
    console.log("a")
    eventsLayer.addTo(map)
}
$(document).ready( function() {
    initMap();
    initEvents();
})
