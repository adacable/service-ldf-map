events = {
    type: "FeatureCollection",
    features: [
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [ -0.1275,51.5072]
        },
        properties: { 
            "marker-color": "#00ff00",
            eventName: "Example Event",//must exist, be under 20ch
            eventTime: "2012-04-23T18:25:43.511Z", //must exist
            eventImage: "http://www.google.com/images/srpr/logo11w.png",//can be blank
            eventLink:  "eventbrite.com",//can be blank
            eventOrganizer: "A.N.Other", //can be blank
            eventTags: ["tag1","tag2"],//can be blank
            eventAddress: "",//cannot be blank
            eventDescription : "test description",
            
            }
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [ -0.1385,51.5162]
        },
        properties: { 
            "marker-color": "#00ff00",
            eventName: "Example Event",//must exist, be under 20ch
            eventTime: "2012-04-23T18:25:43.511Z", //must exist
            eventImage: "http://www.google.com/images/srpr/logo11w.png",//can be blank
            eventLink:  "eventbrite.com",//can be blank
            eventOrganizer: "A.N.Other", //can be blank
            eventTags: ["tag1","tag2"],//can be blank
            eventAddress: "2 somewhere or other \nanother place\nyeah",//cannot be blank
            eventDescription : " esr toast listicle Wes Anderson. Fap actually chillwave, synth pop-up pour-over Truffaut craft beer beard deep v single-origin coffee lo-fi before they sold out scenester four dollar toast. cription",
            }
    }]
}
