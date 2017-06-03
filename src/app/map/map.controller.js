(function() {
  'use strict';

  angular
    .module('openBeds3')
    .controller('MapController', MapController);
  /** @ngInject */
    var isPaused = false;
  function MapController(shelters, $scope) {
    shelters.getShelters().success(function (data) {
      prepMap(data.feed.entry);
    });

  }
    function prepMap(list) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            console.log( "Geolocation is not supported by this browser.");
        }
        function showPosition(position) {
            console.log("Latitude: " + position.coords.latitude + 
            "Longitude: " + position.coords.longitude);
            loadMap(position.coords.latitude, position.coords.longitude, list);
        }   
    }
    function loadMap(lat, lng, list) {
        
        var geocoder = new google.maps.Geocoder();
        var mapSettings = {
            zoom: 12,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var googleMapsLoaded;
        var map = new google.maps.Map(document.getElementById('map'), mapSettings);
           google.maps.event.addListener(map, 'tilesloaded', function() {
           googleMapsLoaded = true;
           google.maps.event.clearListeners(map, 'tilesloaded');
        });
        displayLocations(list, map, googleMapsLoaded);
    }
    function displayLocations(list, map, googleMapsLoaded) {
      console.log("displayMap enter");
      var infowindow;
      var locations = [];
      locations = getPositions(list, map); 
    }
    function getPositions(list, map) {
        var latlng = [];
        var lat, lng;
         var infowindow;
        var windowList = [];
        for (var i = 0; i < list.length; i++) {
            var address = list[i].gsx$address.$t;
            var name = list[i].gsx$address.$t;
            var website = list[0].gsx$website.$t;
            var geocoder = new google.maps.Geocoder();
            
            geocoder.geocode({ 'address': address}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    lat = results[0].geometry.location.lat();
                    lng = results[0].geometry.location.lng();
                    var latlng = new google.maps.LatLng(lat,lng);
                var marker = new google.maps.Marker({
                    title: 'Shelter'
                });
                marker.setPosition(latlng);
                infowindow = new google.maps.InfoWindow({
                  content: '<a href=\"http://{{website}}\">' + name + '</a>'+'<br/>'+'<br/>'+'Phone: '+ phoneNum +'<br/>'+'More Details '+'Deep Link to details page? (coming soon)'
                });
                marker.addListener('click', function() {
                  infowindow.open(map, marker);
                });
                map.addListener('dragend', function() {
                  infowindow.close();
                });
                marker.setMap(map);
                windowList.push(infowindow);
                var website = list[0].gsx$website.$t;
                var name = list[0].title.$t;
                var phoneNum = list[0].gsx$phone.$t;
                windowList[0].setContent('<a href=\"http://{{website}}\">' + name + '</a>'+'<br/>'+ '<br/>'+'Phone: '+ phoneNum +'<br/>'+'More Details '+'Deep Link to details page? (coming soon)');
                windowList.pop();
                } else {
                    console.log("Request failed.")
                }
            });
        }
        return latlng;
    }
})();
 