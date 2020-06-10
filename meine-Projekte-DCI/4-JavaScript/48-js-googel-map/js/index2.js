
bounds  = new google.maps.LatLngBounds();
//Everytime you add a new marker:

loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
bounds.extend(loc);
//After all markers have been added:

map.fitBounds(bounds);      // # auto-zoom
map.panToBounds(bounds);    // # auto-center



