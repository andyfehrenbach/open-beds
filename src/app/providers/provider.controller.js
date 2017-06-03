(function() {
  'use strict';

  angular
    .module('openBeds3')
    .controller('ProviderController', ProviderController);

  /** @ngInject */
  function ProviderController(shelters, $scope) {
	  	shelters.getShelters().success(function (data) {
	  		for (var i = 0; i < data.feed.entry.length; i++) {
	  			var element = document.createElement('a');
	  			var url = "http://www."+data.feed.entry[i].gsx$website.$t;
	  			element.href = url;
	  			element.setAttribute("id", "service"+i);
	  			element.innerHTML = data.feed.entry[i].gsx$name.$t;
	  			document.getElementById('servicesContent').append(element);
	  			document.getElementById('servicesContent').appendChild(document.createElement('br'));
	  			var element2 = document.createElement('a');
	  			var address = "http://maps.google.com?q="+data.feed.entry[i].gsx$address.$t;
	  			element2.href = address;
	  			element2.innerHTML = data.feed.entry[i].gsx$address.$t;
	  			document.getElementById('servicesContent').append(element2);
	  			document.getElementById('servicesContent').appendChild(document.createElement('br'));
				var element3 = document.createElement('p');
	  			element3.innerHTML = data.feed.entry[i].gsx$phone.$t;
				document.getElementById('servicesContent').append(element3);
	  		}
	  	console.log(data);
	  });
	}
})();
