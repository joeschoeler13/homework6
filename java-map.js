var locations = [
    [
        "David Strong Building",
        48.464801,
         -123.313539
    ],
    [
    	"Cornett Building",
        48.464246, 
        -123.313446
    ],
    [
        "Business Economics Building",
        48.465256, 
        -123.312910
    ]
]

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(48.463649,  -123.311951),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

var cnt = 0

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        cnt++
        infowindow.setContent("This is the " + locations[i][0] + " with the following coordinations: LAT: " + locations[i][1] + " and LONG: " + locations[i][2] + ". There have been " + cnt + " markers currently shown to you.");
        infowindow.open(map, marker);
        }
    })(marker, i));
}