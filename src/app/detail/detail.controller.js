(function() {
  'use strict';

  angular
    .module('openBeds3')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController() {
      var geocoder;
      var lat; 
      var lng;  
      var infowindow;
      var address = $(".shelter__location--street").text();
      $.ajax({
          url: "http://www.google.com/jsapi",
          dataType:"script",
          async: true,
          timeout: 2*10000
      }).success(function() {
          setTimeout(function() {
              var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    lat = results[0].geometry.location.lat();
                    lng = results[0].geometry.location.lng();
                    //alert("Latitude: " + lat + "\nLongitude: " + lng);
                } else {
                    alert("Request failed.")
                }
            });
          }, 1000);
       })
       .error(function() {   
          alert("ERROR");
       });
        $.ajax({
          url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPJrc3CMvMrJ-3R5Enzpab3Vr6XclpK1g",
          dataType:"script",
            async: true,
          timeout: 2*10000
      }).success(function() {
          setTimeout(function() {
            var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
           var map = new google.maps.Map(document.getElementById('map-detail'), mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                icon: '/assets/images/bed.png',
                title: 'Shelter',
            });

      }, 1500);
      })
      .error(function(){  
          alert("ERROR");
      });
  }
})();
