(function() {
  'use strict';

  angular
    .module('openBeds3')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(shelters) {
    //var vm = this;
    shelters.getShelters();
  }
})();
