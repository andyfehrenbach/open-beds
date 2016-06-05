(function() {
  'use strict';

  angular
    .module('openBeds3')
    .controller('MapController', MapController);
  /** @ngInject */
  function MapController() {
      //mapByLocation("123 Hennepin Ave.");
      displayMap();
  }
    function displayMap() {
         var geocoder;
      var lat; 
      var lng;  
      var infowindow;
      $.ajax({
          url: "http://www.google.com/jsapi",
          dataType:"script",
          timeout: 2*10000,
          async: true,
      }).success(function() {
          setTimeout(function() {
                var geocoder = new google.maps.Geocoder(); 
                lat = google.loader.ClientLocation.latitude;
                lng = google.loader.ClientLocation.longitude;
          }, 1000);
       })
       .error(function() {          
       });
      $.ajax({
          url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPJrc3CMvMrJ-3R5Enzpab3Vr6XclpK1g",
          dataType:"script",
          timeout: 2*10000,
          async: true,
      }).success(function() {
          setTimeout(function() {
            var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
           var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                icon: '/assets/images/bed.png',
                title: 'Shelter',
            });
              infowindow = new google.maps.InfoWindow({
                content: '<a href="https://google.com">' + "CLICK HERE" + '</a><br/>'+'Title:'+'<br/>'+'Beds Available:'+'<br/>'+'Curfew'
              });
              marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
              map.addListener('dragend', function() {
                 infowindow.close();                  
              });
      }, 1000);
      })
      .error(function(){        
      });
    }
    
})();
