window.onload = function () {
     var directionsService;
     var directionsDisplay;
     var map;

function initMap () {
     directionsService = new google.maps.DirectionsService;
     directionsDisplay = new google.maps.DirectionsRenderer;
     var uluru = {lat:49.232464 , lng: 28.4555557 };
     var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: uluru});
     directionsDisplay.setMap(map);
     
} 

function createRoute () {
     var address1 = document.getElementById('startvalue').value;
     var address2 = document.getElementById('endvalue').value;

     directionsService.route({
            origin: address1,
            destination: address2,
            travelMode: 'WALKING'
          }, function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
          

}
initMap();
$('.button').on('click', createRoute);
}
    