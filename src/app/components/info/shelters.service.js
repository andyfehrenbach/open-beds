(function () {
  'use strict';

  angular
    .module('openBeds3')
    .service('shelters', shelters);

  /** @ngInject */
  function shelters($log) {
    this.apiHost = 'https://spreadsheets.google.com/feeds/list/1Ws7xmFn62NATEyAfxTKser6PETCoLu1be1fW-vgCz6o/od6/public/values?alt=json';
    this.loading = false;
    this.list = [];
    this.getShelters = getShelters;


    function getShelters() {

      var vm = this;
      vm.loading = true;


      return $.ajax({
        url: vm.apiHost,
        dataType: "jsonp",
        timeout: 2 * 10000
      }).success(function (data) {
        vm.loading = false;
        vm.list = data.feed.entry;
        //return result; //JavaScript object
      })
        .error(function () {
          vm.loading = false;
          $log.error('XHR Failed for getShelters.\n' + angular.toJson(error.data, true));
        });

    }

  }

})();
