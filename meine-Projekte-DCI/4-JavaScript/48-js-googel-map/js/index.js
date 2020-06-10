// function zoomF() {
//   let num=0
//   let zoomInterval= setInterval(() => {
//       num=num+1
    
//        if(num==20){
// clearInterval(zoomInterval)
//        }
//       console.log(num);   
//   }, 1000);
 
// }
 // var contentString =''

var map;

    function initMap() {
      var uluru = {lat: 53.550270, lng: 10.025270};
      map = new google.maps.Map(document.getElementById('map-div'), {
        center: uluru,
        zoom:1});
        var image = {
          url:'./img/marker.gif',
          // size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

      var marker = new google.maps.Marker({position: uluru, 
      map: map,
      icon:image,
      title:'DCI-Hamburg',
      // label:'DCI',
    animation:google.maps.Animation.DROP});
    
    var infowindow = new google.maps.InfoWindow({

      content:document.querySelector('#windoContainer').innerHTML
    })
    marker.addListener('mouseover',()=>{infowindow.open(map, marker)})

    /////////////////////////////
    
  
  }