(function() {
  'use strict';

  angular
    .module('openBeds3')
    .controller('MapController', MapController);
  /** @ngInject */
  function MapController($http, $scope) {
      $.ajax({
          url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPJrc3CMvMrJ-3R5Enzpab3Vr6XclpK1g",
          dataType:"script",
          timeout: 2*10000
      }).success(function() {
          setTimeout(function() {
               var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(-34.397, 150.644),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
           map = new google.maps.Map(document.getElementById('map'),
              mapOptions);
      }, 1000);
      })
      .error(function(){
          
      });
  }

})();
