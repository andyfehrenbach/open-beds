(function() {
  'use strict';

  angular
    .module('openBeds3')
    .controller('MapController', MapController);
    var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];
  /** @ngInject */
  function MapController($http, $scope) {
      var geocoder;
      var lat; 
      var lng;  
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
                icon: '/assets/images/king-size-bed-with-two-pillows.png',
                title: 'Hello World!'
            });
      }, 1000);
      })
      .error(function(){        
      });
  }     
})();
